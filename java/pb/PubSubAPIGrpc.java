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
      pb.Pubsub.TopicsResponse> getGetTopicsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetTopics",
      requestType = pb.Util.Empty.class,
      responseType = pb.Pubsub.TopicsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Util.Empty,
      pb.Pubsub.TopicsResponse> getGetTopicsMethod() {
    io.grpc.MethodDescriptor<pb.Util.Empty, pb.Pubsub.TopicsResponse> getGetTopicsMethod;
    if ((getGetTopicsMethod = PubSubAPIGrpc.getGetTopicsMethod) == null) {
      synchronized (PubSubAPIGrpc.class) {
        if ((getGetTopicsMethod = PubSubAPIGrpc.getGetTopicsMethod) == null) {
          PubSubAPIGrpc.getGetTopicsMethod = getGetTopicsMethod = 
              io.grpc.MethodDescriptor.<pb.Util.Empty, pb.Pubsub.TopicsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.PubSubAPI", "GetTopics"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.TopicsResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new PubSubAPIMethodDescriptorSupplier("GetTopics"))
                  .build();
          }
        }
     }
     return getGetTopicsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Pubsub.ListPeersRequest,
      pb.Pubsub.ListPeersResponse> getListPeersMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListPeers",
      requestType = pb.Pubsub.ListPeersRequest.class,
      responseType = pb.Pubsub.ListPeersResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Pubsub.ListPeersRequest,
      pb.Pubsub.ListPeersResponse> getListPeersMethod() {
    io.grpc.MethodDescriptor<pb.Pubsub.ListPeersRequest, pb.Pubsub.ListPeersResponse> getListPeersMethod;
    if ((getListPeersMethod = PubSubAPIGrpc.getListPeersMethod) == null) {
      synchronized (PubSubAPIGrpc.class) {
        if ((getListPeersMethod = PubSubAPIGrpc.getListPeersMethod) == null) {
          PubSubAPIGrpc.getListPeersMethod = getListPeersMethod = 
              io.grpc.MethodDescriptor.<pb.Pubsub.ListPeersRequest, pb.Pubsub.ListPeersResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.PubSubAPI", "ListPeers"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.ListPeersRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.ListPeersResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new PubSubAPIMethodDescriptorSupplier("ListPeers"))
                  .build();
          }
        }
     }
     return getListPeersMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Pubsub.PubSubSubscribeRequest,
      pb.Pubsub.PubSubMessageResponse> getSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Subscribe",
      requestType = pb.Pubsub.PubSubSubscribeRequest.class,
      responseType = pb.Pubsub.PubSubMessageResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<pb.Pubsub.PubSubSubscribeRequest,
      pb.Pubsub.PubSubMessageResponse> getSubscribeMethod() {
    io.grpc.MethodDescriptor<pb.Pubsub.PubSubSubscribeRequest, pb.Pubsub.PubSubMessageResponse> getSubscribeMethod;
    if ((getSubscribeMethod = PubSubAPIGrpc.getSubscribeMethod) == null) {
      synchronized (PubSubAPIGrpc.class) {
        if ((getSubscribeMethod = PubSubAPIGrpc.getSubscribeMethod) == null) {
          PubSubAPIGrpc.getSubscribeMethod = getSubscribeMethod = 
              io.grpc.MethodDescriptor.<pb.Pubsub.PubSubSubscribeRequest, pb.Pubsub.PubSubMessageResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.PubSubAPI", "Subscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubMessageResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new PubSubAPIMethodDescriptorSupplier("Subscribe"))
                  .build();
          }
        }
     }
     return getSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Pubsub.PubSubPublishRequest,
      pb.Util.Empty> getPublishMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Publish",
      requestType = pb.Pubsub.PubSubPublishRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
  public static io.grpc.MethodDescriptor<pb.Pubsub.PubSubPublishRequest,
      pb.Util.Empty> getPublishMethod() {
    io.grpc.MethodDescriptor<pb.Pubsub.PubSubPublishRequest, pb.Util.Empty> getPublishMethod;
    if ((getPublishMethod = PubSubAPIGrpc.getPublishMethod) == null) {
      synchronized (PubSubAPIGrpc.class) {
        if ((getPublishMethod = PubSubAPIGrpc.getPublishMethod) == null) {
          PubSubAPIGrpc.getPublishMethod = getPublishMethod = 
              io.grpc.MethodDescriptor.<pb.Pubsub.PubSubPublishRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.PubSubAPI", "Publish"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubPublishRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new PubSubAPIMethodDescriptorSupplier("Publish"))
                  .build();
          }
        }
     }
     return getPublishMethod;
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
     * GetTopics is used to return a list of all
     * known topics the pubsub instance is subscribed to.
     * </pre>
     */
    public void getTopics(pb.Util.Empty request,
        io.grpc.stub.StreamObserver<pb.Pubsub.TopicsResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetTopicsMethod(), responseObserver);
    }

    /**
     * <pre>
     * ListPeers is used to return a list of peers subscribed
     * to a given topic or topics.
     * </pre>
     */
    public void listPeers(pb.Pubsub.ListPeersRequest request,
        io.grpc.stub.StreamObserver<pb.Pubsub.ListPeersResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getListPeersMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe is used to subscribe to a topic and receive messages
     * Server will stream the messages received on the topic specified 
     * during the initial subscription call, and send each message
     * back to the client as it is received. 
     * </pre>
     */
    public void subscribe(pb.Pubsub.PubSubSubscribeRequest request,
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubMessageResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Publish is used to send a stream of messages to a pubsub topic.
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Pubsub.PubSubPublishRequest> publish(
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      return asyncUnimplementedStreamingCall(getPublishMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetTopicsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Util.Empty,
                pb.Pubsub.TopicsResponse>(
                  this, METHODID_GET_TOPICS)))
          .addMethod(
            getListPeersMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Pubsub.ListPeersRequest,
                pb.Pubsub.ListPeersResponse>(
                  this, METHODID_LIST_PEERS)))
          .addMethod(
            getSubscribeMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                pb.Pubsub.PubSubSubscribeRequest,
                pb.Pubsub.PubSubMessageResponse>(
                  this, METHODID_SUBSCRIBE)))
          .addMethod(
            getPublishMethod(),
            asyncClientStreamingCall(
              new MethodHandlers<
                pb.Pubsub.PubSubPublishRequest,
                pb.Util.Empty>(
                  this, METHODID_PUBLISH)))
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
     * GetTopics is used to return a list of all
     * known topics the pubsub instance is subscribed to.
     * </pre>
     */
    public void getTopics(pb.Util.Empty request,
        io.grpc.stub.StreamObserver<pb.Pubsub.TopicsResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetTopicsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * ListPeers is used to return a list of peers subscribed
     * to a given topic or topics.
     * </pre>
     */
    public void listPeers(pb.Pubsub.ListPeersRequest request,
        io.grpc.stub.StreamObserver<pb.Pubsub.ListPeersResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListPeersMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe is used to subscribe to a topic and receive messages
     * Server will stream the messages received on the topic specified 
     * during the initial subscription call, and send each message
     * back to the client as it is received. 
     * </pre>
     */
    public void subscribe(pb.Pubsub.PubSubSubscribeRequest request,
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubMessageResponse> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Publish is used to send a stream of messages to a pubsub topic.
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Pubsub.PubSubPublishRequest> publish(
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      return asyncClientStreamingCall(
          getChannel().newCall(getPublishMethod(), getCallOptions()), responseObserver);
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
     * GetTopics is used to return a list of all
     * known topics the pubsub instance is subscribed to.
     * </pre>
     */
    public pb.Pubsub.TopicsResponse getTopics(pb.Util.Empty request) {
      return blockingUnaryCall(
          getChannel(), getGetTopicsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * ListPeers is used to return a list of peers subscribed
     * to a given topic or topics.
     * </pre>
     */
    public pb.Pubsub.ListPeersResponse listPeers(pb.Pubsub.ListPeersRequest request) {
      return blockingUnaryCall(
          getChannel(), getListPeersMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe is used to subscribe to a topic and receive messages
     * Server will stream the messages received on the topic specified 
     * during the initial subscription call, and send each message
     * back to the client as it is received. 
     * </pre>
     */
    public java.util.Iterator<pb.Pubsub.PubSubMessageResponse> subscribe(
        pb.Pubsub.PubSubSubscribeRequest request) {
      return blockingServerStreamingCall(
          getChannel(), getSubscribeMethod(), getCallOptions(), request);
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
     * GetTopics is used to return a list of all
     * known topics the pubsub instance is subscribed to.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Pubsub.TopicsResponse> getTopics(
        pb.Util.Empty request) {
      return futureUnaryCall(
          getChannel().newCall(getGetTopicsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * ListPeers is used to return a list of peers subscribed
     * to a given topic or topics.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Pubsub.ListPeersResponse> listPeers(
        pb.Pubsub.ListPeersRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListPeersMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_TOPICS = 0;
  private static final int METHODID_LIST_PEERS = 1;
  private static final int METHODID_SUBSCRIBE = 2;
  private static final int METHODID_PUBLISH = 3;

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
        case METHODID_GET_TOPICS:
          serviceImpl.getTopics((pb.Util.Empty) request,
              (io.grpc.stub.StreamObserver<pb.Pubsub.TopicsResponse>) responseObserver);
          break;
        case METHODID_LIST_PEERS:
          serviceImpl.listPeers((pb.Pubsub.ListPeersRequest) request,
              (io.grpc.stub.StreamObserver<pb.Pubsub.ListPeersResponse>) responseObserver);
          break;
        case METHODID_SUBSCRIBE:
          serviceImpl.subscribe((pb.Pubsub.PubSubSubscribeRequest) request,
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
        case METHODID_PUBLISH:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.publish(
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
              .addMethod(getGetTopicsMethod())
              .addMethod(getListPeersMethod())
              .addMethod(getSubscribeMethod())
              .addMethod(getPublishMethod())
              .build();
        }
      }
    }
    return result;
  }
}
