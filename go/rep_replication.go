package pb

import (
	"errors"
	"fmt"
	"strings"

	"github.com/ipfs/go-cid"
)

const header = "rtrade-replication v0"

// New creates a new Replication file, with the correct header
func New() *Replication {
	return &Replication{
		Header: header,
	}
}

// Valid checks if this is an Valid Replication file, with:
// - correct header (if strict, then no unknown extensions),
// - at least one CID,
// - if strict, then equal or more servers than required for replication, and
// - replication factor greater than 1.
// reports the first error found.
//
// If strict, then invalid CIDs, Servers, and unknown protocol extensions are also not allowed.
func (r *Replication) Valid(strict bool) error {
	if _, err := r.GetHeaderString(strict); err != nil {
		return err
	}
	if strict && haveUnrecognized(r) {
		return errors.New("found unrecognized data")
	}
	if CIDs, err := r.GetCIDs(); (strict || len(CIDs) == 0) && err != nil {
		return err
	}
	as := ServerSourcesToAddrInfos(r.Servers)
	if len(as) < int(r.GetReplicationFactor()) {
		return fmt.Errorf("not enough servers list %v of %v", len(as), r.GetReplicationFactor())
	}
	if strict {
		for _, a := range as {
			if _, err := a.GetID(); err != nil {
				return err
			}
			if _, err := a.GetMultiAddrs(); err != nil {
				return err
			}
		}
	}
	if r.GetReplicationFactor() < 2 {
		return fmt.Errorf("replication factor of %v is too low", r.GetReplicationFactor())
	}
	return nil
}

// GetHeaderString returns the full header string.
// Returns an error if header is not valid.
//
// If strict, then unknown extensions are not allowed.
func (r *Replication) GetHeaderString(strict bool) (string, error) {
	if strict {
		if r.Header != header {
			return "", fmt.Errorf(`header "%s" does not match "%s"`, r.Header, header)
		}
	} else if !strings.HasPrefix(r.Header, header) {
		return "", fmt.Errorf(`header "%s" does not start with "%s"`, r.Header, header)
	}
	return r.Header, nil
}

// GetCIDs returns the list of CIDs of this replication.
// If any errors are encountered during decoding, the first error is returned,
// and the returned slice will only contain good CIDs.
// An Error is always returned if there are no CIDs in this replication.
func (r *Replication) GetCIDs() ([]cid.Cid, error) {
	cs := make([]cid.Cid, 0, len(r.CidsBytes))
	var firstError error
	if len(r.CidsBytes) == 0 {
		return nil, errors.New("no CIDs found")
	}
	for _, bs := range r.CidsBytes {
		c, err := cid.Cast(bs)
		if err != nil {
			if firstError == nil {
				firstError = err
			}
			continue
		}
		cs = append(cs, c)
	}
	return cs, firstError
}

// AddCIDs adds CIDs to this replication, requires v1 or above, then sort and remove duplicates
func (r *Replication) AddCIDs(cids ...cid.Cid) error {
	startLen := len(r.CidsBytes)
	for _, c := range cids {
		if _, err := cid.Cast(c.Bytes()); err != nil {
			r.CidsBytes = r.CidsBytes[:startLen] // don't add any cids if we return an error
			return err
		}
		if c.Version() < 1 {
			// future: maybe upgrade deprecated versions instead
			r.CidsBytes = r.CidsBytes[:startLen] // don't add any cids if we return an error
			return fmt.Errorf("CID version %v is not allowed", c.Version())
		}
		r.CidsBytes = append(r.CidsBytes, c.Bytes())
	}

	r.CidsBytes = uniqueOrderedByteSlices(r.CidsBytes)
	return nil
}
