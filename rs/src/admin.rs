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
//! Generated file from `admin.proto`

/// Generated files are compatible only with the same version
/// of protobuf runtime.
// const _PROTOBUF_VERSION_CHECK: () = ::protobuf::VERSION_2_17_0;

#[derive(PartialEq,Clone,Default)]
pub struct ManageGCRequest {
    // message fields
    pub field_type: GCREQTYPE,
    // special fields
    pub unknown_fields: ::protobuf::UnknownFields,
    pub cached_size: ::protobuf::CachedSize,
}

impl<'a> ::std::default::Default for &'a ManageGCRequest {
    fn default() -> &'a ManageGCRequest {
        <ManageGCRequest as ::protobuf::Message>::default_instance()
    }
}

impl ManageGCRequest {
    pub fn new() -> ManageGCRequest {
        ::std::default::Default::default()
    }

    // .pb.GCREQTYPE type = 1;


    pub fn get_field_type(&self) -> GCREQTYPE {
        self.field_type
    }
    pub fn clear_field_type(&mut self) {
        self.field_type = GCREQTYPE::GC_START;
    }

    // Param is passed by value, moved
    pub fn set_field_type(&mut self, v: GCREQTYPE) {
        self.field_type = v;
    }
}

impl ::protobuf::Message for ManageGCRequest {
    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        while !is.eof()? {
            let (field_number, wire_type) = is.read_tag_unpack()?;
            match field_number {
                1 => {
                    ::protobuf::rt::read_proto3_enum_with_unknown_fields_into(wire_type, is, &mut self.field_type, 1, &mut self.unknown_fields)?
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
        if self.field_type != GCREQTYPE::GC_START {
            my_size += ::protobuf::rt::enum_size(1, self.field_type);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.get_unknown_fields());
        self.cached_size.set(my_size);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        if self.field_type != GCREQTYPE::GC_START {
            os.write_enum(1, ::protobuf::ProtobufEnum::value(&self.field_type))?;
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

    fn new() -> ManageGCRequest {
        ManageGCRequest::new()
    }

    fn descriptor_static() -> &'static ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            let mut fields = ::std::vec::Vec::new();
            fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeEnum<GCREQTYPE>>(
                "type",
                |m: &ManageGCRequest| { &m.field_type },
                |m: &mut ManageGCRequest| { &mut m.field_type },
            ));
            ::protobuf::reflect::MessageDescriptor::new_pb_name::<ManageGCRequest>(
                "ManageGCRequest",
                fields,
                file_descriptor_proto()
            )
        })
    }

    fn default_instance() -> &'static ManageGCRequest {
        static instance: ::protobuf::rt::LazyV2<ManageGCRequest> = ::protobuf::rt::LazyV2::INIT;
        instance.get(ManageGCRequest::new)
    }
}

impl ::protobuf::Clear for ManageGCRequest {
    fn clear(&mut self) {
        self.field_type = GCREQTYPE::GC_START;
        self.unknown_fields.clear();
    }
}

impl ::std::fmt::Debug for ManageGCRequest {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for ManageGCRequest {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Message(self)
    }
}

#[derive(PartialEq,Clone,Default)]
pub struct ManageGCResponse {
    // message fields
    pub status: ::std::string::String,
    // special fields
    pub unknown_fields: ::protobuf::UnknownFields,
    pub cached_size: ::protobuf::CachedSize,
}

impl<'a> ::std::default::Default for &'a ManageGCResponse {
    fn default() -> &'a ManageGCResponse {
        <ManageGCResponse as ::protobuf::Message>::default_instance()
    }
}

impl ManageGCResponse {
    pub fn new() -> ManageGCResponse {
        ::std::default::Default::default()
    }

    // string status = 1;


    pub fn get_status(&self) -> &str {
        &self.status
    }
    pub fn clear_status(&mut self) {
        self.status.clear();
    }

    // Param is passed by value, moved
    pub fn set_status(&mut self, v: ::std::string::String) {
        self.status = v;
    }

    // Mutable pointer to the field.
    // If field is not initialized, it is initialized with default value first.
    pub fn mut_status(&mut self) -> &mut ::std::string::String {
        &mut self.status
    }

    // Take field
    pub fn take_status(&mut self) -> ::std::string::String {
        ::std::mem::replace(&mut self.status, ::std::string::String::new())
    }
}

