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
 * AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.27.2)",
    comments = "Source: admin.proto")
public final class AdminAPIGrpc {

  private AdminAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.AdminAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Admin.ManageGCRequest,
      pb.Admin.ManageGCResponse> getManageGCMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ManageGC",
      requestType = pb.Admin.ManageGCRequest.class,
      responseType = pb.Admin.ManageGCResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Admin.ManageGCRequest,
      pb.Admin.ManageGCResponse> getManageGCMethod() {
    io.grpc.MethodDescriptor<pb.Admin.ManageGCRequest, pb.Admin.ManageGCResponse> getManageGCMethod;
    if ((getManageGCMethod = AdminAPIGrpc.getManageGCMethod) == null) {
      synchronized (AdminAPIGrpc.class) {
        if ((getManageGCMethod = AdminAPIGrpc.getManageGCMethod) == null) {
          AdminAPIGrpc.getManageGCMethod = getManageGCMethod =
              io.grpc.MethodDescriptor.<pb.Admin.ManageGCRequest, pb.Admin.ManageGCResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ManageGC"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Admin.ManageGCRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Admin.ManageGCResponse.getDefaultInstance()))
              .setSchemaDescriptor(new AdminAPIMethodDescriptorSupplier("ManageGC"))
              .build();
        }
      }
    }
    return getManageGCMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Admin.RefCountRequest,
      pb.Admin.RefCountResponse> getRefCountMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RefCount",
      requestType = pb.Admin.RefCountRequest.class,
      responseType = pb.Admin.RefCountResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Admin.RefCountRequest,
      pb.Admin.RefCountResponse> getRefCountMethod() {
    io.grpc.MethodDescriptor<pb.Admin.RefCountRequest, pb.Admin.RefCountResponse> getRefCountMethod;
    if ((getRefCountMethod = AdminAPIGrpc.getRefCountMethod) == null) {
      synchronized (AdminAPIGrpc.class) {
        if ((getRefCountMethod = AdminAPIGrpc.getRefCountMethod) == null) {
          AdminAPIGrpc.getRefCountMethod = getRefCountMethod =
              io.grpc.MethodDescriptor.<pb.Admin.RefCountRequest, pb.Admin.RefCountResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "RefCount"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Admin.RefCountRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Admin.RefCountResponse.getDefaultInstance()))
              .setSchemaDescriptor(new AdminAPIMethodDescriptorSupplier("RefCount"))
              .build();
        }
      }
    }
    return getRefCountMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static AdminAPIStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AdminAPIStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AdminAPIStub>() {
        @java.lang.Override
        public AdminAPIStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AdminAPIStub(channel, callOptions);
        }
      };
    return AdminAPIStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static AdminAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AdminAPIBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AdminAPIBlockingStub>() {
        @java.lang.Override
        public AdminAPIBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AdminAPIBlockingStub(channel, callOptions);
        }
      };
    return AdminAPIBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static AdminAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AdminAPIFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AdminAPIFutureStub>() {
        @java.lang.Override
        public AdminAPIFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AdminAPIFutureStub(channel, callOptions);
        }
      };
    return AdminAPIFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API
   * </pre>
   */
  public static abstract class AdminAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * ManageGC is used to manage TemporalX's garbage collection process
     * </pre>
     */
    public void manageGC(pb.Admin.ManageGCRequest request,
        io.grpc.stub.StreamObserver<pb.Admin.ManageGCResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getManageGCMethod(), responseObserver);
    }

    /**
     * <pre>
     * RefCount is used to analyze the counter store and pull reference count information
     * </pre>
     */
    public void refCount(pb.Admin.RefCountRequest request,
        io.grpc.stub.StreamObserver<pb.Admin.RefCountResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getRefCountMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getManageGCMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Admin.ManageGCRequest,
                pb.Admin.ManageGCResponse>(
                  this, METHODID_MANAGE_GC)))
          .addMethod(
            getRefCountMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Admin.RefCountRequest,
                pb.Admin.RefCountResponse>(
                  this, METHODID_REF_COUNT)))
          .build();
    }
  }

  /**
   * <pre>
   * AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API
   * </pre>
   */
  public static final class AdminAPIStub extends io.grpc.stub.AbstractAsyncStub<AdminAPIStub> {
    private AdminAPIStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AdminAPIStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AdminAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     * ManageGC is used to manage TemporalX's garbage collection process
     * </pre>
     */
    public void manageGC(pb.Admin.ManageGCRequest request,
        io.grpc.stub.StreamObserver<pb.Admin.ManageGCResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getManageGCMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * RefCount is used to analyze the counter store and pull reference count information
     * </pre>
     */
    public void refCount(pb.Admin.RefCountRequest request,
        io.grpc.stub.StreamObserver<pb.Admin.RefCountResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getRefCountMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API
   * </pre>
   */
  public static final class AdminAPIBlockingStub extends io.grpc.stub.AbstractBlockingStub<AdminAPIBlockingStub> {
    private AdminAPIBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AdminAPIBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AdminAPIBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * ManageGC is used to manage TemporalX's garbage collection process
     * </pre>
     */
    public pb.Admin.ManageGCResponse manageGC(pb.Admin.ManageGCRequest request) {
      return blockingUnaryCall(
          getChannel(), getManageGCMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * RefCount is used to analyze the counter store and pull reference count information
     * </pre>
     */
    public pb.Admin.RefCountResponse refCount(pb.Admin.RefCountRequest request) {
      return blockingUnaryCall(
          getChannel(), getRefCountMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API
   * </pre>
   */
  public static final class AdminAPIFutureStub extends io.grpc.stub.AbstractFutureStub<AdminAPIFutureStub> {
    private AdminAPIFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AdminAPIFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AdminAPIFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * ManageGC is used to manage TemporalX's garbage collection process
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Admin.ManageGCResponse> manageGC(
        pb.Admin.ManageGCRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getManageGCMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * RefCount is used to analyze the counter store and pull reference count information
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Admin.RefCountResponse> refCount(
        pb.Admin.RefCountRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getRefCountMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_MANAGE_GC = 0;
  private static final int METHODID_REF_COUNT = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AdminAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(AdminAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_MANAGE_GC:
          serviceImpl.manageGC((pb.Admin.ManageGCRequest) request,
              (io.grpc.stub.StreamObserver<pb.Admin.ManageGCResponse>) responseObserver);
          break;
        case METHODID_REF_COUNT:
          serviceImpl.refCount((pb.Admin.RefCountRequest) request,
              (io.grpc.stub.StreamObserver<pb.Admin.RefCountResponse>) responseObserver);
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

  private static abstract class AdminAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    AdminAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.Admin.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("AdminAPI");
    }
  }

  private static final class AdminAPIFileDescriptorSupplier
      extends AdminAPIBaseDescriptorSupplier {
    AdminAPIFileDescriptorSupplier() {}
  }

  private static final class AdminAPIMethodDescriptorSupplier
      extends AdminAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    AdminAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (AdminAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new AdminAPIFileDescriptorSupplier())
              .addMethod(getManageGCMethod())
              .addMethod(getRefCountMethod())
              .build();
        }
      }
    }
    return result;
  }
}
