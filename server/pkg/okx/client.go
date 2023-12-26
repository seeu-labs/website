package okx

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
	"strings"

	"github.com/seeu-labs/website/server/pkg/httpx"
)

type ClientConfig struct {
	ApiKey  string
	BaseURL string
}

type Client struct {
	config *ClientConfig
}

func NewClient(config ClientConfig) (*Client, error) {
	if config.ApiKey == "" {
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

func (c *Client) setHeaders(req *http.Request) {
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Ok-Access-Key", c.config.ApiKey)
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
