// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: admin.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_admin_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_admin_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3011000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3011002 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/inlined_string_field.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/map.h>  // IWYU pragma: export
#include <google/protobuf/map_entry.h>
#include <google/protobuf/map_field_inl.h>
#include <google/protobuf/generated_enum_reflection.h>
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_admin_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_admin_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxillaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[5]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_admin_2eproto;
namespace pb {
class ManageGCRequest;
class ManageGCRequestDefaultTypeInternal;
extern ManageGCRequestDefaultTypeInternal _ManageGCRequest_default_instance_;
class ManageGCResponse;
class ManageGCResponseDefaultTypeInternal;
extern ManageGCResponseDefaultTypeInternal _ManageGCResponse_default_instance_;
class RefCountRequest;
class RefCountRequestDefaultTypeInternal;
extern RefCountRequestDefaultTypeInternal _RefCountRequest_default_instance_;
class RefCountResponse;
class RefCountResponseDefaultTypeInternal;
extern RefCountResponseDefaultTypeInternal _RefCountResponse_default_instance_;
class RefCountResponse_CidsEntry_DoNotUse;
class RefCountResponse_CidsEntry_DoNotUseDefaultTypeInternal;
extern RefCountResponse_CidsEntry_DoNotUseDefaultTypeInternal _RefCountResponse_CidsEntry_DoNotUse_default_instance_;
}  // namespace pb
PROTOBUF_NAMESPACE_OPEN
template<> ::pb::ManageGCRequest* Arena::CreateMaybeMessage<::pb::ManageGCRequest>(Arena*);
template<> ::pb::ManageGCResponse* Arena::CreateMaybeMessage<::pb::ManageGCResponse>(Arena*);
template<> ::pb::RefCountRequest* Arena::CreateMaybeMessage<::pb::RefCountRequest>(Arena*);
template<> ::pb::RefCountResponse* Arena::CreateMaybeMessage<::pb::RefCountResponse>(Arena*);
template<> ::pb::RefCountResponse_CidsEntry_DoNotUse* Arena::CreateMaybeMessage<::pb::RefCountResponse_CidsEntry_DoNotUse>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace pb {

enum GCREQTYPE : int {
  GC_START = 0,
  GC_STOP = 1,
  GC_STATUS = 2,
  GCREQTYPE_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::min(),
  GCREQTYPE_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::max()
};
bool GCREQTYPE_IsValid(int value);
constexpr GCREQTYPE GCREQTYPE_MIN = GC_START;
constexpr GCREQTYPE GCREQTYPE_MAX = GC_STATUS;
constexpr int GCREQTYPE_ARRAYSIZE = GCREQTYPE_MAX + 1;

const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* GCREQTYPE_descriptor();
template<typename T>
inline const std::string& GCREQTYPE_Name(T enum_t_value) {
  static_assert(::std::is_same<T, GCREQTYPE>::value ||
    ::std::is_integral<T>::value,
    "Incorrect type passed to function GCREQTYPE_Name.");
  return ::PROTOBUF_NAMESPACE_ID::internal::NameOfEnum(
    GCREQTYPE_descriptor(), enum_t_value);
}
inline bool GCREQTYPE_Parse(
    const std::string& name, GCREQTYPE* value) {
  return ::PROTOBUF_NAMESPACE_ID::internal::ParseNamedEnum<GCREQTYPE>(
    GCREQTYPE_descriptor(), name, value);
}
enum REFREQTYPE : int {
  REF_GET_COUNT = 0,
  REF_DELETE = 1,
  REFREQTYPE_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::min(),
  REFREQTYPE_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::max()
};
bool REFREQTYPE_IsValid(int value);
constexpr REFREQTYPE REFREQTYPE_MIN = REF_GET_COUNT;
constexpr REFREQTYPE REFREQTYPE_MAX = REF_DELETE;
constexpr int REFREQTYPE_ARRAYSIZE = REFREQTYPE_MAX + 1;

const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* REFREQTYPE_descriptor();
template<typename T>
inline const std::string& REFREQTYPE_Name(T enum_t_value) {
  static_assert(::std::is_same<T, REFREQTYPE>::value ||
    ::std::is_integral<T>::value,
    "Incorrect type passed to function REFREQTYPE_Name.");
  return ::PROTOBUF_NAMESPACE_ID::internal::NameOfEnum(
    REFREQTYPE_descriptor(), enum_t_value);
}
inline bool REFREQTYPE_Parse(
    const std::string& name, REFREQTYPE* value) {
  return ::PROTOBUF_NAMESPACE_ID::internal::ParseNamedEnum<REFREQTYPE>(
    REFREQTYPE_descriptor(), name, value);
}
enum REFREQOPTS : int {
  REF_FORCE = 0,
  REFREQOPTS_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::min(),
  REFREQOPTS_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::max()
};
bool REFREQOPTS_IsValid(int value);
constexpr REFREQOPTS REFREQOPTS_MIN = REF_FORCE;
constexpr REFREQOPTS REFREQOPTS_MAX = REF_FORCE;
constexpr int REFREQOPTS_ARRAYSIZE = REFREQOPTS_MAX + 1;

const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* REFREQOPTS_descriptor();
template<typename T>
inline const std::string& REFREQOPTS_Name(T enum_t_value) {
  static_assert(::std::is_same<T, REFREQOPTS>::value ||
    ::std::is_integral<T>::value,
    "Incorrect type passed to function REFREQOPTS_Name.");
  return ::PROTOBUF_NAMESPACE_ID::internal::NameOfEnum(
    REFREQOPTS_descriptor(), enum_t_value);
}
inline bool REFREQOPTS_Parse(
    const std::string& name, REFREQOPTS* value) {
  return ::PROTOBUF_NAMESPACE_ID::internal::ParseNamedEnum<REFREQOPTS>(
    REFREQOPTS_descriptor(), name, value);
}
// ===================================================================

class ManageGCRequest :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:pb.ManageGCRequest) */ {
 public:
  ManageGCRequest();
  virtual ~ManageGCRequest();

