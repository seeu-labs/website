package dashboard

import (
	"github.com/gin-gonic/gin"
	"github.com/seeu-labs/website/server/pkg/okx-waas"
)

var mc *okx_waas.Client

func Configure(g *gin.Engine) {
	mc = createClient()
	configureRoutes(g)
}
