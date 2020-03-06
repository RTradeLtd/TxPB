// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: status.proto

#include "status.pb.h"

#include <algorithm>

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
namespace pb {
class VersionResponseDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<VersionResponse> _instance;
} _VersionResponse_default_instance_;
class StatusResponseDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<StatusResponse> _instance;
} _StatusResponse_default_instance_;
}  // namespace pb
static void InitDefaultsscc_info_StatusResponse_status_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::pb::_StatusResponse_default_instance_;
    new (ptr) ::pb::StatusResponse();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::pb::StatusResponse::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_StatusResponse_status_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_StatusResponse_status_2eproto}, {}};

static void InitDefaultsscc_info_VersionResponse_status_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::pb::_VersionResponse_default_instance_;
    new (ptr) ::pb::VersionResponse();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::pb::VersionResponse::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_VersionResponse_status_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_VersionResponse_status_2eproto}, {}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_status_2eproto[2];
static const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* file_level_enum_descriptors_status_2eproto[1];
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_status_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_status_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::pb::VersionResponse, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::pb::VersionResponse, version_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::pb::StatusResponse, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::pb::StatusResponse, host_),
  PROTOBUF_FIELD_OFFSET(::pb::StatusResponse, status_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::pb::VersionResponse)},
  { 6, -1, sizeof(::pb::StatusResponse)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::pb::_VersionResponse_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::pb::_StatusResponse_default_instance_),
};

const char descriptor_table_protodef_status_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\014status.proto\022\002pb\032\nutil.proto\"\"\n\017Versio"
  "nResponse\022\017\n\007version\030\001 \001(\t\"=\n\016StatusResp"
  "onse\022\014\n\004host\030\001 \001(\t\022\035\n\006status\030\002 \001(\0162\r.pb."
  "APISTATUS*I\n\tAPISTATUS\022\n\n\006ONLINE\020\000\022\013\n\007PU"
  "RGING\020\001\022\030\n\024DEGRADED_PERFORMANCE\020\002\022\t\n\005ERR"
  "OR\020\0032c\n\tStatusAPI\022+\n\007Version\022\t.pb.Empty\032"
  "\023.pb.VersionResponse\"\000\022)\n\006Status\022\t.pb.Em"
  "pty\032\022.pb.StatusResponse\"\000b\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_status_2eproto_deps[1] = {
  &::descriptor_table_util_2eproto,
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_status_2eproto_sccs[2] = {
  &scc_info_StatusResponse_status_2eproto.base,
  &scc_info_VersionResponse_status_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_status_2eproto_once;
static bool descriptor_table_status_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_status_2eproto = {
  &descriptor_table_status_2eproto_initialized, descriptor_table_protodef_status_2eproto, "status.proto", 313,
  &descriptor_table_status_2eproto_once, descriptor_table_status_2eproto_sccs, descriptor_table_status_2eproto_deps, 2, 1,
  schemas, file_default_instances, TableStruct_status_2eproto::offsets,
  file_level_metadata_status_2eproto, 2, file_level_enum_descriptors_status_2eproto, file_level_service_descriptors_status_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_status_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_status_2eproto), true);
namespace pb {
const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* APISTATUS_descriptor() {
  ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&descriptor_table_status_2eproto);
  return file_level_enum_descriptors_status_2eproto[0];
}
bool APISTATUS_IsValid(int value) {
  switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    default:
      return false;
  }
}


// ===================================================================

void VersionResponse::InitAsDefaultInstance() {
}
class VersionResponse::_Internal {
 public:
};

VersionResponse::VersionResponse()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:pb.VersionResponse)
}
VersionResponse::VersionResponse(const VersionResponse& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  version_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_version().empty()) {
    version_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.version_);
  }
  // @@protoc_insertion_point(copy_constructor:pb.VersionResponse)
}

void VersionResponse::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_VersionResponse_status_2eproto.base);
  version_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

VersionResponse::~VersionResponse() {
  // @@protoc_insertion_point(destructor:pb.VersionResponse)
  SharedDtor();
}

void VersionResponse::SharedDtor() {
  version_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void VersionResponse::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const VersionResponse& VersionResponse::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_VersionResponse_status_2eproto.base);
  return *internal_default_instance();
}


void VersionResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:pb.VersionResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  version_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  _internal_metadata_.Clear();
}

