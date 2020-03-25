// This file is generated by rust-protobuf 2.10.2. Do not edit
// @generated

// https://github.com/rust-lang/rust-clippy/issues/702
#![allow(unknown_lints)]
#![allow(clippy::all)]

#![cfg_attr(rustfmt, rustfmt_skip)]

#![allow(box_pointers)]
#![allow(dead_code)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(non_upper_case_globals)]
#![allow(trivial_casts)]
#![allow(unsafe_code)]
#![allow(unused_imports)]
#![allow(unused_results)]
//! Generated file from `namesys.proto`

use protobuf::Message as Message_imported_for_functions;
use protobuf::ProtobufEnum as ProtobufEnum_imported_for_functions;

/// Generated files are compatible only with the same version
/// of protobuf runtime.
// const _PROTOBUF_VERSION_CHECK: () = ::protobuf::VERSION_2_10_2;

#[derive(PartialEq,Clone,Default)]
pub struct NameSysResolveRequest {
    // message fields
    pub name: ::std::string::String,
    pub depth: u32,
    pub dhtRecordCount: u32,
    pub dhtTimeout: i32,
    // special fields
    pub unknown_fields: ::protobuf::UnknownFields,
    pub cached_size: ::protobuf::CachedSize,
}

impl<'a> ::std::default::Default for &'a NameSysResolveRequest {
    fn default() -> &'a NameSysResolveRequest {
        <NameSysResolveRequest as ::protobuf::Message>::default_instance()
    }
}

impl NameSysResolveRequest {
    pub fn new() -> NameSysResolveRequest {
        ::std::default::Default::default()
    }

    // string name = 1;


    pub fn get_name(&self) -> &str {
        &self.name
    }
    pub fn clear_name(&mut self) {
        self.name.clear();
    }

    // Param is passed by value, moved
    pub fn set_name(&mut self, v: ::std::string::String) {
        self.name = v;
    }

    // Mutable pointer to the field.
    // If field is not initialized, it is initialized with default value first.
    pub fn mut_name(&mut self) -> &mut ::std::string::String {
        &mut self.name
    }

    // Take field
    pub fn take_name(&mut self) -> ::std::string::String {
        ::std::mem::replace(&mut self.name, ::std::string::String::new())
    }

    // uint32 depth = 2;


    pub fn get_depth(&self) -> u32 {
        self.depth
    }
    pub fn clear_depth(&mut self) {
        self.depth = 0;
    }

    // Param is passed by value, moved
    pub fn set_depth(&mut self, v: u32) {
        self.depth = v;
    }

    // uint32 dhtRecordCount = 3;


    pub fn get_dhtRecordCount(&self) -> u32 {
        self.dhtRecordCount
    }
    pub fn clear_dhtRecordCount(&mut self) {
        self.dhtRecordCount = 0;
    }

    // Param is passed by value, moved
    pub fn set_dhtRecordCount(&mut self, v: u32) {
        self.dhtRecordCount = v;
    }

    // int32 dhtTimeout = 4;


    pub fn get_dhtTimeout(&self) -> i32 {
        self.dhtTimeout
    }
    pub fn clear_dhtTimeout(&mut self) {
        self.dhtTimeout = 0;
    }

    // Param is passed by value, moved
    pub fn set_dhtTimeout(&mut self, v: i32) {
        self.dhtTimeout = v;
    }
}