  ManageGCRequest(const ManageGCRequest& from);
  ManageGCRequest(ManageGCRequest&& from) noexcept
    : ManageGCRequest() {
    *this = ::std::move(from);
  }

  inline ManageGCRequest& operator=(const ManageGCRequest& from) {
    CopyFrom(from);
    return *this;
  }
  inline ManageGCRequest& operator=(ManageGCRequest&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const ManageGCRequest& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const ManageGCRequest* internal_default_instance() {
    return reinterpret_cast<const ManageGCRequest*>(
               &_ManageGCRequest_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(ManageGCRequest& a, ManageGCRequest& b) {
    a.Swap(&b);
  }
  inline void Swap(ManageGCRequest* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline ManageGCRequest* New() const final {
    return CreateMaybeMessage<ManageGCRequest>(nullptr);
  }

  ManageGCRequest* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<ManageGCRequest>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const ManageGCRequest& from);
  void MergeFrom(const ManageGCRequest& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(ManageGCRequest* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "pb.ManageGCRequest";
  }
  private:
  inline ::PROTOBUF_NAMESPACE_ID::Arena* GetArenaNoVirtual() const {
    return nullptr;
  }
  inline void* MaybeArenaPtr() const {
    return nullptr;
  }
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_admin_2eproto);
    return ::descriptor_table_admin_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kTypeFieldNumber = 1,
  };
  // .pb.GCREQTYPE type = 1;
  void clear_type();
  ::pb::GCREQTYPE type() const;
  void set_type(::pb::GCREQTYPE value);
  private:
  ::pb::GCREQTYPE _internal_type() const;
  void _internal_set_type(::pb::GCREQTYPE value);
  public:

  // @@protoc_insertion_point(class_scope:pb.ManageGCRequest)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  int type_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_admin_2eproto;
};
// -------------------------------------------------------------------

class ManageGCResponse :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:pb.ManageGCResponse) */ {
 public:
  ManageGCResponse();
  virtual ~ManageGCResponse();

  ManageGCResponse(const ManageGCResponse& from);
  ManageGCResponse(ManageGCResponse&& from) noexcept
    : ManageGCResponse() {
    *this = ::std::move(from);
  }

