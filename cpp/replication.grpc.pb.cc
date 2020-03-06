// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: replication.proto

#include "replication.pb.h"
#include "replication.grpc.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/channel_interface.h>
#include <grpcpp/impl/codegen/client_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/message_allocator.h>
#include <grpcpp/impl/codegen/method_handler.h>
#include <grpcpp/impl/codegen/rpc_service_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/server_callback_handlers.h>
#include <grpcpp/impl/codegen/server_context.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/sync_stream.h>
namespace pb {

static const char* replicator_method_names[] = {
  "/pb.replicator/Add",
  "/pb.replicator/Status",
  "/pb.replicator/GetSubscriptionUpdate",
  "/pb.replicator/SubmitReplication",
};

std::unique_ptr< replicator::Stub> replicator::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< replicator::Stub> stub(new replicator::Stub(channel));
  return stub;
}

replicator::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_Add_(replicator_method_names[0], ::grpc::internal::RpcMethod::SERVER_STREAMING, channel)
  , rpcmethod_Status_(replicator_method_names[1], ::grpc::internal::RpcMethod::SERVER_STREAMING, channel)
  , rpcmethod_GetSubscriptionUpdate_(replicator_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_SubmitReplication_(replicator_method_names[3], ::grpc::internal::RpcMethod::SERVER_STREAMING, channel)
  {}

::grpc::ClientReader< ::pb::ReplicationStatus>* replicator::Stub::AddRaw(::grpc::ClientContext* context, const ::pb::Subscription& request) {
  return ::grpc_impl::internal::ClientReaderFactory< ::pb::ReplicationStatus>::Create(channel_.get(), rpcmethod_Add_, context, request);
}

void replicator::Stub::experimental_async::Add(::grpc::ClientContext* context, ::pb::Subscription* request, ::grpc::experimental::ClientReadReactor< ::pb::ReplicationStatus>* reactor) {
  ::grpc_impl::internal::ClientCallbackReaderFactory< ::pb::ReplicationStatus>::Create(stub_->channel_.get(), stub_->rpcmethod_Add_, context, request, reactor);
}

::grpc::ClientAsyncReader< ::pb::ReplicationStatus>* replicator::Stub::AsyncAddRaw(::grpc::ClientContext* context, const ::pb::Subscription& request, ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc_impl::internal::ClientAsyncReaderFactory< ::pb::ReplicationStatus>::Create(channel_.get(), cq, rpcmethod_Add_, context, request, true, tag);
}

::grpc::ClientAsyncReader< ::pb::ReplicationStatus>* replicator::Stub::PrepareAsyncAddRaw(::grpc::ClientContext* context, const ::pb::Subscription& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncReaderFactory< ::pb::ReplicationStatus>::Create(channel_.get(), cq, rpcmethod_Add_, context, request, false, nullptr);
}

::grpc::ClientReader< ::pb::ReplicationStatus>* replicator::Stub::StatusRaw(::grpc::ClientContext* context, const ::pb::Subscription& request) {
  return ::grpc_impl::internal::ClientReaderFactory< ::pb::ReplicationStatus>::Create(channel_.get(), rpcmethod_Status_, context, request);
}

void replicator::Stub::experimental_async::Status(::grpc::ClientContext* context, ::pb::Subscription* request, ::grpc::experimental::ClientReadReactor< ::pb::ReplicationStatus>* reactor) {
  ::grpc_impl::internal::ClientCallbackReaderFactory< ::pb::ReplicationStatus>::Create(stub_->channel_.get(), stub_->rpcmethod_Status_, context, request, reactor);
}

::grpc::ClientAsyncReader< ::pb::ReplicationStatus>* replicator::Stub::AsyncStatusRaw(::grpc::ClientContext* context, const ::pb::Subscription& request, ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc_impl::internal::ClientAsyncReaderFactory< ::pb::ReplicationStatus>::Create(channel_.get(), cq, rpcmethod_Status_, context, request, true, tag);
}

::grpc::ClientAsyncReader< ::pb::ReplicationStatus>* replicator::Stub::PrepareAsyncStatusRaw(::grpc::ClientContext* context, const ::pb::Subscription& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncReaderFactory< ::pb::ReplicationStatus>::Create(channel_.get(), cq, rpcmethod_Status_, context, request, false, nullptr);
}

::grpc::Status replicator::Stub::GetSubscriptionUpdate(::grpc::ClientContext* context, const ::pb::Subscription& request, ::pb::SubscriptionUpdate* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetSubscriptionUpdate_, context, request, response);
}

void replicator::Stub::experimental_async::GetSubscriptionUpdate(::grpc::ClientContext* context, const ::pb::Subscription* request, ::pb::SubscriptionUpdate* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetSubscriptionUpdate_, context, request, response, std::move(f));
}

