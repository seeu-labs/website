package dashboard

import (
	"github.com/gin-gonic/gin"
	"github.com/seeu-labs/website/server/pkg/oklink"
)

var mc *oklink.Client

func Configure(g *gin.Engine) {
	mc = createClient()
	configureRoutes(g)
}