impl ::protobuf::Message for NameSysResolveRequest {
    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        while !is.eof()? {
            let (field_number, wire_type) = is.read_tag_unpack()?;
            match field_number {
                1 => {
                    ::protobuf::rt::read_singular_proto3_string_into(wire_type, is, &mut self.name)?;
                },
                2 => {
                    if wire_type != ::protobuf::wire_format::WireTypeVarint {
                        return ::std::result::Result::Err(::protobuf::rt::unexpected_wire_type(wire_type));
                    }
                    let tmp = is.read_uint32()?;
                    self.depth = tmp;
                },
                3 => {
                    if wire_type != ::protobuf::wire_format::WireTypeVarint {
                        return ::std::result::Result::Err(::protobuf::rt::unexpected_wire_type(wire_type));
                    }
                    let tmp = is.read_uint32()?;
                    self.dhtRecordCount = tmp;
                },
                4 => {
                    if wire_type != ::protobuf::wire_format::WireTypeVarint {
                        return ::std::result::Result::Err(::protobuf::rt::unexpected_wire_type(wire_type));
                    }
                    let tmp = is.read_int32()?;
                    self.dhtTimeout = tmp;
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
        if !self.name.is_empty() {
            my_size += ::protobuf::rt::string_size(1, &self.name);
        }
        if self.depth != 0 {
            my_size += ::protobuf::rt::value_size(2, self.depth, ::protobuf::wire_format::WireTypeVarint);
        }
        if self.dhtRecordCount != 0 {
            my_size += ::protobuf::rt::value_size(3, self.dhtRecordCount, ::protobuf::wire_format::WireTypeVarint);
        }
        if self.dhtTimeout != 0 {
            my_size += ::protobuf::rt::value_size(4, self.dhtTimeout, ::protobuf::wire_format::WireTypeVarint);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.get_unknown_fields());
        self.cached_size.set(my_size);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        if !self.name.is_empty() {
            os.write_string(1, &self.name)?;
        }
        if self.depth != 0 {
            os.write_uint32(2, self.depth)?;
        }
        if self.dhtRecordCount != 0 {
            os.write_uint32(3, self.dhtRecordCount)?;
        }
        if self.dhtTimeout != 0 {
            os.write_int32(4, self.dhtTimeout)?;
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
    fn into_any(self: Box<Self>) -> ::std::boxed::Box<dyn (::std::any::Any)> {
        self
    }

    fn descriptor(&self) -> &'static ::protobuf::reflect::MessageDescriptor {
        Self::descriptor_static()
    }

    fn new() -> NameSysResolveRequest {
        NameSysResolveRequest::new()
    }

    fn descriptor_static() -> &'static ::protobuf::reflect::MessageDescriptor {
        static mut descriptor: ::protobuf::lazy::Lazy<::protobuf::reflect::MessageDescriptor> = ::protobuf::lazy::Lazy {
            lock: ::protobuf::lazy::ONCE_INIT,
            ptr: 0 as *const ::protobuf::reflect::MessageDescriptor,
        };
        unsafe {
            descriptor.get(|| {
                let mut fields = ::std::vec::Vec::new();
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeString>(
                    "name",
                    |m: &NameSysResolveRequest| { &m.name },
                    |m: &mut NameSysResolveRequest| { &mut m.name },
                ));
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeUint32>(
                    "depth",
                    |m: &NameSysResolveRequest| { &m.depth },
                    |m: &mut NameSysResolveRequest| { &mut m.depth },
                ));
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeUint32>(
                    "dhtRecordCount",
                    |m: &NameSysResolveRequest| { &m.dhtRecordCount },
                    |m: &mut NameSysResolveRequest| { &mut m.dhtRecordCount },
                ));
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeInt32>(
                    "dhtTimeout",
                    |m: &NameSysResolveRequest| { &m.dhtTimeout },
                    |m: &mut NameSysResolveRequest| { &mut m.dhtTimeout },
                ));
                ::protobuf::reflect::MessageDescriptor::new::<NameSysResolveRequest>(
                    "NameSysResolveRequest",
                    fields,
                    file_descriptor_proto()
                )
            })
        }
    }

    fn default_instance() -> &'static NameSysResolveRequest {
        static mut instance: ::protobuf::lazy::Lazy<NameSysResolveRequest> = ::protobuf::lazy::Lazy {
            lock: ::protobuf::lazy::ONCE_INIT,
            ptr: 0 as *const NameSysResolveRequest,
        };
        unsafe {
            instance.get(NameSysResolveRequest::new)
        }
    }
}

impl ::protobuf::Clear for NameSysResolveRequest {
    fn clear(&mut self) {
        self.name.clear();
        self.depth = 0;
        self.dhtRecordCount = 0;
        self.dhtTimeout = 0;
        self.unknown_fields.clear();
    }
}

