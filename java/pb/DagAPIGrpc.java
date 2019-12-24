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
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.19.0)",
    comments = "Source: dag.proto")
public final class DagAPIGrpc {

  private DagAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.DagAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Dag.DagRequest,
      pb.Dag.DagResponse> getDagMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Dag",
      requestType = pb.Dag.DagRequest.class,
      responseType = pb.Dag.DagResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Dag.DagRequest,
      pb.Dag.DagResponse> getDagMethod() {
    io.grpc.MethodDescriptor<pb.Dag.DagRequest, pb.Dag.DagResponse> getDagMethod;
    if ((getDagMethod = DagAPIGrpc.getDagMethod) == null) {
      synchronized (DagAPIGrpc.class) {
        if ((getDagMethod = DagAPIGrpc.getDagMethod) == null) {
          DagAPIGrpc.getDagMethod = getDagMethod = 
              io.grpc.MethodDescriptor.<pb.Dag.DagRequest, pb.Dag.DagResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.DagAPI", "Dag"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new DagAPIMethodDescriptorSupplier("Dag"))
                  .build();
          }
        }
     }
     return getDagMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Dag.DagRequest,
      pb.Dag.DagResponse> getDagStreamMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DagStream",
      requestType = pb.Dag.DagRequest.class,
      responseType = pb.Dag.DagResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
  public static io.grpc.MethodDescriptor<pb.Dag.DagRequest,
      pb.Dag.DagResponse> getDagStreamMethod() {
    io.grpc.MethodDescriptor<pb.Dag.DagRequest, pb.Dag.DagResponse> getDagStreamMethod;
    if ((getDagStreamMethod = DagAPIGrpc.getDagStreamMethod) == null) {
      synchronized (DagAPIGrpc.class) {
        if ((getDagStreamMethod = DagAPIGrpc.getDagStreamMethod) == null) {
          DagAPIGrpc.getDagStreamMethod = getDagStreamMethod = 
              io.grpc.MethodDescriptor.<pb.Dag.DagRequest, pb.Dag.DagResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.DagAPI", "DagStream"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new DagAPIMethodDescriptorSupplier("DagStream"))
                  .build();
          }
        }
     }
     return getDagStreamMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static DagAPIStub newStub(io.grpc.Channel channel) {
    return new DagAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static DagAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new DagAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static DagAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new DagAPIFutureStub(channel);
  }

  /**
   */
  public static abstract class DagAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Dag is a unidirectional rpc allowing manipulation of low-level ipld objects
     * </pre>
     */
    public void dag(pb.Dag.DagRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getDagMethod(), responseObserver);
    }

    /**
     * <pre>
     * DagStream is like Dag but with bidirectional streams
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Dag.DagRequest> dagStream(
        io.grpc.stub.StreamObserver<pb.Dag.DagResponse> responseObserver) {
      return asyncUnimplementedStreamingCall(getDagStreamMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getDagMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Dag.DagRequest,
                pb.Dag.DagResponse>(
                  this, METHODID_DAG)))
          .addMethod(
            getDagStreamMethod(),
            asyncBidiStreamingCall(
              new MethodHandlers<
                pb.Dag.DagRequest,
                pb.Dag.DagResponse>(
                  this, METHODID_DAG_STREAM)))
          .build();
    }
  }

  /**
   */
  public static final class DagAPIStub extends io.grpc.stub.AbstractStub<DagAPIStub> {
    private DagAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private DagAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DagAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new DagAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     * Dag is a unidirectional rpc allowing manipulation of low-level ipld objects
     * </pre>
     */
    public void dag(pb.Dag.DagRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDagMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * DagStream is like Dag but with bidirectional streams
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Dag.DagRequest> dagStream(
        io.grpc.stub.StreamObserver<pb.Dag.DagResponse> responseObserver) {
      return asyncBidiStreamingCall(
          getChannel().newCall(getDagStreamMethod(), getCallOptions()), responseObserver);
    }
  }

  /**
   */
  public static final class DagAPIBlockingStub extends io.grpc.stub.AbstractStub<DagAPIBlockingStub> {
    private DagAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private DagAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DagAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new DagAPIBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Dag is a unidirectional rpc allowing manipulation of low-level ipld objects
     * </pre>
     */
    public pb.Dag.DagResponse dag(pb.Dag.DagRequest request) {
      return blockingUnaryCall(
          getChannel(), getDagMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class DagAPIFutureStub extends io.grpc.stub.AbstractStub<DagAPIFutureStub> {
    private DagAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private DagAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DagAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new DagAPIFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Dag is a unidirectional rpc allowing manipulation of low-level ipld objects
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Dag.DagResponse> dag(
        pb.Dag.DagRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getDagMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_DAG = 0;
  private static final int METHODID_DAG_STREAM = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final DagAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(DagAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_DAG:
          serviceImpl.dag((pb.Dag.DagRequest) request,
              (io.grpc.stub.StreamObserver<pb.Dag.DagResponse>) responseObserver);
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
        case METHODID_DAG_STREAM:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.dagStream(
              (io.grpc.stub.StreamObserver<pb.Dag.DagResponse>) responseObserver);
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class DagAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    DagAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.Dag.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("DagAPI");
    }
  }

  private static final class DagAPIFileDescriptorSupplier
      extends DagAPIBaseDescriptorSupplier {
    DagAPIFileDescriptorSupplier() {}
  }

  private static final class DagAPIMethodDescriptorSupplier
      extends DagAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    DagAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (DagAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new DagAPIFileDescriptorSupplier())
              .addMethod(getDagMethod())
              .addMethod(getDagStreamMethod())
              .build();
        }
      }
    }
    return result;
  }
}
