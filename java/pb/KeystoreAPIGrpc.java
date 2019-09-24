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
      pb.Keystore.KeystoreResponse> getHasMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Has",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getHasMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getHasMethod;
    if ((getHasMethod = KeystoreAPIGrpc.getHasMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getHasMethod = KeystoreAPIGrpc.getHasMethod) == null) {
          KeystoreAPIGrpc.getHasMethod = getHasMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "Has"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("Has"))
                  .build();
          }
        }
     }
     return getHasMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getGetMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Get",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getGetMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getGetMethod;
    if ((getGetMethod = KeystoreAPIGrpc.getGetMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getGetMethod = KeystoreAPIGrpc.getGetMethod) == null) {
          KeystoreAPIGrpc.getGetMethod = getGetMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "Get"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("Get"))
                  .build();
          }
        }
     }
     return getGetMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getPutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Put",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getPutMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getPutMethod;
    if ((getPutMethod = KeystoreAPIGrpc.getPutMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getPutMethod = KeystoreAPIGrpc.getPutMethod) == null) {
          KeystoreAPIGrpc.getPutMethod = getPutMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "Put"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("Put"))
                  .build();
          }
        }
     }
     return getPutMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getDeleteMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Delete",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getDeleteMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getDeleteMethod;
    if ((getDeleteMethod = KeystoreAPIGrpc.getDeleteMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getDeleteMethod = KeystoreAPIGrpc.getDeleteMethod) == null) {
          KeystoreAPIGrpc.getDeleteMethod = getDeleteMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "Delete"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("Delete"))
                  .build();
          }
        }
     }
     return getDeleteMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getListMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "List",
      requestType = pb.Keystore.KeystoreRequest.class,
      responseType = pb.Keystore.KeystoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest,
      pb.Keystore.KeystoreResponse> getListMethod() {
    io.grpc.MethodDescriptor<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse> getListMethod;
    if ((getListMethod = KeystoreAPIGrpc.getListMethod) == null) {
      synchronized (KeystoreAPIGrpc.class) {
        if ((getListMethod = KeystoreAPIGrpc.getListMethod) == null) {
          KeystoreAPIGrpc.getListMethod = getListMethod = 
              io.grpc.MethodDescriptor.<pb.Keystore.KeystoreRequest, pb.Keystore.KeystoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.KeystoreAPI", "List"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Keystore.KeystoreResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new KeystoreAPIMethodDescriptorSupplier("List"))
                  .build();
          }
        }
     }
     return getListMethod;
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
     * Has is used to check if we have the key in our store
     * </pre>
     */
    public void has(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getHasMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get is used to return a key from our store
     * </pre>
     */
    public void get(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetMethod(), responseObserver);
    }

    /**
     * <pre>
     * Put is used to store a key in our store
     * </pre>
     */
    public void put(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getPutMethod(), responseObserver);
    }

    /**
     * <pre>
     * Delete is used to remove a key from our store
     * </pre>
     */
    public void delete(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteMethod(), responseObserver);
    }

    /**
     * <pre>
     * List is used to returns all keyIDs of keys in our store
     * </pre>
     */
    public void list(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getListMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getHasMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_HAS)))
          .addMethod(
            getGetMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_GET)))
          .addMethod(
            getPutMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_PUT)))
          .addMethod(
            getDeleteMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_DELETE)))
          .addMethod(
            getListMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Keystore.KeystoreRequest,
                pb.Keystore.KeystoreResponse>(
                  this, METHODID_LIST)))
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
     * Has is used to check if we have the key in our store
     * </pre>
     */
    public void has(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getHasMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get is used to return a key from our store
     * </pre>
     */
    public void get(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Put is used to store a key in our store
     * </pre>
     */
    public void put(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getPutMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Delete is used to remove a key from our store
     * </pre>
     */
    public void delete(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * List is used to returns all keyIDs of keys in our store
     * </pre>
     */
    public void list(pb.Keystore.KeystoreRequest request,
        io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListMethod(), getCallOptions()), request, responseObserver);
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
     * Has is used to check if we have the key in our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse has(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getHasMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get is used to return a key from our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse get(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Put is used to store a key in our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse put(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getPutMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Delete is used to remove a key from our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse delete(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getDeleteMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * List is used to returns all keyIDs of keys in our store
     * </pre>
     */
    public pb.Keystore.KeystoreResponse list(pb.Keystore.KeystoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getListMethod(), getCallOptions(), request);
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
     * Has is used to check if we have the key in our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> has(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getHasMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get is used to return a key from our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> get(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Put is used to store a key in our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> put(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getPutMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Delete is used to remove a key from our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> delete(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * List is used to returns all keyIDs of keys in our store
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Keystore.KeystoreResponse> list(
        pb.Keystore.KeystoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_HAS = 0;
  private static final int METHODID_GET = 1;
  private static final int METHODID_PUT = 2;
  private static final int METHODID_DELETE = 3;
  private static final int METHODID_LIST = 4;

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
        case METHODID_HAS:
          serviceImpl.has((pb.Keystore.KeystoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse>) responseObserver);
          break;
        case METHODID_GET:
          serviceImpl.get((pb.Keystore.KeystoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse>) responseObserver);
          break;
        case METHODID_PUT:
          serviceImpl.put((pb.Keystore.KeystoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse>) responseObserver);
          break;
        case METHODID_DELETE:
          serviceImpl.delete((pb.Keystore.KeystoreRequest) request,
              (io.grpc.stub.StreamObserver<pb.Keystore.KeystoreResponse>) responseObserver);
          break;
        case METHODID_LIST:
          serviceImpl.list((pb.Keystore.KeystoreRequest) request,
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
              .addMethod(getHasMethod())
              .addMethod(getGetMethod())
              .addMethod(getPutMethod())
              .addMethod(getDeleteMethod())
              .addMethod(getListMethod())
              .build();
        }
      }
    }
    return result;
  }
}
