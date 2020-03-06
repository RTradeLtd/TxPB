// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: util.proto

#include "util.pb.h"

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
class PutResponseDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<PutResponse> _instance;
} _PutResponse_default_instance_;
class EmptyDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<Empty> _instance;
} _Empty_default_instance_;
}  // namespace pb
static void InitDefaultsscc_info_Empty_util_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::pb::_Empty_default_instance_;
    new (ptr) ::pb::Empty();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::pb::Empty::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Empty_util_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_Empty_util_2eproto}, {}};

static void InitDefaultsscc_info_PutResponse_util_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::pb::_PutResponse_default_instance_;
    new (ptr) ::pb::PutResponse();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::pb::PutResponse::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_PutResponse_util_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_PutResponse_util_2eproto}, {}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_util_2eproto[2];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_util_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_util_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_util_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::pb::PutResponse, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::pb::PutResponse, hash_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::pb::Empty, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::pb::PutResponse)},
  { 6, -1, sizeof(::pb::Empty)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::pb::_PutResponse_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::pb::_Empty_default_instance_),
};

const char descriptor_table_protodef_util_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\nutil.proto\022\002pb\"\033\n\013PutResponse\022\014\n\004hash\030"
  "\001 \001(\t\"\007\n\005Emptyb\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_util_2eproto_deps[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_util_2eproto_sccs[2] = {
  &scc_info_Empty_util_2eproto.base,
  &scc_info_PutResponse_util_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_util_2eproto_once;
static bool descriptor_table_util_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_util_2eproto = {
  &descriptor_table_util_2eproto_initialized, descriptor_table_protodef_util_2eproto, "util.proto", 62,
  &descriptor_table_util_2eproto_once, descriptor_table_util_2eproto_sccs, descriptor_table_util_2eproto_deps, 2, 0,
  schemas, file_default_instances, TableStruct_util_2eproto::offsets,
  file_level_metadata_util_2eproto, 2, file_level_enum_descriptors_util_2eproto, file_level_service_descriptors_util_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_util_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_util_2eproto), true);
namespace pb {

// ===================================================================

void PutResponse::InitAsDefaultInstance() {
}
class PutResponse::_Internal {
 public:
};

PutResponse::PutResponse()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:pb.PutResponse)
}
PutResponse::PutResponse(const PutResponse& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  hash_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_hash().empty()) {
    hash_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.hash_);
  }
  // @@protoc_insertion_point(copy_constructor:pb.PutResponse)
}

void PutResponse::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_PutResponse_util_2eproto.base);
  hash_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

PutResponse::~PutResponse() {
  // @@protoc_insertion_point(destructor:pb.PutResponse)
  SharedDtor();
}

void PutResponse::SharedDtor() {
  hash_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void PutResponse::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const PutResponse& PutResponse::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_PutResponse_util_2eproto.base);
  return *internal_default_instance();
}


void PutResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:pb.PutResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  hash_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  _internal_metadata_.Clear();
}

const char* PutResponse::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string hash = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_hash();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "pb.PutResponse.hash"));
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

::PROTOBUF_NAMESPACE_ID::uint8* PutResponse::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:pb.PutResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string hash = 1;
  if (this->hash().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_hash().data(), static_cast<int>(this->_internal_hash().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "pb.PutResponse.hash");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_hash(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:pb.PutResponse)
  return target;
}

size_t PutResponse::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:pb.PutResponse)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string hash = 1;
  if (this->hash().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_hash());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void PutResponse::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:pb.PutResponse)
  GOOGLE_DCHECK_NE(&from, this);
  const PutResponse* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<PutResponse>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:pb.PutResponse)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:pb.PutResponse)
    MergeFrom(*source);
  }
}

void PutResponse::MergeFrom(const PutResponse& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:pb.PutResponse)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.hash().size() > 0) {

    hash_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.hash_);
  }
}

void PutResponse::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:pb.PutResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void PutResponse::CopyFrom(const PutResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:pb.PutResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool PutResponse::IsInitialized() const {
  return true;
}

void PutResponse::InternalSwap(PutResponse* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  hash_.Swap(&other->hash_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
}

::PROTOBUF_NAMESPACE_ID::Metadata PutResponse::GetMetadata() const {
  return GetMetadataStatic();
}


// ===================================================================

void Empty::InitAsDefaultInstance() {
}
class Empty::_Internal {
 public:
};

Empty::Empty()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:pb.Empty)
}
Empty::Empty(const Empty& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  // @@protoc_insertion_point(copy_constructor:pb.Empty)
}

void Empty::SharedCtor() {
}

Empty::~Empty() {
  // @@protoc_insertion_point(destructor:pb.Empty)
  SharedDtor();
}

void Empty::SharedDtor() {
}

void Empty::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const Empty& Empty::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_Empty_util_2eproto.base);
  return *internal_default_instance();
}


void Empty::Clear() {
// @@protoc_insertion_point(message_clear_start:pb.Empty)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  _internal_metadata_.Clear();
}

const char* Empty::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag, &_internal_metadata_, ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* Empty::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:pb.Empty)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:pb.Empty)
  return target;
}

size_t Empty::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:pb.Empty)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void Empty::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:pb.Empty)
  GOOGLE_DCHECK_NE(&from, this);
  const Empty* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<Empty>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:pb.Empty)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:pb.Empty)
    MergeFrom(*source);
  }
}

void Empty::MergeFrom(const Empty& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:pb.Empty)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

}

void Empty::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:pb.Empty)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Empty::CopyFrom(const Empty& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:pb.Empty)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Empty::IsInitialized() const {
  return true;
}

void Empty::InternalSwap(Empty* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
}

::PROTOBUF_NAMESPACE_ID::Metadata Empty::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace pb
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::pb::PutResponse* Arena::CreateMaybeMessage< ::pb::PutResponse >(Arena* arena) {
  return Arena::CreateInternal< ::pb::PutResponse >(arena);
}
template<> PROTOBUF_NOINLINE ::pb::Empty* Arena::CreateMaybeMessage< ::pb::Empty >(Arena* arena) {
  return Arena::CreateInternal< ::pb::Empty >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
