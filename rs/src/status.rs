// This file is generated by rust-protobuf 2.17.0. Do not edit
// @generated

// https://github.com/rust-lang/rust-clippy/issues/702
#![allow(unknown_lints)]
#![allow(clippy::all)]

#![allow(unused_attributes)]
#![rustfmt::skip]

#![allow(box_pointers)]
#![allow(dead_code)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(non_upper_case_globals)]
#![allow(trivial_casts)]
#![allow(unused_imports)]
#![allow(unused_results)]
//! Generated file from `status.proto`

/// Generated files are compatible only with the same version
/// of protobuf runtime.
// const _PROTOBUF_VERSION_CHECK: () = ::protobuf::VERSION_2_17_0;

#[derive(PartialEq,Clone,Default)]
pub struct VersionResponse {
    // message fields
    pub version: ::std::string::String,
    // special fields
    pub unknown_fields: ::protobuf::UnknownFields,
    pub cached_size: ::protobuf::CachedSize,
}

impl<'a> ::std::default::Default for &'a VersionResponse {
    fn default() -> &'a VersionResponse {
        <VersionResponse as ::protobuf::Message>::default_instance()
    }
}

impl VersionResponse {
    pub fn new() -> VersionResponse {
        ::std::default::Default::default()
    }

    // string version = 1;


    pub fn get_version(&self) -> &str {
        &self.version
    }
    pub fn clear_version(&mut self) {
        self.version.clear();
    }

    // Param is passed by value, moved
    pub fn set_version(&mut self, v: ::std::string::String) {
        self.version = v;
    }

    // Mutable pointer to the field.
    // If field is not initialized, it is initialized with default value first.
    pub fn mut_version(&mut self) -> &mut ::std::string::String {
        &mut self.version
    }

    // Take field
    pub fn take_version(&mut self) -> ::std::string::String {
        ::std::mem::replace(&mut self.version, ::std::string::String::new())
    }
}

impl ::protobuf::Message for VersionResponse {
    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        while !is.eof()? {
            let (field_number, wire_type) = is.read_tag_unpack()?;
            match field_number {
                1 => {
                    ::protobuf::rt::read_singular_proto3_string_into(wire_type, is, &mut self.version)?;
                },
                _ => {
                    ::protobuf::rt::read_unknown_or_skip_group(field_number, wire_type, is, self.mut_unknown_fields())?;
                },
            };
        }
        ::std::result::Result::Ok(())
    }

    // Compute sizes of nested messages
    #[allow(unused_variables)]
    fn compute_size(&self) -> u32 {
        let mut my_size = 0;
        if !self.version.is_empty() {
            my_size += ::protobuf::rt::string_size(1, &self.version);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.get_unknown_fields());
        self.cached_size.set(my_size);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        if !self.version.is_empty() {
            os.write_string(1, &self.version)?;
        }
        os.write_unknown_fields(self.get_unknown_fields())?;
        ::std::result::Result::Ok(())
    }

    fn get_cached_size(&self) -> u32 {
        self.cached_size.get()
    }

    fn get_unknown_fields(&self) -> &::protobuf::UnknownFields {
        &self.unknown_fields
    }

    fn mut_unknown_fields(&mut self) -> &mut ::protobuf::UnknownFields {
        &mut self.unknown_fields
    }

    fn as_any(&self) -> &dyn (::std::any::Any) {
        self as &dyn (::std::any::Any)
    }
    fn as_any_mut(&mut self) -> &mut dyn (::std::any::Any) {
        self as &mut dyn (::std::any::Any)
    }
    fn into_any(self: ::std::boxed::Box<Self>) -> ::std::boxed::Box<dyn (::std::any::Any)> {
        self
    }

    fn descriptor(&self) -> &'static ::protobuf::reflect::MessageDescriptor {
        Self::descriptor_static()
    }

    fn new() -> VersionResponse {
        VersionResponse::new()
    }

    fn descriptor_static() -> &'static ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            let mut fields = ::std::vec::Vec::new();
            fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeString>(
                "version",
                |m: &VersionResponse| { &m.version },
                |m: &mut VersionResponse| { &mut m.version },
            ));
            ::protobuf::reflect::MessageDescriptor::new_pb_name::<VersionResponse>(
                "VersionResponse",
                fields,
                file_descriptor_proto()
            )
        })
    }

    fn default_instance() -> &'static VersionResponse {
        static instance: ::protobuf::rt::LazyV2<VersionResponse> = ::protobuf::rt::LazyV2::INIT;
        instance.get(VersionResponse::new)
    }
}

