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
 * IPNSAPI provides an API to access IPNS functionality
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.19.0)",
    comments = "Source: ipns.proto")
public final class IPNSAPIGrpc {

  private IPNSAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.IPNSAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Ipns.NameResolveRequest,
      pb.Ipns.NameResolveResult> getResolveMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Resolve",
      requestType = pb.Ipns.NameResolveRequest.class,
      responseType = pb.Ipns.NameResolveResult.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Ipns.NameResolveRequest,
      pb.Ipns.NameResolveResult> getResolveMethod() {
    io.grpc.MethodDescriptor<pb.Ipns.NameResolveRequest, pb.Ipns.NameResolveResult> getResolveMethod;
    if ((getResolveMethod = IPNSAPIGrpc.getResolveMethod) == null) {
      synchronized (IPNSAPIGrpc.class) {
        if ((getResolveMethod = IPNSAPIGrpc.getResolveMethod) == null) {
          IPNSAPIGrpc.getResolveMethod = getResolveMethod = 
              io.grpc.MethodDescriptor.<pb.Ipns.NameResolveRequest, pb.Ipns.NameResolveResult>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.IPNSAPI", "Resolve"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Ipns.NameResolveRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Ipns.NameResolveResult.getDefaultInstance()))
                  .setSchemaDescriptor(new IPNSAPIMethodDescriptorSupplier("Resolve"))
                  .build();
          }
        }
     }
     return getResolveMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Ipns.NameResolveRequest,
      pb.Ipns.NameResolveResult> getResolveAsyncMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ResolveAsync",
      requestType = pb.Ipns.NameResolveRequest.class,
      responseType = pb.Ipns.NameResolveResult.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<pb.Ipns.NameResolveRequest,
      pb.Ipns.NameResolveResult> getResolveAsyncMethod() {
    io.grpc.MethodDescriptor<pb.Ipns.NameResolveRequest, pb.Ipns.NameResolveResult> getResolveAsyncMethod;
    if ((getResolveAsyncMethod = IPNSAPIGrpc.getResolveAsyncMethod) == null) {
      synchronized (IPNSAPIGrpc.class) {
        if ((getResolveAsyncMethod = IPNSAPIGrpc.getResolveAsyncMethod) == null) {
          IPNSAPIGrpc.getResolveAsyncMethod = getResolveAsyncMethod = 
              io.grpc.MethodDescriptor.<pb.Ipns.NameResolveRequest, pb.Ipns.NameResolveResult>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.IPNSAPI", "ResolveAsync"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Ipns.NameResolveRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Ipns.NameResolveResult.getDefaultInstance()))
                  .setSchemaDescriptor(new IPNSAPIMethodDescriptorSupplier("ResolveAsync"))
                  .build();
          }
        }
     }
     return getResolveAsyncMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Ipns.NamePublishRequest,
      pb.Util.Empty> getPublishMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Publish",
      requestType = pb.Ipns.NamePublishRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Ipns.NamePublishRequest,
      pb.Util.Empty> getPublishMethod() {
    io.grpc.MethodDescriptor<pb.Ipns.NamePublishRequest, pb.Util.Empty> getPublishMethod;
    if ((getPublishMethod = IPNSAPIGrpc.getPublishMethod) == null) {
      synchronized (IPNSAPIGrpc.class) {
        if ((getPublishMethod = IPNSAPIGrpc.getPublishMethod) == null) {
          IPNSAPIGrpc.getPublishMethod = getPublishMethod = 
              io.grpc.MethodDescriptor.<pb.Ipns.NamePublishRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.IPNSAPI", "Publish"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Ipns.NamePublishRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new IPNSAPIMethodDescriptorSupplier("Publish"))
                  .build();
          }
        }
     }
     return getPublishMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static IPNSAPIStub newStub(io.grpc.Channel channel) {
    return new IPNSAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static IPNSAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new IPNSAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static IPNSAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new IPNSAPIFutureStub(channel);
  }

  /**
   * <pre>
   * IPNSAPI provides an API to access IPNS functionality
   * </pre>
   */
  public static abstract class IPNSAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Resolve is used to resolve a name, waiting for the request to complete
     * </pre>
     */
    public void resolve(pb.Ipns.NameResolveRequest request,
        io.grpc.stub.StreamObserver<pb.Ipns.NameResolveResult> responseObserver) {
      asyncUnimplementedUnaryCall(getResolveMethod(), responseObserver);
    }

    /**
     * <pre>
     * ResolveAsync is like Resolve, except instead of waiting for the request
     * to complete, we send back a stream which we will send the result on
     * </pre>
     */
    public void resolveAsync(pb.Ipns.NameResolveRequest request,
        io.grpc.stub.StreamObserver<pb.Ipns.NameResolveResult> responseObserver) {
      asyncUnimplementedUnaryCall(getResolveAsyncMethod(), responseObserver);
    }

    /**
     * <pre>
     * Publish is used to publish an IPNS record, with/with-out an EOL
     * </pre>
     */
    public void publish(pb.Ipns.NamePublishRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getPublishMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getResolveMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Ipns.NameResolveRequest,
                pb.Ipns.NameResolveResult>(
                  this, METHODID_RESOLVE)))
          .addMethod(
            getResolveAsyncMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                pb.Ipns.NameResolveRequest,
                pb.Ipns.NameResolveResult>(
                  this, METHODID_RESOLVE_ASYNC)))
          .addMethod(
            getPublishMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Ipns.NamePublishRequest,
                pb.Util.Empty>(
                  this, METHODID_PUBLISH)))
          .build();
    }
  }

  /**
   * <pre>
   * IPNSAPI provides an API to access IPNS functionality
   * </pre>
   */
  public static final class IPNSAPIStub extends io.grpc.stub.AbstractStub<IPNSAPIStub> {
    private IPNSAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private IPNSAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected IPNSAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new IPNSAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     * Resolve is used to resolve a name, waiting for the request to complete
     * </pre>
     */
    public void resolve(pb.Ipns.NameResolveRequest request,
        io.grpc.stub.StreamObserver<pb.Ipns.NameResolveResult> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getResolveMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * ResolveAsync is like Resolve, except instead of waiting for the request
     * to complete, we send back a stream which we will send the result on
     * </pre>
     */
    public void resolveAsync(pb.Ipns.NameResolveRequest request,
        io.grpc.stub.StreamObserver<pb.Ipns.NameResolveResult> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getResolveAsyncMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Publish is used to publish an IPNS record, with/with-out an EOL
     * </pre>
     */
    public void publish(pb.Ipns.NamePublishRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getPublishMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * IPNSAPI provides an API to access IPNS functionality
   * </pre>
   */
  public static final class IPNSAPIBlockingStub extends io.grpc.stub.AbstractStub<IPNSAPIBlockingStub> {
    private IPNSAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private IPNSAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected IPNSAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new IPNSAPIBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Resolve is used to resolve a name, waiting for the request to complete
     * </pre>
     */
    public pb.Ipns.NameResolveResult resolve(pb.Ipns.NameResolveRequest request) {
      return blockingUnaryCall(
          getChannel(), getResolveMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * ResolveAsync is like Resolve, except instead of waiting for the request
     * to complete, we send back a stream which we will send the result on
     * </pre>
     */
    public java.util.Iterator<pb.Ipns.NameResolveResult> resolveAsync(
        pb.Ipns.NameResolveRequest request) {
      return blockingServerStreamingCall(
          getChannel(), getResolveAsyncMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Publish is used to publish an IPNS record, with/with-out an EOL
     * </pre>
     */
    public pb.Util.Empty publish(pb.Ipns.NamePublishRequest request) {
      return blockingUnaryCall(
          getChannel(), getPublishMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * IPNSAPI provides an API to access IPNS functionality
   * </pre>
   */
  public static final class IPNSAPIFutureStub extends io.grpc.stub.AbstractStub<IPNSAPIFutureStub> {
    private IPNSAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private IPNSAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected IPNSAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new IPNSAPIFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Resolve is used to resolve a name, waiting for the request to complete
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Ipns.NameResolveResult> resolve(
        pb.Ipns.NameResolveRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getResolveMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Publish is used to publish an IPNS record, with/with-out an EOL
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Util.Empty> publish(
        pb.Ipns.NamePublishRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getPublishMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_RESOLVE = 0;
  private static final int METHODID_RESOLVE_ASYNC = 1;
  private static final int METHODID_PUBLISH = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final IPNSAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(IPNSAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_RESOLVE:
          serviceImpl.resolve((pb.Ipns.NameResolveRequest) request,
              (io.grpc.stub.StreamObserver<pb.Ipns.NameResolveResult>) responseObserver);
          break;
        case METHODID_RESOLVE_ASYNC:
          serviceImpl.resolveAsync((pb.Ipns.NameResolveRequest) request,
              (io.grpc.stub.StreamObserver<pb.Ipns.NameResolveResult>) responseObserver);
          break;
        case METHODID_PUBLISH:
          serviceImpl.publish((pb.Ipns.NamePublishRequest) request,
              (io.grpc.stub.StreamObserver<pb.Util.Empty>) responseObserver);
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
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class IPNSAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    IPNSAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.Ipns.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("IPNSAPI");
    }
  }

  private static final class IPNSAPIFileDescriptorSupplier
      extends IPNSAPIBaseDescriptorSupplier {
    IPNSAPIFileDescriptorSupplier() {}
  }

  private static final class IPNSAPIMethodDescriptorSupplier
      extends IPNSAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    IPNSAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (IPNSAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new IPNSAPIFileDescriptorSupplier())
              .addMethod(getResolveMethod())
              .addMethod(getResolveAsyncMethod())
              .addMethod(getPublishMethod())
              .build();
        }
      }
    }
    return result;
  }
}