impl ::protobuf::Message for ManageGCResponse {
    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        while !is.eof()? {
            let (field_number, wire_type) = is.read_tag_unpack()?;
            match field_number {
                1 => {
                    ::protobuf::rt::read_singular_proto3_string_into(wire_type, is, &mut self.status)?;
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
        if !self.status.is_empty() {
            my_size += ::protobuf::rt::string_size(1, &self.status);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.get_unknown_fields());
        self.cached_size.set(my_size);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        if !self.status.is_empty() {
            os.write_string(1, &self.status)?;
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

    fn new() -> ManageGCResponse {
        ManageGCResponse::new()
    }

    fn descriptor_static() -> &'static ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            let mut fields = ::std::vec::Vec::new();
            fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeString>(
                "status",
                |m: &ManageGCResponse| { &m.status },
                |m: &mut ManageGCResponse| { &mut m.status },
            ));
            ::protobuf::reflect::MessageDescriptor::new_pb_name::<ManageGCResponse>(
                "ManageGCResponse",
                fields,
                file_descriptor_proto()
            )
        })
    }

    fn default_instance() -> &'static ManageGCResponse {
        static instance: ::protobuf::rt::LazyV2<ManageGCResponse> = ::protobuf::rt::LazyV2::INIT;
        instance.get(ManageGCResponse::new)
    }
}

impl ::protobuf::Clear for ManageGCResponse {
    fn clear(&mut self) {
        self.status.clear();
        self.unknown_fields.clear();
    }
}

impl ::std::fmt::Debug for ManageGCResponse {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for ManageGCResponse {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Message(self)
    }
}

#[derive(PartialEq,Clone,Default)]
pub struct RefCountRequest {
    // message fields
    pub cids: ::protobuf::RepeatedField<::std::string::String>,
    pub limit: i64,
    // special fields
    pub unknown_fields: ::protobuf::UnknownFields,
    pub cached_size: ::protobuf::CachedSize,
}

impl<'a> ::std::default::Default for &'a RefCountRequest {
    fn default() -> &'a RefCountRequest {
        <RefCountRequest as ::protobuf::Message>::default_instance()
    }
}

impl RefCountRequest {
    pub fn new() -> RefCountRequest {
        ::std::default::Default::default()
    }

    // repeated string cids = 1;


    pub fn get_cids(&self) -> &[::std::string::String] {
        &self.cids
    }
    pub fn clear_cids(&mut self) {
        self.cids.clear();
    }

    // Param is passed by value, moved
    pub fn set_cids(&mut self, v: ::protobuf::RepeatedField<::std::string::String>) {
        self.cids = v;
    }

    // Mutable pointer to the field.
    pub fn mut_cids(&mut self) -> &mut ::protobuf::RepeatedField<::std::string::String> {
        &mut self.cids
    }

    // Take field
    pub fn take_cids(&mut self) -> ::protobuf::RepeatedField<::std::string::String> {
        ::std::mem::replace(&mut self.cids, ::protobuf::RepeatedField::new())
    }

    // int64 limit = 2;


    pub fn get_limit(&self) -> i64 {
        self.limit
    }
    pub fn clear_limit(&mut self) {
        self.limit = 0;
    }

    // Param is passed by value, moved
    pub fn set_limit(&mut self, v: i64) {
        self.limit = v;
    }
}

