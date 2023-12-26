package dashboard

import (
	"context"
	"github.com/gin-gonic/gin"
	"github.com/seeu-labs/website/server/pkg/cache"
	"github.com/seeu-labs/website/server/pkg/oklink"
	"net/http"
	"time"
)

var _cache = cache.NewObjectCache(1 * time.Minute)

func createClient() *oklink.Client {
	conf := oklink.ClientConfig{}
	conf.BindEnv()
	c, err := oklink.NewMktplaceClient(conf)
	if err != nil {
		panic(err)
	}
	return c
}

type SeeuDetail struct {
	*oklink.Brc20TokenDetail `json:"detail"`
	*oklink.OrdinalsInfo     `json:"marketplace"`
}

func handleSeeuDetail(ctx *gin.Context) {
	data := &SeeuDetail{
		OrdinalsInfo:     getOrdinalsInfo(ctx),
		Brc20TokenDetail: getDetail(ctx),
	}
	ctx.JSON(http.StatusOK, data)
}

func getOrdinalsInfo(ctx context.Context) *oklink.OrdinalsInfo {
	var info oklink.OrdinalsInfo
	k := "ordinals:" + "seeu"
	if _cache.GetFromCache(k, &info) {
		return &info
	}
	oc, err := mc.GetNftOrdinalsCollection("seeu")
	if err != nil {
		panic(err)
	}
	_cache.SetToCache(k, oc.Data[0])
	return oc.Data[0]
}

func getDetail(ctx context.Context) *oklink.Brc20TokenDetail {
	var detail oklink.Brc20TokenDetail
	k := "brc20-detail:" + "seeu"
	if _cache.GetFromCache(k, &detail) {
		return &detail
	}
	td, err := mc.GetBrc20TokenDetail("seeu")
	if err != nil {
		panic(err)
	}
	_cache.SetToCache(k, td)
	return td
}
