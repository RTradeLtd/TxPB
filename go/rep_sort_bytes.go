package pb

import (
	"bytes"
	"sort"
)

type sortByteSlices [][]byte

func (b sortByteSlices) Len() int {
	return len(b)
}

func (b sortByteSlices) Less(i, j int) bool {
	return bytes.Compare(b[i], b[j]) < 0
}

func (b sortByteSlices) Swap(i, j int) {
	b[j], b[i] = b[i], b[j]
}

func uniqueOrderedByteSlices(data [][]byte) [][]byte {
	if len(data) == 0 {
		return data
	}

	s := sortByteSlices(data)
	sort.Sort(s)

	j := 0
	for i := 1; i < len(s); i++ {
		if !bytes.Equal(s[i], s[j]) {
			j++
			s[j] = s[i]
		}
	}
	return s[:j+1]
}