impl ::protobuf::Message for RefCountRequest {
    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        while !is.eof()? {
            let (field_number, wire_type) = is.read_tag_unpack()?;
            match field_number {
                1 => {
                    ::protobuf::rt::read_repeated_string_into(wire_type, is, &mut self.cids)?;
                },
                2 => {
                    if wire_type != ::protobuf::wire_format::WireTypeVarint {
                        return ::std::result::Result::Err(::protobuf::rt::unexpected_wire_type(wire_type));
                    }
                    let tmp = is.read_int64()?;
                    self.limit = tmp;
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
        for value in &self.cids {
            my_size += ::protobuf::rt::string_size(1, &value);
        };
        if self.limit != 0 {
            my_size += ::protobuf::rt::value_size(2, self.limit, ::protobuf::wire_format::WireTypeVarint);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.get_unknown_fields());
        self.cached_size.set(my_size);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        for v in &self.cids {
            os.write_string(1, &v)?;
        };
        if self.limit != 0 {
            os.write_int64(2, self.limit)?;
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

    fn new() -> RefCountRequest {
        RefCountRequest::new()
    }

    fn descriptor_static() -> &'static ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            let mut fields = ::std::vec::Vec::new();
            fields.push(::protobuf::reflect::accessor::make_repeated_field_accessor::<_, ::protobuf::types::ProtobufTypeString>(
                "cids",
                |m: &RefCountRequest| { &m.cids },
                |m: &mut RefCountRequest| { &mut m.cids },
            ));
            fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeInt64>(
                "limit",
                |m: &RefCountRequest| { &m.limit },
                |m: &mut RefCountRequest| { &mut m.limit },
            ));
            ::protobuf::reflect::MessageDescriptor::new_pb_name::<RefCountRequest>(
                "RefCountRequest",
                fields,
                file_descriptor_proto()
            )
        })
    }

    fn default_instance() -> &'static RefCountRequest {
        static instance: ::protobuf::rt::LazyV2<RefCountRequest> = ::protobuf::rt::LazyV2::INIT;
        instance.get(RefCountRequest::new)
    }
}

impl ::protobuf::Clear for RefCountRequest {
    fn clear(&mut self) {
        self.cids.clear();
        self.limit = 0;
        self.unknown_fields.clear();
    }
}

impl ::std::fmt::Debug for RefCountRequest {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for RefCountRequest {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Message(self)
    }
}

#[derive(PartialEq,Clone,Default)]
pub struct RefCountResponse {
    // message fields
    pub cids: ::std::collections::HashMap<::std::string::String, i64>,
    // special fields
    pub unknown_fields: ::protobuf::UnknownFields,
    pub cached_size: ::protobuf::CachedSize,
}

impl<'a> ::std::default::Default for &'a RefCountResponse {
    fn default() -> &'a RefCountResponse {
        <RefCountResponse as ::protobuf::Message>::default_instance()
    }
}

impl RefCountResponse {
    pub fn new() -> RefCountResponse {
        ::std::default::Default::default()
    }

    // repeated .pb.RefCountResponse.CidsEntry cids = 1;


    pub fn get_cids(&self) -> &::std::collections::HashMap<::std::string::String, i64> {
        &self.cids
    }
    pub fn clear_cids(&mut self) {
        self.cids.clear();
    }

    // Param is passed by value, moved
    pub fn set_cids(&mut self, v: ::std::collections::HashMap<::std::string::String, i64>) {
        self.cids = v;
    }

    // Mutable pointer to the field.
    pub fn mut_cids(&mut self) -> &mut ::std::collections::HashMap<::std::string::String, i64> {
        &mut self.cids
    }

    // Take field
    pub fn take_cids(&mut self) -> ::std::collections::HashMap<::std::string::String, i64> {
        ::std::mem::replace(&mut self.cids, ::std::collections::HashMap::new())
    }
}

impl ::protobuf::Message for RefCountResponse {
    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        while !is.eof()? {
            let (field_number, wire_type) = is.read_tag_unpack()?;
            match field_number {
                1 => {
                    ::protobuf::rt::read_map_into::<::protobuf::types::ProtobufTypeString, ::protobuf::types::ProtobufTypeInt64>(wire_type, is, &mut self.cids)?;
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
        my_size += ::protobuf::rt::compute_map_size::<::protobuf::types::ProtobufTypeString, ::protobuf::types::ProtobufTypeInt64>(1, &self.cids);
        my_size += ::protobuf::rt::unknown_fields_size(self.get_unknown_fields());
        self.cached_size.set(my_size);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        ::protobuf::rt::write_map_with_cached_sizes::<::protobuf::types::ProtobufTypeString, ::protobuf::types::ProtobufTypeInt64>(1, &self.cids, os)?;
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

    fn new() -> RefCountResponse {
        RefCountResponse::new()
    }

    fn descriptor_static() -> &'static ::protobuf::reflect::MessageDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::MessageDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            let mut fields = ::std::vec::Vec::new();
            fields.push(::protobuf::reflect::accessor::make_map_accessor::<_, ::protobuf::types::ProtobufTypeString, ::protobuf::types::ProtobufTypeInt64>(
                "cids",
                |m: &RefCountResponse| { &m.cids },
                |m: &mut RefCountResponse| { &mut m.cids },
            ));
            ::protobuf::reflect::MessageDescriptor::new_pb_name::<RefCountResponse>(
                "RefCountResponse",
                fields,
                file_descriptor_proto()
            )
        })
    }