  inline ManageGCResponse& operator=(const ManageGCResponse& from) {
    CopyFrom(from);
    return *this;
  }
  inline ManageGCResponse& operator=(ManageGCResponse&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const ManageGCResponse& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const ManageGCResponse* internal_default_instance() {
    return reinterpret_cast<const ManageGCResponse*>(
               &_ManageGCResponse_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(ManageGCResponse& a, ManageGCResponse& b) {
    a.Swap(&b);
  }
  inline void Swap(ManageGCResponse* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline ManageGCResponse* New() const final {
    return CreateMaybeMessage<ManageGCResponse>(nullptr);
  }

  ManageGCResponse* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<ManageGCResponse>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const ManageGCResponse& from);
  void MergeFrom(const ManageGCResponse& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(ManageGCResponse* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "pb.ManageGCResponse";
  }
  private:
  inline ::PROTOBUF_NAMESPACE_ID::Arena* GetArenaNoVirtual() const {
    return nullptr;
  }
  inline void* MaybeArenaPtr() const {
    return nullptr;
  }
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_admin_2eproto);
    return ::descriptor_table_admin_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kStatusFieldNumber = 1,
  };
  // string status = 1;
  void clear_status();
  const std::string& status() const;
  void set_status(const std::string& value);
  void set_status(std::string&& value);
  void set_status(const char* value);
  void set_status(const char* value, size_t size);
  std::string* mutable_status();
  std::string* release_status();
  void set_allocated_status(std::string* status);
  private:
  const std::string& _internal_status() const;
  void _internal_set_status(const std::string& value);
  std::string* _internal_mutable_status();
  public:

  // @@protoc_insertion_point(class_scope:pb.ManageGCResponse)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr status_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_admin_2eproto;
};
// -------------------------------------------------------------------

class RefCountRequest :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:pb.RefCountRequest) */ {
 public:
  RefCountRequest();
  virtual ~RefCountRequest();

  RefCountRequest(const RefCountRequest& from);
  RefCountRequest(RefCountRequest&& from) noexcept
    : RefCountRequest() {
    *this = ::std::move(from);
  }

  inline RefCountRequest& operator=(const RefCountRequest& from) {
    CopyFrom(from);
    return *this;
  }
  inline RefCountRequest& operator=(RefCountRequest&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const RefCountRequest& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const RefCountRequest* internal_default_instance() {
    return reinterpret_cast<const RefCountRequest*>(
               &_RefCountRequest_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    2;

  friend void swap(RefCountRequest& a, RefCountRequest& b) {
    a.Swap(&b);
  }
  inline void Swap(RefCountRequest* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline RefCountRequest* New() const final {
    return CreateMaybeMessage<RefCountRequest>(nullptr);
  }

  RefCountRequest* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<RefCountRequest>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const RefCountRequest& from);
  void MergeFrom(const RefCountRequest& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(RefCountRequest* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "pb.RefCountRequest";
  }
  private:
  inline ::PROTOBUF_NAMESPACE_ID::Arena* GetArenaNoVirtual() const {
    return nullptr;
  }
  inline void* MaybeArenaPtr() const {
    return nullptr;
  }
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_admin_2eproto);
    return ::descriptor_table_admin_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kCidsFieldNumber = 1,
    kLimitFieldNumber = 2,
  };
  // repeated string cids = 1;
  int cids_size() const;
  private:
  int _internal_cids_size() const;
  public:
  void clear_cids();
  const std::string& cids(int index) const;
  std::string* mutable_cids(int index);
  void set_cids(int index, const std::string& value);
  void set_cids(int index, std::string&& value);
  void set_cids(int index, const char* value);
  void set_cids(int index, const char* value, size_t size);
  std::string* add_cids();
  void add_cids(const std::string& value);
  void add_cids(std::string&& value);
  void add_cids(const char* value);
  void add_cids(const char* value, size_t size);
  const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string>& cids() const;
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string>* mutable_cids();
  private:
  const std::string& _internal_cids(int index) const;
  std::string* _internal_add_cids();
  public:

  // int64 limit = 2;
  void clear_limit();
  ::PROTOBUF_NAMESPACE_ID::int64 limit() const;
  void set_limit(::PROTOBUF_NAMESPACE_ID::int64 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::int64 _internal_limit() const;
  void _internal_set_limit(::PROTOBUF_NAMESPACE_ID::int64 value);
  public:

  // @@protoc_insertion_point(class_scope:pb.RefCountRequest)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string> cids_;
  ::PROTOBUF_NAMESPACE_ID::int64 limit_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_admin_2eproto;
};
// -------------------------------------------------------------------

class RefCountResponse_CidsEntry_DoNotUse : public ::PROTOBUF_NAMESPACE_ID::internal::MapEntry<RefCountResponse_CidsEntry_DoNotUse, 
    std::string, ::PROTOBUF_NAMESPACE_ID::int64,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_INT64,
    0 > {
public:
  typedef ::PROTOBUF_NAMESPACE_ID::internal::MapEntry<RefCountResponse_CidsEntry_DoNotUse, 
    std::string, ::PROTOBUF_NAMESPACE_ID::int64,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING,
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_INT64,
    0 > SuperType;
  RefCountResponse_CidsEntry_DoNotUse();
  RefCountResponse_CidsEntry_DoNotUse(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  void MergeFrom(const RefCountResponse_CidsEntry_DoNotUse& other);
  static const RefCountResponse_CidsEntry_DoNotUse* internal_default_instance() { return reinterpret_cast<const RefCountResponse_CidsEntry_DoNotUse*>(&_RefCountResponse_CidsEntry_DoNotUse_default_instance_); }
  static bool ValidateKey(std::string* s) {
    return ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(s->data(), static_cast<int>(s->size()), ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::PARSE, "pb.RefCountResponse.CidsEntry.key");
 }
  static bool ValidateValue(void*) { return true; }
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& other) final;
  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_admin_2eproto);
    return ::descriptor_table_admin_2eproto.file_level_metadata[3];
  }

  public:
};

// -------------------------------------------------------------------

class RefCountResponse :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:pb.RefCountResponse) */ {
 public:
  RefCountResponse();
  virtual ~RefCountResponse();

