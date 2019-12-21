// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: namesys.proto

package pb

import (
	context "context"
	fmt "fmt"
	io "io"
	math "math"
	math_bits "math/bits"

	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// NameSysResolveRequest is used to resolve an IPNS name
type NameSysResolveRequest struct {
	// the name to resolve
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// recursion depth limit
	Depth uint32 `protobuf:"varint,2,opt,name=depth,proto3" json:"depth,omitempty"`
	// number of ipns records to retrieve
	// before selecting the best record
	DhtRecordCount uint32 `protobuf:"varint,3,opt,name=dhtRecordCount,proto3" json:"dhtRecordCount,omitempty"`
	// the amount of time to wait
	// for records to be fetched and verified
	DhtTimeout int32 `protobuf:"varint,4,opt,name=dhtTimeout,proto3" json:"dhtTimeout,omitempty"`
}

func (m *NameSysResolveRequest) Reset()         { *m = NameSysResolveRequest{} }
func (m *NameSysResolveRequest) String() string { return proto.CompactTextString(m) }
func (*NameSysResolveRequest) ProtoMessage()    {}
func (*NameSysResolveRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_70d41f629e281f22, []int{0}
}
func (m *NameSysResolveRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NameSysResolveRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NameSysResolveRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NameSysResolveRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NameSysResolveRequest.Merge(m, src)
}
func (m *NameSysResolveRequest) XXX_Size() int {
	return m.Size()
}
func (m *NameSysResolveRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_NameSysResolveRequest.DiscardUnknown(m)
}

var xxx_messageInfo_NameSysResolveRequest proto.InternalMessageInfo

func (m *NameSysResolveRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *NameSysResolveRequest) GetDepth() uint32 {
	if m != nil {
		return m.Depth
	}
	return 0
}

func (m *NameSysResolveRequest) GetDhtRecordCount() uint32 {
	if m != nil {
		return m.DhtRecordCount
	}
	return 0
}

func (m *NameSysResolveRequest) GetDhtTimeout() int32 {
	if m != nil {
		return m.DhtTimeout
	}
	return 0
}

// NameSysResolveRequest is an answer to a resolve request
type NameSysResolveResult struct {
	// the path that was resolved
	Path string `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
	// an error if any
	Error string `protobuf:"bytes,2,opt,name=error,proto3" json:"error,omitempty"`
}

func (m *NameSysResolveResult) Reset()         { *m = NameSysResolveResult{} }
func (m *NameSysResolveResult) String() string { return proto.CompactTextString(m) }
func (*NameSysResolveResult) ProtoMessage()    {}
func (*NameSysResolveResult) Descriptor() ([]byte, []int) {
	return fileDescriptor_70d41f629e281f22, []int{1}
}
func (m *NameSysResolveResult) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NameSysResolveResult) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NameSysResolveResult.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NameSysResolveResult) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NameSysResolveResult.Merge(m, src)
}
func (m *NameSysResolveResult) XXX_Size() int {
	return m.Size()
}
func (m *NameSysResolveResult) XXX_DiscardUnknown() {
	xxx_messageInfo_NameSysResolveResult.DiscardUnknown(m)
}

var xxx_messageInfo_NameSysResolveResult proto.InternalMessageInfo

func (m *NameSysResolveResult) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *NameSysResolveResult) GetError() string {
	if m != nil {
		return m.Error
	}
	return ""
}

// NameSysPublishRequest is used to publish a value
type NameSysPublishRequest struct {
	// the private key (name) for this record
	PrivateKey []byte `protobuf:"bytes,1,opt,name=privateKey,proto3" json:"privateKey,omitempty"`
	// the value of this record
	Value string `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	// the eol for this publish, if 0 implies
	// as NameSys::Publish call, if non 0 implies
	// a NameSys:PublishWithEOL call
	Eol int32 `protobuf:"varint,3,opt,name=eol,proto3" json:"eol,omitempty"`
	// if set, allows us to override default
	// ttl value of ipns records
	Ttl int32 `protobuf:"varint,4,opt,name=ttl,proto3" json:"ttl,omitempty"`
}

func (m *NameSysPublishRequest) Reset()         { *m = NameSysPublishRequest{} }
func (m *NameSysPublishRequest) String() string { return proto.CompactTextString(m) }
func (*NameSysPublishRequest) ProtoMessage()    {}
func (*NameSysPublishRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_70d41f629e281f22, []int{2}
}
func (m *NameSysPublishRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NameSysPublishRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NameSysPublishRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NameSysPublishRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NameSysPublishRequest.Merge(m, src)
}
func (m *NameSysPublishRequest) XXX_Size() int {
	return m.Size()
}
func (m *NameSysPublishRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_NameSysPublishRequest.DiscardUnknown(m)
}

var xxx_messageInfo_NameSysPublishRequest proto.InternalMessageInfo

func (m *NameSysPublishRequest) GetPrivateKey() []byte {
	if m != nil {
		return m.PrivateKey
	}
	return nil
}

func (m *NameSysPublishRequest) GetValue() string {
	if m != nil {
		return m.Value
	}
	return ""
}

func (m *NameSysPublishRequest) GetEol() int32 {
	if m != nil {
		return m.Eol
	}
	return 0
}

func (m *NameSysPublishRequest) GetTtl() int32 {
	if m != nil {
		return m.Ttl
	}
	return 0
}

func init() {
	proto.RegisterType((*NameSysResolveRequest)(nil), "pb.NameSysResolveRequest")
	proto.RegisterType((*NameSysResolveResult)(nil), "pb.NameSysResolveResult")
	proto.RegisterType((*NameSysPublishRequest)(nil), "pb.NameSysPublishRequest")
}

func init() { proto.RegisterFile("namesys.proto", fileDescriptor_70d41f629e281f22) }

var fileDescriptor_70d41f629e281f22 = []byte{
	// 345 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x52, 0xcd, 0x4a, 0xeb, 0x40,
	0x18, 0xcd, 0xf4, 0xe7, 0x42, 0x3f, 0x6e, 0xcb, 0x65, 0x6e, 0x85, 0xd8, 0xc5, 0x50, 0xb2, 0x90,
	0xae, 0x8a, 0xe8, 0xc6, 0xa5, 0x55, 0x44, 0x44, 0x28, 0x65, 0xf4, 0x05, 0x92, 0xe6, 0x83, 0x04,
	0x92, 0xce, 0x34, 0x33, 0x53, 0xc8, 0x23, 0xb8, 0xf3, 0xb1, 0x5c, 0x76, 0xe9, 0x4e, 0x69, 0x5f,
	0x44, 0x66, 0xfa, 0x43, 0x53, 0xba, 0x72, 0x77, 0x7e, 0xc8, 0xc9, 0x39, 0x1f, 0x03, 0xed, 0x59,
	0x98, 0xa3, 0x2a, 0xd5, 0x50, 0x16, 0x42, 0x0b, 0x5a, 0x93, 0x51, 0x0f, 0x8c, 0x4e, 0xb3, 0x0d,
	0x0f, 0xde, 0x08, 0x9c, 0x8d, 0xc3, 0x1c, 0x5f, 0x4a, 0xc5, 0x51, 0x89, 0x6c, 0x81, 0x1c, 0xe7,
	0x06, 0x95, 0xa6, 0x14, 0x1a, 0xf6, 0x53, 0x9f, 0xf4, 0xc9, 0xa0, 0xc5, 0x1d, 0xa6, 0x5d, 0x68,
	0xc6, 0x28, 0x75, 0xe2, 0xd7, 0xfa, 0x64, 0xd0, 0xe6, 0x1b, 0x42, 0x2f, 0xa0, 0x13, 0x27, 0x9a,
	0xe3, 0x54, 0x14, 0xf1, 0xbd, 0x30, 0x33, 0xed, 0xd7, 0x9d, 0x7d, 0xa4, 0x52, 0x06, 0x10, 0x27,
	0xfa, 0x35, 0xcd, 0x51, 0x18, 0xed, 0x37, 0xfa, 0x64, 0xd0, 0xe4, 0x07, 0x4a, 0x70, 0x0b, 0xdd,
	0xe3, 0x2a, 0xca, 0x64, 0xae, 0x89, 0x0c, 0x75, 0xb2, 0x6b, 0x62, 0xb1, 0x6d, 0x82, 0x45, 0x21,
	0x0a, 0xd7, 0xa4, 0xc5, 0x37, 0x24, 0x98, 0xef, 0xc7, 0x4c, 0x4c, 0x94, 0xa5, 0x2a, 0xd9, 0x8d,
	0x61, 0x00, 0xb2, 0x48, 0x17, 0xa1, 0xc6, 0x67, 0x2c, 0x5d, 0xd0, 0x5f, 0x7e, 0xa0, 0xd8, 0xb8,
	0x45, 0x98, 0x19, 0xdc, 0xc5, 0x39, 0x42, 0xff, 0x41, 0x1d, 0x45, 0xe6, 0xd6, 0x34, 0xb9, 0x85,
	0x56, 0xd1, 0x3a, 0xdb, 0x76, 0xb7, 0xf0, 0xea, 0x8b, 0x00, 0x6c, 0xff, 0x39, 0x9a, 0x3c, 0xd1,
	0x47, 0xe8, 0x54, 0x37, 0xd0, 0xf3, 0xa1, 0x8c, 0x86, 0x27, 0x4f, 0xdc, 0xf3, 0x4f, 0x59, 0x76,
	0x72, 0xe0, 0xd1, 0x31, 0xfc, 0xaf, 0x3a, 0x23, 0x55, 0xce, 0xa6, 0xbf, 0x4c, 0xbb, 0x24, 0xf4,
	0x66, 0x5f, 0x6c, 0x7b, 0x9a, 0x4a, 0x54, 0xf5, 0x5c, 0xbd, 0x96, 0xb5, 0x1e, 0x72, 0xa9, 0xcb,
	0xc0, 0xbb, 0xf3, 0x3f, 0x56, 0x8c, 0x2c, 0x57, 0x8c, 0x7c, 0xaf, 0x18, 0x79, 0x5f, 0x33, 0x6f,
	0xb9, 0x66, 0xde, 0xe7, 0x9a, 0x79, 0xd1, 0x1f, 0xf7, 0x86, 0xae, 0x7f, 0x02, 0x00, 0x00, 0xff,
	0xff, 0x57, 0x29, 0x6f, 0x5f, 0x64, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// NameSysAPIClient is the client API for NameSysAPI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type NameSysAPIClient interface {
	// NameSysResolve is used to resolve a name, waiting for the request to complete
	NameSysResolve(ctx context.Context, in *NameSysResolveRequest, opts ...grpc.CallOption) (*NameSysResolveResult, error)
	// NameSysResolveAsync is like Resolve, except instead of waiting for the request
	// to complete, we send back a stream which we will send the result on
	NameSysResolveAsync(ctx context.Context, in *NameSysResolveRequest, opts ...grpc.CallOption) (NameSysAPI_NameSysResolveAsyncClient, error)
	// NameSysPublish is used to publish an IPNS record, with/with-out an EOL
	NameSysPublish(ctx context.Context, in *NameSysPublishRequest, opts ...grpc.CallOption) (*Empty, error)
}

type nameSysAPIClient struct {
	cc *grpc.ClientConn
}

func NewNameSysAPIClient(cc *grpc.ClientConn) NameSysAPIClient {
	return &nameSysAPIClient{cc}
}

func (c *nameSysAPIClient) NameSysResolve(ctx context.Context, in *NameSysResolveRequest, opts ...grpc.CallOption) (*NameSysResolveResult, error) {
	out := new(NameSysResolveResult)
	err := c.cc.Invoke(ctx, "/pb.NameSysAPI/NameSysResolve", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *nameSysAPIClient) NameSysResolveAsync(ctx context.Context, in *NameSysResolveRequest, opts ...grpc.CallOption) (NameSysAPI_NameSysResolveAsyncClient, error) {
	stream, err := c.cc.NewStream(ctx, &_NameSysAPI_serviceDesc.Streams[0], "/pb.NameSysAPI/NameSysResolveAsync", opts...)
	if err != nil {
		return nil, err
	}
	x := &nameSysAPINameSysResolveAsyncClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type NameSysAPI_NameSysResolveAsyncClient interface {
	Recv() (*NameSysResolveResult, error)
	grpc.ClientStream
}

type nameSysAPINameSysResolveAsyncClient struct {
	grpc.ClientStream
}

func (x *nameSysAPINameSysResolveAsyncClient) Recv() (*NameSysResolveResult, error) {
	m := new(NameSysResolveResult)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *nameSysAPIClient) NameSysPublish(ctx context.Context, in *NameSysPublishRequest, opts ...grpc.CallOption) (*Empty, error) {
	out := new(Empty)
	err := c.cc.Invoke(ctx, "/pb.NameSysAPI/NameSysPublish", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NameSysAPIServer is the server API for NameSysAPI service.
type NameSysAPIServer interface {
	// NameSysResolve is used to resolve a name, waiting for the request to complete
	NameSysResolve(context.Context, *NameSysResolveRequest) (*NameSysResolveResult, error)
	// NameSysResolveAsync is like Resolve, except instead of waiting for the request
	// to complete, we send back a stream which we will send the result on
	NameSysResolveAsync(*NameSysResolveRequest, NameSysAPI_NameSysResolveAsyncServer) error
	// NameSysPublish is used to publish an IPNS record, with/with-out an EOL
	NameSysPublish(context.Context, *NameSysPublishRequest) (*Empty, error)
}

// UnimplementedNameSysAPIServer can be embedded to have forward compatible implementations.
type UnimplementedNameSysAPIServer struct {
}

func (*UnimplementedNameSysAPIServer) NameSysResolve(ctx context.Context, req *NameSysResolveRequest) (*NameSysResolveResult, error) {
	return nil, status.Errorf(codes.Unimplemented, "method NameSysResolve not implemented")
}
func (*UnimplementedNameSysAPIServer) NameSysResolveAsync(req *NameSysResolveRequest, srv NameSysAPI_NameSysResolveAsyncServer) error {
	return status.Errorf(codes.Unimplemented, "method NameSysResolveAsync not implemented")
}
func (*UnimplementedNameSysAPIServer) NameSysPublish(ctx context.Context, req *NameSysPublishRequest) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method NameSysPublish not implemented")
}

func RegisterNameSysAPIServer(s *grpc.Server, srv NameSysAPIServer) {
	s.RegisterService(&_NameSysAPI_serviceDesc, srv)
}

func _NameSysAPI_NameSysResolve_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NameSysResolveRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NameSysAPIServer).NameSysResolve(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.NameSysAPI/NameSysResolve",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NameSysAPIServer).NameSysResolve(ctx, req.(*NameSysResolveRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NameSysAPI_NameSysResolveAsync_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(NameSysResolveRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(NameSysAPIServer).NameSysResolveAsync(m, &nameSysAPINameSysResolveAsyncServer{stream})
}

type NameSysAPI_NameSysResolveAsyncServer interface {
	Send(*NameSysResolveResult) error
	grpc.ServerStream
}

type nameSysAPINameSysResolveAsyncServer struct {
	grpc.ServerStream
}

func (x *nameSysAPINameSysResolveAsyncServer) Send(m *NameSysResolveResult) error {
	return x.ServerStream.SendMsg(m)
}

func _NameSysAPI_NameSysPublish_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NameSysPublishRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NameSysAPIServer).NameSysPublish(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.NameSysAPI/NameSysPublish",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NameSysAPIServer).NameSysPublish(ctx, req.(*NameSysPublishRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _NameSysAPI_serviceDesc = grpc.ServiceDesc{
	ServiceName: "pb.NameSysAPI",
	HandlerType: (*NameSysAPIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "NameSysResolve",
			Handler:    _NameSysAPI_NameSysResolve_Handler,
		},
		{
			MethodName: "NameSysPublish",
			Handler:    _NameSysAPI_NameSysPublish_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "NameSysResolveAsync",
			Handler:       _NameSysAPI_NameSysResolveAsync_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "namesys.proto",
}

func (m *NameSysResolveRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NameSysResolveRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NameSysResolveRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.DhtTimeout != 0 {
		i = encodeVarintNamesys(dAtA, i, uint64(m.DhtTimeout))
		i--
		dAtA[i] = 0x20
	}
	if m.DhtRecordCount != 0 {
		i = encodeVarintNamesys(dAtA, i, uint64(m.DhtRecordCount))
		i--
		dAtA[i] = 0x18
	}
	if m.Depth != 0 {
		i = encodeVarintNamesys(dAtA, i, uint64(m.Depth))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintNamesys(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *NameSysResolveResult) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NameSysResolveResult) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NameSysResolveResult) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Error) > 0 {
		i -= len(m.Error)
		copy(dAtA[i:], m.Error)
		i = encodeVarintNamesys(dAtA, i, uint64(len(m.Error)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Path) > 0 {
		i -= len(m.Path)
		copy(dAtA[i:], m.Path)
		i = encodeVarintNamesys(dAtA, i, uint64(len(m.Path)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *NameSysPublishRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NameSysPublishRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NameSysPublishRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Ttl != 0 {
		i = encodeVarintNamesys(dAtA, i, uint64(m.Ttl))
		i--
		dAtA[i] = 0x20
	}
	if m.Eol != 0 {
		i = encodeVarintNamesys(dAtA, i, uint64(m.Eol))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Value) > 0 {
		i -= len(m.Value)
		copy(dAtA[i:], m.Value)
		i = encodeVarintNamesys(dAtA, i, uint64(len(m.Value)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.PrivateKey) > 0 {
		i -= len(m.PrivateKey)
		copy(dAtA[i:], m.PrivateKey)
		i = encodeVarintNamesys(dAtA, i, uint64(len(m.PrivateKey)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintNamesys(dAtA []byte, offset int, v uint64) int {
	offset -= sovNamesys(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *NameSysResolveRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovNamesys(uint64(l))
	}
	if m.Depth != 0 {
		n += 1 + sovNamesys(uint64(m.Depth))
	}
	if m.DhtRecordCount != 0 {
		n += 1 + sovNamesys(uint64(m.DhtRecordCount))
	}
	if m.DhtTimeout != 0 {
		n += 1 + sovNamesys(uint64(m.DhtTimeout))
	}
	return n
}

func (m *NameSysResolveResult) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Path)
	if l > 0 {
		n += 1 + l + sovNamesys(uint64(l))
	}
	l = len(m.Error)
	if l > 0 {
		n += 1 + l + sovNamesys(uint64(l))
	}
	return n
}

func (m *NameSysPublishRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.PrivateKey)
	if l > 0 {
		n += 1 + l + sovNamesys(uint64(l))
	}
	l = len(m.Value)
	if l > 0 {
		n += 1 + l + sovNamesys(uint64(l))
	}
	if m.Eol != 0 {
		n += 1 + sovNamesys(uint64(m.Eol))
	}
	if m.Ttl != 0 {
		n += 1 + sovNamesys(uint64(m.Ttl))
	}
	return n
}

func sovNamesys(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozNamesys(x uint64) (n int) {
	return sovNamesys(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *NameSysResolveRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowNamesys
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NameSysResolveRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NameSysResolveRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthNamesys
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthNamesys
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Depth", wireType)
			}
			m.Depth = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Depth |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DhtRecordCount", wireType)
			}
			m.DhtRecordCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DhtRecordCount |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DhtTimeout", wireType)
			}
			m.DhtTimeout = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DhtTimeout |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipNamesys(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthNamesys
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthNamesys
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *NameSysResolveResult) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowNamesys
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NameSysResolveResult: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NameSysResolveResult: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Path", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthNamesys
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthNamesys
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Path = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Error", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthNamesys
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthNamesys
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Error = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipNamesys(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthNamesys
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthNamesys
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *NameSysPublishRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowNamesys
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NameSysPublishRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NameSysPublishRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PrivateKey", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthNamesys
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthNamesys
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PrivateKey = append(m.PrivateKey[:0], dAtA[iNdEx:postIndex]...)
			if m.PrivateKey == nil {
				m.PrivateKey = []byte{}
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Value", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthNamesys
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthNamesys
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Value = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Eol", wireType)
			}
			m.Eol = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Eol |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Ttl", wireType)
			}
			m.Ttl = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Ttl |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipNamesys(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthNamesys
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthNamesys
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipNamesys(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowNamesys
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowNamesys
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthNamesys
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupNamesys
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthNamesys
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthNamesys        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowNamesys          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupNamesys = fmt.Errorf("proto: unexpected end of group")
)
