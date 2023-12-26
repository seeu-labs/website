package okx_waas

import (
	"encoding/base64"
	"io"
	"net/http"
	"strings"
	"time"
)

func (c *Client) GetNftOrdinalsCollection(slug string) (*OrdinalsCollection, error) {
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
