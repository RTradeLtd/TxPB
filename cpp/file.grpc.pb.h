// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: file.proto
#ifndef GRPC_file_2eproto__INCLUDED
#define GRPC_file_2eproto__INCLUDED

#include "file.pb.h"

#include <functional>
#include <grpc/impl/codegen/port_platform.h>
#include <grpcpp/impl/codegen/async_generic_service.h>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/client_context.h>
#include <grpcpp/impl/codegen/completion_queue.h>
#include <grpcpp/impl/codegen/message_allocator.h>
#include <grpcpp/impl/codegen/method_handler.h>
#include <grpcpp/impl/codegen/proto_utils.h>
#include <grpcpp/impl/codegen/rpc_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/server_callback_handlers.h>
#include <grpcpp/impl/codegen/server_context.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/status.h>
#include <grpcpp/impl/codegen/stub_options.h>
#include <grpcpp/impl/codegen/sync_stream.h>

namespace pb {

// FileAPI provides a gRPC api to upload/download files as UnixFS objects
class FileAPI final {
 public:
  static constexpr char const* service_full_name() {
    return "pb.FileAPI";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    // UploadFile allows uploading a file as a UnixFS object (equivalent to ipfs add)
    std::unique_ptr< ::grpc::ClientWriterInterface< ::pb::UploadRequest>> UploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response) {
      return std::unique_ptr< ::grpc::ClientWriterInterface< ::pb::UploadRequest>>(UploadFileRaw(context, response));
    }
    std::unique_ptr< ::grpc::ClientAsyncWriterInterface< ::pb::UploadRequest>> AsyncUploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::CompletionQueue* cq, void* tag) {
      return std::unique_ptr< ::grpc::ClientAsyncWriterInterface< ::pb::UploadRequest>>(AsyncUploadFileRaw(context, response, cq, tag));
    }
    std::unique_ptr< ::grpc::ClientAsyncWriterInterface< ::pb::UploadRequest>> PrepareAsyncUploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncWriterInterface< ::pb::UploadRequest>>(PrepareAsyncUploadFileRaw(context, response, cq));
    }
    // DownloadFile allows downloading a UnixFS object (equivalent to ipfs get)
    std::unique_ptr< ::grpc::ClientReaderInterface< ::pb::DownloadResponse>> DownloadFile(::grpc::ClientContext* context, const ::pb::DownloadRequest& request) {
      return std::unique_ptr< ::grpc::ClientReaderInterface< ::pb::DownloadResponse>>(DownloadFileRaw(context, request));
    }
    std::unique_ptr< ::grpc::ClientAsyncReaderInterface< ::pb::DownloadResponse>> AsyncDownloadFile(::grpc::ClientContext* context, const ::pb::DownloadRequest& request, ::grpc::CompletionQueue* cq, void* tag) {
      return std::unique_ptr< ::grpc::ClientAsyncReaderInterface< ::pb::DownloadResponse>>(AsyncDownloadFileRaw(context, request, cq, tag));
    }
    std::unique_ptr< ::grpc::ClientAsyncReaderInterface< ::pb::DownloadResponse>> PrepareAsyncDownloadFile(::grpc::ClientContext* context, const ::pb::DownloadRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncReaderInterface< ::pb::DownloadResponse>>(PrepareAsyncDownloadFileRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      // UploadFile allows uploading a file as a UnixFS object (equivalent to ipfs add)
      #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
      virtual void UploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::ClientWriteReactor< ::pb::UploadRequest>* reactor) = 0;
      #else
      virtual void UploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::experimental::ClientWriteReactor< ::pb::UploadRequest>* reactor) = 0;
      #endif
      // DownloadFile allows downloading a UnixFS object (equivalent to ipfs get)
      #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
      virtual void DownloadFile(::grpc::ClientContext* context, ::pb::DownloadRequest* request, ::grpc::ClientReadReactor< ::pb::DownloadResponse>* reactor) = 0;
      #else
      virtual void DownloadFile(::grpc::ClientContext* context, ::pb::DownloadRequest* request, ::grpc::experimental::ClientReadReactor< ::pb::DownloadResponse>* reactor) = 0;
      #endif
    };
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
    typedef class experimental_async_interface async_interface;
    #endif
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
    async_interface* async() { return experimental_async(); }
    #endif
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientWriterInterface< ::pb::UploadRequest>* UploadFileRaw(::grpc::ClientContext* context, ::pb::PutResponse* response) = 0;
    virtual ::grpc::ClientAsyncWriterInterface< ::pb::UploadRequest>* AsyncUploadFileRaw(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::CompletionQueue* cq, void* tag) = 0;
    virtual ::grpc::ClientAsyncWriterInterface< ::pb::UploadRequest>* PrepareAsyncUploadFileRaw(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientReaderInterface< ::pb::DownloadResponse>* DownloadFileRaw(::grpc::ClientContext* context, const ::pb::DownloadRequest& request) = 0;
    virtual ::grpc::ClientAsyncReaderInterface< ::pb::DownloadResponse>* AsyncDownloadFileRaw(::grpc::ClientContext* context, const ::pb::DownloadRequest& request, ::grpc::CompletionQueue* cq, void* tag) = 0;
    virtual ::grpc::ClientAsyncReaderInterface< ::pb::DownloadResponse>* PrepareAsyncDownloadFileRaw(::grpc::ClientContext* context, const ::pb::DownloadRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    std::unique_ptr< ::grpc::ClientWriter< ::pb::UploadRequest>> UploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response) {
      return std::unique_ptr< ::grpc::ClientWriter< ::pb::UploadRequest>>(UploadFileRaw(context, response));
    }
    std::unique_ptr< ::grpc::ClientAsyncWriter< ::pb::UploadRequest>> AsyncUploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::CompletionQueue* cq, void* tag) {
      return std::unique_ptr< ::grpc::ClientAsyncWriter< ::pb::UploadRequest>>(AsyncUploadFileRaw(context, response, cq, tag));
    }
    std::unique_ptr< ::grpc::ClientAsyncWriter< ::pb::UploadRequest>> PrepareAsyncUploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncWriter< ::pb::UploadRequest>>(PrepareAsyncUploadFileRaw(context, response, cq));
    }
    std::unique_ptr< ::grpc::ClientReader< ::pb::DownloadResponse>> DownloadFile(::grpc::ClientContext* context, const ::pb::DownloadRequest& request) {
      return std::unique_ptr< ::grpc::ClientReader< ::pb::DownloadResponse>>(DownloadFileRaw(context, request));
    }
    std::unique_ptr< ::grpc::ClientAsyncReader< ::pb::DownloadResponse>> AsyncDownloadFile(::grpc::ClientContext* context, const ::pb::DownloadRequest& request, ::grpc::CompletionQueue* cq, void* tag) {
      return std::unique_ptr< ::grpc::ClientAsyncReader< ::pb::DownloadResponse>>(AsyncDownloadFileRaw(context, request, cq, tag));
    }
    std::unique_ptr< ::grpc::ClientAsyncReader< ::pb::DownloadResponse>> PrepareAsyncDownloadFile(::grpc::ClientContext* context, const ::pb::DownloadRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncReader< ::pb::DownloadResponse>>(PrepareAsyncDownloadFileRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
      void UploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::ClientWriteReactor< ::pb::UploadRequest>* reactor) override;
      #else
      void UploadFile(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::experimental::ClientWriteReactor< ::pb::UploadRequest>* reactor) override;
      #endif
      #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
      void DownloadFile(::grpc::ClientContext* context, ::pb::DownloadRequest* request, ::grpc::ClientReadReactor< ::pb::DownloadResponse>* reactor) override;
      #else
      void DownloadFile(::grpc::ClientContext* context, ::pb::DownloadRequest* request, ::grpc::experimental::ClientReadReactor< ::pb::DownloadResponse>* reactor) override;
      #endif
     private:
      friend class Stub;
      explicit experimental_async(Stub* stub): stub_(stub) { }
      Stub* stub() { return stub_; }
      Stub* stub_;
    };
    class experimental_async_interface* experimental_async() override { return &async_stub_; }

   private:
    std::shared_ptr< ::grpc::ChannelInterface> channel_;
    class experimental_async async_stub_{this};
    ::grpc::ClientWriter< ::pb::UploadRequest>* UploadFileRaw(::grpc::ClientContext* context, ::pb::PutResponse* response) override;
    ::grpc::ClientAsyncWriter< ::pb::UploadRequest>* AsyncUploadFileRaw(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::CompletionQueue* cq, void* tag) override;
    ::grpc::ClientAsyncWriter< ::pb::UploadRequest>* PrepareAsyncUploadFileRaw(::grpc::ClientContext* context, ::pb::PutResponse* response, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientReader< ::pb::DownloadResponse>* DownloadFileRaw(::grpc::ClientContext* context, const ::pb::DownloadRequest& request) override;
    ::grpc::ClientAsyncReader< ::pb::DownloadResponse>* AsyncDownloadFileRaw(::grpc::ClientContext* context, const ::pb::DownloadRequest& request, ::grpc::CompletionQueue* cq, void* tag) override;
    ::grpc::ClientAsyncReader< ::pb::DownloadResponse>* PrepareAsyncDownloadFileRaw(::grpc::ClientContext* context, const ::pb::DownloadRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_UploadFile_;
    const ::grpc::internal::RpcMethod rpcmethod_DownloadFile_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    // UploadFile allows uploading a file as a UnixFS object (equivalent to ipfs add)
    virtual ::grpc::Status UploadFile(::grpc::ServerContext* context, ::grpc::ServerReader< ::pb::UploadRequest>* reader, ::pb::PutResponse* response);
    // DownloadFile allows downloading a UnixFS object (equivalent to ipfs get)
    virtual ::grpc::Status DownloadFile(::grpc::ServerContext* context, const ::pb::DownloadRequest* request, ::grpc::ServerWriter< ::pb::DownloadResponse>* writer);
  };
  template <class BaseClass>
  class WithAsyncMethod_UploadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithAsyncMethod_UploadFile() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_UploadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status UploadFile(::grpc::ServerContext* /*context*/, ::grpc::ServerReader< ::pb::UploadRequest>* /*reader*/, ::pb::PutResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestUploadFile(::grpc::ServerContext* context, ::grpc::ServerAsyncReader< ::pb::PutResponse, ::pb::UploadRequest>* reader, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncClientStreaming(0, context, reader, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_DownloadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithAsyncMethod_DownloadFile() {
      ::grpc::Service::MarkMethodAsync(1);
    }
    ~WithAsyncMethod_DownloadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DownloadFile(::grpc::ServerContext* /*context*/, const ::pb::DownloadRequest* /*request*/, ::grpc::ServerWriter< ::pb::DownloadResponse>* /*writer*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestDownloadFile(::grpc::ServerContext* context, ::pb::DownloadRequest* request, ::grpc::ServerAsyncWriter< ::pb::DownloadResponse>* writer, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncServerStreaming(1, context, request, writer, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_UploadFile<WithAsyncMethod_DownloadFile<Service > > AsyncService;
  template <class BaseClass>
  class ExperimentalWithCallbackMethod_UploadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithCallbackMethod_UploadFile() {
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
      ::grpc::Service::
    #else
      ::grpc::Service::experimental().
    #endif
        MarkMethodCallback(0,
          new ::grpc_impl::internal::CallbackClientStreamingHandler< ::pb::UploadRequest, ::pb::PutResponse>(
            [this](
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
                   ::grpc::CallbackServerContext*
    #else
                   ::grpc::experimental::CallbackServerContext*
    #endif
                     context, ::pb::PutResponse* response) { return this->UploadFile(context, response); }));
    }
    ~ExperimentalWithCallbackMethod_UploadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status UploadFile(::grpc::ServerContext* /*context*/, ::grpc::ServerReader< ::pb::UploadRequest>* /*reader*/, ::pb::PutResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
    virtual ::grpc::ServerReadReactor< ::pb::UploadRequest>* UploadFile(
      ::grpc::CallbackServerContext* /*context*/, ::pb::PutResponse* /*response*/)
    #else
    virtual ::grpc::experimental::ServerReadReactor< ::pb::UploadRequest>* UploadFile(
      ::grpc::experimental::CallbackServerContext* /*context*/, ::pb::PutResponse* /*response*/)
    #endif
      { return nullptr; }
  };
  template <class BaseClass>
  class ExperimentalWithCallbackMethod_DownloadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithCallbackMethod_DownloadFile() {
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
      ::grpc::Service::
    #else
      ::grpc::Service::experimental().
    #endif
        MarkMethodCallback(1,
          new ::grpc_impl::internal::CallbackServerStreamingHandler< ::pb::DownloadRequest, ::pb::DownloadResponse>(
            [this](
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
                   ::grpc::CallbackServerContext*
    #else
                   ::grpc::experimental::CallbackServerContext*
    #endif
                     context, const ::pb::DownloadRequest* request) { return this->DownloadFile(context, request); }));
    }
    ~ExperimentalWithCallbackMethod_DownloadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DownloadFile(::grpc::ServerContext* /*context*/, const ::pb::DownloadRequest* /*request*/, ::grpc::ServerWriter< ::pb::DownloadResponse>* /*writer*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
    virtual ::grpc::ServerWriteReactor< ::pb::DownloadResponse>* DownloadFile(
      ::grpc::CallbackServerContext* /*context*/, const ::pb::DownloadRequest* /*request*/)
    #else
    virtual ::grpc::experimental::ServerWriteReactor< ::pb::DownloadResponse>* DownloadFile(
      ::grpc::experimental::CallbackServerContext* /*context*/, const ::pb::DownloadRequest* /*request*/)
    #endif
      { return nullptr; }
  };
  #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
  typedef ExperimentalWithCallbackMethod_UploadFile<ExperimentalWithCallbackMethod_DownloadFile<Service > > CallbackService;
  #endif

  typedef ExperimentalWithCallbackMethod_UploadFile<ExperimentalWithCallbackMethod_DownloadFile<Service > > ExperimentalCallbackService;
  template <class BaseClass>
  class WithGenericMethod_UploadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithGenericMethod_UploadFile() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_UploadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status UploadFile(::grpc::ServerContext* /*context*/, ::grpc::ServerReader< ::pb::UploadRequest>* /*reader*/, ::pb::PutResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_DownloadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithGenericMethod_DownloadFile() {
      ::grpc::Service::MarkMethodGeneric(1);
    }
    ~WithGenericMethod_DownloadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DownloadFile(::grpc::ServerContext* /*context*/, const ::pb::DownloadRequest* /*request*/, ::grpc::ServerWriter< ::pb::DownloadResponse>* /*writer*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_UploadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithRawMethod_UploadFile() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_UploadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status UploadFile(::grpc::ServerContext* /*context*/, ::grpc::ServerReader< ::pb::UploadRequest>* /*reader*/, ::pb::PutResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestUploadFile(::grpc::ServerContext* context, ::grpc::ServerAsyncReader< ::grpc::ByteBuffer, ::grpc::ByteBuffer>* reader, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncClientStreaming(0, context, reader, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_DownloadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithRawMethod_DownloadFile() {
      ::grpc::Service::MarkMethodRaw(1);
    }
    ~WithRawMethod_DownloadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DownloadFile(::grpc::ServerContext* /*context*/, const ::pb::DownloadRequest* /*request*/, ::grpc::ServerWriter< ::pb::DownloadResponse>* /*writer*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestDownloadFile(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncWriter< ::grpc::ByteBuffer>* writer, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncServerStreaming(1, context, request, writer, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class ExperimentalWithRawCallbackMethod_UploadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithRawCallbackMethod_UploadFile() {
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
      ::grpc::Service::
    #else
      ::grpc::Service::experimental().
    #endif
        MarkMethodRawCallback(0,
          new ::grpc_impl::internal::CallbackClientStreamingHandler< ::grpc::ByteBuffer, ::grpc::ByteBuffer>(
            [this](
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
                   ::grpc::CallbackServerContext*
    #else
                   ::grpc::experimental::CallbackServerContext*
    #endif
                     context, ::grpc::ByteBuffer* response) { return this->UploadFile(context, response); }));
    }
    ~ExperimentalWithRawCallbackMethod_UploadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status UploadFile(::grpc::ServerContext* /*context*/, ::grpc::ServerReader< ::pb::UploadRequest>* /*reader*/, ::pb::PutResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
    virtual ::grpc::ServerReadReactor< ::grpc::ByteBuffer>* UploadFile(
      ::grpc::CallbackServerContext* /*context*/, ::grpc::ByteBuffer* /*response*/)
    #else
    virtual ::grpc::experimental::ServerReadReactor< ::grpc::ByteBuffer>* UploadFile(
      ::grpc::experimental::CallbackServerContext* /*context*/, ::grpc::ByteBuffer* /*response*/)
    #endif
      { return nullptr; }
  };
  template <class BaseClass>
  class ExperimentalWithRawCallbackMethod_DownloadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithRawCallbackMethod_DownloadFile() {
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
      ::grpc::Service::
    #else
      ::grpc::Service::experimental().
    #endif
        MarkMethodRawCallback(1,
          new ::grpc_impl::internal::CallbackServerStreamingHandler< ::grpc::ByteBuffer, ::grpc::ByteBuffer>(
            [this](
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
                   ::grpc::CallbackServerContext*
    #else
                   ::grpc::experimental::CallbackServerContext*
    #endif
                     context, const::grpc::ByteBuffer* request) { return this->DownloadFile(context, request); }));
    }
    ~ExperimentalWithRawCallbackMethod_DownloadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status DownloadFile(::grpc::ServerContext* /*context*/, const ::pb::DownloadRequest* /*request*/, ::grpc::ServerWriter< ::pb::DownloadResponse>* /*writer*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    #ifdef GRPC_CALLBACK_API_NONEXPERIMENTAL
    virtual ::grpc::ServerWriteReactor< ::grpc::ByteBuffer>* DownloadFile(
      ::grpc::CallbackServerContext* /*context*/, const ::grpc::ByteBuffer* /*request*/)
    #else
    virtual ::grpc::experimental::ServerWriteReactor< ::grpc::ByteBuffer>* DownloadFile(
      ::grpc::experimental::CallbackServerContext* /*context*/, const ::grpc::ByteBuffer* /*request*/)
    #endif
      { return nullptr; }
  };
  typedef Service StreamedUnaryService;
  template <class BaseClass>
  class WithSplitStreamingMethod_DownloadFile : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithSplitStreamingMethod_DownloadFile() {
      ::grpc::Service::MarkMethodStreamed(1,
        new ::grpc::internal::SplitServerStreamingHandler< ::pb::DownloadRequest, ::pb::DownloadResponse>(std::bind(&WithSplitStreamingMethod_DownloadFile<BaseClass>::StreamedDownloadFile, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithSplitStreamingMethod_DownloadFile() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status DownloadFile(::grpc::ServerContext* /*context*/, const ::pb::DownloadRequest* /*request*/, ::grpc::ServerWriter< ::pb::DownloadResponse>* /*writer*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with split streamed
    virtual ::grpc::Status StreamedDownloadFile(::grpc::ServerContext* context, ::grpc::ServerSplitStreamer< ::pb::DownloadRequest,::pb::DownloadResponse>* server_split_streamer) = 0;
  };
  typedef WithSplitStreamingMethod_DownloadFile<Service > SplitStreamedService;
  typedef WithSplitStreamingMethod_DownloadFile<Service > StreamedService;
};

}  // namespace pb


#endif  // GRPC_file_2eproto__INCLUDED