impl ::std::fmt::Debug for NameSysResolveRequest {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for NameSysResolveRequest {
    fn as_ref(&self) -> ::protobuf::reflect::ProtobufValueRef {
        ::protobuf::reflect::ProtobufValueRef::Message(self)
    }
}

#[derive(PartialEq,Clone,Default)]
pub struct NameSysResolveResult {
    // message fields
    pub path: ::std::string::String,
    pub error: ::std::string::String,
    // special fields
    pub unknown_fields: ::protobuf::UnknownFields,
    pub cached_size: ::protobuf::CachedSize,
}

impl<'a> ::std::default::Default for &'a NameSysResolveResult {
    fn default() -> &'a NameSysResolveResult {
        <NameSysResolveResult as ::protobuf::Message>::default_instance()
    }
}

impl NameSysResolveResult {
    pub fn new() -> NameSysResolveResult {
        ::std::default::Default::default()
    }

    // string path = 1;


    pub fn get_path(&self) -> &str {
        &self.path
    }
    pub fn clear_path(&mut self) {
        self.path.clear();
    }

    // Param is passed by value, moved
    pub fn set_path(&mut self, v: ::std::string::String) {
        self.path = v;
    }

    // Mutable pointer to the field.
    // If field is not initialized, it is initialized with default value first.
    pub fn mut_path(&mut self) -> &mut ::std::string::String {
        &mut self.path
    }

    // Take field
    pub fn take_path(&mut self) -> ::std::string::String {
        ::std::mem::replace(&mut self.path, ::std::string::String::new())
    }

    // string error = 2;


    pub fn get_error(&self) -> &str {
        &self.error
    }
    pub fn clear_error(&mut self) {
        self.error.clear();
    }

    // Param is passed by value, moved
    pub fn set_error(&mut self, v: ::std::string::String) {
        self.error = v;
    }

    // Mutable pointer to the field.
    // If field is not initialized, it is initialized with default value first.
    pub fn mut_error(&mut self) -> &mut ::std::string::String {
        &mut self.error
    }

    // Take field
    pub fn take_error(&mut self) -> ::std::string::String {
        ::std::mem::replace(&mut self.error, ::std::string::String::new())
    }
}

impl ::protobuf::Message for NameSysResolveResult {
    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        while !is.eof()? {
            let (field_number, wire_type) = is.read_tag_unpack()?;
            match field_number {
                1 => {
                    ::protobuf::rt::read_singular_proto3_string_into(wire_type, is, &mut self.path)?;
                },
                2 => {
                    ::protobuf::rt::read_singular_proto3_string_into(wire_type, is, &mut self.error)?;
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
        if !self.path.is_empty() {
            my_size += ::protobuf::rt::string_size(1, &self.path);
        }
        if !self.error.is_empty() {
            my_size += ::protobuf::rt::string_size(2, &self.error);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.get_unknown_fields());
        self.cached_size.set(my_size);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        if !self.path.is_empty() {
            os.write_string(1, &self.path)?;
        }
        if !self.error.is_empty() {
            os.write_string(2, &self.error)?;
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
    fn into_any(self: Box<Self>) -> ::std::boxed::Box<dyn (::std::any::Any)> {
        self
    }

    fn descriptor(&self) -> &'static ::protobuf::reflect::MessageDescriptor {
        Self::descriptor_static()
    }

    fn new() -> NameSysResolveResult {
        NameSysResolveResult::new()
    }

    fn descriptor_static() -> &'static ::protobuf::reflect::MessageDescriptor {
        static mut descriptor: ::protobuf::lazy::Lazy<::protobuf::reflect::MessageDescriptor> = ::protobuf::lazy::Lazy {
            lock: ::protobuf::lazy::ONCE_INIT,
            ptr: 0 as *const ::protobuf::reflect::MessageDescriptor,
        };
        unsafe {
            descriptor.get(|| {
                let mut fields = ::std::vec::Vec::new();
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeString>(
                    "path",
                    |m: &NameSysResolveResult| { &m.path },
                    |m: &mut NameSysResolveResult| { &mut m.path },
                ));
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeString>(
                    "error",
                    |m: &NameSysResolveResult| { &m.error },
                    |m: &mut NameSysResolveResult| { &mut m.error },
                ));
                ::protobuf::reflect::MessageDescriptor::new::<NameSysResolveResult>(
                    "NameSysResolveResult",
                    fields,
                    file_descriptor_proto()
                )
            })
        }
    }

