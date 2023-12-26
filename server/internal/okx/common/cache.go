package common

import (
	"context"
	"encoding/json"
	"github.com/allegro/bigcache/v3"
	"time"
)

type ObjectCache struct {
	cache *bigcache.BigCache
}

func NewObjectCache(eviction time.Duration) *ObjectCache {
	c, err := bigcache.New(context.Background(), bigcache.DefaultConfig(eviction))
	if err != nil {
		panic(err)
	}
	return &ObjectCache{cache: c}
}

func (c *ObjectCache) GetFromCache(key string, v interface{}) bool {
	item, err := c.cache.Get(key)
	if err != nil {
		return false
	}
	err = json.Unmarshal(item, v)
	if err != nil {
		panic(err)
	}
	return true
}

func (c *ObjectCache) SetToCache(key string, v interface{}) {
	value, err := json.Marshal(v)
	if err != nil {
		panic(err)
	}
	err = c.cache.Set(key, value)
	if err != nil {
		panic(err)
	}
}