const char* VersionResponse::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string version = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_version();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "pb.VersionResponse.version"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag, &_internal_metadata_, ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* VersionResponse::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:pb.VersionResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string version = 1;
  if (this->version().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_version().data(), static_cast<int>(this->_internal_version().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "pb.VersionResponse.version");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_version(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:pb.VersionResponse)
  return target;
}

size_t VersionResponse::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:pb.VersionResponse)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string version = 1;
  if (this->version().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_version());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void VersionResponse::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:pb.VersionResponse)
  GOOGLE_DCHECK_NE(&from, this);
  const VersionResponse* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<VersionResponse>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:pb.VersionResponse)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:pb.VersionResponse)
    MergeFrom(*source);
  }
}

void VersionResponse::MergeFrom(const VersionResponse& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:pb.VersionResponse)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.version().size() > 0) {

    version_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.version_);
  }
}

void VersionResponse::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:pb.VersionResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void VersionResponse::CopyFrom(const VersionResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:pb.VersionResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool VersionResponse::IsInitialized() const {
  return true;
}

void VersionResponse::InternalSwap(VersionResponse* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  version_.Swap(&other->version_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
}

::PROTOBUF_NAMESPACE_ID::Metadata VersionResponse::GetMetadata() const {
  return GetMetadataStatic();
}


// ===================================================================

void StatusResponse::InitAsDefaultInstance() {
}
class StatusResponse::_Internal {
 public:
};

StatusResponse::StatusResponse()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:pb.StatusResponse)
}
StatusResponse::StatusResponse(const StatusResponse& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  host_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_host().empty()) {
    host_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.host_);
  }
  status_ = from.status_;
  // @@protoc_insertion_point(copy_constructor:pb.StatusResponse)
}

void StatusResponse::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_StatusResponse_status_2eproto.base);
  host_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  status_ = 0;
}

StatusResponse::~StatusResponse() {
  // @@protoc_insertion_point(destructor:pb.StatusResponse)
  SharedDtor();
}

void StatusResponse::SharedDtor() {
  host_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void StatusResponse::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const StatusResponse& StatusResponse::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_StatusResponse_status_2eproto.base);
  return *internal_default_instance();
}


void StatusResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:pb.StatusResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  host_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  status_ = 0;
  _internal_metadata_.Clear();
}

const char* StatusResponse::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string host = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_host();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "pb.StatusResponse.host"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // .pb.APISTATUS status = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 16)) {
          ::PROTOBUF_NAMESPACE_ID::uint64 val = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint(&ptr);
          CHK_(ptr);
          _internal_set_status(static_cast<::pb::APISTATUS>(val));
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag, &_internal_metadata_, ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* StatusResponse::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:pb.StatusResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string host = 1;
  if (this->host().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_host().data(), static_cast<int>(this->_internal_host().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "pb.StatusResponse.host");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_host(), target);
  }

  // .pb.APISTATUS status = 2;
  if (this->status() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteEnumToArray(
      2, this->_internal_status(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:pb.StatusResponse)
  return target;
}

size_t StatusResponse::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:pb.StatusResponse)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string host = 1;
  if (this->host().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_host());
  }

  // .pb.APISTATUS status = 2;
  if (this->status() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::EnumSize(this->_internal_status());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void StatusResponse::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:pb.StatusResponse)
  GOOGLE_DCHECK_NE(&from, this);
  const StatusResponse* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<StatusResponse>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:pb.StatusResponse)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:pb.StatusResponse)
    MergeFrom(*source);
  }
}

void StatusResponse::MergeFrom(const StatusResponse& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:pb.StatusResponse)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.host().size() > 0) {

    host_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.host_);
  }
  if (from.status() != 0) {
    _internal_set_status(from._internal_status());
  }
}

void StatusResponse::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:pb.StatusResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void StatusResponse::CopyFrom(const StatusResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:pb.StatusResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool StatusResponse::IsInitialized() const {
  return true;
}

void StatusResponse::InternalSwap(StatusResponse* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  host_.Swap(&other->host_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  swap(status_, other->status_);
}

::PROTOBUF_NAMESPACE_ID::Metadata StatusResponse::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace pb
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::pb::VersionResponse* Arena::CreateMaybeMessage< ::pb::VersionResponse >(Arena* arena) {
  return Arena::CreateInternal< ::pb::VersionResponse >(arena);
}
template<> PROTOBUF_NOINLINE ::pb::StatusResponse* Arena::CreateMaybeMessage< ::pb::StatusResponse >(Arena* arena) {
  return Arena::CreateInternal< ::pb::StatusResponse >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