    fn default_instance() -> &'static NameSysResolveResult {
        static mut instance: ::protobuf::lazy::Lazy<NameSysResolveResult> = ::protobuf::lazy::Lazy {
            lock: ::protobuf::lazy::ONCE_INIT,
            ptr: 0 as *const NameSysResolveResult,
        };
        unsafe {
            instance.get(NameSysResolveResult::new)
        }
    }
}

impl ::protobuf::Clear for NameSysResolveResult {
    fn clear(&mut self) {
        self.path.clear();
        self.error.clear();
        self.unknown_fields.clear();
    }
}

impl ::std::fmt::Debug for NameSysResolveResult {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for NameSysResolveResult {
    fn as_ref(&self) -> ::protobuf::reflect::ProtobufValueRef {
        ::protobuf::reflect::ProtobufValueRef::Message(self)
    }
}

#[derive(PartialEq,Clone,Default)]
pub struct NameSysPublishRequest {
    // message fields
    pub privateKey: ::std::vec::Vec<u8>,
    pub value: ::std::string::String,
    pub eol: i32,
    pub ttl: i32,
    // special fields
    pub unknown_fields: ::protobuf::UnknownFields,
    pub cached_size: ::protobuf::CachedSize,
}

impl<'a> ::std::default::Default for &'a NameSysPublishRequest {
    fn default() -> &'a NameSysPublishRequest {
        <NameSysPublishRequest as ::protobuf::Message>::default_instance()
    }
}

impl NameSysPublishRequest {
    pub fn new() -> NameSysPublishRequest {
        ::std::default::Default::default()
    }

    // bytes privateKey = 1;


    pub fn get_privateKey(&self) -> &[u8] {
        &self.privateKey
    }
    pub fn clear_privateKey(&mut self) {
        self.privateKey.clear();
    }

    // Param is passed by value, moved
    pub fn set_privateKey(&mut self, v: ::std::vec::Vec<u8>) {
        self.privateKey = v;
    }

    // Mutable pointer to the field.
    // If field is not initialized, it is initialized with default value first.
    pub fn mut_privateKey(&mut self) -> &mut ::std::vec::Vec<u8> {
        &mut self.privateKey
    }

    // Take field
    pub fn take_privateKey(&mut self) -> ::std::vec::Vec<u8> {
        ::std::mem::replace(&mut self.privateKey, ::std::vec::Vec::new())
    }

    // string value = 2;


    pub fn get_value(&self) -> &str {
        &self.value
    }
    pub fn clear_value(&mut self) {
        self.value.clear();
    }

    // Param is passed by value, moved
    pub fn set_value(&mut self, v: ::std::string::String) {
        self.value = v;
    }

    // Mutable pointer to the field.
    // If field is not initialized, it is initialized with default value first.
    pub fn mut_value(&mut self) -> &mut ::std::string::String {
        &mut self.value
    }

    // Take field
    pub fn take_value(&mut self) -> ::std::string::String {
        ::std::mem::replace(&mut self.value, ::std::string::String::new())
    }

    // int32 eol = 3;


    pub fn get_eol(&self) -> i32 {
        self.eol
    }
    pub fn clear_eol(&mut self) {
        self.eol = 0;
    }

    // Param is passed by value, moved
    pub fn set_eol(&mut self, v: i32) {
        self.eol = v;
    }

    // int32 ttl = 4;


    pub fn get_ttl(&self) -> i32 {
        self.ttl
    }
    pub fn clear_ttl(&mut self) {
        self.ttl = 0;
    }

    // Param is passed by value, moved
    pub fn set_ttl(&mut self, v: i32) {
        self.ttl = v;
    }
}

impl ::protobuf::Message for NameSysPublishRequest {
    fn is_initialized(&self) -> bool {
        true
    }

