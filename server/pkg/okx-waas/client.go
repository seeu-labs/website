package okx_waas

import (
	"encoding/base64"
	"encoding/json"
	"errors"
	"io"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/seeu-labs/website/server/pkg/httpx"
)

type ClientConfig struct {
	AccessKey        string
	AccessProject    string
	AccessPassphrase string
	AccessSecret     string
	BaseURL          string
}

func (c *ClientConfig) BindEnv() {
	c.AccessKey = os.Getenv("SEEU_OKX_ACCESS_KEY")
	c.AccessProject = os.Getenv("SEEU_OKX_ACCESS_PROJECT")
	c.AccessPassphrase = os.Getenv("SEEU_OKX_ACCESS_PASSPHRASE")
	c.AccessSecret = os.Getenv("SEEU_OKX_ACCESS_SECRET")
	c.BaseURL = os.Getenv("SEEU_OKX_BASE_URL")
}

type Client struct {
	config *ClientConfig
}

func NewMarketplaceClient(config ClientConfig) (*Client, error) {
	if config.AccessKey == "" {
		return nil, errors.New("apikey is required")
	}
	if config.BaseURL == "" {
		config.BaseURL = "https://www.oklink.com"
	}
	config.BaseURL = strings.TrimSuffix(config.BaseURL, "/")
	return &Client{
		config: &config,
	}, nil
}

func (c *Client) Request(req *http.Request, v any) error {
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

func (c *Client) CreateRequest(url string, method string, body io.Reader) (*http.Request, error) {
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

func (c *Client) setHeaders(req *http.Request) {
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("OK-ACCESS-KEY", c.config.AccessKey)
	req.Header.Set("OK-ACCESS-PASSPHRASE", c.config.AccessPassphrase)
	if c.config.AccessProject != "" {
		req.Header.Set("OK-ACCESS-PROJECT", c.config.AccessProject)
	}
	c.setSignHeader(req)
}

func (c *Client) setSignHeader(req *http.Request) {
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
