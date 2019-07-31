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
 * provides utilities to retrieve api status information from
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.19.0)",
    comments = "Source: status.proto")
public final class StatusAPIGrpc {

  private StatusAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.StatusAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Util.Empty,
      pb.Status.VersionResponse> getVersionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Version",
      requestType = pb.Util.Empty.class,
      responseType = pb.Status.VersionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Util.Empty,
      pb.Status.VersionResponse> getVersionMethod() {
    io.grpc.MethodDescriptor<pb.Util.Empty, pb.Status.VersionResponse> getVersionMethod;
    if ((getVersionMethod = StatusAPIGrpc.getVersionMethod) == null) {
      synchronized (StatusAPIGrpc.class) {
        if ((getVersionMethod = StatusAPIGrpc.getVersionMethod) == null) {
          StatusAPIGrpc.getVersionMethod = getVersionMethod = 
              io.grpc.MethodDescriptor.<pb.Util.Empty, pb.Status.VersionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.StatusAPI", "Version"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Status.VersionResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new StatusAPIMethodDescriptorSupplier("Version"))
                  .build();
          }
        }
     }
     return getVersionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Util.Empty,
      pb.Status.StatusResponse> getStatusMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Status",
      requestType = pb.Util.Empty.class,
      responseType = pb.Status.StatusResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Util.Empty,
      pb.Status.StatusResponse> getStatusMethod() {
    io.grpc.MethodDescriptor<pb.Util.Empty, pb.Status.StatusResponse> getStatusMethod;
    if ((getStatusMethod = StatusAPIGrpc.getStatusMethod) == null) {
      synchronized (StatusAPIGrpc.class) {
        if ((getStatusMethod = StatusAPIGrpc.getStatusMethod) == null) {
          StatusAPIGrpc.getStatusMethod = getStatusMethod = 
              io.grpc.MethodDescriptor.<pb.Util.Empty, pb.Status.StatusResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.StatusAPI", "Status"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Status.StatusResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new StatusAPIMethodDescriptorSupplier("Status"))
                  .build();
          }
        }
     }
     return getStatusMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static StatusAPIStub newStub(io.grpc.Channel channel) {
    return new StatusAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static StatusAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new StatusAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static StatusAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new StatusAPIFutureStub(channel);
  }

  /**
   * <pre>
   * provides utilities to retrieve api status information from
   * </pre>
   */
  public static abstract class StatusAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Version is used to retrieve api version information
     * </pre>
     */
    public void version(pb.Util.Empty request,
        io.grpc.stub.StreamObserver<pb.Status.VersionResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getVersionMethod(), responseObserver);
    }

    /**
     * <pre>
     * Status is used to retrieve api status information.
     * </pre>
     */
    public void status(pb.Util.Empty request,
        io.grpc.stub.StreamObserver<pb.Status.StatusResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getStatusMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getVersionMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Util.Empty,
                pb.Status.VersionResponse>(
                  this, METHODID_VERSION)))
          .addMethod(
            getStatusMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Util.Empty,
                pb.Status.StatusResponse>(
                  this, METHODID_STATUS)))
          .build();
    }
  }

  /**
   * <pre>
   * provides utilities to retrieve api status information from
   * </pre>
   */
  public static final class StatusAPIStub extends io.grpc.stub.AbstractStub<StatusAPIStub> {
    private StatusAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private StatusAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StatusAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new StatusAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     * Version is used to retrieve api version information
     * </pre>
     */
    public void version(pb.Util.Empty request,
        io.grpc.stub.StreamObserver<pb.Status.VersionResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getVersionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Status is used to retrieve api status information.
     * </pre>
     */
    public void status(pb.Util.Empty request,
        io.grpc.stub.StreamObserver<pb.Status.StatusResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getStatusMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * provides utilities to retrieve api status information from
   * </pre>
   */
  public static final class StatusAPIBlockingStub extends io.grpc.stub.AbstractStub<StatusAPIBlockingStub> {
    private StatusAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private StatusAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StatusAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new StatusAPIBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Version is used to retrieve api version information
     * </pre>
     */
    public pb.Status.VersionResponse version(pb.Util.Empty request) {
      return blockingUnaryCall(
          getChannel(), getVersionMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Status is used to retrieve api status information.
     * </pre>
     */
    public pb.Status.StatusResponse status(pb.Util.Empty request) {
      return blockingUnaryCall(
          getChannel(), getStatusMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * provides utilities to retrieve api status information from
   * </pre>
   */
  public static final class StatusAPIFutureStub extends io.grpc.stub.AbstractStub<StatusAPIFutureStub> {
    private StatusAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private StatusAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StatusAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new StatusAPIFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Version is used to retrieve api version information
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Status.VersionResponse> version(
        pb.Util.Empty request) {
      return futureUnaryCall(
          getChannel().newCall(getVersionMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Status is used to retrieve api status information.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Status.StatusResponse> status(
        pb.Util.Empty request) {
      return futureUnaryCall(
          getChannel().newCall(getStatusMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_VERSION = 0;
  private static final int METHODID_STATUS = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final StatusAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(StatusAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_VERSION:
          serviceImpl.version((pb.Util.Empty) request,
              (io.grpc.stub.StreamObserver<pb.Status.VersionResponse>) responseObserver);
          break;
        case METHODID_STATUS:
          serviceImpl.status((pb.Util.Empty) request,
              (io.grpc.stub.StreamObserver<pb.Status.StatusResponse>) responseObserver);
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

  private static abstract class StatusAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    StatusAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.Status.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("StatusAPI");
    }
  }

  private static final class StatusAPIFileDescriptorSupplier
      extends StatusAPIBaseDescriptorSupplier {
    StatusAPIFileDescriptorSupplier() {}
  }

  private static final class StatusAPIMethodDescriptorSupplier
      extends StatusAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    StatusAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (StatusAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new StatusAPIFileDescriptorSupplier())
              .addMethod(getVersionMethod())
              .addMethod(getStatusMethod())
              .build();
        }
      }
    }
    return result;
  }
}
