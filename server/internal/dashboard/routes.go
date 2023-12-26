package dashboard

import (
	"github.com/gin-gonic/gin"
)

func configureRoutes(g *gin.Engine) {
	g.GET("/api/seeu/detail", handleSeeuDetail)
}