void replicator::Stub::experimental_async::GetSubscriptionUpdate(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::pb::SubscriptionUpdate* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetSubscriptionUpdate_, context, request, response, std::move(f));
}

void replicator::Stub::experimental_async::GetSubscriptionUpdate(::grpc::ClientContext* context, const ::pb::Subscription* request, ::pb::SubscriptionUpdate* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_GetSubscriptionUpdate_, context, request, response, reactor);
}

void replicator::Stub::experimental_async::GetSubscriptionUpdate(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::pb::SubscriptionUpdate* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_GetSubscriptionUpdate_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::pb::SubscriptionUpdate>* replicator::Stub::AsyncGetSubscriptionUpdateRaw(::grpc::ClientContext* context, const ::pb::Subscription& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::pb::SubscriptionUpdate>::Create(channel_.get(), cq, rpcmethod_GetSubscriptionUpdate_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::pb::SubscriptionUpdate>* replicator::Stub::PrepareAsyncGetSubscriptionUpdateRaw(::grpc::ClientContext* context, const ::pb::Subscription& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::pb::SubscriptionUpdate>::Create(channel_.get(), cq, rpcmethod_GetSubscriptionUpdate_, context, request, false);
}

::grpc::ClientReader< ::pb::ReplicationStatus>* replicator::Stub::SubmitReplicationRaw(::grpc::ClientContext* context, const ::pb::SignedSubscription& request) {
  return ::grpc_impl::internal::ClientReaderFactory< ::pb::ReplicationStatus>::Create(channel_.get(), rpcmethod_SubmitReplication_, context, request);
}

void replicator::Stub::experimental_async::SubmitReplication(::grpc::ClientContext* context, ::pb::SignedSubscription* request, ::grpc::experimental::ClientReadReactor< ::pb::ReplicationStatus>* reactor) {
  ::grpc_impl::internal::ClientCallbackReaderFactory< ::pb::ReplicationStatus>::Create(stub_->channel_.get(), stub_->rpcmethod_SubmitReplication_, context, request, reactor);
}

::grpc::ClientAsyncReader< ::pb::ReplicationStatus>* replicator::Stub::AsyncSubmitReplicationRaw(::grpc::ClientContext* context, const ::pb::SignedSubscription& request, ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc_impl::internal::ClientAsyncReaderFactory< ::pb::ReplicationStatus>::Create(channel_.get(), cq, rpcmethod_SubmitReplication_, context, request, true, tag);
}

::grpc::ClientAsyncReader< ::pb::ReplicationStatus>* replicator::Stub::PrepareAsyncSubmitReplicationRaw(::grpc::ClientContext* context, const ::pb::SignedSubscription& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncReaderFactory< ::pb::ReplicationStatus>::Create(channel_.get(), cq, rpcmethod_SubmitReplication_, context, request, false, nullptr);
}

replicator::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      replicator_method_names[0],
      ::grpc::internal::RpcMethod::SERVER_STREAMING,
      new ::grpc::internal::ServerStreamingHandler< replicator::Service, ::pb::Subscription, ::pb::ReplicationStatus>(
          std::mem_fn(&replicator::Service::Add), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      replicator_method_names[1],
      ::grpc::internal::RpcMethod::SERVER_STREAMING,
      new ::grpc::internal::ServerStreamingHandler< replicator::Service, ::pb::Subscription, ::pb::ReplicationStatus>(
          std::mem_fn(&replicator::Service::Status), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      replicator_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< replicator::Service, ::pb::Subscription, ::pb::SubscriptionUpdate>(
          std::mem_fn(&replicator::Service::GetSubscriptionUpdate), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      replicator_method_names[3],
      ::grpc::internal::RpcMethod::SERVER_STREAMING,
      new ::grpc::internal::ServerStreamingHandler< replicator::Service, ::pb::SignedSubscription, ::pb::ReplicationStatus>(
          std::mem_fn(&replicator::Service::SubmitReplication), this)));
}

replicator::Service::~Service() {
}

::grpc::Status replicator::Service::Add(::grpc::ServerContext* context, const ::pb::Subscription* request, ::grpc::ServerWriter< ::pb::ReplicationStatus>* writer) {
  (void) context;
  (void) request;
  (void) writer;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status replicator::Service::Status(::grpc::ServerContext* context, const ::pb::Subscription* request, ::grpc::ServerWriter< ::pb::ReplicationStatus>* writer) {
  (void) context;
  (void) request;
  (void) writer;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status replicator::Service::GetSubscriptionUpdate(::grpc::ServerContext* context, const ::pb::Subscription* request, ::pb::SubscriptionUpdate* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status replicator::Service::SubmitReplication(::grpc::ServerContext* context, const ::pb::SignedSubscription* request, ::grpc::ServerWriter< ::pb::ReplicationStatus>* writer) {
  (void) context;
  (void) request;
  (void) writer;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace pb

