package internal

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/seeu-labs/website/server/internal/okx"
	"log"
	"net/http"
	"runtime/debug"
)

func StartServer() {
	loadEnv()
	r := createServer()
	err := r.Run(":80") // start server on port 80, run in docker container
	if err != nil {
		panic(err)
	}
}

func createServer() *gin.Engine {
	r := gin.Default()
	// middlewares
	r.Use(errorHandlerFunc())

	// configure routes
	okx.Configure(r)

	return r
}

func loadEnv() {
	err := godotenv.Load(".env")
	if err != nil {
		panic(err)
	}
}

func errorHandlerFunc() gin.HandlerFunc {
	return func(c *gin.Context) {
		defer func() {
			if r := recover(); r != nil {
				log.Printf("Request error: %v", r)
				log.Printf("\n%v", string(debug.Stack()))
				c.JSON(http.StatusInternalServerError, gin.H{
					"message": r,
				})
			}
		}()
		c.Next()
	}
}
