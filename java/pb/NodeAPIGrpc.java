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
 * NodeAPI provide an API to control the underlying custom ipfs node
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.19.0)",
    comments = "Source: node.proto")
public final class NodeAPIGrpc {

  private NodeAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.NodeAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Node.ConnMgmtRequest,
      pb.Node.ConnMgmtResponse> getConnMgmtMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ConnMgmt",
      requestType = pb.Node.ConnMgmtRequest.class,
      responseType = pb.Node.ConnMgmtResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.ConnMgmtRequest,
      pb.Node.ConnMgmtResponse> getConnMgmtMethod() {
    io.grpc.MethodDescriptor<pb.Node.ConnMgmtRequest, pb.Node.ConnMgmtResponse> getConnMgmtMethod;
    if ((getConnMgmtMethod = NodeAPIGrpc.getConnMgmtMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getConnMgmtMethod = NodeAPIGrpc.getConnMgmtMethod) == null) {
          NodeAPIGrpc.getConnMgmtMethod = getConnMgmtMethod = 
              io.grpc.MethodDescriptor.<pb.Node.ConnMgmtRequest, pb.Node.ConnMgmtResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "ConnMgmt"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.ConnMgmtRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.ConnMgmtResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("ConnMgmt"))
                  .build();
          }
        }
     }
     return getConnMgmtMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Node.ExtrasRequest,
      pb.Util.Empty> getExtrasMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Extras",
      requestType = pb.Node.ExtrasRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.ExtrasRequest,
      pb.Util.Empty> getExtrasMethod() {
    io.grpc.MethodDescriptor<pb.Node.ExtrasRequest, pb.Util.Empty> getExtrasMethod;
    if ((getExtrasMethod = NodeAPIGrpc.getExtrasMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getExtrasMethod = NodeAPIGrpc.getExtrasMethod) == null) {
          NodeAPIGrpc.getExtrasMethod = getExtrasMethod = 
              io.grpc.MethodDescriptor.<pb.Node.ExtrasRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "Extras"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.ExtrasRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("Extras"))
                  .build();
          }
        }
     }
     return getExtrasMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Node.P2PRequest,
      pb.Node.P2PResponse> getP2PMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "P2P",
      requestType = pb.Node.P2PRequest.class,
      responseType = pb.Node.P2PResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.P2PRequest,
      pb.Node.P2PResponse> getP2PMethod() {
    io.grpc.MethodDescriptor<pb.Node.P2PRequest, pb.Node.P2PResponse> getP2PMethod;
    if ((getP2PMethod = NodeAPIGrpc.getP2PMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getP2PMethod = NodeAPIGrpc.getP2PMethod) == null) {
          NodeAPIGrpc.getP2PMethod = getP2PMethod = 
              io.grpc.MethodDescriptor.<pb.Node.P2PRequest, pb.Node.P2PResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "P2P"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.P2PRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.P2PResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("P2P"))
                  .build();
          }
        }
     }
     return getP2PMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Node.BlockstoreRequest,
      pb.Node.BlockstoreResponse> getBlockstoreMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Blockstore",
      requestType = pb.Node.BlockstoreRequest.class,
      responseType = pb.Node.BlockstoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.BlockstoreRequest,
      pb.Node.BlockstoreResponse> getBlockstoreMethod() {
    io.grpc.MethodDescriptor<pb.Node.BlockstoreRequest, pb.Node.BlockstoreResponse> getBlockstoreMethod;
    if ((getBlockstoreMethod = NodeAPIGrpc.getBlockstoreMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getBlockstoreMethod = NodeAPIGrpc.getBlockstoreMethod) == null) {
          NodeAPIGrpc.getBlockstoreMethod = getBlockstoreMethod = 
              io.grpc.MethodDescriptor.<pb.Node.BlockstoreRequest, pb.Node.BlockstoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "Blockstore"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.BlockstoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.BlockstoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("Blockstore"))
                  .build();
          }
        }
     }
     return getBlockstoreMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static NodeAPIStub newStub(io.grpc.Channel channel) {
    return new NodeAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static NodeAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new NodeAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static NodeAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new NodeAPIFutureStub(channel);
  }

  /**
   * <pre>
   * NodeAPI provide an API to control the underlying custom ipfs node
   * </pre>
   */
  public static abstract class NodeAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * ConnMgmt provides control over libp2p connections
     * </pre>
     */
    public void connMgmt(pb.Node.ConnMgmtRequest request,
        io.grpc.stub.StreamObserver<pb.Node.ConnMgmtResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getConnMgmtMethod(), responseObserver);
    }

    /**
     * <pre>
     * Extras provide control over node extras capabilities
     * </pre>
     */
    public void extras(pb.Node.ExtrasRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getExtrasMethod(), responseObserver);
    }

    /**
     * <pre>
     * P2P allows control of generalized p2p streams for tcp/udp based protocol.
     * By using this RPC, we can tunnel traffic similar to ssh tunneling
     * except using libp2p as the transport layer, and and tcp/udp port.
     * </pre>
     */
    public void p2P(pb.Node.P2PRequest request,
        io.grpc.stub.StreamObserver<pb.Node.P2PResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getP2PMethod(), responseObserver);
    }

    /**
     * <pre>
     * Blockstore allows low-level management of the underlying blockstore
     * </pre>
     */
    public void blockstore(pb.Node.BlockstoreRequest request,
        io.grpc.stub.StreamObserver<pb.Node.BlockstoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getBlockstoreMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getConnMgmtMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.ConnMgmtRequest,
                pb.Node.ConnMgmtResponse>(
                  this, METHODID_CONN_MGMT)))
          .addMethod(
            getExtrasMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.ExtrasRequest,
                pb.Util.Empty>(
                  this, METHODID_EXTRAS)))
          .addMethod(
            getP2PMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.P2PRequest,
                pb.Node.P2PResponse>(
                  this, METHODID_P2P)))
          .addMethod(
            getBlockstoreMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.BlockstoreRequest,
                pb.Node.BlockstoreResponse>(
                  this, METHODID_BLOCKSTORE)))
          .build();
    }
  }

  /**
   * <pre>
   * NodeAPI provide an API to control the underlying custom ipfs node
   * </pre>
   */
  public static final class NodeAPIStub extends io.grpc.stub.AbstractStub<NodeAPIStub> {
    private NodeAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private NodeAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected NodeAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new NodeAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     * ConnMgmt provides control over libp2p connections
     * </pre>
     */
    public void connMgmt(pb.Node.ConnMgmtRequest request,
        io.grpc.stub.StreamObserver<pb.Node.ConnMgmtResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getConnMgmtMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Extras provide control over node extras capabilities
     * </pre>
     */
    public void extras(pb.Node.ExtrasRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getExtrasMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * P2P allows control of generalized p2p streams for tcp/udp based protocol.
     * By using this RPC, we can tunnel traffic similar to ssh tunneling
     * except using libp2p as the transport layer, and and tcp/udp port.
     * </pre>
     */
    public void p2P(pb.Node.P2PRequest request,
        io.grpc.stub.StreamObserver<pb.Node.P2PResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getP2PMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Blockstore allows low-level management of the underlying blockstore
     * </pre>
     */
    public void blockstore(pb.Node.BlockstoreRequest request,
        io.grpc.stub.StreamObserver<pb.Node.BlockstoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getBlockstoreMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * NodeAPI provide an API to control the underlying custom ipfs node
   * </pre>
   */
  public static final class NodeAPIBlockingStub extends io.grpc.stub.AbstractStub<NodeAPIBlockingStub> {
    private NodeAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private NodeAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected NodeAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new NodeAPIBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * ConnMgmt provides control over libp2p connections
     * </pre>
     */
    public pb.Node.ConnMgmtResponse connMgmt(pb.Node.ConnMgmtRequest request) {
      return blockingUnaryCall(
          getChannel(), getConnMgmtMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Extras provide control over node extras capabilities
     * </pre>
     */
    public pb.Util.Empty extras(pb.Node.ExtrasRequest request) {
      return blockingUnaryCall(
          getChannel(), getExtrasMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * P2P allows control of generalized p2p streams for tcp/udp based protocol.
     * By using this RPC, we can tunnel traffic similar to ssh tunneling
     * except using libp2p as the transport layer, and and tcp/udp port.
     * </pre>
     */
    public pb.Node.P2PResponse p2P(pb.Node.P2PRequest request) {
      return blockingUnaryCall(
          getChannel(), getP2PMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Blockstore allows low-level management of the underlying blockstore
     * </pre>
     */
    public pb.Node.BlockstoreResponse blockstore(pb.Node.BlockstoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getBlockstoreMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * NodeAPI provide an API to control the underlying custom ipfs node
   * </pre>
   */
  public static final class NodeAPIFutureStub extends io.grpc.stub.AbstractStub<NodeAPIFutureStub> {
    private NodeAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private NodeAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected NodeAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new NodeAPIFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * ConnMgmt provides control over libp2p connections
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Node.ConnMgmtResponse> connMgmt(
        pb.Node.ConnMgmtRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getConnMgmtMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Extras provide control over node extras capabilities
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Util.Empty> extras(
        pb.Node.ExtrasRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getExtrasMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * P2P allows control of generalized p2p streams for tcp/udp based protocol.
     * By using this RPC, we can tunnel traffic similar to ssh tunneling
     * except using libp2p as the transport layer, and and tcp/udp port.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Node.P2PResponse> p2P(
        pb.Node.P2PRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getP2PMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Blockstore allows low-level management of the underlying blockstore
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Node.BlockstoreResponse> blockstore(
        pb.Node.BlockstoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getBlockstoreMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CONN_MGMT = 0;
  private static final int METHODID_EXTRAS = 1;
  private static final int METHODID_P2P = 2;
  private static final int METHODID_BLOCKSTORE = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final NodeAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(NodeAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CONN_MGMT:
          serviceImpl.connMgmt((pb.Node.ConnMgmtRequest) request,
              (io.grpc.stub.StreamObserver<pb.Node.ConnMgmtResponse>) responseObserver);
          break;
        case METHODID_EXTRAS:
          serviceImpl.extras((pb.Node.ExtrasRequest) request,
              (io.grpc.stub.StreamObserver<pb.Util.Empty>) responseObserver);
          break;
        case METHODID_P2P:
          serviceImpl.p2P((pb.Node.P2PRequest) request,
              (io.grpc.stub.StreamObserver<pb.Node.P2PResponse>) responseObserver);
          break;
        case METHODID_BLOCKSTORE:
          serviceImpl.blockstore((pb.Node.BlockstoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Node.BlockstoreResponse>) responseObserver);
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

  private static abstract class NodeAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    NodeAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.Node.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("NodeAPI");
    }
  }

  private static final class NodeAPIFileDescriptorSupplier
      extends NodeAPIBaseDescriptorSupplier {
    NodeAPIFileDescriptorSupplier() {}
  }

  private static final class NodeAPIMethodDescriptorSupplier
      extends NodeAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    NodeAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (NodeAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new NodeAPIFileDescriptorSupplier())
              .addMethod(getConnMgmtMethod())
              .addMethod(getExtrasMethod())
              .addMethod(getP2PMethod())
              .addMethod(getBlockstoreMethod())
              .build();
        }
      }
    }
    return result;
  }
}
