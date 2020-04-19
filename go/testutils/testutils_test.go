package testutils

import (
	"os"
	"testing"
)

func TestUtils(t *testing.T) {
	client := GetClient(t)
	client.Close()
	if err := os.Setenv("TEST_XAPI", "xapi.temporal.cloud:9090"); err != nil {
		t.Fatal(err)
	}
	client = GetClient(t)
	client.Close()
}