    fn default_instance() -> &'static RefCountResponse {
        static instance: ::protobuf::rt::LazyV2<RefCountResponse> = ::protobuf::rt::LazyV2::INIT;
        instance.get(RefCountResponse::new)
    }
}

impl ::protobuf::Clear for RefCountResponse {
    fn clear(&mut self) {
        self.cids.clear();
        self.unknown_fields.clear();
    }
}

impl ::std::fmt::Debug for RefCountResponse {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for RefCountResponse {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Message(self)
    }
}

#[derive(Clone,PartialEq,Eq,Debug,Hash)]
pub enum GCREQTYPE {
    GC_START = 0,
    GC_STOP = 1,
    GC_STATUS = 2,
}

impl ::protobuf::ProtobufEnum for GCREQTYPE {
    fn value(&self) -> i32 {
        *self as i32
    }

    fn from_i32(value: i32) -> ::std::option::Option<GCREQTYPE> {
        match value {
            0 => ::std::option::Option::Some(GCREQTYPE::GC_START),
            1 => ::std::option::Option::Some(GCREQTYPE::GC_STOP),
            2 => ::std::option::Option::Some(GCREQTYPE::GC_STATUS),
            _ => ::std::option::Option::None
        }
    }

    fn values() -> &'static [Self] {
        static values: &'static [GCREQTYPE] = &[
            GCREQTYPE::GC_START,
            GCREQTYPE::GC_STOP,
            GCREQTYPE::GC_STATUS,
        ];
        values
    }

    fn enum_descriptor_static() -> &'static ::protobuf::reflect::EnumDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::EnumDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            ::protobuf::reflect::EnumDescriptor::new_pb_name::<GCREQTYPE>("GCREQTYPE", file_descriptor_proto())
        })
    }
}

impl ::std::marker::Copy for GCREQTYPE {
}

impl ::std::default::Default for GCREQTYPE {
    fn default() -> Self {
        GCREQTYPE::GC_START
    }
}

impl ::protobuf::reflect::ProtobufValue for GCREQTYPE {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Enum(::protobuf::ProtobufEnum::descriptor(self))
    }
}

#[derive(Clone,PartialEq,Eq,Debug,Hash)]
pub enum REFREQTYPE {
    REF_GET_COUNT = 0,
    REF_DELETE = 1,
}

impl ::protobuf::ProtobufEnum for REFREQTYPE {
    fn value(&self) -> i32 {
        *self as i32
    }

    fn from_i32(value: i32) -> ::std::option::Option<REFREQTYPE> {
        match value {
            0 => ::std::option::Option::Some(REFREQTYPE::REF_GET_COUNT),
            1 => ::std::option::Option::Some(REFREQTYPE::REF_DELETE),
            _ => ::std::option::Option::None
        }
    }

    fn values() -> &'static [Self] {
        static values: &'static [REFREQTYPE] = &[
            REFREQTYPE::REF_GET_COUNT,
            REFREQTYPE::REF_DELETE,
        ];
        values
    }

    fn enum_descriptor_static() -> &'static ::protobuf::reflect::EnumDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::EnumDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            ::protobuf::reflect::EnumDescriptor::new_pb_name::<REFREQTYPE>("REFREQTYPE", file_descriptor_proto())
        })
    }
}

impl ::std::marker::Copy for REFREQTYPE {
}

impl ::std::default::Default for REFREQTYPE {
    fn default() -> Self {
        REFREQTYPE::REF_GET_COUNT
    }
}

impl ::protobuf::reflect::ProtobufValue for REFREQTYPE {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Enum(::protobuf::ProtobufEnum::descriptor(self))
    }
}

#[derive(Clone,PartialEq,Eq,Debug,Hash)]
pub enum REFREQOPTS {
    REF_FORCE = 0,
}

impl ::protobuf::ProtobufEnum for REFREQOPTS {
    fn value(&self) -> i32 {
        *self as i32
    }

