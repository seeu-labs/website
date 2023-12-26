package brc20

import (
	"github.com/gin-gonic/gin"
	"github.com/seeu-labs/website/server/pkg/okx"
)

var mc *okx.MktplaceClient

func Configure(g *gin.Engine) {
	mc = createClient()
	configureRoutes(g)
}
