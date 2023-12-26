package okx

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"errors"
	"github.com/seeu-labs/website/server/pkg/httpx"
	"io"
	"net/http"
	"os"
	"strings"
	"time"
)

type MktplaceClientConfig struct {
	AccessKey        string
	AccessProject    string
	AccessPassphrase string
	AccessSecret     string
	BaseURL          string
}

func (c *MktplaceClientConfig) BindEnv() {
	c.AccessKey = os.Getenv("SEEU_OKX_MP_ACCESS_KEY")
	c.AccessProject = os.Getenv("SEEU_OKX_MP_ACCESS_PROJECT")
	c.AccessPassphrase = os.Getenv("SEEU_OKX_MP_ACCESS_PASSPHRASE")
	c.AccessSecret = os.Getenv("SEEU_OKX_MP_ACCESS_SECRET")
	c.BaseURL = os.Getenv("SEEU_OKX_MP_BASE_URL")
}

type MktplaceClient struct {
	config *MktplaceClientConfig
}

func NewMktplaceClient(config MktplaceClientConfig) (*MktplaceClient, error) {
	if config.AccessKey == "" {
		return nil, errors.New("apikey is required")
	}
	if config.BaseURL == "" {
		config.BaseURL = "https://www.oklink.com"
	}
	config.BaseURL = strings.TrimSuffix(config.BaseURL, "/")
	return &MktplaceClient{
		config: &config,
	}, nil
}

type OrdinalsInfo struct {
	FloorPrice          string `json:"floorPrice"`
	InscriptionNumRange string `json:"inscriptionNumRange"`
	IsBrc20             bool   `json:"isBrc20"`
	Slug                string `json:"slug"`
	TotalVolume         string `json:"totalVolume"`
	Volume24H           string `json:"volume24h"`
}

type OrdinalsCollection struct {
	Cursor string          `json:"cursor"`
	Data   []*OrdinalsInfo `json:"data"`
}

func (c *MktplaceClient) Request(req *http.Request, v any) error {
	res, err := httpx.Client().Do(req)
	if err != nil {
		return err
	}
	defer res.Body.Close()
	content, err := io.ReadAll(res.Body)
	if err != nil {
		return err
	}
	if res.StatusCode != http.StatusOK {
		return errors.New(string(content))
	}
	return json.Unmarshal(content, v)
}

func (c *MktplaceClient) GetNftOrdinalsCollection(slug string) (*OrdinalsCollection, error) {
	req, err := c.CreateRequest("/api/v5/mktplace/nft/ordinals/collections?slug="+slug, http.MethodGet, nil)
	if err != nil {
		return nil, err
	}
	var res ResultBase[*OrdinalsCollection, int]
	err = c.Request(req, &res)
	if err != nil {
		return nil, err
	}
	return res.Data, nil
}

func (c *MktplaceClient) CreateRequest(url string, method string, body io.Reader) (*http.Request, error) {
	if !strings.HasPrefix(url, "/") {
		url = "/" + url
	}
	req, err := http.NewRequest(method, c.config.BaseURL+url, body)
	if err != nil {
		return nil, err
	}
	c.setHeaders(req)
	return req, nil
}

func (c *MktplaceClient) setHeaders(req *http.Request) {
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("OK-ACCESS-KEY", c.config.AccessKey)
	req.Header.Set("OK-ACCESS-PASSPHRASE", c.config.AccessPassphrase)
	if c.config.AccessProject != "" {
		req.Header.Set("OK-ACCESS-PROJECT", c.config.AccessProject)
	}
	c.setSignHeader(req)
}

func (c *MktplaceClient) setSignHeader(req *http.Request) {
	now := time.Now().UTC().Format("2006-01-02T15:04:05.999Z")
	req.Header.Set("OK-ACCESS-TIMESTAMP", now)
	signKey := now + req.Method + strings.Split(req.URL.String(), req.URL.Host)[1]
	if req.Body != nil {
		content, err := io.ReadAll(req.Body)
		if err != nil {
			panic(err)
		}
		signKey += string(content)
	}
	sign := HmacSha256(c.config.AccessSecret, signKey)
	signStr := base64.StdEncoding.EncodeToString(sign)
	req.Header.Set("OK-ACCESS-SIGN", signStr)
}

// HmacSha256 计算HmacSha256
// key 是加密所使用的key
// data 是加密的内容
func HmacSha256(key string, data string) []byte {
	mac := hmac.New(sha256.New, []byte(key))
	_, _ = mac.Write([]byte(data))

	return mac.Sum(nil)
}
