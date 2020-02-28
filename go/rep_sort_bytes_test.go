package pb

import (
	"bytes"
	"fmt"
	"testing"
)

func TestUniqueOrderedByteSlices(t *testing.T) {
	type ts struct {
		in  [][]byte
		exp [][]byte
	}

	testCases := []ts{
		{},
		{in: [][]byte{nil}, exp: [][]byte{nil}},
		{
			in: [][]byte{
				[]byte("xyz"), []byte("xyz"),
				[]byte("a"), []byte("b"), []byte("c"),
				[]byte("a"), []byte("b"), []byte("c"),
			},
			exp: [][]byte{
				[]byte("a"), []byte("b"), []byte("c"), []byte("xyz"),
			},
		},
	}

	for i, tc := range testCases {
		t.Run(fmt.Sprintf("case %v", i), func(t *testing.T) {
			out := uniqueOrderedByteSlices(tc.in)
			if len(out) != len(tc.exp) {
				t.Fatal("length is unexpected:", out)
			}
			for j, o := range out {
				if !bytes.Equal(o, tc.exp[j]) {
					t.Fatalf("item %v expect %v but got %v", j, tc.exp[j], o)
				}
			}
		})
	}

}
