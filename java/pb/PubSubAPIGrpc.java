package pb;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 * <pre>
 * PubSubAPI provides a gRPC API for a libp2p pubsub instance
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.19.0)",
    comments = "Source: pubsub.proto")
public final class PubSubAPIGrpc {

  private PubSubAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.PubSubAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Util.Empty,
      pb.Pubsub.PubSubTopicsResponse> getPubSubGetTopicsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PubSubGetTopics",
      requestType = pb.Util.Empty.class,
      responseType = pb.Pubsub.PubSubTopicsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Util.Empty,
      pb.Pubsub.PubSubTopicsResponse> getPubSubGetTopicsMethod() {
    io.grpc.MethodDescriptor<pb.Util.Empty, pb.Pubsub.PubSubTopicsResponse> getPubSubGetTopicsMethod;
    if ((getPubSubGetTopicsMethod = PubSubAPIGrpc.getPubSubGetTopicsMethod) == null) {
      synchronized (PubSubAPIGrpc.class) {
        if ((getPubSubGetTopicsMethod = PubSubAPIGrpc.getPubSubGetTopicsMethod) == null) {
          PubSubAPIGrpc.getPubSubGetTopicsMethod = getPubSubGetTopicsMethod = 
              io.grpc.MethodDescriptor.<pb.Util.Empty, pb.Pubsub.PubSubTopicsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.PubSubAPI", "PubSubGetTopics"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubTopicsResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new PubSubAPIMethodDescriptorSupplier("PubSubGetTopics"))
                  .build();
          }
        }
     }
     return getPubSubGetTopicsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Pubsub.PubSubListPeersRequest,
      pb.Pubsub.PubSubListPeersResponse> getPubSubListPeersMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PubSubListPeers",
      requestType = pb.Pubsub.PubSubListPeersRequest.class,
      responseType = pb.Pubsub.PubSubListPeersResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Pubsub.PubSubListPeersRequest,
      pb.Pubsub.PubSubListPeersResponse> getPubSubListPeersMethod() {
    io.grpc.MethodDescriptor<pb.Pubsub.PubSubListPeersRequest, pb.Pubsub.PubSubListPeersResponse> getPubSubListPeersMethod;
    if ((getPubSubListPeersMethod = PubSubAPIGrpc.getPubSubListPeersMethod) == null) {
      synchronized (PubSubAPIGrpc.class) {
        if ((getPubSubListPeersMethod = PubSubAPIGrpc.getPubSubListPeersMethod) == null) {
          PubSubAPIGrpc.getPubSubListPeersMethod = getPubSubListPeersMethod = 
              io.grpc.MethodDescriptor.<pb.Pubsub.PubSubListPeersRequest, pb.Pubsub.PubSubListPeersResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.PubSubAPI", "PubSubListPeers"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubListPeersRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubListPeersResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new PubSubAPIMethodDescriptorSupplier("PubSubListPeers"))
                  .build();
          }
        }
     }
     return getPubSubListPeersMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Pubsub.PubSubSubscribeRequest,
      pb.Pubsub.PubSubMessageResponse> getPubSubSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PubSubSubscribe",
      requestType = pb.Pubsub.PubSubSubscribeRequest.class,
      responseType = pb.Pubsub.PubSubMessageResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<pb.Pubsub.PubSubSubscribeRequest,
      pb.Pubsub.PubSubMessageResponse> getPubSubSubscribeMethod() {
    io.grpc.MethodDescriptor<pb.Pubsub.PubSubSubscribeRequest, pb.Pubsub.PubSubMessageResponse> getPubSubSubscribeMethod;
    if ((getPubSubSubscribeMethod = PubSubAPIGrpc.getPubSubSubscribeMethod) == null) {
      synchronized (PubSubAPIGrpc.class) {
        if ((getPubSubSubscribeMethod = PubSubAPIGrpc.getPubSubSubscribeMethod) == null) {
          PubSubAPIGrpc.getPubSubSubscribeMethod = getPubSubSubscribeMethod = 
              io.grpc.MethodDescriptor.<pb.Pubsub.PubSubSubscribeRequest, pb.Pubsub.PubSubMessageResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.PubSubAPI", "PubSubSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubMessageResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new PubSubAPIMethodDescriptorSupplier("PubSubSubscribe"))
                  .build();
          }
        }
     }
     return getPubSubSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Pubsub.PubSubPublishRequest,
      pb.Util.Empty> getPubSubPublishMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PubSubPublish",
      requestType = pb.Pubsub.PubSubPublishRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
  public static io.grpc.MethodDescriptor<pb.Pubsub.PubSubPublishRequest,
      pb.Util.Empty> getPubSubPublishMethod() {
    io.grpc.MethodDescriptor<pb.Pubsub.PubSubPublishRequest, pb.Util.Empty> getPubSubPublishMethod;
    if ((getPubSubPublishMethod = PubSubAPIGrpc.getPubSubPublishMethod) == null) {
      synchronized (PubSubAPIGrpc.class) {
        if ((getPubSubPublishMethod = PubSubAPIGrpc.getPubSubPublishMethod) == null) {
          PubSubAPIGrpc.getPubSubPublishMethod = getPubSubPublishMethod = 
              io.grpc.MethodDescriptor.<pb.Pubsub.PubSubPublishRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.PubSubAPI", "PubSubPublish"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubPublishRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new PubSubAPIMethodDescriptorSupplier("PubSubPublish"))
                  .build();
          }
        }
     }
     return getPubSubPublishMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static PubSubAPIStub newStub(io.grpc.Channel channel) {
    return new PubSubAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static PubSubAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new PubSubAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static PubSubAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new PubSubAPIFutureStub(channel);
  }

  /**
   * <pre>
   * PubSubAPI provides a gRPC API for a libp2p pubsub instance
   * </pre>
   */
  public static abstract class PubSubAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * PubSubGetTopics is used to return a list of all
     * known topics the pubsub instance is subscribed to.
     * </pre>
     */
    public void pubSubGetTopics(pb.Util.Empty request,
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubTopicsResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getPubSubGetTopicsMethod(), responseObserver);
    }

    /**
     * <pre>
     * PubSubListPeers is used to return a list of peers subscribed
     * to a given topic or topics.
     * </pre>
     */
    public void pubSubListPeers(pb.Pubsub.PubSubListPeersRequest request,
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubListPeersResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getPubSubListPeersMethod(), responseObserver);
    }

    /**
     * <pre>
     * PubSubSubscribe is used to subscribe to a topic and receive messages
     * Server will stream the messages received on the topic specified 
     * during the initial subscription call, and send each message
     * back to the client as it is received. 
     * </pre>
     */
    public void pubSubSubscribe(pb.Pubsub.PubSubSubscribeRequest request,
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubMessageResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getPubSubSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * PubSubPublish is used to send a stream of messages to a pubsub topic.
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Pubsub.PubSubPublishRequest> pubSubPublish(
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      return asyncUnimplementedStreamingCall(getPubSubPublishMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getPubSubGetTopicsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Util.Empty,
                pb.Pubsub.PubSubTopicsResponse>(
                  this, METHODID_PUB_SUB_GET_TOPICS)))
          .addMethod(
            getPubSubListPeersMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Pubsub.PubSubListPeersRequest,
                pb.Pubsub.PubSubListPeersResponse>(
                  this, METHODID_PUB_SUB_LIST_PEERS)))
          .addMethod(
            getPubSubSubscribeMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                pb.Pubsub.PubSubSubscribeRequest,
                pb.Pubsub.PubSubMessageResponse>(
                  this, METHODID_PUB_SUB_SUBSCRIBE)))
          .addMethod(
            getPubSubPublishMethod(),
            asyncClientStreamingCall(
              new MethodHandlers<
                pb.Pubsub.PubSubPublishRequest,
                pb.Util.Empty>(
                  this, METHODID_PUB_SUB_PUBLISH)))
          .build();
    }
  }

  /**
   * <pre>
   * PubSubAPI provides a gRPC API for a libp2p pubsub instance
   * </pre>
   */
  public static final class PubSubAPIStub extends io.grpc.stub.AbstractStub<PubSubAPIStub> {
    private PubSubAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private PubSubAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PubSubAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new PubSubAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     * PubSubGetTopics is used to return a list of all
     * known topics the pubsub instance is subscribed to.
     * </pre>
     */
    public void pubSubGetTopics(pb.Util.Empty request,
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubTopicsResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getPubSubGetTopicsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * PubSubListPeers is used to return a list of peers subscribed
     * to a given topic or topics.
     * </pre>
     */
    public void pubSubListPeers(pb.Pubsub.PubSubListPeersRequest request,
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubListPeersResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getPubSubListPeersMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * PubSubSubscribe is used to subscribe to a topic and receive messages
     * Server will stream the messages received on the topic specified 
     * during the initial subscription call, and send each message
     * back to the client as it is received. 
     * </pre>
     */
    public void pubSubSubscribe(pb.Pubsub.PubSubSubscribeRequest request,
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubMessageResponse> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getPubSubSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * PubSubPublish is used to send a stream of messages to a pubsub topic.
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Pubsub.PubSubPublishRequest> pubSubPublish(
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      return asyncClientStreamingCall(
          getChannel().newCall(getPubSubPublishMethod(), getCallOptions()), responseObserver);
    }
  }

  /**
   * <pre>
   * PubSubAPI provides a gRPC API for a libp2p pubsub instance
   * </pre>
   */
  public static final class PubSubAPIBlockingStub extends io.grpc.stub.AbstractStub<PubSubAPIBlockingStub> {
    private PubSubAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private PubSubAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PubSubAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new PubSubAPIBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * PubSubGetTopics is used to return a list of all
     * known topics the pubsub instance is subscribed to.
     * </pre>
     */
    public pb.Pubsub.PubSubTopicsResponse pubSubGetTopics(pb.Util.Empty request) {
      return blockingUnaryCall(
          getChannel(), getPubSubGetTopicsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * PubSubListPeers is used to return a list of peers subscribed
     * to a given topic or topics.
     * </pre>
     */
    public pb.Pubsub.PubSubListPeersResponse pubSubListPeers(pb.Pubsub.PubSubListPeersRequest request) {
      return blockingUnaryCall(
          getChannel(), getPubSubListPeersMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * PubSubSubscribe is used to subscribe to a topic and receive messages
     * Server will stream the messages received on the topic specified 
     * during the initial subscription call, and send each message
     * back to the client as it is received. 
     * </pre>
     */
    public java.util.Iterator<pb.Pubsub.PubSubMessageResponse> pubSubSubscribe(
        pb.Pubsub.PubSubSubscribeRequest request) {
      return blockingServerStreamingCall(
          getChannel(), getPubSubSubscribeMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * PubSubAPI provides a gRPC API for a libp2p pubsub instance
   * </pre>
   */
  public static final class PubSubAPIFutureStub extends io.grpc.stub.AbstractStub<PubSubAPIFutureStub> {
    private PubSubAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private PubSubAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PubSubAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new PubSubAPIFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * PubSubGetTopics is used to return a list of all
     * known topics the pubsub instance is subscribed to.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Pubsub.PubSubTopicsResponse> pubSubGetTopics(
        pb.Util.Empty request) {
      return futureUnaryCall(
          getChannel().newCall(getPubSubGetTopicsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * PubSubListPeers is used to return a list of peers subscribed
     * to a given topic or topics.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Pubsub.PubSubListPeersResponse> pubSubListPeers(
        pb.Pubsub.PubSubListPeersRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getPubSubListPeersMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_PUB_SUB_GET_TOPICS = 0;
  private static final int METHODID_PUB_SUB_LIST_PEERS = 1;
  private static final int METHODID_PUB_SUB_SUBSCRIBE = 2;
  private static final int METHODID_PUB_SUB_PUBLISH = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final PubSubAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(PubSubAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_PUB_SUB_GET_TOPICS:
          serviceImpl.pubSubGetTopics((pb.Util.Empty) request,
              (io.grpc.stub.StreamObserver<pb.Pubsub.PubSubTopicsResponse>) responseObserver);
          break;
        case METHODID_PUB_SUB_LIST_PEERS:
          serviceImpl.pubSubListPeers((pb.Pubsub.PubSubListPeersRequest) request,
              (io.grpc.stub.StreamObserver<pb.Pubsub.PubSubListPeersResponse>) responseObserver);
          break;
        case METHODID_PUB_SUB_SUBSCRIBE:
          serviceImpl.pubSubSubscribe((pb.Pubsub.PubSubSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<pb.Pubsub.PubSubMessageResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_PUB_SUB_PUBLISH:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.pubSubPublish(
              (io.grpc.stub.StreamObserver<pb.Util.Empty>) responseObserver);
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class PubSubAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    PubSubAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.Pubsub.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("PubSubAPI");
    }
  }

  private static final class PubSubAPIFileDescriptorSupplier
      extends PubSubAPIBaseDescriptorSupplier {
    PubSubAPIFileDescriptorSupplier() {}
  }

  private static final class PubSubAPIMethodDescriptorSupplier
      extends PubSubAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    PubSubAPIMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (PubSubAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new PubSubAPIFileDescriptorSupplier())
              .addMethod(getPubSubGetTopicsMethod())
              .addMethod(getPubSubListPeersMethod())
              .addMethod(getPubSubSubscribeMethod())
              .addMethod(getPubSubPublishMethod())
              .build();
        }
      }
    }
    return result;
  }
}