  RefCountResponse(const RefCountResponse& from);
  RefCountResponse(RefCountResponse&& from) noexcept
    : RefCountResponse() {
    *this = ::std::move(from);
  }

  inline RefCountResponse& operator=(const RefCountResponse& from) {
    CopyFrom(from);
    return *this;
  }
  inline RefCountResponse& operator=(RefCountResponse&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const RefCountResponse& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const RefCountResponse* internal_default_instance() {
    return reinterpret_cast<const RefCountResponse*>(
               &_RefCountResponse_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    4;

  friend void swap(RefCountResponse& a, RefCountResponse& b) {
    a.Swap(&b);
  }
  inline void Swap(RefCountResponse* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline RefCountResponse* New() const final {
    return CreateMaybeMessage<RefCountResponse>(nullptr);
  }

  RefCountResponse* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<RefCountResponse>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const RefCountResponse& from);
  void MergeFrom(const RefCountResponse& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(RefCountResponse* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "pb.RefCountResponse";
  }
  private:
  inline ::PROTOBUF_NAMESPACE_ID::Arena* GetArenaNoVirtual() const {
    return nullptr;
  }
  inline void* MaybeArenaPtr() const {
    return nullptr;
  }
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_admin_2eproto);
    return ::descriptor_table_admin_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------


  // accessors -------------------------------------------------------

  enum : int {
    kCidsFieldNumber = 1,
  };
  // map<string, int64> cids = 1;
  int cids_size() const;
  private:
  int _internal_cids_size() const;
  public:
  void clear_cids();
  private:
  const ::PROTOBUF_NAMESPACE_ID::Map< std::string, ::PROTOBUF_NAMESPACE_ID::int64 >&
      _internal_cids() const;
  ::PROTOBUF_NAMESPACE_ID::Map< std::string, ::PROTOBUF_NAMESPACE_ID::int64 >*
      _internal_mutable_cids();
  public:
  const ::PROTOBUF_NAMESPACE_ID::Map< std::string, ::PROTOBUF_NAMESPACE_ID::int64 >&
      cids() const;
  ::PROTOBUF_NAMESPACE_ID::Map< std::string, ::PROTOBUF_NAMESPACE_ID::int64 >*
      mutable_cids();

  // @@protoc_insertion_point(class_scope:pb.RefCountResponse)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::PROTOBUF_NAMESPACE_ID::internal::MapField<
      RefCountResponse_CidsEntry_DoNotUse,
      std::string, ::PROTOBUF_NAMESPACE_ID::int64,
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_STRING,
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::TYPE_INT64,
      0 > cids_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_admin_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// ManageGCRequest

// .pb.GCREQTYPE type = 1;
inline void ManageGCRequest::clear_type() {
  type_ = 0;
}
inline ::pb::GCREQTYPE ManageGCRequest::_internal_type() const {
  return static_cast< ::pb::GCREQTYPE >(type_);
}
inline ::pb::GCREQTYPE ManageGCRequest::type() const {
  // @@protoc_insertion_point(field_get:pb.ManageGCRequest.type)
  return _internal_type();
}
inline void ManageGCRequest::_internal_set_type(::pb::GCREQTYPE value) {
  
  type_ = value;
}
inline void ManageGCRequest::set_type(::pb::GCREQTYPE value) {
  _internal_set_type(value);
  // @@protoc_insertion_point(field_set:pb.ManageGCRequest.type)
}

// -------------------------------------------------------------------

// ManageGCResponse

// string status = 1;
inline void ManageGCResponse::clear_status() {
  status_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& ManageGCResponse::status() const {
  // @@protoc_insertion_point(field_get:pb.ManageGCResponse.status)
  return _internal_status();
}
inline void ManageGCResponse::set_status(const std::string& value) {
  _internal_set_status(value);
  // @@protoc_insertion_point(field_set:pb.ManageGCResponse.status)
}
inline std::string* ManageGCResponse::mutable_status() {
  // @@protoc_insertion_point(field_mutable:pb.ManageGCResponse.status)
  return _internal_mutable_status();
}
inline const std::string& ManageGCResponse::_internal_status() const {
  return status_.GetNoArena();
}
inline void ManageGCResponse::_internal_set_status(const std::string& value) {
  
  status_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void ManageGCResponse::set_status(std::string&& value) {
  
  status_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:pb.ManageGCResponse.status)
}
inline void ManageGCResponse::set_status(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  status_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:pb.ManageGCResponse.status)
}
inline void ManageGCResponse::set_status(const char* value, size_t size) {
  
  status_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:pb.ManageGCResponse.status)
}
inline std::string* ManageGCResponse::_internal_mutable_status() {
  
  return status_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* ManageGCResponse::release_status() {
  // @@protoc_insertion_point(field_release:pb.ManageGCResponse.status)
  
  return status_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void ManageGCResponse::set_allocated_status(std::string* status) {
  if (status != nullptr) {
    
  } else {
    
  }
  status_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), status);
  // @@protoc_insertion_point(field_set_allocated:pb.ManageGCResponse.status)
}

// -------------------------------------------------------------------

// RefCountRequest

// repeated string cids = 1;
inline int RefCountRequest::_internal_cids_size() const {
  return cids_.size();
}
inline int RefCountRequest::cids_size() const {
  return _internal_cids_size();
}
inline void RefCountRequest::clear_cids() {
  cids_.Clear();
}
inline std::string* RefCountRequest::add_cids() {
  // @@protoc_insertion_point(field_add_mutable:pb.RefCountRequest.cids)
  return _internal_add_cids();
}
inline const std::string& RefCountRequest::_internal_cids(int index) const {
  return cids_.Get(index);
}
inline const std::string& RefCountRequest::cids(int index) const {
  // @@protoc_insertion_point(field_get:pb.RefCountRequest.cids)
  return _internal_cids(index);
}
inline std::string* RefCountRequest::mutable_cids(int index) {
  // @@protoc_insertion_point(field_mutable:pb.RefCountRequest.cids)
  return cids_.Mutable(index);
}
inline void RefCountRequest::set_cids(int index, const std::string& value) {
  // @@protoc_insertion_point(field_set:pb.RefCountRequest.cids)
  cids_.Mutable(index)->assign(value);
}
inline void RefCountRequest::set_cids(int index, std::string&& value) {
  // @@protoc_insertion_point(field_set:pb.RefCountRequest.cids)
  cids_.Mutable(index)->assign(std::move(value));
}
inline void RefCountRequest::set_cids(int index, const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  cids_.Mutable(index)->assign(value);
  // @@protoc_insertion_point(field_set_char:pb.RefCountRequest.cids)
}
inline void RefCountRequest::set_cids(int index, const char* value, size_t size) {
  cids_.Mutable(index)->assign(
    reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_set_pointer:pb.RefCountRequest.cids)
}
inline std::string* RefCountRequest::_internal_add_cids() {
  return cids_.Add();
}
inline void RefCountRequest::add_cids(const std::string& value) {
  cids_.Add()->assign(value);
  // @@protoc_insertion_point(field_add:pb.RefCountRequest.cids)
}
inline void RefCountRequest::add_cids(std::string&& value) {
  cids_.Add(std::move(value));
  // @@protoc_insertion_point(field_add:pb.RefCountRequest.cids)
}
inline void RefCountRequest::add_cids(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  cids_.Add()->assign(value);
  // @@protoc_insertion_point(field_add_char:pb.RefCountRequest.cids)
}
inline void RefCountRequest::add_cids(const char* value, size_t size) {
  cids_.Add()->assign(reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_add_pointer:pb.RefCountRequest.cids)
}
inline const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string>&
RefCountRequest::cids() const {
  // @@protoc_insertion_point(field_list:pb.RefCountRequest.cids)
  return cids_;
}
inline ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string>*
RefCountRequest::mutable_cids() {
  // @@protoc_insertion_point(field_mutable_list:pb.RefCountRequest.cids)
  return &cids_;
}

// int64 limit = 2;
inline void RefCountRequest::clear_limit() {
  limit_ = PROTOBUF_LONGLONG(0);
}
inline ::PROTOBUF_NAMESPACE_ID::int64 RefCountRequest::_internal_limit() const {
  return limit_;
}
inline ::PROTOBUF_NAMESPACE_ID::int64 RefCountRequest::limit() const {
  // @@protoc_insertion_point(field_get:pb.RefCountRequest.limit)
  return _internal_limit();
}
inline void RefCountRequest::_internal_set_limit(::PROTOBUF_NAMESPACE_ID::int64 value) {
  
  limit_ = value;
}
inline void RefCountRequest::set_limit(::PROTOBUF_NAMESPACE_ID::int64 value) {
  _internal_set_limit(value);
  // @@protoc_insertion_point(field_set:pb.RefCountRequest.limit)
}

// -------------------------------------------------------------------

// -------------------------------------------------------------------

// RefCountResponse

// map<string, int64> cids = 1;
inline int RefCountResponse::_internal_cids_size() const {
  return cids_.size();
}
inline int RefCountResponse::cids_size() const {
  return _internal_cids_size();
}
inline void RefCountResponse::clear_cids() {
  cids_.Clear();
}
inline const ::PROTOBUF_NAMESPACE_ID::Map< std::string, ::PROTOBUF_NAMESPACE_ID::int64 >&
RefCountResponse::_internal_cids() const {
  return cids_.GetMap();
}
inline const ::PROTOBUF_NAMESPACE_ID::Map< std::string, ::PROTOBUF_NAMESPACE_ID::int64 >&
RefCountResponse::cids() const {
  // @@protoc_insertion_point(field_map:pb.RefCountResponse.cids)
  return _internal_cids();
}
inline ::PROTOBUF_NAMESPACE_ID::Map< std::string, ::PROTOBUF_NAMESPACE_ID::int64 >*
RefCountResponse::_internal_mutable_cids() {
  return cids_.MutableMap();
}
inline ::PROTOBUF_NAMESPACE_ID::Map< std::string, ::PROTOBUF_NAMESPACE_ID::int64 >*
RefCountResponse::mutable_cids() {
  // @@protoc_insertion_point(field_mutable_map:pb.RefCountResponse.cids)
  return _internal_mutable_cids();
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------

// -------------------------------------------------------------------

// -------------------------------------------------------------------

// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace pb

PROTOBUF_NAMESPACE_OPEN

template <> struct is_proto_enum< ::pb::GCREQTYPE> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::pb::GCREQTYPE>() {
  return ::pb::GCREQTYPE_descriptor();
}
template <> struct is_proto_enum< ::pb::REFREQTYPE> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::pb::REFREQTYPE>() {
  return ::pb::REFREQTYPE_descriptor();
}
template <> struct is_proto_enum< ::pb::REFREQOPTS> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::pb::REFREQOPTS>() {
  return ::pb::REFREQOPTS_descriptor();
}

PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_admin_2eproto
