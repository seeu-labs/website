package brc20

import (
	"github.com/gin-gonic/gin"
	"github.com/seeu-labs/website/server/internal/okx/common"
	"github.com/seeu-labs/website/server/pkg/okx"
	"net/http"
	"time"
)

var cache = common.NewObjectCache(10 * time.Minute)

func createClient() *okx.MktplaceClient {
	conf := okx.MktplaceClientConfig{}
	conf.BindEnv()
	c, err := okx.NewMktplaceClient(conf)
	if err != nil {
		panic(err)
	}
	return c
}

func handleSeeuDetail(ctx *gin.Context) {
	k := "brc20-detail:" + "seeu"
	var res okx.Brc20TokenDetail
	if cache.GetFromCache(k, &res) {
		ctx.JSON(http.StatusOK, res)
		return
	}
	detail, err := mc.GetNftOrdinalsCollection("seeu")
	if err != nil {
		panic(err)
	}
	cache.SetToCache(k, detail.Data)
	ctx.JSON(http.StatusOK, detail.Data)
}
