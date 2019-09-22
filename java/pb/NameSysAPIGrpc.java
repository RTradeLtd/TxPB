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
 * NameSysAPI provides a generic name resolution API
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.19.0)",
    comments = "Source: namesys.proto")
public final class NameSysAPIGrpc {

  private NameSysAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.NameSysAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Namesys.NameSysResolveRequest,
      pb.Namesys.NameSysResolveResult> getNameSysNameSysResolveMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "NameSysNameSysResolve",
      requestType = pb.Namesys.NameSysResolveRequest.class,
      responseType = pb.Namesys.NameSysResolveResult.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Namesys.NameSysResolveRequest,
      pb.Namesys.NameSysResolveResult> getNameSysNameSysResolveMethod() {
    io.grpc.MethodDescriptor<pb.Namesys.NameSysResolveRequest, pb.Namesys.NameSysResolveResult> getNameSysNameSysResolveMethod;
    if ((getNameSysNameSysResolveMethod = NameSysAPIGrpc.getNameSysNameSysResolveMethod) == null) {
      synchronized (NameSysAPIGrpc.class) {
        if ((getNameSysNameSysResolveMethod = NameSysAPIGrpc.getNameSysNameSysResolveMethod) == null) {
          NameSysAPIGrpc.getNameSysNameSysResolveMethod = getNameSysNameSysResolveMethod = 
              io.grpc.MethodDescriptor.<pb.Namesys.NameSysResolveRequest, pb.Namesys.NameSysResolveResult>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NameSysAPI", "NameSysNameSysResolve"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Namesys.NameSysResolveRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Namesys.NameSysResolveResult.getDefaultInstance()))
                  .setSchemaDescriptor(new NameSysAPIMethodDescriptorSupplier("NameSysNameSysResolve"))
                  .build();
          }
        }
     }
     return getNameSysNameSysResolveMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Namesys.NameSysResolveRequest,
      pb.Namesys.NameSysResolveResult> getNameSysResolveAsyncMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "NameSysResolveAsync",
      requestType = pb.Namesys.NameSysResolveRequest.class,
      responseType = pb.Namesys.NameSysResolveResult.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<pb.Namesys.NameSysResolveRequest,
      pb.Namesys.NameSysResolveResult> getNameSysResolveAsyncMethod() {
    io.grpc.MethodDescriptor<pb.Namesys.NameSysResolveRequest, pb.Namesys.NameSysResolveResult> getNameSysResolveAsyncMethod;
    if ((getNameSysResolveAsyncMethod = NameSysAPIGrpc.getNameSysResolveAsyncMethod) == null) {
      synchronized (NameSysAPIGrpc.class) {
        if ((getNameSysResolveAsyncMethod = NameSysAPIGrpc.getNameSysResolveAsyncMethod) == null) {
          NameSysAPIGrpc.getNameSysResolveAsyncMethod = getNameSysResolveAsyncMethod = 
              io.grpc.MethodDescriptor.<pb.Namesys.NameSysResolveRequest, pb.Namesys.NameSysResolveResult>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.NameSysAPI", "NameSysResolveAsync"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Namesys.NameSysResolveRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Namesys.NameSysResolveResult.getDefaultInstance()))
                  .setSchemaDescriptor(new NameSysAPIMethodDescriptorSupplier("NameSysResolveAsync"))
                  .build();
          }
        }
     }
     return getNameSysResolveAsyncMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Namesys.NameSysPublishRequest,
      pb.Util.Empty> getNameSysPublishMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "NameSysPublish",
      requestType = pb.Namesys.NameSysPublishRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Namesys.NameSysPublishRequest,
      pb.Util.Empty> getNameSysPublishMethod() {
    io.grpc.MethodDescriptor<pb.Namesys.NameSysPublishRequest, pb.Util.Empty> getNameSysPublishMethod;
    if ((getNameSysPublishMethod = NameSysAPIGrpc.getNameSysPublishMethod) == null) {
      synchronized (NameSysAPIGrpc.class) {
        if ((getNameSysPublishMethod = NameSysAPIGrpc.getNameSysPublishMethod) == null) {
          NameSysAPIGrpc.getNameSysPublishMethod = getNameSysPublishMethod = 
              io.grpc.MethodDescriptor.<pb.Namesys.NameSysPublishRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NameSysAPI", "NameSysPublish"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Namesys.NameSysPublishRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new NameSysAPIMethodDescriptorSupplier("NameSysPublish"))
                  .build();
          }
        }
     }
     return getNameSysPublishMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static NameSysAPIStub newStub(io.grpc.Channel channel) {
    return new NameSysAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static NameSysAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new NameSysAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static NameSysAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new NameSysAPIFutureStub(channel);
  }

  /**
   * <pre>
   * NameSysAPI provides a generic name resolution API
   * </pre>
   */
  public static abstract class NameSysAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * NameSysResolve is used to resolve a name, waiting for the request to complete
     * </pre>
     */
    public void nameSysNameSysResolve(pb.Namesys.NameSysResolveRequest request,
        io.grpc.stub.StreamObserver<pb.Namesys.NameSysResolveResult> responseObserver) {
      asyncUnimplementedUnaryCall(getNameSysNameSysResolveMethod(), responseObserver);
    }

    /**
     * <pre>
     * NameSysResolveAsync is like Resolve, except instead of waiting for the request
     * to complete, we send back a stream which we will send the result on
     * </pre>
     */
    public void nameSysResolveAsync(pb.Namesys.NameSysResolveRequest request,
        io.grpc.stub.StreamObserver<pb.Namesys.NameSysResolveResult> responseObserver) {
      asyncUnimplementedUnaryCall(getNameSysResolveAsyncMethod(), responseObserver);
    }

    /**
     * <pre>
     * NameSysPublish is used to publish an IPNS record, with/with-out an EOL
     * </pre>
     */
    public void nameSysPublish(pb.Namesys.NameSysPublishRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getNameSysPublishMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getNameSysNameSysResolveMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Namesys.NameSysResolveRequest,
                pb.Namesys.NameSysResolveResult>(
                  this, METHODID_NAME_SYS_NAME_SYS_RESOLVE)))
          .addMethod(
            getNameSysResolveAsyncMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                pb.Namesys.NameSysResolveRequest,
                pb.Namesys.NameSysResolveResult>(
                  this, METHODID_NAME_SYS_RESOLVE_ASYNC)))
          .addMethod(
            getNameSysPublishMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Namesys.NameSysPublishRequest,
                pb.Util.Empty>(
                  this, METHODID_NAME_SYS_PUBLISH)))
          .build();
    }
  }

  /**
   * <pre>
   * NameSysAPI provides a generic name resolution API
   * </pre>
   */
  public static final class NameSysAPIStub extends io.grpc.stub.AbstractStub<NameSysAPIStub> {
    private NameSysAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private NameSysAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected NameSysAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new NameSysAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     * NameSysResolve is used to resolve a name, waiting for the request to complete
     * </pre>
     */
    public void nameSysNameSysResolve(pb.Namesys.NameSysResolveRequest request,
        io.grpc.stub.StreamObserver<pb.Namesys.NameSysResolveResult> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getNameSysNameSysResolveMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * NameSysResolveAsync is like Resolve, except instead of waiting for the request
     * to complete, we send back a stream which we will send the result on
     * </pre>
     */
    public void nameSysResolveAsync(pb.Namesys.NameSysResolveRequest request,
        io.grpc.stub.StreamObserver<pb.Namesys.NameSysResolveResult> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getNameSysResolveAsyncMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * NameSysPublish is used to publish an IPNS record, with/with-out an EOL
     * </pre>
     */
    public void nameSysPublish(pb.Namesys.NameSysPublishRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getNameSysPublishMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * NameSysAPI provides a generic name resolution API
   * </pre>
   */
  public static final class NameSysAPIBlockingStub extends io.grpc.stub.AbstractStub<NameSysAPIBlockingStub> {
    private NameSysAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private NameSysAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected NameSysAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new NameSysAPIBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * NameSysResolve is used to resolve a name, waiting for the request to complete
     * </pre>
     */
    public pb.Namesys.NameSysResolveResult nameSysNameSysResolve(pb.Namesys.NameSysResolveRequest request) {
      return blockingUnaryCall(
          getChannel(), getNameSysNameSysResolveMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * NameSysResolveAsync is like Resolve, except instead of waiting for the request
     * to complete, we send back a stream which we will send the result on
     * </pre>
     */
    public java.util.Iterator<pb.Namesys.NameSysResolveResult> nameSysResolveAsync(
        pb.Namesys.NameSysResolveRequest request) {
      return blockingServerStreamingCall(
          getChannel(), getNameSysResolveAsyncMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * NameSysPublish is used to publish an IPNS record, with/with-out an EOL
     * </pre>
     */
    public pb.Util.Empty nameSysPublish(pb.Namesys.NameSysPublishRequest request) {
      return blockingUnaryCall(
          getChannel(), getNameSysPublishMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * NameSysAPI provides a generic name resolution API
   * </pre>
   */
  public static final class NameSysAPIFutureStub extends io.grpc.stub.AbstractStub<NameSysAPIFutureStub> {
    private NameSysAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private NameSysAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected NameSysAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new NameSysAPIFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * NameSysResolve is used to resolve a name, waiting for the request to complete
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Namesys.NameSysResolveResult> nameSysNameSysResolve(
        pb.Namesys.NameSysResolveRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getNameSysNameSysResolveMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * NameSysPublish is used to publish an IPNS record, with/with-out an EOL
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Util.Empty> nameSysPublish(
        pb.Namesys.NameSysPublishRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getNameSysPublishMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_NAME_SYS_NAME_SYS_RESOLVE = 0;
  private static final int METHODID_NAME_SYS_RESOLVE_ASYNC = 1;
  private static final int METHODID_NAME_SYS_PUBLISH = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final NameSysAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(NameSysAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_NAME_SYS_NAME_SYS_RESOLVE:
          serviceImpl.nameSysNameSysResolve((pb.Namesys.NameSysResolveRequest) request,
              (io.grpc.stub.StreamObserver<pb.Namesys.NameSysResolveResult>) responseObserver);
          break;
        case METHODID_NAME_SYS_RESOLVE_ASYNC:
          serviceImpl.nameSysResolveAsync((pb.Namesys.NameSysResolveRequest) request,
              (io.grpc.stub.StreamObserver<pb.Namesys.NameSysResolveResult>) responseObserver);
          break;
        case METHODID_NAME_SYS_PUBLISH:
          serviceImpl.nameSysPublish((pb.Namesys.NameSysPublishRequest) request,
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

  private static abstract class NameSysAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    NameSysAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.Namesys.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("NameSysAPI");
    }
  }

  private static final class NameSysAPIFileDescriptorSupplier
      extends NameSysAPIBaseDescriptorSupplier {
    NameSysAPIFileDescriptorSupplier() {}
  }

  private static final class NameSysAPIMethodDescriptorSupplier
      extends NameSysAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    NameSysAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (NameSysAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new NameSysAPIFileDescriptorSupplier())
              .addMethod(getNameSysNameSysResolveMethod())
              .addMethod(getNameSysResolveAsyncMethod())
              .addMethod(getNameSysPublishMethod())
              .build();
        }
      }
    }
    return result;
  }
}
