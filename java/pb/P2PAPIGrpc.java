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
    comments = "Source: p2p.proto")
public final class P2PAPIGrpc {

  private P2PAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.P2PAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.P2P.CloseRequest,
      pb.Util.Empty> getCloseMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Close",
      requestType = pb.P2P.CloseRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.P2P.CloseRequest,
      pb.Util.Empty> getCloseMethod() {
    io.grpc.MethodDescriptor<pb.P2P.CloseRequest, pb.Util.Empty> getCloseMethod;
    if ((getCloseMethod = P2PAPIGrpc.getCloseMethod) == null) {
      synchronized (P2PAPIGrpc.class) {
        if ((getCloseMethod = P2PAPIGrpc.getCloseMethod) == null) {
          P2PAPIGrpc.getCloseMethod = getCloseMethod = 
              io.grpc.MethodDescriptor.<pb.P2P.CloseRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.P2PAPI", "Close"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.P2P.CloseRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new P2PAPIMethodDescriptorSupplier("Close"))
                  .build();
          }
        }
     }
     return getCloseMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.P2P.ForwardRequest,
      pb.Util.Empty> getForwardMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Forward",
      requestType = pb.P2P.ForwardRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.P2P.ForwardRequest,
      pb.Util.Empty> getForwardMethod() {
    io.grpc.MethodDescriptor<pb.P2P.ForwardRequest, pb.Util.Empty> getForwardMethod;
    if ((getForwardMethod = P2PAPIGrpc.getForwardMethod) == null) {
      synchronized (P2PAPIGrpc.class) {
        if ((getForwardMethod = P2PAPIGrpc.getForwardMethod) == null) {
          P2PAPIGrpc.getForwardMethod = getForwardMethod = 
              io.grpc.MethodDescriptor.<pb.P2P.ForwardRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.P2PAPI", "Forward"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.P2P.ForwardRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new P2PAPIMethodDescriptorSupplier("Forward"))
                  .build();
          }
        }
     }
     return getForwardMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.P2P.ListenRequest,
      pb.Util.Empty> getListenMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Listen",
      requestType = pb.P2P.ListenRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.P2P.ListenRequest,
      pb.Util.Empty> getListenMethod() {
    io.grpc.MethodDescriptor<pb.P2P.ListenRequest, pb.Util.Empty> getListenMethod;
    if ((getListenMethod = P2PAPIGrpc.getListenMethod) == null) {
      synchronized (P2PAPIGrpc.class) {
        if ((getListenMethod = P2PAPIGrpc.getListenMethod) == null) {
          P2PAPIGrpc.getListenMethod = getListenMethod = 
              io.grpc.MethodDescriptor.<pb.P2P.ListenRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.P2PAPI", "Listen"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.P2P.ListenRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new P2PAPIMethodDescriptorSupplier("Listen"))
                  .build();
          }
        }
     }
     return getListenMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.P2P.LsRequest,
      pb.P2P.LsResponse> getLsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Ls",
      requestType = pb.P2P.LsRequest.class,
      responseType = pb.P2P.LsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.P2P.LsRequest,
      pb.P2P.LsResponse> getLsMethod() {
    io.grpc.MethodDescriptor<pb.P2P.LsRequest, pb.P2P.LsResponse> getLsMethod;
    if ((getLsMethod = P2PAPIGrpc.getLsMethod) == null) {
      synchronized (P2PAPIGrpc.class) {
        if ((getLsMethod = P2PAPIGrpc.getLsMethod) == null) {
          P2PAPIGrpc.getLsMethod = getLsMethod = 
              io.grpc.MethodDescriptor.<pb.P2P.LsRequest, pb.P2P.LsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.P2PAPI", "Ls"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.P2P.LsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.P2P.LsResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new P2PAPIMethodDescriptorSupplier("Ls"))
                  .build();
          }
        }
     }
     return getLsMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static P2PAPIStub newStub(io.grpc.Channel channel) {
    return new P2PAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static P2PAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new P2PAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static P2PAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new P2PAPIFutureStub(channel);
  }

  /**
   */
  public static abstract class P2PAPIImplBase implements io.grpc.BindableService {

    /**
     */
    public void close(pb.P2P.CloseRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getCloseMethod(), responseObserver);
    }

    /**
     */
    public void forward(pb.P2P.ForwardRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getForwardMethod(), responseObserver);
    }

    /**
     */
    public void listen(pb.P2P.ListenRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getListenMethod(), responseObserver);
    }

    /**
     */
    public void ls(pb.P2P.LsRequest request,
        io.grpc.stub.StreamObserver<pb.P2P.LsResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getLsMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCloseMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.P2P.CloseRequest,
                pb.Util.Empty>(
                  this, METHODID_CLOSE)))
          .addMethod(
            getForwardMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.P2P.ForwardRequest,
                pb.Util.Empty>(
                  this, METHODID_FORWARD)))
          .addMethod(
            getListenMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.P2P.ListenRequest,
                pb.Util.Empty>(
                  this, METHODID_LISTEN)))
          .addMethod(
            getLsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.P2P.LsRequest,
                pb.P2P.LsResponse>(
                  this, METHODID_LS)))
          .build();
    }
  }

  /**
   */
  public static final class P2PAPIStub extends io.grpc.stub.AbstractStub<P2PAPIStub> {
    private P2PAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private P2PAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected P2PAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new P2PAPIStub(channel, callOptions);
    }

    /**
     */
    public void close(pb.P2P.CloseRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCloseMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void forward(pb.P2P.ForwardRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getForwardMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listen(pb.P2P.ListenRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListenMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void ls(pb.P2P.LsRequest request,
        io.grpc.stub.StreamObserver<pb.P2P.LsResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getLsMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class P2PAPIBlockingStub extends io.grpc.stub.AbstractStub<P2PAPIBlockingStub> {
    private P2PAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private P2PAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected P2PAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new P2PAPIBlockingStub(channel, callOptions);
    }

    /**
     */
    public pb.Util.Empty close(pb.P2P.CloseRequest request) {
      return blockingUnaryCall(
          getChannel(), getCloseMethod(), getCallOptions(), request);
    }

    /**
     */
    public pb.Util.Empty forward(pb.P2P.ForwardRequest request) {
      return blockingUnaryCall(
          getChannel(), getForwardMethod(), getCallOptions(), request);
    }

    /**
     */
    public pb.Util.Empty listen(pb.P2P.ListenRequest request) {
      return blockingUnaryCall(
          getChannel(), getListenMethod(), getCallOptions(), request);
    }

    /**
     */
    public pb.P2P.LsResponse ls(pb.P2P.LsRequest request) {
      return blockingUnaryCall(
          getChannel(), getLsMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class P2PAPIFutureStub extends io.grpc.stub.AbstractStub<P2PAPIFutureStub> {
    private P2PAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private P2PAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected P2PAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new P2PAPIFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Util.Empty> close(
        pb.P2P.CloseRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCloseMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Util.Empty> forward(
        pb.P2P.ForwardRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getForwardMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Util.Empty> listen(
        pb.P2P.ListenRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListenMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.P2P.LsResponse> ls(
        pb.P2P.LsRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getLsMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CLOSE = 0;
  private static final int METHODID_FORWARD = 1;
  private static final int METHODID_LISTEN = 2;
  private static final int METHODID_LS = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final P2PAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(P2PAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CLOSE:
          serviceImpl.close((pb.P2P.CloseRequest) request,
              (io.grpc.stub.StreamObserver<pb.Util.Empty>) responseObserver);
          break;
        case METHODID_FORWARD:
          serviceImpl.forward((pb.P2P.ForwardRequest) request,
              (io.grpc.stub.StreamObserver<pb.Util.Empty>) responseObserver);
          break;
        case METHODID_LISTEN:
          serviceImpl.listen((pb.P2P.ListenRequest) request,
              (io.grpc.stub.StreamObserver<pb.Util.Empty>) responseObserver);
          break;
        case METHODID_LS:
          serviceImpl.ls((pb.P2P.LsRequest) request,
              (io.grpc.stub.StreamObserver<pb.P2P.LsResponse>) responseObserver);
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

  private static abstract class P2PAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    P2PAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.P2P.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("P2PAPI");
    }
  }

  private static final class P2PAPIFileDescriptorSupplier
      extends P2PAPIBaseDescriptorSupplier {
    P2PAPIFileDescriptorSupplier() {}
  }

  private static final class P2PAPIMethodDescriptorSupplier
      extends P2PAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    P2PAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (P2PAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new P2PAPIFileDescriptorSupplier())
              .addMethod(getCloseMethod())
              .addMethod(getForwardMethod())
              .addMethod(getListenMethod())
              .addMethod(getLsMethod())
              .build();
        }
      }
    }
    return result;
  }
}