impl ::protobuf::Clear for VersionResponse {
    fn clear(&mut self) {
        self.version.clear();
        self.unknown_fields.clear();
    }
}

impl ::std::fmt::Debug for VersionResponse {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for VersionResponse {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Message(self)
    }
}

#[derive(PartialEq,Clone,Default)]
pub struct StatusResponse {
    // message fields
    pub host: ::std::string::String,
    pub status: APISTATUS,
    // special fields
    pub unknown_fields: ::protobuf::UnknownFields,
    pub cached_size: ::protobuf::CachedSize,
}

impl<'a> ::std::default::Default for &'a StatusResponse {
    fn default() -> &'a StatusResponse {
        <StatusResponse as ::protobuf::Message>::default_instance()
    }
}

impl StatusResponse {
    pub fn new() -> StatusResponse {
        ::std::default::Default::default()
    }

    // string host = 1;


    pub fn get_host(&self) -> &str {
        &self.host
    }
    pub fn clear_host(&mut self) {
        self.host.clear();
    }

    // Param is passed by value, moved
    pub fn set_host(&mut self, v: ::std::string::String) {
        self.host = v;
    }

    // Mutable pointer to the field.
    // If field is not initialized, it is initialized with default value first.
    pub fn mut_host(&mut self) -> &mut ::std::string::String {
        &mut self.host
    }

    // Take field
    pub fn take_host(&mut self) -> ::std::string::String {
        ::std::mem::replace(&mut self.host, ::std::string::String::new())
    }

    // .pb.APISTATUS status = 2;


    pub fn get_status(&self) -> APISTATUS {
        self.status
    }
    pub fn clear_status(&mut self) {
        self.status = APISTATUS::ONLINE;
    }

    // Param is passed by value, moved
    pub fn set_status(&mut self, v: APISTATUS) {
        self.status = v;
    }
}

impl ::protobuf::Message for StatusResponse {
    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        while !is.eof()? {
            let (field_number, wire_type) = is.read_tag_unpack()?;
            match field_number {
                1 => {
                    ::protobuf::rt::read_singular_proto3_string_into(wire_type, is, &mut self.host)?;
                },
                2 => {
                    ::protobuf::rt::read_proto3_enum_with_unknown_fields_into(wire_type, is, &mut self.status, 2, &mut self.unknown_fields)?
                },
                _ => {
                    ::protobuf::rt::read_unknown_or_skip_group(field_number, wire_type, is, self.mut_unknown_fields())?;
                },
            };
        }
        ::std::result::Result::Ok(())
    }

    // Compute sizes of nested messages
    #[allow(unused_variables)]
    fn compute_size(&self) -> u32 {
        let mut my_size = 0;
        if !self.host.is_empty() {
            my_size += ::protobuf::rt::string_size(1, &self.host);
        }
        if self.status != APISTATUS::ONLINE {
            my_size += ::protobuf::rt::enum_size(2, self.status);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.get_unknown_fields());
        self.cached_size.set(my_size);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        if !self.host.is_empty() {
            os.write_string(1, &self.host)?;
        }
        if self.status != APISTATUS::ONLINE {
            os.write_enum(2, ::protobuf::ProtobufEnum::value(&self.status))?;
        }
        os.write_unknown_fields(self.get_unknown_fields())?;
        ::std::result::Result::Ok(())
    }

    fn get_cached_size(&self) -> u32 {
        self.cached_size.get()
    }

    fn get_unknown_fields(&self) -> &::protobuf::UnknownFields {
        &self.unknown_fields
    }

    fn mut_unknown_fields(&mut self) -> &mut ::protobuf::UnknownFields {
        &mut self.unknown_fields
    }

    fn as_any(&self) -> &dyn (::std::any::Any) {
        self as &dyn (::std::any::Any)
    }
    fn as_any_mut(&mut self) -> &mut dyn (::std::any::Any) {
        self as &mut dyn (::std::any::Any)
    }
    fn into_any(self: ::std::boxed::Box<Self>) -> ::std::boxed::Box<dyn (::std::any::Any)> {
        self
    }

    fn descriptor(&self) -> &'static ::protobuf::reflect::MessageDescriptor {
        Self::descriptor_static()
    }

    fn new() -> StatusResponse {
        StatusResponse::new()
    }

    fn descriptor_static() -> &'static ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            let mut fields = ::std::vec::Vec::new();
            fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeString>(
                "host",
                |m: &StatusResponse| { &m.host },
                |m: &mut StatusResponse| { &mut m.host },
            ));
            fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeEnum<APISTATUS>>(
                "status",
                |m: &StatusResponse| { &m.status },
                |m: &mut StatusResponse| { &mut m.status },
            ));
            ::protobuf::reflect::MessageDescriptor::new_pb_name::<StatusResponse>(
                "StatusResponse",
                fields,
                file_descriptor_proto()
            )
        })
    }

    fn default_instance() -> &'static StatusResponse {
        static instance: ::protobuf::rt::LazyV2<StatusResponse> = ::protobuf::rt::LazyV2::INIT;
        instance.get(StatusResponse::new)
    }
}

