package okx

import "net/http"

type ResultBase[T any] struct {
	Code string `json:"code"`
	Msg  string `json:"msg"`
	Data T      `json:"data"`
}

type Brc20TokenDetail struct {
	Token             string `json:"token"`
	Precision         string `json:"precision"`
	TotalSupply       string `json:"totalSupply"`
	MintAmount        string `json:"mintAmount"`
	LimitPerMint      string `json:"limitPerMint"`
	Holder            string `json:"holder"`
	DeployAddress     string `json:"deployAddress"`
	LogoUrl           string `json:"logoUrl"`
	TxId              string `json:"txId"`
	InscriptionId     string `json:"inscriptionId"`
	DeployHeight      string `json:"deployHeight"`
	DeployTime        string `json:"deployTime"`
	InscriptionNumber string `json:"inscriptionNumber"`
	State             string `json:"state"`
	TokenType         string `json:"tokenType"`
	Msg               string `json:"msg"`
}

// GetBrc20TokenDetail get brc20 token detail
func (c *Client) GetBrc20TokenDetail(token string) (*ResultBase[[]*Brc20TokenDetail], error) {
	url := "/api/v5/explorer/btc/token-details?token=" + token
	req, err := c.CreateRequest(url, http.MethodGet, nil)
	if err != nil {
		return nil, err
	}
	var res ResultBase[[]*Brc20TokenDetail]
	err = c.Request(req, &res)
	if err != nil {
		return nil, err
	}
	return &res, nil
}
