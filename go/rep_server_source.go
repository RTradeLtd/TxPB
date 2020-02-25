package pb

//NewServerSourceFromHost creates an ServerSource from a HostInfo
func NewServerSourceFromHost(h HostInfo, gport int32) (*ServerSource, error) {
	a, err := NewAddrInfoFromHost(h, gport)
	if err != nil {
		return nil, err
	}
	return &ServerSource{
		AddrInfo: a,
	}, nil
}

//ServerSourcesToAddrInfos returns AddrInfos from ServerSources  TODO: unstable API
func ServerSourcesToAddrInfos(ss []*ServerSource) []*AddrInfo {
	var as []*AddrInfo
	for _, s := range ss {
		if a := s.GetAddrInfo(); a != nil {
			as = append(as, a)
		}
	}
	return as
}