impl ::protobuf::Clear for StatusResponse {
    fn clear(&mut self) {
        self.host.clear();
        self.status = APISTATUS::ONLINE;
        self.unknown_fields.clear();
    }
}

impl ::std::fmt::Debug for StatusResponse {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for StatusResponse {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Message(self)
    }
}

#[derive(Clone,PartialEq,Eq,Debug,Hash)]
pub enum APISTATUS {
    ONLINE = 0,
    PURGING = 1,
    DEGRADED_PERFORMANCE = 2,
    ERROR = 3,
}

impl ::protobuf::ProtobufEnum for APISTATUS {
    fn value(&self) -> i32 {
        *self as i32
    }

    fn from_i32(value: i32) -> ::std::option::Option<APISTATUS> {
        match value {
            0 => ::std::option::Option::Some(APISTATUS::ONLINE),
            1 => ::std::option::Option::Some(APISTATUS::PURGING),
            2 => ::std::option::Option::Some(APISTATUS::DEGRADED_PERFORMANCE),
            3 => ::std::option::Option::Some(APISTATUS::ERROR),
            _ => ::std::option::Option::None
        }
    }

    fn values() -> &'static [Self] {
        static values: &'static [APISTATUS] = &[
            APISTATUS::ONLINE,
            APISTATUS::PURGING,
            APISTATUS::DEGRADED_PERFORMANCE,
            APISTATUS::ERROR,
        ];
        values
    }

    fn enum_descriptor_static() -> &'static ::protobuf::reflect::EnumDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::EnumDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            ::protobuf::reflect::EnumDescriptor::new_pb_name::<APISTATUS>("APISTATUS", file_descriptor_proto())
        })
    }
}

impl ::std::marker::Copy for APISTATUS {
}

impl ::std::default::Default for APISTATUS {
    fn default() -> Self {
        APISTATUS::ONLINE
    }
}

impl ::protobuf::reflect::ProtobufValue for APISTATUS {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Enum(::protobuf::ProtobufEnum::descriptor(self))
    }
}

