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
  private static volatile io.grpc.MethodDescriptor<pb.Node.Empty,
      pb.Node.GetPeersResponse> getGetPeersMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetPeers",
      requestType = pb.Node.Empty.class,
      responseType = pb.Node.GetPeersResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.Empty,
      pb.Node.GetPeersResponse> getGetPeersMethod() {
    io.grpc.MethodDescriptor<pb.Node.Empty, pb.Node.GetPeersResponse> getGetPeersMethod;
    if ((getGetPeersMethod = NodeAPIGrpc.getGetPeersMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getGetPeersMethod = NodeAPIGrpc.getGetPeersMethod) == null) {
          NodeAPIGrpc.getGetPeersMethod = getGetPeersMethod = 
              io.grpc.MethodDescriptor.<pb.Node.Empty, pb.Node.GetPeersResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "GetPeers"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.GetPeersResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("GetPeers"))
                  .build();
          }
        }
     }
     return getGetPeersMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Node.ConnectRequest,
      pb.Node.Empty> getConnectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Connect",
      requestType = pb.Node.ConnectRequest.class,
      responseType = pb.Node.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.ConnectRequest,
      pb.Node.Empty> getConnectMethod() {
    io.grpc.MethodDescriptor<pb.Node.ConnectRequest, pb.Node.Empty> getConnectMethod;
    if ((getConnectMethod = NodeAPIGrpc.getConnectMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getConnectMethod = NodeAPIGrpc.getConnectMethod) == null) {
          NodeAPIGrpc.getConnectMethod = getConnectMethod = 
              io.grpc.MethodDescriptor.<pb.Node.ConnectRequest, pb.Node.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "Connect"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.ConnectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("Connect"))
                  .build();
          }
        }
     }
     return getConnectMethod;
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
     * GetPeers returns a message containing a slice of current peers in our peerstore
     * </pre>
     */
    public void getPeers(pb.Node.Empty request,
        io.grpc.stub.StreamObserver<pb.Node.GetPeersResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetPeersMethod(), responseObserver);
    }

    /**
     * <pre>
     * Connect is used to connect to remote libp2p peers
     * </pre>
     */
    public void connect(pb.Node.ConnectRequest request,
        io.grpc.stub.StreamObserver<pb.Node.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getConnectMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetPeersMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.Empty,
                pb.Node.GetPeersResponse>(
                  this, METHODID_GET_PEERS)))
          .addMethod(
            getConnectMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.ConnectRequest,
                pb.Node.Empty>(
                  this, METHODID_CONNECT)))
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
     * GetPeers returns a message containing a slice of current peers in our peerstore
     * </pre>
     */
    public void getPeers(pb.Node.Empty request,
        io.grpc.stub.StreamObserver<pb.Node.GetPeersResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetPeersMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Connect is used to connect to remote libp2p peers
     * </pre>
     */
    public void connect(pb.Node.ConnectRequest request,
        io.grpc.stub.StreamObserver<pb.Node.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getConnectMethod(), getCallOptions()), request, responseObserver);
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
     * GetPeers returns a message containing a slice of current peers in our peerstore
     * </pre>
     */
    public pb.Node.GetPeersResponse getPeers(pb.Node.Empty request) {
      return blockingUnaryCall(
          getChannel(), getGetPeersMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Connect is used to connect to remote libp2p peers
     * </pre>
     */
    public pb.Node.Empty connect(pb.Node.ConnectRequest request) {
      return blockingUnaryCall(
          getChannel(), getConnectMethod(), getCallOptions(), request);
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
     * GetPeers returns a message containing a slice of current peers in our peerstore
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Node.GetPeersResponse> getPeers(
        pb.Node.Empty request) {
      return futureUnaryCall(
          getChannel().newCall(getGetPeersMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Connect is used to connect to remote libp2p peers
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Node.Empty> connect(
        pb.Node.ConnectRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getConnectMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_PEERS = 0;
  private static final int METHODID_CONNECT = 1;

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
        case METHODID_GET_PEERS:
          serviceImpl.getPeers((pb.Node.Empty) request,
              (io.grpc.stub.StreamObserver<pb.Node.GetPeersResponse>) responseObserver);
          break;
        case METHODID_CONNECT:
          serviceImpl.connect((pb.Node.ConnectRequest) request,
              (io.grpc.stub.StreamObserver<pb.Node.Empty>) responseObserver);
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
              .addMethod(getGetPeersMethod())
              .addMethod(getConnectMethod())
              .build();
        }
      }
    }
    return result;
  }
}
