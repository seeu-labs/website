package oklink

import (
	"encoding/json"
	"errors"
	"github.com/seeu-labs/website/server/pkg/httpx"
	"io"
	"net/http"
	"os"
	"strings"
)

type ClientConfig struct {
	AccessKey        string
	AccessProject    string
	AccessPassphrase string
	AccessSecret     string
	BaseURL          string
}

func (c *ClientConfig) BindEnv() {
	c.AccessKey = os.Getenv("SEEU_OKX_MP_ACCESS_KEY")
	c.AccessProject = os.Getenv("SEEU_OKX_MP_ACCESS_PROJECT")
	c.AccessPassphrase = os.Getenv("SEEU_OKX_MP_ACCESS_PASSPHRASE")
	c.AccessSecret = os.Getenv("SEEU_OKX_MP_ACCESS_SECRET")
	c.BaseURL = os.Getenv("SEEU_OKX_MP_BASE_URL")
}

type Client struct {
	config *ClientConfig
}

func NewMktplaceClient(config ClientConfig) (*Client, error) {
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
