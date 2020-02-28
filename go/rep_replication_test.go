package pb

import (
	testing "testing"
)

func TestReplicationValidation(t *testing.T) {

	type ts struct {
		name     string
		f        func(r *Replication)
		isValid  bool
		isStrict bool
	}

	tcs := []ts{
		{
			"no header",
			func(r *Replication) {
				r.Header = ""
			},
			false, false,
		},
		{
			"header with more tag",
			func(r *Replication) {
				r.Header = "rtrade-replication v0 bad-tag"
			},
			true, false,
		},
		{
			"header with wrong version",
			func(r *Replication) {
				r.Header = "rtrade-replication v9"
			},
			false, false,
		},
		{
			"unexpected data",
			func(r *Replication) {
				r.XXX_unrecognized = []byte{0}
			},
			true, false,
		},
		{
			"unexpected data 2",
			func(r *Replication) {
				r.GetServers()[0].XXX_unrecognized = []byte{0}
			},
			true, false,
		},
		{
			"no cid",
			func(r *Replication) {
				r.CidsBytes = nil
			},
			false, false,
		},
		{
			"good and bad cid",
			func(r *Replication) {
				r.CidsBytes = append(r.CidsBytes, []byte("bad cid"))
			},
			true, false,
		},
		{
			"one bad cid",
			func(r *Replication) {
				r.CidsBytes = [][]byte{[]byte("bad cid")}
			},
			false, false,
		},
		{
			"no servers",
			func(r *Replication) {
				r.Servers = nil
			},
			false, false,
		},
		{
			"bad first server id",
			func(r *Replication) {
				r.Servers[0].AddrInfo.IdBytes = []byte("bad id")
			},
			true, false,
		},
		{
			"bad first server address",
			func(r *Replication) {
				r.Servers[0].AddrInfo.AddrsBytes[0][0] = 'x'
			},
			true, false,
		},
		{
			"first server no address",
			func(r *Replication) {
				r.Servers[0].AddrInfo.AddrsBytes = nil
			},
			true, true,
		},
		{
			"replication factor too low",
			func(r *Replication) {
				r.ReplicationFactor = 1
			},
			false, false,
		},
		{
			"replication factor equal to servers size",
			func(r *Replication) {
				r.ReplicationFactor = int32(len(ServerSourcesToAddrInfos(r.Servers)))
			},
			true, true,
		},
		{
			"replication factor bigger than servers size",
			func(r *Replication) {
				r.ReplicationFactor = int32(len(ServerSourcesToAddrInfos(r.Servers)) + 1)
			},
			false, false,
		},
	}
	for _, tc := range tcs {
		t.Run(tc.name, func(t *testing.T) {
			r := generateTestReplicationFile(t, 3, 2)
			tc.f(r)
			err := r.Valid(false)
			if (err == nil) != tc.isValid {
				t.Fatalf("err: %v, but validation expected to succeed: %v", err, tc.isValid)
			}
			err = r.Valid(true)
			if (err == nil) != tc.isStrict {
				t.Fatalf("err: %v, but strict validation expected to succeed: %v", err, tc.isStrict)
			}
		})
	}

}
