package brc20

import (
	"context"
	"github.com/gin-gonic/gin"
	"github.com/seeu-labs/website/server/internal/okx/common"
	"github.com/seeu-labs/website/server/pkg/okx"
	"net/http"
	"time"
)

var cache = common.NewObjectCache(1 * time.Minute)

func createClient() *okx.MktplaceClient {
	conf := okx.MktplaceClientConfig{}
	conf.BindEnv()
	c, err := okx.NewMktplaceClient(conf)
	if err != nil {
		panic(err)
	}
	return c
}

type SeeuDetail struct {
	*okx.Brc20TokenDetail `json:"detail"`
	*okx.OrdinalsInfo     `json:"marketplace"`
}

func handleSeeuDetail(ctx *gin.Context) {
	data := &SeeuDetail{
		OrdinalsInfo:     getOrdinalsInfo(ctx),
		Brc20TokenDetail: getDetail(ctx),
	}
	ctx.JSON(http.StatusOK, data)
}

func getOrdinalsInfo(ctx context.Context) *okx.OrdinalsInfo {
	var info okx.OrdinalsInfo
	k := "ordinals:" + "seeu"
	if cache.GetFromCache(k, &info) {
		return &info
	}
	oc, err := mc.GetNftOrdinalsCollection("seeu")
	if err != nil {
		panic(err)
	}
	cache.SetToCache(k, oc.Data[0])
	return oc.Data[0]
}

func getDetail(ctx context.Context) *okx.Brc20TokenDetail {
	var detail okx.Brc20TokenDetail
	k := "brc20-detail:" + "seeu"
	if cache.GetFromCache(k, &detail) {
		return &detail
	}
	td, err := mc.GetBrc20TokenDetail("seeu")
	if err != nil {
		panic(err)
	}
	cache.SetToCache(k, td)
	return td
}