    fn merge_from(&mut self, is: &mut ::protobuf::CodedInputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        while !is.eof()? {
            let (field_number, wire_type) = is.read_tag_unpack()?;
            match field_number {
                1 => {
                    ::protobuf::rt::read_singular_proto3_bytes_into(wire_type, is, &mut self.privateKey)?;
                },
                2 => {
                    ::protobuf::rt::read_singular_proto3_string_into(wire_type, is, &mut self.value)?;
                },
                3 => {
                    if wire_type != ::protobuf::wire_format::WireTypeVarint {
                        return ::std::result::Result::Err(::protobuf::rt::unexpected_wire_type(wire_type));
                    }
                    let tmp = is.read_int32()?;
                    self.eol = tmp;
                },
                4 => {
                    if wire_type != ::protobuf::wire_format::WireTypeVarint {
                        return ::std::result::Result::Err(::protobuf::rt::unexpected_wire_type(wire_type));
                    }
                    let tmp = is.read_int32()?;
                    self.ttl = tmp;
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
        if !self.privateKey.is_empty() {
            my_size += ::protobuf::rt::bytes_size(1, &self.privateKey);
        }
        if !self.value.is_empty() {
            my_size += ::protobuf::rt::string_size(2, &self.value);
        }
        if self.eol != 0 {
            my_size += ::protobuf::rt::value_size(3, self.eol, ::protobuf::wire_format::WireTypeVarint);
        }
        if self.ttl != 0 {
            my_size += ::protobuf::rt::value_size(4, self.ttl, ::protobuf::wire_format::WireTypeVarint);
        }
        my_size += ::protobuf::rt::unknown_fields_size(self.get_unknown_fields());
        self.cached_size.set(my_size);
        my_size
    }

    fn write_to_with_cached_sizes(&self, os: &mut ::protobuf::CodedOutputStream<'_>) -> ::protobuf::ProtobufResult<()> {
        if !self.privateKey.is_empty() {
            os.write_bytes(1, &self.privateKey)?;
        }
        if !self.value.is_empty() {
            os.write_string(2, &self.value)?;
        }
        if self.eol != 0 {
            os.write_int32(3, self.eol)?;
        }
        if self.ttl != 0 {
            os.write_int32(4, self.ttl)?;
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
    fn into_any(self: Box<Self>) -> ::std::boxed::Box<dyn (::std::any::Any)> {
        self
    }

    fn descriptor(&self) -> &'static ::protobuf::reflect::MessageDescriptor {
        Self::descriptor_static()
    }

    fn new() -> NameSysPublishRequest {
        NameSysPublishRequest::new()
    }

    fn descriptor_static() -> &'static ::protobuf::reflect::MessageDescriptor {
        static mut descriptor: ::protobuf::lazy::Lazy<::protobuf::reflect::MessageDescriptor> = ::protobuf::lazy::Lazy {
            lock: ::protobuf::lazy::ONCE_INIT,
            ptr: 0 as *const ::protobuf::reflect::MessageDescriptor,
        };
        unsafe {
            descriptor.get(|| {
                let mut fields = ::std::vec::Vec::new();
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeBytes>(
                    "privateKey",
                    |m: &NameSysPublishRequest| { &m.privateKey },
                    |m: &mut NameSysPublishRequest| { &mut m.privateKey },
                ));
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeString>(
                    "value",
                    |m: &NameSysPublishRequest| { &m.value },
                    |m: &mut NameSysPublishRequest| { &mut m.value },
                ));
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeInt32>(
                    "eol",
                    |m: &NameSysPublishRequest| { &m.eol },
                    |m: &mut NameSysPublishRequest| { &mut m.eol },
                ));
                fields.push(::protobuf::reflect::accessor::make_simple_field_accessor::<_, ::protobuf::types::ProtobufTypeInt32>(
                    "ttl",
                    |m: &NameSysPublishRequest| { &m.ttl },
                    |m: &mut NameSysPublishRequest| { &mut m.ttl },
                ));
                ::protobuf::reflect::MessageDescriptor::new::<NameSysPublishRequest>(
                    "NameSysPublishRequest",
                    fields,
                    file_descriptor_proto()
                )
            })
        }
    }

    fn default_instance() -> &'static NameSysPublishRequest {
        static mut instance: ::protobuf::lazy::Lazy<NameSysPublishRequest> = ::protobuf::lazy::Lazy {
            lock: ::protobuf::lazy::ONCE_INIT,
            ptr: 0 as *const NameSysPublishRequest,
        };
        unsafe {
            instance.get(NameSysPublishRequest::new)
        }
    }
}

impl ::protobuf::Clear for NameSysPublishRequest {
    fn clear(&mut self) {
        self.privateKey.clear();
        self.value.clear();
        self.eol = 0;
        self.ttl = 0;
        self.unknown_fields.clear();
    }
}

impl ::std::fmt::Debug for NameSysPublishRequest {
    fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
        ::protobuf::text_format::fmt(self, f)
    }
}

