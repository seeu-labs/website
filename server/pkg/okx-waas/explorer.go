package okx_waas

import "net/http"

type Explorer Client

type ResultBase[T any, T2 any] struct {
	Code T2     `json:"code"`
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

func (c *Explorer) Client() *Client {
	return (*Client)(c)
}

func (c *Client) Explorer() *Explorer {
	return (*Explorer)(c)
}

// GetBrc20TokenDetail get brc20 token detail
func (c *Explorer) GetBrc20TokenDetail(token string) (*Brc20TokenDetail, error) {
	url := "/api/v5/explorer/brc20/token-details?token=" + token
	req, err := c.Client().CreateRequest(url, http.MethodGet, nil)
	if err != nil {
		return nil, err
	}
	var res ResultBase[[]*Brc20TokenDetail, string]
	err = c.Client().Request(req, &res)
	if err != nil {
		return nil, err
	}
	return res.Data[0], nil
}