static file_descriptor_proto_data: &'static [u8] = b"\
    \n\x0cstatus.proto\x12\x02pb\x1a\nutil.proto\"+\n\x0fVersionResponse\x12\
    \x18\n\x07version\x18\x01\x20\x01(\tR\x07version\"K\n\x0eStatusResponse\
    \x12\x12\n\x04host\x18\x01\x20\x01(\tR\x04host\x12%\n\x06status\x18\x02\
    \x20\x01(\x0e2\r.pb.APISTATUSR\x06status*I\n\tAPISTATUS\x12\n\n\x06ONLIN\
    E\x10\0\x12\x0b\n\x07PURGING\x10\x01\x12\x18\n\x14DEGRADED_PERFORMANCE\
    \x10\x02\x12\t\n\x05ERROR\x10\x032c\n\tStatusAPI\x12+\n\x07Version\x12\t\
    .pb.Empty\x1a\x13.pb.VersionResponse\"\0\x12)\n\x06Status\x12\t.pb.Empty\
    \x1a\x12.pb.StatusResponse\"\0J\x99\r\n\x06\x12\x04\0\0&\x01\n\x08\n\x01\
    \x0c\x12\x03\0\0\x12\n\x08\n\x01\x02\x12\x03\x01\x08\n\n\t\n\x02\x03\0\
    \x12\x03\x02\x07\x13\nI\n\x02\x06\0\x12\x04\x05\0\n\x01\x1a=\x20provides\
    \x20utilities\x20to\x20retrieve\x20api\x20status\x20information\x20from\
    \r\n\n\n\n\x03\x06\0\x01\x12\x03\x05\x08\x11\nC\n\x04\x06\0\x02\0\x12\
    \x03\x07\x044\x1a6\x20Version\x20is\x20used\x20to\x20retrieve\x20api\x20\
    version\x20information\r\n\n\x0c\n\x05\x06\0\x02\0\x01\x12\x03\x07\x08\
    \x0f\n\x0c\n\x05\x06\0\x02\0\x02\x12\x03\x07\x10\x15\n\x0c\n\x05\x06\0\
    \x02\0\x03\x12\x03\x07\x20/\nB\n\x04\x06\0\x02\x01\x12\x03\t\x042\x1a5\
    \x20Status\x20is\x20used\x20to\x20retrieve\x20api\x20status\x20informati\
    on.\r\n\n\x0c\n\x05\x06\0\x02\x01\x01\x12\x03\t\x08\x0e\n\x0c\n\x05\x06\
    \0\x02\x01\x02\x12\x03\t\x0f\x14\n\x0c\n\x05\x06\0\x02\x01\x03\x12\x03\t\
    \x1f-\nH\n\x02\x04\0\x12\x04\r\0\x10\x01\x1a<\x20VersionResponse\x20is\
    \x20used\x20to\x20return\x20API\x20version\x20information\r\n\n\n\n\x03\
    \x04\0\x01\x12\x03\r\x08\x17\nZ\n\x04\x04\0\x02\0\x12\x03\x0f\x04\x17\
    \x1aM\x20version\x20denotes\x20the\x20github\x20version\x20that\x20was\
    \x20present\x20when\x20the\x20api\x20was\x20built\r\n\n\r\n\x05\x04\0\
    \x02\0\x04\x12\x04\x0f\x04\r\x19\n\x0c\n\x05\x04\0\x02\0\x05\x12\x03\x0f\
    \x04\n\n\x0c\n\x05\x04\0\x02\0\x01\x12\x03\x0f\x0b\x12\n\x0c\n\x05\x04\0\
    \x02\0\x03\x12\x03\x0f\x15\x16\nQ\n\x02\x05\0\x12\x04\x13\0\x1d\x01\x1aE\
    \x20APISTATUS\x20is\x20an\x20enum\x20to\x20return\x20a\x20concise\x20des\
    cription\x20of\x20api\x20status\r\n\n\n\n\x03\x05\0\x01\x12\x03\x13\x05\
    \x0e\nB\n\x04\x05\0\x02\0\x12\x03\x15\x04\x0f\x1a5\x20ONLINE\x20indicate\
    s\x20everything\x20is\x20working\x20as\x20expected\r\n\n\x0c\n\x05\x05\0\
    \x02\0\x01\x12\x03\x15\x04\n\n\x0c\n\x05\x05\0\x02\0\x02\x12\x03\x15\r\
    \x0e\n\x9b\x01\n\x04\x05\0\x02\x01\x12\x03\x18\x04\x10\x1a\x8d\x01\x20PU\
    RGING\x20indicates\x20the\x20system\x20is\x20undergoing\x20data\x20remov\
    al\r\n\x20a\x20purging\x20system\x20is\x20not\x20available\x20for\x20use\
    \x20unless\x20all\x20other\x20nodes\x20are\x20unavailable\r\n\n\x0c\n\
    \x05\x05\0\x02\x01\x01\x12\x03\x18\x04\x0b\n\x0c\n\x05\x05\0\x02\x01\x02\
    \x12\x03\x18\x0e\x0f\nW\n\x04\x05\0\x02\x02\x12\x03\x1a\x04\x1d\x1aJ\x20\
    DEGRADED_PERFORMANCE\x20indicates\x20the\x20system\x20is\x20currently\
    \x20under\x20heavy\x20load\r\n\n\x0c\n\x05\x05\0\x02\x02\x01\x12\x03\x1a\
    \x04\x18\n\x0c\n\x05\x05\0\x02\x02\x02\x12\x03\x1a\x1b\x1c\ni\n\x04\x05\
    \0\x02\x03\x12\x03\x1c\x04\x0e\x1a\\\x20ERROR\x20indicates\x20that\x20th\
    e\x20system\x20is\x20currently\x20experiencing\x20an\x20error\x20and\x20\
    should\x20not\x20be\x20used\r\n\n\x0c\n\x05\x05\0\x02\x03\x01\x12\x03\
    \x1c\x04\t\n\x0c\n\x05\x05\0\x02\x03\x02\x12\x03\x1c\x0c\r\nF\n\x02\x04\
    \x01\x12\x04\x20\0&\x01\x1a:\x20StatusResponse\x20is\x20used\x20to\x20re\
    turn\x20API\x20status\x20information\r\n\n\n\n\x03\x04\x01\x01\x12\x03\
    \x20\x08\x16\n\xc3\x01\n\x04\x04\x01\x02\0\x12\x03#\x04\x14\x1a\xb5\x01\
    \x20host\x20is\x20an\x20identifier\x20for\x20the\x20host\x20of\x20the\
    \x20system\x20responding\x20to\x20the\x20request.\r\n\x20it\x20may\x20or\
    \x20may\x20not\x20be\x20the\x20hostname,\x20it\x20is\x20up\x20to\x20the\
    \x20implementer\x20of\x20the\x20service\x20to\x20choose\x20what\x20is\
    \x20here\r\n\n\r\n\x05\x04\x01\x02\0\x04\x12\x04#\x04\x20\x18\n\x0c\n\
    \x05\x04\x01\x02\0\x05\x12\x03#\x04\n\n\x0c\n\x05\x04\x01\x02\0\x01\x12\
    \x03#\x0b\x0f\n\x0c\n\x05\x04\x01\x02\0\x03\x12\x03#\x12\x13\nP\n\x04\
    \x04\x01\x02\x01\x12\x03%\x04\x19\x1aC\x20status\x20contains\x20a\x20sta\
    tus\x20enum\x20indicating\x20the\x20state\x20of\x20the\x20system\r\n\n\r\
    \n\x05\x04\x01\x02\x01\x04\x12\x04%\x04#\x14\n\x0c\n\x05\x04\x01\x02\x01\
    \x06\x12\x03%\x04\r\n\x0c\n\x05\x04\x01\x02\x01\x01\x12\x03%\x0e\x14\n\
    \x0c\n\x05\x04\x01\x02\x01\x03\x12\x03%\x17\x18b\x06proto3\
";

static file_descriptor_proto_lazy: ::protobuf::rt::LazyV2<::protobuf::descriptor::FileDescriptorProto> = ::protobuf::rt::LazyV2::INIT;

fn parse_descriptor_proto() -> ::protobuf::descriptor::FileDescriptorProto {
    ::protobuf::parse_from_bytes(file_descriptor_proto_data).unwrap()
}

pub fn file_descriptor_proto() -> &'static ::protobuf::descriptor::FileDescriptorProto {
    file_descriptor_proto_lazy.get(|| {
        parse_descriptor_proto()
    })
}
