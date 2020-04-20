package xtestutils

import (
	"os"
	"testing"
)

func TestGetXAPIAddress(t *testing.T) {
	if addr := GetXAPIAddress(t); addr != "xapi.temporal.cloud:9090" {
		t.Fatal("bad address")
	}
	if err := os.Setenv("TEST_XAPI", "xxapi.temporal.cloud:9090"); err != nil {
		t.Fatal(err)
	}
	if addr := GetXAPIAddress(t); addr != "xxapi.temporal.cloud:9090" {
		t.Fatal("bad address")
	}
}

func TestXAPISecure(t *testing.T) {
	if !GetXAPIInsecure(t) {
		t.Fatal("should be true")
	}
	if err := os.Setenv("TEST_XAPI_SECURE", "true"); err != nil {
		t.Fatal(err)
	}
	if GetXAPIInsecure(t) {
		t.Fatal("should be false")
	}
}
