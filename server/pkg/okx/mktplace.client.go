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

type OrdinalsCollection struct {
	Cursor string `json:"cursor"`
	Data   []struct {
		FloorPrice          string `json:"floorPrice"`
		InscriptionNumRange string `json:"inscriptionNumRange"`
		IsBrc20             bool   `json:"isBrc20"`
		Slug                string `json:"slug"`
		TotalVolume         string `json:"totalVolume"`
		Volume24H           string `json:"volume24h"`
	}
}

func (mc *MktplaceClient) Request(req *http.Request, v any) error {
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

func (mc *MktplaceClient) GetNftOrdinalsCollection(slug string) (*OrdinalsCollection, error) {
	req, err := mc.CreateRequest("/api/v5/mktplace/nft/ordinals/collections?slug="+slug, http.MethodGet, nil)
	if err != nil {
		return nil, err
	}
	var res ResultBase[[]*OrdinalsCollection]
	err = mc.Request(req, &res)
	if err != nil {
		return nil, err
	}
	return res.Data[0], nil

}

func (mc *MktplaceClient) CreateRequest(url string, method string, body io.Reader) (*http.Request, error) {
	if !strings.HasPrefix(url, "/") {
		url = "/" + url
	}
	req, err := http.NewRequest(method, mc.config.BaseURL+url, body)
	if err != nil {
		return nil, err
	}
	mc.setHeaders(req)
	return req, nil
}

func (mc *MktplaceClient) setHeaders(req *http.Request) {
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("OK-ACCESS-KEY", mc.config.AccessKey)
	req.Header.Set("OK-ACCESS-PASSPHRASE", mc.config.AccessPassphrase)
	if mc.config.AccessProject != "" {
		req.Header.Set("OK-ACCESS-PROJECT", mc.config.AccessProject)
	}
	mc.setSignHeader(req)
}

func (mc *MktplaceClient) setSignHeader(req *http.Request) {
	now := time.Now().UTC().Format(time.RFC3339)
	req.Header.Set("OK-ACCESS-TIMESTAMP", now)
	signKey := now + req.Method + req.URL.String()
	if req.Body != nil {
		content, err := io.ReadAll(req.Body)
		if err != nil {
			panic(err)
		}
		signKey += string(content)
	}
	sign := HmacSha256(signKey, mc.config.AccessSecret)
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