    fn from_i32(value: i32) -> ::std::option::Option<REFREQOPTS> {
        match value {
            0 => ::std::option::Option::Some(REFREQOPTS::REF_FORCE),
            _ => ::std::option::Option::None
        }
    }

    fn values() -> &'static [Self] {
        static values: &'static [REFREQOPTS] = &[
            REFREQOPTS::REF_FORCE,
        ];
        values
    }

    fn enum_descriptor_static() -> &'static ::protobuf::reflect::EnumDescriptor {
        static descriptor: ::protobuf::rt::LazyV2<::protobuf::reflect::EnumDescriptor> = ::protobuf::rt::LazyV2::INIT;
        descriptor.get(|| {
            ::protobuf::reflect::EnumDescriptor::new_pb_name::<REFREQOPTS>("REFREQOPTS", file_descriptor_proto())
        })
    }
}

impl ::std::marker::Copy for REFREQOPTS {
}

impl ::std::default::Default for REFREQOPTS {
    fn default() -> Self {
        REFREQOPTS::REF_FORCE
    }
}

impl ::protobuf::reflect::ProtobufValue for REFREQOPTS {
    fn as_ref(&self) -> ::protobuf::reflect::ReflectValueRef {
        ::protobuf::reflect::ReflectValueRef::Enum(::protobuf::ProtobufEnum::descriptor(self))
    }
}

