package okx

import (
	"github.com/gin-gonic/gin"
	"github.com/seeu-labs/website/server/internal/okx/brc20"
)

func Configure(g *gin.Engine) {
	brc20.Configure(g)
}
