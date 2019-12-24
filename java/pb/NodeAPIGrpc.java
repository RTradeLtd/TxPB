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
  private static volatile io.grpc.MethodDescriptor<pb.Util.Empty,
      pb.Node.GetPeersResponse> getGetPeersMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetPeers",
      requestType = pb.Util.Empty.class,
      responseType = pb.Node.GetPeersResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Util.Empty,
      pb.Node.GetPeersResponse> getGetPeersMethod() {
    io.grpc.MethodDescriptor<pb.Util.Empty, pb.Node.GetPeersResponse> getGetPeersMethod;
    if ((getGetPeersMethod = NodeAPIGrpc.getGetPeersMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getGetPeersMethod = NodeAPIGrpc.getGetPeersMethod) == null) {
          NodeAPIGrpc.getGetPeersMethod = getGetPeersMethod = 
              io.grpc.MethodDescriptor.<pb.Util.Empty, pb.Node.GetPeersResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "GetPeers"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
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
      pb.Util.Empty> getConnectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Connect",
      requestType = pb.Node.ConnectRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.ConnectRequest,
      pb.Util.Empty> getConnectMethod() {
    io.grpc.MethodDescriptor<pb.Node.ConnectRequest, pb.Util.Empty> getConnectMethod;
    if ((getConnectMethod = NodeAPIGrpc.getConnectMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getConnectMethod = NodeAPIGrpc.getConnectMethod) == null) {
          NodeAPIGrpc.getConnectMethod = getConnectMethod = 
              io.grpc.MethodDescriptor.<pb.Node.ConnectRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "Connect"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.ConnectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("Connect"))
                  .build();
          }
        }
     }
     return getConnectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Node.DisconnectRequest,
      pb.Node.DisconnectResponse> getDisconnectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Disconnect",
      requestType = pb.Node.DisconnectRequest.class,
      responseType = pb.Node.DisconnectResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.DisconnectRequest,
      pb.Node.DisconnectResponse> getDisconnectMethod() {
    io.grpc.MethodDescriptor<pb.Node.DisconnectRequest, pb.Node.DisconnectResponse> getDisconnectMethod;
    if ((getDisconnectMethod = NodeAPIGrpc.getDisconnectMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getDisconnectMethod = NodeAPIGrpc.getDisconnectMethod) == null) {
          NodeAPIGrpc.getDisconnectMethod = getDisconnectMethod = 
              io.grpc.MethodDescriptor.<pb.Node.DisconnectRequest, pb.Node.DisconnectResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "Disconnect"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.DisconnectRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.DisconnectResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("Disconnect"))
                  .build();
          }
        }
     }
     return getDisconnectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Node.IsConnectedRequest,
      pb.Node.IsConnectedResponse> getIsConnectedMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "IsConnected",
      requestType = pb.Node.IsConnectedRequest.class,
      responseType = pb.Node.IsConnectedResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.IsConnectedRequest,
      pb.Node.IsConnectedResponse> getIsConnectedMethod() {
    io.grpc.MethodDescriptor<pb.Node.IsConnectedRequest, pb.Node.IsConnectedResponse> getIsConnectedMethod;
    if ((getIsConnectedMethod = NodeAPIGrpc.getIsConnectedMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getIsConnectedMethod = NodeAPIGrpc.getIsConnectedMethod) == null) {
          NodeAPIGrpc.getIsConnectedMethod = getIsConnectedMethod = 
              io.grpc.MethodDescriptor.<pb.Node.IsConnectedRequest, pb.Node.IsConnectedResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "IsConnected"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.IsConnectedRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.IsConnectedResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("IsConnected"))
                  .build();
          }
        }
     }
     return getIsConnectedMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Node.EnableExtrasRequest,
      pb.Util.Empty> getEnableExtrasMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "EnableExtras",
      requestType = pb.Node.EnableExtrasRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.EnableExtrasRequest,
      pb.Util.Empty> getEnableExtrasMethod() {
    io.grpc.MethodDescriptor<pb.Node.EnableExtrasRequest, pb.Util.Empty> getEnableExtrasMethod;
    if ((getEnableExtrasMethod = NodeAPIGrpc.getEnableExtrasMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getEnableExtrasMethod = NodeAPIGrpc.getEnableExtrasMethod) == null) {
          NodeAPIGrpc.getEnableExtrasMethod = getEnableExtrasMethod = 
              io.grpc.MethodDescriptor.<pb.Node.EnableExtrasRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "EnableExtras"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.EnableExtrasRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("EnableExtras"))
                  .build();
          }
        }
     }
     return getEnableExtrasMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Node.DisableExtrasRequest,
      pb.Util.Empty> getDisableExtrasMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DisableExtras",
      requestType = pb.Node.DisableExtrasRequest.class,
      responseType = pb.Util.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Node.DisableExtrasRequest,
      pb.Util.Empty> getDisableExtrasMethod() {
    io.grpc.MethodDescriptor<pb.Node.DisableExtrasRequest, pb.Util.Empty> getDisableExtrasMethod;
    if ((getDisableExtrasMethod = NodeAPIGrpc.getDisableExtrasMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getDisableExtrasMethod = NodeAPIGrpc.getDisableExtrasMethod) == null) {
          NodeAPIGrpc.getDisableExtrasMethod = getDisableExtrasMethod = 
              io.grpc.MethodDescriptor.<pb.Node.DisableExtrasRequest, pb.Util.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "DisableExtras"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.DisableExtrasRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.Empty.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("DisableExtras"))
                  .build();
          }
        }
     }
     return getDisableExtrasMethod;
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

  private static volatile io.grpc.MethodDescriptor<pb.Node.PubSubRequest,
      pb.Node.PubSubResponse> getPubSubMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PubSub",
      requestType = pb.Node.PubSubRequest.class,
      responseType = pb.Node.PubSubResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
  public static io.grpc.MethodDescriptor<pb.Node.PubSubRequest,
      pb.Node.PubSubResponse> getPubSubMethod() {
    io.grpc.MethodDescriptor<pb.Node.PubSubRequest, pb.Node.PubSubResponse> getPubSubMethod;
    if ((getPubSubMethod = NodeAPIGrpc.getPubSubMethod) == null) {
      synchronized (NodeAPIGrpc.class) {
        if ((getPubSubMethod = NodeAPIGrpc.getPubSubMethod) == null) {
          NodeAPIGrpc.getPubSubMethod = getPubSubMethod = 
              io.grpc.MethodDescriptor.<pb.Node.PubSubRequest, pb.Node.PubSubResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.NodeAPI", "PubSub"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.PubSubRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Node.PubSubResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new NodeAPIMethodDescriptorSupplier("PubSub"))
                  .build();
          }
        }
     }
     return getPubSubMethod;
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
    public void getPeers(pb.Util.Empty request,
        io.grpc.stub.StreamObserver<pb.Node.GetPeersResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetPeersMethod(), responseObserver);
    }

    /**
     * <pre>
     * Connect is used to connect to remote libp2p peers
     * </pre>
     */
    public void connect(pb.Node.ConnectRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getConnectMethod(), responseObserver);
    }

    /**
     * <pre>
     * Disconnect is used to disconnect remote libp2p peer connections
     * </pre>
     */
    public void disconnect(pb.Node.DisconnectRequest request,
        io.grpc.stub.StreamObserver<pb.Node.DisconnectResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getDisconnectMethod(), responseObserver);
    }

    /**
     * <pre>
     * IsConnected is used to check if we are connected with a given peer
     * </pre>
     */
    public void isConnected(pb.Node.IsConnectedRequest request,
        io.grpc.stub.StreamObserver<pb.Node.IsConnectedResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getIsConnectedMethod(), responseObserver);
    }

    /**
     * <pre>
     * EnableExtras is used to enable a particular extras feature
     * </pre>
     */
    public void enableExtras(pb.Node.EnableExtrasRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getEnableExtrasMethod(), responseObserver);
    }

    /**
     * <pre>
     * DisableExtras is used to disable a particular extras feature
     * </pre>
     */
    public void disableExtras(pb.Node.DisableExtrasRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getDisableExtrasMethod(), responseObserver);
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
     * PubSub allows controlling libp2p pubsub topics and subscriptions
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Node.PubSubRequest> pubSub(
        io.grpc.stub.StreamObserver<pb.Node.PubSubResponse> responseObserver) {
      return asyncUnimplementedStreamingCall(getPubSubMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetPeersMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Util.Empty,
                pb.Node.GetPeersResponse>(
                  this, METHODID_GET_PEERS)))
          .addMethod(
            getConnectMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.ConnectRequest,
                pb.Util.Empty>(
                  this, METHODID_CONNECT)))
          .addMethod(
            getDisconnectMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.DisconnectRequest,
                pb.Node.DisconnectResponse>(
                  this, METHODID_DISCONNECT)))
          .addMethod(
            getIsConnectedMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.IsConnectedRequest,
                pb.Node.IsConnectedResponse>(
                  this, METHODID_IS_CONNECTED)))
          .addMethod(
            getEnableExtrasMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.EnableExtrasRequest,
                pb.Util.Empty>(
                  this, METHODID_ENABLE_EXTRAS)))
          .addMethod(
            getDisableExtrasMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.DisableExtrasRequest,
                pb.Util.Empty>(
                  this, METHODID_DISABLE_EXTRAS)))
          .addMethod(
            getP2PMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Node.P2PRequest,
                pb.Node.P2PResponse>(
                  this, METHODID_P2P)))
          .addMethod(
            getPubSubMethod(),
            asyncBidiStreamingCall(
              new MethodHandlers<
                pb.Node.PubSubRequest,
                pb.Node.PubSubResponse>(
                  this, METHODID_PUB_SUB)))
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
    public void getPeers(pb.Util.Empty request,
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
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getConnectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Disconnect is used to disconnect remote libp2p peer connections
     * </pre>
     */
    public void disconnect(pb.Node.DisconnectRequest request,
        io.grpc.stub.StreamObserver<pb.Node.DisconnectResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDisconnectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * IsConnected is used to check if we are connected with a given peer
     * </pre>
     */
    public void isConnected(pb.Node.IsConnectedRequest request,
        io.grpc.stub.StreamObserver<pb.Node.IsConnectedResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getIsConnectedMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * EnableExtras is used to enable a particular extras feature
     * </pre>
     */
    public void enableExtras(pb.Node.EnableExtrasRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getEnableExtrasMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * DisableExtras is used to disable a particular extras feature
     * </pre>
     */
    public void disableExtras(pb.Node.DisableExtrasRequest request,
        io.grpc.stub.StreamObserver<pb.Util.Empty> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDisableExtrasMethod(), getCallOptions()), request, responseObserver);
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
     * PubSub allows controlling libp2p pubsub topics and subscriptions
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Node.PubSubRequest> pubSub(
        io.grpc.stub.StreamObserver<pb.Node.PubSubResponse> responseObserver) {
      return asyncBidiStreamingCall(
          getChannel().newCall(getPubSubMethod(), getCallOptions()), responseObserver);
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
    public pb.Node.GetPeersResponse getPeers(pb.Util.Empty request) {
      return blockingUnaryCall(
          getChannel(), getGetPeersMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Connect is used to connect to remote libp2p peers
     * </pre>
     */
    public pb.Util.Empty connect(pb.Node.ConnectRequest request) {
      return blockingUnaryCall(
          getChannel(), getConnectMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Disconnect is used to disconnect remote libp2p peer connections
     * </pre>
     */
    public pb.Node.DisconnectResponse disconnect(pb.Node.DisconnectRequest request) {
      return blockingUnaryCall(
          getChannel(), getDisconnectMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * IsConnected is used to check if we are connected with a given peer
     * </pre>
     */
    public pb.Node.IsConnectedResponse isConnected(pb.Node.IsConnectedRequest request) {
      return blockingUnaryCall(
          getChannel(), getIsConnectedMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * EnableExtras is used to enable a particular extras feature
     * </pre>
     */
    public pb.Util.Empty enableExtras(pb.Node.EnableExtrasRequest request) {
      return blockingUnaryCall(
          getChannel(), getEnableExtrasMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * DisableExtras is used to disable a particular extras feature
     * </pre>
     */
    public pb.Util.Empty disableExtras(pb.Node.DisableExtrasRequest request) {
      return blockingUnaryCall(
          getChannel(), getDisableExtrasMethod(), getCallOptions(), request);
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
        pb.Util.Empty request) {
      return futureUnaryCall(
          getChannel().newCall(getGetPeersMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Connect is used to connect to remote libp2p peers
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Util.Empty> connect(
        pb.Node.ConnectRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getConnectMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Disconnect is used to disconnect remote libp2p peer connections
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Node.DisconnectResponse> disconnect(
        pb.Node.DisconnectRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getDisconnectMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * IsConnected is used to check if we are connected with a given peer
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Node.IsConnectedResponse> isConnected(
        pb.Node.IsConnectedRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getIsConnectedMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * EnableExtras is used to enable a particular extras feature
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Util.Empty> enableExtras(
        pb.Node.EnableExtrasRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getEnableExtrasMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * DisableExtras is used to disable a particular extras feature
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Util.Empty> disableExtras(
        pb.Node.DisableExtrasRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getDisableExtrasMethod(), getCallOptions()), request);
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
  }

  private static final int METHODID_GET_PEERS = 0;
  private static final int METHODID_CONNECT = 1;
  private static final int METHODID_DISCONNECT = 2;
  private static final int METHODID_IS_CONNECTED = 3;
  private static final int METHODID_ENABLE_EXTRAS = 4;
  private static final int METHODID_DISABLE_EXTRAS = 5;
  private static final int METHODID_P2P = 6;
  private static final int METHODID_PUB_SUB = 7;

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
          serviceImpl.getPeers((pb.Util.Empty) request,
              (io.grpc.stub.StreamObserver<pb.Node.GetPeersResponse>) responseObserver);
          break;
        case METHODID_CONNECT:
          serviceImpl.connect((pb.Node.ConnectRequest) request,
              (io.grpc.stub.StreamObserver<pb.Util.Empty>) responseObserver);
          break;
        case METHODID_DISCONNECT:
          serviceImpl.disconnect((pb.Node.DisconnectRequest) request,
              (io.grpc.stub.StreamObserver<pb.Node.DisconnectResponse>) responseObserver);
          break;
        case METHODID_IS_CONNECTED:
          serviceImpl.isConnected((pb.Node.IsConnectedRequest) request,
              (io.grpc.stub.StreamObserver<pb.Node.IsConnectedResponse>) responseObserver);
          break;
        case METHODID_ENABLE_EXTRAS:
          serviceImpl.enableExtras((pb.Node.EnableExtrasRequest) request,
              (io.grpc.stub.StreamObserver<pb.Util.Empty>) responseObserver);
          break;
        case METHODID_DISABLE_EXTRAS:
          serviceImpl.disableExtras((pb.Node.DisableExtrasRequest) request,
              (io.grpc.stub.StreamObserver<pb.Util.Empty>) responseObserver);
          break;
        case METHODID_P2P:
          serviceImpl.p2P((pb.Node.P2PRequest) request,
              (io.grpc.stub.StreamObserver<pb.Node.P2PResponse>) responseObserver);
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
        case METHODID_PUB_SUB:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.pubSub(
              (io.grpc.stub.StreamObserver<pb.Node.PubSubResponse>) responseObserver);
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
              .addMethod(getDisconnectMethod())
              .addMethod(getIsConnectedMethod())
              .addMethod(getEnableExtrasMethod())
              .addMethod(getDisableExtrasMethod())
              .addMethod(getP2PMethod())
              .addMethod(getPubSubMethod())
              .build();
        }
      }
    }
    return result;
  }
}
