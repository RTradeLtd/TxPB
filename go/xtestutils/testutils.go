package xtestutils

import (
	"os"
	"testing"
)

// GetXAPIAddress returns the address to used to talk to TemporalX
func GetXAPIAddress(t *testing.T) string {
	if os.Getenv("TEST_XAPI") != "" {
		return os.Getenv("TEST_XAPI")
	}
	return "xapi.temporal.cloud:9090"
}

// GetXAPIInsecure returns whether or not to use a secure connection
func GetXAPIInsecure(t *testing.T) bool {
	return os.Getenv("TEST_XAPI_SECURE") != "true"
}
