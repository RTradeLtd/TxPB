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
 * KeystoreAPI provides a keystore management API, and is equivalent
 * to the go-ipfs `ipfs key` subset of commands.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.19.0)",
    comments = "Source: keystore.proto")
public final class KeystoreAPIGrpc {

  private KeystoreAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.KeystoreAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystoreMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Keystore",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystoreMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getKeystoreMethod;
    if ((getKeystoreMethod = KeystoreAPIGrpc.getKeystoreMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getKeystoreMethod = KeystoreAPIGrpc.getKeystoreMethod) == null) {
          KeystoreAPIGrpc.getKeystoreMethod = getKeystoreMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "Keystore"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("Keystore"))
                  .build();
          }
        }
     }
     return getKeystoreMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static KeystoreAPIStub newStub(io.grpc.Channel channel) {
    return new KeystoreAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static KeystoreAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new KeystoreAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static KeystoreAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new KeystoreAPIFutureStub(channel);
  }

  /**
   * <pre>
   * KeystoreAPI provides a keystore management API, and is equivalent
   * to the go-ipfs `ipfs key` subset of commands.
   * </pre>
   */
  public static abstract class KeystoreAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     *Keystore is a unidirectional RPC allowing management of ipfs keystores
     * </pre>
     */
    public void keystore(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getKeystoreMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getKeystoreMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_KEYSTORE)))
          .build();
    }
  }

  /**
   * <pre>
   * KeystoreAPI provides a keystore management API, and is equivalent
   * to the go-ipfs `ipfs key` subset of commands.
   * </pre>
   */
  public static final class KeystoreAPIStub extends io.grpc.stub.AbstractStub<KeystoreAPIStub> {
    private KeystoreAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private KeystoreAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected KeystoreAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new KeystoreAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     *Keystore is a unidirectional RPC allowing management of ipfs keystores
     * </pre>
     */
    public void keystore(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getKeystoreMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * KeystoreAPI provides a keystore management API, and is equivalent
   * to the go-ipfs `ipfs key` subset of commands.
   * </pre>
   */
  public static final class KeystoreAPIBlockingStub extends io.grpc.stub.AbstractStub<KeystoreAPIBlockingStub> {
    private KeystoreAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private KeystoreAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected KeystoreAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new KeystoreAPIBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     *Keystore is a unidirectional RPC allowing management of ipfs keystores
     * </pre>
     */
    public pb.Keystore.KeystoreResponse keystore(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getKeystoreMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * KeystoreAPI provides a keystore management API, and is equivalent
   * to the go-ipfs `ipfs key` subset of commands.
   * </pre>
   */
  public static final class KeystoreAPIFutureStub extends io.grpc.stub.AbstractStub<KeystoreAPIFutureStub> {
    private KeystoreAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private KeystoreAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected KeystoreAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new KeystoreAPIFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     *Keystore is a unidirectional RPC allowing management of ipfs keystores
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> keystore(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getKeystoreMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_KEYSTORE = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final KeystoreAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(KeystoreAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_KEYSTORE:
          serviceImpl.keystore((pb.Keystore.KeystoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse>) responseObserver);
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

  private static abstract class KeystoreAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    KeystoreAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.Keystore.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("KeystoreAPI");
    }
  }

  private static final class KeystoreAPIFileDescriptorSupplier
      extends KeystoreAPIBaseDescriptorSupplier {
    KeystoreAPIFileDescriptorSupplier() {}
  }

  private static final class KeystoreAPIMethodDescriptorSupplier
      extends KeystoreAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    KeystoreAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (KeystoreAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new KeystoreAPIFileDescriptorSupplier())
              .addMethod(getKeystoreMethod())
              .build();
        }
      }
    }
    return result;
  }
}
