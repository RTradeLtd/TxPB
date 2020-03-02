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
 * PubSubAPI provides a libp2p pubsub API and is equivalent to go-ipfs
 * `ipfs pubsub` subset of commands.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.27.2)",
    comments = "Source: pubsub.proto")
public final class PubSubAPIGrpc {

  private PubSubAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.PubSubAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Pubsub.PubSubRequest,
      pb.Pubsub.PubSubResponse> getPubSubMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PubSub",
      requestType = pb.Pubsub.PubSubRequest.class,
      responseType = pb.Pubsub.PubSubResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
  public static io.grpc.MethodDescriptor<pb.Pubsub.PubSubRequest,
      pb.Pubsub.PubSubResponse> getPubSubMethod() {
    io.grpc.MethodDescriptor<pb.Pubsub.PubSubRequest, pb.Pubsub.PubSubResponse> getPubSubMethod;
    if ((getPubSubMethod = PubSubAPIGrpc.getPubSubMethod) == null) {
      synchronized (PubSubAPIGrpc.class) {
        if ((getPubSubMethod = PubSubAPIGrpc.getPubSubMethod) == null) {
          PubSubAPIGrpc.getPubSubMethod = getPubSubMethod =
              io.grpc.MethodDescriptor.<pb.Pubsub.PubSubRequest, pb.Pubsub.PubSubResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PubSub"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Pubsub.PubSubResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PubSubAPIMethodDescriptorSupplier("PubSub"))
              .build();
        }
      }
    }
    return getPubSubMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static PubSubAPIStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PubSubAPIStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PubSubAPIStub>() {
        @java.lang.Override
        public PubSubAPIStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PubSubAPIStub(channel, callOptions);
        }
      };
    return PubSubAPIStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static PubSubAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PubSubAPIBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PubSubAPIBlockingStub>() {
        @java.lang.Override
        public PubSubAPIBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PubSubAPIBlockingStub(channel, callOptions);
        }
      };
    return PubSubAPIBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static PubSubAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PubSubAPIFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PubSubAPIFutureStub>() {
        @java.lang.Override
        public PubSubAPIFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PubSubAPIFutureStub(channel, callOptions);
        }
      };
    return PubSubAPIFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * PubSubAPI provides a libp2p pubsub API and is equivalent to go-ipfs
   * `ipfs pubsub` subset of commands.
   * </pre>
   */
  public static abstract class PubSubAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * PubSub allows controlling libp2p pubsub topics and subscriptions using
     * a bidirectional streaming API
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Pubsub.PubSubRequest> pubSub(
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubResponse> responseObserver) {
      return asyncUnimplementedStreamingCall(getPubSubMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getPubSubMethod(),
            asyncBidiStreamingCall(
              new MethodHandlers<
                pb.Pubsub.PubSubRequest,
                pb.Pubsub.PubSubResponse>(
                  this, METHODID_PUB_SUB)))
          .build();
    }
  }

  /**
   * <pre>
   * PubSubAPI provides a libp2p pubsub API and is equivalent to go-ipfs
   * `ipfs pubsub` subset of commands.
   * </pre>
   */
  public static final class PubSubAPIStub extends io.grpc.stub.AbstractAsyncStub<PubSubAPIStub> {
    private PubSubAPIStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PubSubAPIStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PubSubAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     * PubSub allows controlling libp2p pubsub topics and subscriptions using
     * a bidirectional streaming API
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.Pubsub.PubSubRequest> pubSub(
        io.grpc.stub.StreamObserver<pb.Pubsub.PubSubResponse> responseObserver) {
      return asyncBidiStreamingCall(
          getChannel().newCall(getPubSubMethod(), getCallOptions()), responseObserver);
    }
  }

  /**
   * <pre>
   * PubSubAPI provides a libp2p pubsub API and is equivalent to go-ipfs
   * `ipfs pubsub` subset of commands.
   * </pre>
   */
  public static final class PubSubAPIBlockingStub extends io.grpc.stub.AbstractBlockingStub<PubSubAPIBlockingStub> {
    private PubSubAPIBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PubSubAPIBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PubSubAPIBlockingStub(channel, callOptions);
    }
  }

  /**
   * <pre>
   * PubSubAPI provides a libp2p pubsub API and is equivalent to go-ipfs
   * `ipfs pubsub` subset of commands.
   * </pre>
   */
  public static final class PubSubAPIFutureStub extends io.grpc.stub.AbstractFutureStub<PubSubAPIFutureStub> {
    private PubSubAPIFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PubSubAPIFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PubSubAPIFutureStub(channel, callOptions);
    }
  }

  private static final int METHODID_PUB_SUB = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final PubSubAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(PubSubAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
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
              (io.grpc.stub.StreamObserver<pb.Pubsub.PubSubResponse>) responseObserver);
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class PubSubAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    PubSubAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.Pubsub.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("PubSubAPI");
    }
  }

  private static final class PubSubAPIFileDescriptorSupplier
      extends PubSubAPIBaseDescriptorSupplier {
    PubSubAPIFileDescriptorSupplier() {}
  }

  private static final class PubSubAPIMethodDescriptorSupplier
      extends PubSubAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    PubSubAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (PubSubAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new PubSubAPIFileDescriptorSupplier())
              .addMethod(getPubSubMethod())
              .build();
        }
      }
    }
    return result;
  }
}
