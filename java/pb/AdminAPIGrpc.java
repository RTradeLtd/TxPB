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
    value = "by gRPC proto compiler (version 1.19.0)",
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
              .setFullMethodName(generateFullMethodName(
                  "pb.AdminAPI", "ManageGC"))
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

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static AdminAPIStub newStub(io.grpc.Channel channel) {
    return new AdminAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static AdminAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new AdminAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static AdminAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new AdminAPIFutureStub(channel);
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

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getManageGCMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Admin.ManageGCRequest,
                pb.Admin.ManageGCResponse>(
                  this, METHODID_MANAGE_GC)))
          .build();
    }
  }

  /**
   * <pre>
   * AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API
   * </pre>
   */
  public static final class AdminAPIStub extends io.grpc.stub.AbstractStub<AdminAPIStub> {
    private AdminAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AdminAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AdminAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
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
  }

  /**
   * <pre>
   * AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API
   * </pre>
   */
  public static final class AdminAPIBlockingStub extends io.grpc.stub.AbstractStub<AdminAPIBlockingStub> {
    private AdminAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AdminAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AdminAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
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
  }

  /**
   * <pre>
   * AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API
   * </pre>
   */
  public static final class AdminAPIFutureStub extends io.grpc.stub.AbstractStub<AdminAPIFutureStub> {
    private AdminAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AdminAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AdminAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
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
  }

  private static final int METHODID_MANAGE_GC = 0;

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
              .build();
        }
      }
    }
    return result;
  }
}