static file_descriptor_proto_data: &'static [u8] = b"\
    \n\x0badmin.proto\x12\x02pb\"4\n\x0fManageGCRequest\x12!\n\x04type\x18\
    \x01\x20\x01(\x0e2\r.pb.GCREQTYPER\x04type\"*\n\x10ManageGCResponse\x12\
    \x16\n\x06status\x18\x01\x20\x01(\tR\x06status\";\n\x0fRefCountRequest\
    \x12\x12\n\x04cids\x18\x01\x20\x03(\tR\x04cids\x12\x14\n\x05limit\x18\
    \x02\x20\x01(\x03R\x05limit\"\x7f\n\x10RefCountResponse\x122\n\x04cids\
    \x18\x01\x20\x03(\x0b2\x1e.pb.RefCountResponse.CidsEntryR\x04cids\x1a7\n\
    \tCidsEntry\x12\x10\n\x03key\x18\x01\x20\x01(\tR\x03key\x12\x14\n\x05val\
    ue\x18\x02\x20\x01(\x03R\x05value:\x028\x01*5\n\tGCREQTYPE\x12\x0c\n\x08\
    GC_START\x10\0\x12\x0b\n\x07GC_STOP\x10\x01\x12\r\n\tGC_STATUS\x10\x02*/\
    \n\nREFREQTYPE\x12\x11\n\rREF_GET_COUNT\x10\0\x12\x0e\n\nREF_DELETE\x10\
    \x01*\x1b\n\nREFREQOPTS\x12\r\n\tREF_FORCE\x10\02|\n\x08AdminAPI\x127\n\
    \x08ManageGC\x12\x13.pb.ManageGCRequest\x1a\x14.pb.ManageGCResponse\"\0\
    \x127\n\x08RefCount\x12\x13.pb.RefCountRequest\x1a\x14.pb.RefCountRespon\
    se\"\0J\x91\x11\n\x06\x12\x04\0\0;\x01\n\x08\n\x01\x0c\x12\x03\0\0\x12\n\
    \x08\n\x01\x02\x12\x03\x01\x08\n\nc\n\x02\x06\0\x12\x04\x04\0\t\x01\x1aW\
    \x20AdminAPI\x20facilitates\x20administrative\x20management\x20of\x20Tem\
    poralX\x20via\x20a\x20localhost\x20gRPC\x20API\r\n\n\n\n\x03\x06\0\x01\
    \x12\x03\x04\x08\x10\nQ\n\x04\x06\0\x02\0\x12\x03\x06\x04@\x1aD\x20Manag\
    eGC\x20is\x20used\x20to\x20manage\x20TemporalX's\x20garbage\x20collectio\
    n\x20process\r\n\n\x0c\n\x05\x06\0\x02\0\x01\x12\x03\x06\x08\x10\n\x0c\n\
    \x05\x06\0\x02\0\x02\x12\x03\x06\x11\x20\n\x0c\n\x05\x06\0\x02\0\x03\x12\
    \x03\x06+;\nb\n\x04\x06\0\x02\x01\x12\x03\x08\x04@\x1aU\x20RefCount\x20i\
    s\x20used\x20to\x20analyze\x20the\x20counter\x20store\x20and\x20pull\x20\
    reference\x20count\x20information\r\n\n\x0c\n\x05\x06\0\x02\x01\x01\x12\
    \x03\x08\x08\x10\n\x0c\n\x05\x06\0\x02\x01\x02\x12\x03\x08\x11\x20\n\x0c\
    \n\x05\x06\0\x02\x01\x03\x12\x03\x08+;\nQ\n\x02\x05\0\x12\x04\x0c\0\x13\
    \x01\x1aE\x20GCREQTYPE\x20specifies\x20the\x20type\x20of\x20GC\x20manage\
    ment\x20call\x20being\x20performed\r\n\n\n\n\x03\x05\0\x01\x12\x03\x0c\
    \x05\x0e\n,\n\x04\x05\0\x02\0\x12\x03\x0e\x04\x11\x1a\x1f\x20GC_START\
    \x20is\x20used\x20to\x20start\x20gc\r\n\n\x0c\n\x05\x05\0\x02\0\x01\x12\
    \x03\x0e\x04\x0c\n\x0c\n\x05\x05\0\x02\0\x02\x12\x03\x0e\x0f\x10\n)\n\
    \x04\x05\0\x02\x01\x12\x03\x10\x04\x10\x1a\x1c\x20C_STOP\x20is\x20used\
    \x20to\x20stop\x20GC\r\n\n\x0c\n\x05\x05\0\x02\x01\x01\x12\x03\x10\x04\
    \x0b\n\x0c\n\x05\x05\0\x02\x01\x02\x12\x03\x10\x0e\x0f\n7\n\x04\x05\0\
    \x02\x02\x12\x03\x12\x04\x12\x1a*\x20GC_STATUS\x20is\x20used\x20to\x20re\
    trieve\x20gc\x20status\r\n\n\x0c\n\x05\x05\0\x02\x02\x01\x12\x03\x12\x04\
    \r\n\x0c\n\x05\x05\0\x02\x02\x02\x12\x03\x12\x10\x11\nX\n\x02\x04\0\x12\
    \x04\x16\0\x19\x01\x1aL\x20ManageGCRequest\x20is\x20a\x20message\x20used\
    \x20to\x20control\x20TemporalX\x20garbage\x20collection\r\n\n\n\n\x03\
    \x04\0\x01\x12\x03\x16\x08\x17\n>\n\x04\x04\0\x02\0\x12\x03\x18\x04\x17\
    \x1a1\x20type\x20is\x20the\x20type\x20of\x20gc\x20request\x20being\x20pe\
    rformed\r\n\n\r\n\x05\x04\0\x02\0\x04\x12\x04\x18\x04\x16\x19\n\x0c\n\
    \x05\x04\0\x02\0\x06\x12\x03\x18\x04\r\n\x0c\n\x05\x04\0\x02\0\x01\x12\
    \x03\x18\x0e\x12\n\x0c\n\x05\x04\0\x02\0\x03\x12\x03\x18\x15\x16\nV\n\
    \x02\x04\x01\x12\x04\x1c\0\x1f\x01\x1aJ\x20ManageGCResponse\x20is\x20a\
    \x20message\x20used\x20as\x20a\x20response\x20to\x20gc\x20control\x20req\
    uests\r\n\n\n\n\x03\x04\x01\x01\x12\x03\x1c\x08\x18\n0\n\x04\x04\x01\x02\
    \0\x12\x03\x1e\x04\x16\x1a#\x20status\x20contains\x20a\x20status\x20mess\
    age\r\n\n\r\n\x05\x04\x01\x02\0\x04\x12\x04\x1e\x04\x1c\x1a\n\x0c\n\x05\
    \x04\x01\x02\0\x05\x12\x03\x1e\x04\n\n\x0c\n\x05\x04\x01\x02\0\x01\x12\
    \x03\x1e\x0b\x11\n\x0c\n\x05\x04\x01\x02\0\x03\x12\x03\x1e\x14\x15\nV\n\
    \x02\x05\x01\x12\x04\"\0&\x01\x1aJ\x20REFREQTYPE\x20is\x20used\x20to\x20\
    indicate\x20the\x20type\x20of\x20ref\x20count\x20request\x20being\x20mad\
    e\r\n\n\n\n\x03\x05\x01\x01\x12\x03\"\x05\x0f\nT\n\x04\x05\x01\x02\0\x12\
    \x03$\x04\x16\x1aG\x20REF_GET_COUNT\x20is\x20used\x20to\x20get\x20the\
    \x20reference\x20count\x20of\x20a\x20particular\x20cid\r\n\n\x0c\n\x05\
    \x05\x01\x02\0\x01\x12\x03$\x04\x11\n\x0c\n\x05\x05\x01\x02\0\x02\x12\
    \x03$\x14\x15\n\x0b\n\x04\x05\x01\x02\x01\x12\x03%\x04\x13\n\x0c\n\x05\
    \x05\x01\x02\x01\x01\x12\x03%\x04\x0e\n\x0c\n\x05\x05\x01\x02\x01\x02\
    \x12\x03%\x11\x12\nH\n\x02\x05\x02\x12\x04)\0+\x01\x1a<\x20REFREQOPTS\
    \x20are\x20options\x20for\x20fine-tuning\x20ref\x20count\x20requests\r\n\
    \n\n\n\x03\x05\x02\x01\x12\x03)\x05\x0f\n\x0b\n\x04\x05\x02\x02\0\x12\
    \x03*\x04\x12\n\x0c\n\x05\x05\x02\x02\0\x01\x12\x03*\x04\r\n\x0c\n\x05\
    \x05\x02\x02\0\x02\x12\x03*\x10\x11\no\n\x02\x04\x02\x12\x04/\04\x01\x1a\
    c\x20RefCountRequest\x20is\x20used\x20to\x20analyze\x20the\x20reference\
    \r\n\x20counter\x20store,\x20and\x20retrieve\x20usage\x20information\r\n\
    \n\n\n\x03\x04\x02\x01\x12\x03/\x08\x17\n@\n\x04\x04\x02\x02\0\x12\x031\
    \x04\x1d\x1a3\x20cids\x20are\x20optional\x20cids\x20to\x20filter\x20our\
    \x20requests\x20by\r\n\n\x0c\n\x05\x04\x02\x02\0\x04\x12\x031\x04\x0c\n\
    \x0c\n\x05\x04\x02\x02\0\x05\x12\x031\r\x13\n\x0c\n\x05\x04\x02\x02\0\
    \x01\x12\x031\x14\x18\n\x0c\n\x05\x04\x02\x02\0\x03\x12\x031\x1b\x1c\nf\
    \n\x04\x04\x02\x02\x01\x12\x033\x04\x14\x1aY\x20can\x20be\x20used\x20to\
    \x20apply\x20limits\x20to\x20the\x20number\x20of\x20store\x20requests\
    \x20made,\x20search\x20limits,\x20etc..\r\n\n\r\n\x05\x04\x02\x02\x01\
    \x04\x12\x043\x041\x1d\n\x0c\n\x05\x04\x02\x02\x01\x05\x12\x033\x04\t\n\
    \x0c\n\x05\x04\x02\x02\x01\x01\x12\x033\n\x0f\n\x0c\n\x05\x04\x02\x02\
    \x01\x03\x12\x033\x12\x13\nd\n\x02\x04\x03\x12\x048\0;\x01\x1aX\x20RefCo\
    untResponse\x20is\x20used\x20to\x20return\x20the\x20information\r\n\x20g\
    athered\x20by\x20a\x20RefCount\x20rpc\x20call.\r\n\n\n\n\x03\x04\x03\x01\
    \x12\x038\x08\x18\nC\n\x04\x04\x03\x02\0\x12\x03:\x04\x20\x1a6\x20cids\
    \x20is\x20a\x20mapping\x20of\x20the\x20cid\x20to\x20its\x20reference\x20\
    count\r\n\n\r\n\x05\x04\x03\x02\0\x04\x12\x04:\x048\x1a\n\x0c\n\x05\x04\
    \x03\x02\0\x06\x12\x03:\x04\x16\n\x0c\n\x05\x04\x03\x02\0\x01\x12\x03:\
    \x17\x1b\n\x0c\n\x05\x04\x03\x02\0\x03\x12\x03:\x1e\x1fb\x06proto3\
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
