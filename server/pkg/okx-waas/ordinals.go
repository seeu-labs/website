package okx_waas

import (
	"net/http"
)

type Mktplace Client

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

func (c *Client) Mktplace() *Mktplace {
	return (*Mktplace)(c)
}

func (c *Mktplace) Client() *Client {
	return (*Client)(c)
}

func (c *Mktplace) GetNftOrdinalsCollection(slug string) (*OrdinalsCollection, error) {
	req, err := c.Client().CreateRequest("/api/v5/mktplace/nft/ordinals/collections?slug="+slug, http.MethodGet, nil)
	if err != nil {
		return nil, err
	}
	var res ResultBase[*OrdinalsCollection, int]
	err = c.Client().Request(req, &res)
	if err != nil {
		return nil, err
	}
	return res.Data, nil
}
