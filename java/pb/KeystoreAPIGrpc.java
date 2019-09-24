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
 * KeystoreAPI provides a keystore management API
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
      pb.Keystore.KeystoreResponse> getKeystoreHasMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "KeystoreHas",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystoreHasMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getKeystoreHasMethod;
    if ((getKeystoreHasMethod = KeystoreAPIGrpc.getKeystoreHasMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getKeystoreHasMethod = KeystoreAPIGrpc.getKeystoreHasMethod) == null) {
          KeystoreAPIGrpc.getKeystoreHasMethod = getKeystoreHasMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "KeystoreHas"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("KeystoreHas"))
                  .build();
          }
        }
     }
     return getKeystoreHasMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystoreGetMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "KeystoreGet",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystoreGetMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getKeystoreGetMethod;
    if ((getKeystoreGetMethod = KeystoreAPIGrpc.getKeystoreGetMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getKeystoreGetMethod = KeystoreAPIGrpc.getKeystoreGetMethod) == null) {
          KeystoreAPIGrpc.getKeystoreGetMethod = getKeystoreGetMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "KeystoreGet"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("KeystoreGet"))
                  .build();
          }
        }
     }
     return getKeystoreGetMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystorePutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "KeystorePut",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystorePutMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getKeystorePutMethod;
    if ((getKeystorePutMethod = KeystoreAPIGrpc.getKeystorePutMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getKeystorePutMethod = KeystoreAPIGrpc.getKeystorePutMethod) == null) {
          KeystoreAPIGrpc.getKeystorePutMethod = getKeystorePutMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "KeystorePut"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("KeystorePut"))
                  .build();
          }
        }
     }
     return getKeystorePutMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystoreDeleteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "KeystoreDelete",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystoreDeleteMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getKeystoreDeleteMethod;
    if ((getKeystoreDeleteMethod = KeystoreAPIGrpc.getKeystoreDeleteMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getKeystoreDeleteMethod = KeystoreAPIGrpc.getKeystoreDeleteMethod) == null) {
          KeystoreAPIGrpc.getKeystoreDeleteMethod = getKeystoreDeleteMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "KeystoreDelete"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("KeystoreDelete"))
                  .build();
          }
        }
     }
     return getKeystoreDeleteMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystoreListMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "KeystoreList",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getKeystoreListMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getKeystoreListMethod;
    if ((getKeystoreListMethod = KeystoreAPIGrpc.getKeystoreListMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getKeystoreListMethod = KeystoreAPIGrpc.getKeystoreListMethod) == null) {
          KeystoreAPIGrpc.getKeystoreListMethod = getKeystoreListMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "KeystoreList"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("KeystoreList"))
                  .build();
          }
        }
     }
     return getKeystoreListMethod;
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
   * KeystoreAPI provides a keystore management API
   * </pre>
   */
  public static abstract class KeystoreAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * KeystoreHas is used to check if we have the key in our store
     * </pre>
     */
    public void keystoreHas(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getKeystoreHasMethod(), responseObserver);
    }

    /**
     * <pre>
     * KeystoreGet is used to return a key from our store
     * </pre>
     */
    public void keystoreGet(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getKeystoreGetMethod(), responseObserver);
    }

    /**
     * <pre>
     * KeystorePut is used to store a key in our store
     * </pre>
     */
    public void keystorePut(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getKeystorePutMethod(), responseObserver);
    }

    /**
     * <pre>
     * KeystoreDelete is used to remove a key from our store
     * </pre>
     */
    public void keystoreDelete(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getKeystoreDeleteMethod(), responseObserver);
    }

    /**
     * <pre>
     * KeystoreList is used to returns all keyIDs of keys in our store
     * </pre>
     */
    public void keystoreList(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getKeystoreListMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getKeystoreHasMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_KEYSTORE_HAS)))
          .addMethod(
            getKeystoreGetMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_KEYSTORE_GET)))
          .addMethod(
            getKeystorePutMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_KEYSTORE_PUT)))
          .addMethod(
            getKeystoreDeleteMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_KEYSTORE_DELETE)))
          .addMethod(
            getKeystoreListMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_KEYSTORE_LIST)))
          .build();
    }
  }

  /**
   * <pre>
   * KeystoreAPI provides a keystore management API
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
     * KeystoreHas is used to check if we have the key in our store
     * </pre>
     */
    public void keystoreHas(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getKeystoreHasMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * KeystoreGet is used to return a key from our store
     * </pre>
     */
    public void keystoreGet(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getKeystoreGetMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * KeystorePut is used to store a key in our store
     * </pre>
     */
    public void keystorePut(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getKeystorePutMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * KeystoreDelete is used to remove a key from our store
     * </pre>
     */
    public void keystoreDelete(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getKeystoreDeleteMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * KeystoreList is used to returns all keyIDs of keys in our store
     * </pre>
     */
    public void keystoreList(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getKeystoreListMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * KeystoreAPI provides a keystore management API
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
     * KeystoreHas is used to check if we have the key in our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse keystoreHas(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getKeystoreHasMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * KeystoreGet is used to return a key from our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse keystoreGet(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getKeystoreGetMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * KeystorePut is used to store a key in our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse keystorePut(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getKeystorePutMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * KeystoreDelete is used to remove a key from our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse keystoreDelete(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getKeystoreDeleteMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * KeystoreList is used to returns all keyIDs of keys in our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse keystoreList(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getKeystoreListMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * KeystoreAPI provides a keystore management API
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
     * KeystoreHas is used to check if we have the key in our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> keystoreHas(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getKeystoreHasMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * KeystoreGet is used to return a key from our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> keystoreGet(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getKeystoreGetMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * KeystorePut is used to store a key in our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> keystorePut(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getKeystorePutMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * KeystoreDelete is used to remove a key from our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> keystoreDelete(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getKeystoreDeleteMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * KeystoreList is used to returns all keyIDs of keys in our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> keystoreList(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getKeystoreListMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_KEYSTORE_HAS = 0;
  private static final int METHODID_KEYSTORE_GET = 1;
  private static final int METHODID_KEYSTORE_PUT = 2;
  private static final int METHODID_KEYSTORE_DELETE = 3;
  private static final int METHODID_KEYSTORE_LIST = 4;

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
        case METHODID_KEYSTORE_HAS:
          serviceImpl.keystoreHas((pb.Keystore.KeystoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse>) responseObserver);
          break;
        case METHODID_KEYSTORE_GET:
          serviceImpl.keystoreGet((pb.Keystore.KeystoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse>) responseObserver);
          break;
        case METHODID_KEYSTORE_PUT:
          serviceImpl.keystorePut((pb.Keystore.KeystoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse>) responseObserver);
          break;
        case METHODID_KEYSTORE_DELETE:
          serviceImpl.keystoreDelete((pb.Keystore.KeystoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse>) responseObserver);
          break;
        case METHODID_KEYSTORE_LIST:
          serviceImpl.keystoreList((pb.Keystore.KeystoreRequest) request,
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
              .addMethod(getKeystoreHasMethod())
              .addMethod(getKeystoreGetMethod())
              .addMethod(getKeystorePutMethod())
              .addMethod(getKeystoreDeleteMethod())
              .addMethod(getKeystoreListMethod())
              .build();
        }
      }
    }
    return result;
  }
}