impl ::protobuf::reflect::ProtobufValue for NameSysPublishRequest {
    fn as_ref(&self) -> ::protobuf::reflect::ProtobufValueRef {
        ::protobuf::reflect::ProtobufValueRef::Message(self)
    }
}

static file_descriptor_proto_data: &'static [u8] = b"\
    \n\rnamesys.proto\x12\x02pb\x1a\nutil.proto\"\x89\x01\n\x15NameSysResolv\
    eRequest\x12\x12\n\x04name\x18\x01\x20\x01(\tR\x04name\x12\x14\n\x05dept\
    h\x18\x02\x20\x01(\rR\x05depth\x12&\n\x0edhtRecordCount\x18\x03\x20\x01(\
    \rR\x0edhtRecordCount\x12\x1e\n\ndhtTimeout\x18\x04\x20\x01(\x05R\ndhtTi\
    meout\"@\n\x14NameSysResolveResult\x12\x12\n\x04path\x18\x01\x20\x01(\tR\
    \x04path\x12\x14\n\x05error\x18\x02\x20\x01(\tR\x05error\"q\n\x15NameSys\
    PublishRequest\x12\x1e\n\nprivateKey\x18\x01\x20\x01(\x0cR\nprivateKey\
    \x12\x14\n\x05value\x18\x02\x20\x01(\tR\x05value\x12\x10\n\x03eol\x18\
    \x03\x20\x01(\x05R\x03eol\x12\x10\n\x03ttl\x18\x04\x20\x01(\x05R\x03ttl2\
    \xdf\x01\n\nNameSysAPI\x12G\n\x0eNameSysResolve\x12\x19.pb.NameSysResolv\
    eRequest\x1a\x18.pb.NameSysResolveResult\"\0\x12N\n\x13NameSysResolveAsy\
    nc\x12\x19.pb.NameSysResolveRequest\x1a\x18.pb.NameSysResolveResult\"\00\
    \x01\x128\n\x0eNameSysPublish\x12\x19.pb.NameSysPublishRequest\x1a\t.pb.\
    Empty\"\0J\xf6\x0f\n\x06\x12\x04\0\02\x01\n\x08\n\x01\x0c\x12\x03\0\0\
    \x12\n\x08\n\x01\x02\x12\x03\x01\x08\n\n\t\n\x02\x03\0\x12\x03\x02\x07\
    \x13\n?\n\x02\x06\0\x12\x04\x05\0\r\x01\x1a3\x20NameSysAPI\x20provides\
    \x20a\x20generic\x20name\x20resolution\x20API\n\n\n\n\x03\x06\0\x01\x12\
    \x03\x05\x08\x12\n\\\n\x04\x06\0\x02\0\x12\x03\x07\x04P\x1aO\x20NameSysR\
    esolve\x20is\x20used\x20to\x20resolve\x20a\x20name,\x20waiting\x20for\
    \x20the\x20request\x20to\x20complete\n\n\x0c\n\x05\x06\0\x02\0\x01\x12\
    \x03\x07\x08\x16\n\x0c\n\x05\x06\0\x02\0\x02\x12\x03\x07\x17,\n\x0c\n\
    \x05\x06\0\x02\0\x03\x12\x03\x077K\n\xa3\x01\n\x04\x06\0\x02\x01\x12\x03\
    \n\x04\\\x1a\x95\x01\x20NameSysResolveAsync\x20is\x20like\x20Resolve,\
    \x20except\x20instead\x20of\x20waiting\x20for\x20the\x20request\n\x20to\
    \x20complete,\x20we\x20send\x20back\x20a\x20stream\x20which\x20we\x20wil\
    l\x20send\x20the\x20result\x20on\n\n\x0c\n\x05\x06\0\x02\x01\x01\x12\x03\
    \n\x08\x1b\n\x0c\n\x05\x06\0\x02\x01\x02\x12\x03\n\x1c1\n\x0c\n\x05\x06\
    \0\x02\x01\x06\x12\x03\n<B\n\x0c\n\x05\x06\0\x02\x01\x03\x12\x03\nCW\nU\
    \n\x04\x06\0\x02\x02\x12\x03\x0c\x04A\x1aH\x20NameSysPublish\x20is\x20us\
    ed\x20to\x20publish\x20an\x20IPNS\x20record,\x20with/with-out\x20an\x20E\
    OL\n\n\x0c\n\x05\x06\0\x02\x02\x01\x12\x03\x0c\x08\x16\n\x0c\n\x05\x06\0\
    \x02\x02\x02\x12\x03\x0c\x17,\n\x0c\n\x05\x06\0\x02\x02\x03\x12\x03\x0c7\
    <\nC\n\x02\x04\0\x12\x04\x10\0\x1b\x01\x1a7\x20NameSysResolveRequest\x20\
    is\x20used\x20to\x20resolve\x20an\x20IPNS\x20name\n\n\n\n\x03\x04\0\x01\
    \x12\x03\x10\x08\x1d\n\"\n\x04\x04\0\x02\0\x12\x03\x12\x04\x14\x1a\x15\
    \x20the\x20name\x20to\x20resolve\n\n\r\n\x05\x04\0\x02\0\x04\x12\x04\x12\
    \x04\x10\x1f\n\x0c\n\x05\x04\0\x02\0\x05\x12\x03\x12\x04\n\n\x0c\n\x05\
    \x04\0\x02\0\x01\x12\x03\x12\x0b\x0f\n\x0c\n\x05\x04\0\x02\0\x03\x12\x03\
    \x12\x12\x13\n$\n\x04\x04\0\x02\x01\x12\x03\x14\x04\x15\x1a\x17\x20recur\
    sion\x20depth\x20limit\n\n\r\n\x05\x04\0\x02\x01\x04\x12\x04\x14\x04\x12\
    \x14\n\x0c\n\x05\x04\0\x02\x01\x05\x12\x03\x14\x04\n\n\x0c\n\x05\x04\0\
    \x02\x01\x01\x12\x03\x14\x0b\x10\n\x0c\n\x05\x04\0\x02\x01\x03\x12\x03\
    \x14\x13\x14\nS\n\x04\x04\0\x02\x02\x12\x03\x17\x04\x1e\x1aF\x20number\
    \x20of\x20ipns\x20records\x20to\x20retrieve\n\x20before\x20selecting\x20\
    the\x20best\x20record\n\n\r\n\x05\x04\0\x02\x02\x04\x12\x04\x17\x04\x14\
    \x15\n\x0c\n\x05\x04\0\x02\x02\x05\x12\x03\x17\x04\n\n\x0c\n\x05\x04\0\
    \x02\x02\x01\x12\x03\x17\x0b\x19\n\x0c\n\x05\x04\0\x02\x02\x03\x12\x03\
    \x17\x1c\x1d\nQ\n\x04\x04\0\x02\x03\x12\x03\x1a\x04\x1a\x1aD\x20the\x20a\
    mount\x20of\x20time\x20to\x20wait\n\x20for\x20records\x20to\x20be\x20fet\
    ched\x20and\x20verified\n\n\r\n\x05\x04\0\x02\x03\x04\x12\x04\x1a\x04\
    \x17\x1e\n\x0c\n\x05\x04\0\x02\x03\x05\x12\x03\x1a\x04\t\n\x0c\n\x05\x04\
    \0\x02\x03\x01\x12\x03\x1a\x0b\x15\n\x0c\n\x05\x04\0\x02\x03\x03\x12\x03\
    \x1a\x18\x19\nE\n\x02\x04\x01\x12\x04\x1e\0#\x01\x1a9\x20NameSysResolveR\
    equest\x20is\x20an\x20answer\x20to\x20a\x20resolve\x20request\n\n\n\n\
    \x03\x04\x01\x01\x12\x03\x1e\x08\x1c\n)\n\x04\x04\x01\x02\0\x12\x03\x20\
    \x04\x14\x1a\x1c\x20the\x20path\x20that\x20was\x20resolved\n\n\r\n\x05\
    \x04\x01\x02\0\x04\x12\x04\x20\x04\x1e\x1e\n\x0c\n\x05\x04\x01\x02\0\x05\
    \x12\x03\x20\x04\n\n\x0c\n\x05\x04\x01\x02\0\x01\x12\x03\x20\x0b\x0f\n\
    \x0c\n\x05\x04\x01\x02\0\x03\x12\x03\x20\x12\x13\n\x1e\n\x04\x04\x01\x02\
    \x01\x12\x03\"\x04\x15\x1a\x11\x20an\x20error\x20if\x20any\n\n\r\n\x05\
    \x04\x01\x02\x01\x04\x12\x04\"\x04\x20\x14\n\x0c\n\x05\x04\x01\x02\x01\
    \x05\x12\x03\"\x04\n\n\x0c\n\x05\x04\x01\x02\x01\x01\x12\x03\"\x0b\x10\n\
    \x0c\n\x05\x04\x01\x02\x01\x03\x12\x03\"\x13\x14\n>\n\x02\x04\x02\x12\
    \x04&\02\x01\x1a2\x20NameSysPublishRequest\x20is\x20used\x20to\x20publis\
    h\x20a\x20value\n\n\n\n\x03\x04\x02\x01\x12\x03&\x08\x1d\n5\n\x04\x04\
    \x02\x02\0\x12\x03(\x04\x19\x1a(\x20the\x20private\x20key\x20(name)\x20f\
    or\x20this\x20record\n\n\r\n\x05\x04\x02\x02\0\x04\x12\x04(\x04&\x1f\n\
    \x0c\n\x05\x04\x02\x02\0\x05\x12\x03(\x04\t\n\x0c\n\x05\x04\x02\x02\0\
    \x01\x12\x03(\n\x14\n\x0c\n\x05\x04\x02\x02\0\x03\x12\x03(\x17\x18\n'\n\
    \x04\x04\x02\x02\x01\x12\x03*\x04\x15\x1a\x1a\x20the\x20value\x20of\x20t\
    his\x20record\n\n\r\n\x05\x04\x02\x02\x01\x04\x12\x04*\x04(\x19\n\x0c\n\
    \x05\x04\x02\x02\x01\x05\x12\x03*\x04\n\n\x0c\n\x05\x04\x02\x02\x01\x01\
    \x12\x03*\x0b\x10\n\x0c\n\x05\x04\x02\x02\x01\x03\x12\x03*\x13\x14\n\x80\
    \x01\n\x04\x04\x02\x02\x02\x12\x03.\x04\x13\x1as\x20the\x20eol\x20for\
    \x20this\x20publish,\x20if\x200\x20implies\n\x20as\x20NameSys::Publish\
    \x20call,\x20if\x20non\x200\x20implies\n\x20a\x20NameSys:PublishWithEOL\
    \x20call\n\n\r\n\x05\x04\x02\x02\x02\x04\x12\x04.\x04*\x15\n\x0c\n\x05\
    \x04\x02\x02\x02\x05\x12\x03.\x04\t\n\x0c\n\x05\x04\x02\x02\x02\x01\x12\
    \x03.\x0b\x0e\n\x0c\n\x05\x04\x02\x02\x02\x03\x12\x03.\x11\x12\nO\n\x04\
    \x04\x02\x02\x03\x12\x031\x04\x13\x1aB\x20if\x20set,\x20allows\x20us\x20\
    to\x20override\x20default\n\x20ttl\x20value\x20of\x20ipns\x20records\n\n\
    \r\n\x05\x04\x02\x02\x03\x04\x12\x041\x04.\x13\n\x0c\n\x05\x04\x02\x02\
    \x03\x05\x12\x031\x04\t\n\x0c\n\x05\x04\x02\x02\x03\x01\x12\x031\x0b\x0e\
    \n\x0c\n\x05\x04\x02\x02\x03\x03\x12\x031\x11\x12b\x06proto3\
";

static mut file_descriptor_proto_lazy: ::protobuf::lazy::Lazy<::protobuf::descriptor::FileDescriptorProto> = ::protobuf::lazy::Lazy {
    lock: ::protobuf::lazy::ONCE_INIT,
    ptr: 0 as *const ::protobuf::descriptor::FileDescriptorProto,
};

fn parse_descriptor_proto() -> ::protobuf::descriptor::FileDescriptorProto {
    ::protobuf::parse_from_bytes(file_descriptor_proto_data).unwrap()
}

pub fn file_descriptor_proto() -> &'static ::protobuf::descriptor::FileDescriptorProto {
    unsafe {
        file_descriptor_proto_lazy.get(|| {
            parse_descriptor_proto()
        })
    }
}
