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
 * The replicator provides replication services.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.27.2)",
    comments = "Source: replication.proto")
public final class replicatorGrpc {

  private replicatorGrpc() {}

  public static final String SERVICE_NAME = "pb.replicator";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.ReplicationOuterClass.Subscription,
      pb.ReplicationOuterClass.ReplicationStatus> getAddMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Add",
      requestType = pb.ReplicationOuterClass.Subscription.class,
      responseType = pb.ReplicationOuterClass.ReplicationStatus.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<pb.ReplicationOuterClass.Subscription,
      pb.ReplicationOuterClass.ReplicationStatus> getAddMethod() {
    io.grpc.MethodDescriptor<pb.ReplicationOuterClass.Subscription, pb.ReplicationOuterClass.ReplicationStatus> getAddMethod;
    if ((getAddMethod = replicatorGrpc.getAddMethod) == null) {
      synchronized (replicatorGrpc.class) {
        if ((getAddMethod = replicatorGrpc.getAddMethod) == null) {
          replicatorGrpc.getAddMethod = getAddMethod =
              io.grpc.MethodDescriptor.<pb.ReplicationOuterClass.Subscription, pb.ReplicationOuterClass.ReplicationStatus>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Add"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.ReplicationOuterClass.Subscription.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.ReplicationOuterClass.ReplicationStatus.getDefaultInstance()))
              .setSchemaDescriptor(new replicatorMethodDescriptorSupplier("Add"))
              .build();
        }
      }
    }
    return getAddMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.ReplicationOuterClass.Subscription,
      pb.ReplicationOuterClass.ReplicationStatus> getStatusMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Status",
      requestType = pb.ReplicationOuterClass.Subscription.class,
      responseType = pb.ReplicationOuterClass.ReplicationStatus.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<pb.ReplicationOuterClass.Subscription,
      pb.ReplicationOuterClass.ReplicationStatus> getStatusMethod() {
    io.grpc.MethodDescriptor<pb.ReplicationOuterClass.Subscription, pb.ReplicationOuterClass.ReplicationStatus> getStatusMethod;
    if ((getStatusMethod = replicatorGrpc.getStatusMethod) == null) {
      synchronized (replicatorGrpc.class) {
        if ((getStatusMethod = replicatorGrpc.getStatusMethod) == null) {
          replicatorGrpc.getStatusMethod = getStatusMethod =
              io.grpc.MethodDescriptor.<pb.ReplicationOuterClass.Subscription, pb.ReplicationOuterClass.ReplicationStatus>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Status"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.ReplicationOuterClass.Subscription.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.ReplicationOuterClass.ReplicationStatus.getDefaultInstance()))
              .setSchemaDescriptor(new replicatorMethodDescriptorSupplier("Status"))
              .build();
        }
      }
    }
    return getStatusMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.ReplicationOuterClass.Subscription,
      pb.ReplicationOuterClass.SubscriptionUpdate> getGetSubscriptionUpdateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetSubscriptionUpdate",
      requestType = pb.ReplicationOuterClass.Subscription.class,
      responseType = pb.ReplicationOuterClass.SubscriptionUpdate.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.ReplicationOuterClass.Subscription,
      pb.ReplicationOuterClass.SubscriptionUpdate> getGetSubscriptionUpdateMethod() {
    io.grpc.MethodDescriptor<pb.ReplicationOuterClass.Subscription, pb.ReplicationOuterClass.SubscriptionUpdate> getGetSubscriptionUpdateMethod;
    if ((getGetSubscriptionUpdateMethod = replicatorGrpc.getGetSubscriptionUpdateMethod) == null) {
      synchronized (replicatorGrpc.class) {
        if ((getGetSubscriptionUpdateMethod = replicatorGrpc.getGetSubscriptionUpdateMethod) == null) {
          replicatorGrpc.getGetSubscriptionUpdateMethod = getGetSubscriptionUpdateMethod =
              io.grpc.MethodDescriptor.<pb.ReplicationOuterClass.Subscription, pb.ReplicationOuterClass.SubscriptionUpdate>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetSubscriptionUpdate"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.ReplicationOuterClass.Subscription.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.ReplicationOuterClass.SubscriptionUpdate.getDefaultInstance()))
              .setSchemaDescriptor(new replicatorMethodDescriptorSupplier("GetSubscriptionUpdate"))
              .build();
        }
      }
    }
    return getGetSubscriptionUpdateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.ReplicationOuterClass.SignedSubscription,
      pb.ReplicationOuterClass.ReplicationStatus> getSubmitReplicationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SubmitReplication",
      requestType = pb.ReplicationOuterClass.SignedSubscription.class,
      responseType = pb.ReplicationOuterClass.ReplicationStatus.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<pb.ReplicationOuterClass.SignedSubscription,
      pb.ReplicationOuterClass.ReplicationStatus> getSubmitReplicationMethod() {
    io.grpc.MethodDescriptor<pb.ReplicationOuterClass.SignedSubscription, pb.ReplicationOuterClass.ReplicationStatus> getSubmitReplicationMethod;
    if ((getSubmitReplicationMethod = replicatorGrpc.getSubmitReplicationMethod) == null) {
      synchronized (replicatorGrpc.class) {
        if ((getSubmitReplicationMethod = replicatorGrpc.getSubmitReplicationMethod) == null) {
          replicatorGrpc.getSubmitReplicationMethod = getSubmitReplicationMethod =
              io.grpc.MethodDescriptor.<pb.ReplicationOuterClass.SignedSubscription, pb.ReplicationOuterClass.ReplicationStatus>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SubmitReplication"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.ReplicationOuterClass.SignedSubscription.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.ReplicationOuterClass.ReplicationStatus.getDefaultInstance()))
              .setSchemaDescriptor(new replicatorMethodDescriptorSupplier("SubmitReplication"))
              .build();
        }
      }
    }
    return getSubmitReplicationMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static replicatorStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<replicatorStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<replicatorStub>() {
        @java.lang.Override
        public replicatorStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new replicatorStub(channel, callOptions);
        }
      };
    return replicatorStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static replicatorBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<replicatorBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<replicatorBlockingStub>() {
        @java.lang.Override
        public replicatorBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new replicatorBlockingStub(channel, callOptions);
        }
      };
    return replicatorBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static replicatorFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<replicatorFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<replicatorFutureStub>() {
        @java.lang.Override
        public replicatorFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new replicatorFutureStub(channel, callOptions);
        }
      };
    return replicatorFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * The replicator provides replication services.
   * </pre>
   */
  public static abstract class replicatorImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Add is used to add a replication to this server, changing it's status from reserved to active.
     * </pre>
     */
    public void add(pb.ReplicationOuterClass.Subscription request,
        io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.ReplicationStatus> responseObserver) {
      asyncUnimplementedUnaryCall(getAddMethod(), responseObserver);
    }

    /**
     * <pre>
     * Status returns an updating stream of the replication status on the server.
     * </pre>
     */
    public void status(pb.ReplicationOuterClass.Subscription request,
        io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.ReplicationStatus> responseObserver) {
      asyncUnimplementedUnaryCall(getStatusMethod(), responseObserver);
    }

    /**
     * <pre>
     * GetSubscriptionUpdate returns the latest version of subscribed replication
     * </pre>
     */
    public void getSubscriptionUpdate(pb.ReplicationOuterClass.Subscription request,
        io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.SubscriptionUpdate> responseObserver) {
      asyncUnimplementedUnaryCall(getGetSubscriptionUpdateMethod(), responseObserver);
    }

    /**
     * <pre>
     * SubmitReplication is used by client agents to start replications, after they 
     * have uploaded the files and retrieved the cid, and collected servers to replicate too.
     * </pre>
     */
    public void submitReplication(pb.ReplicationOuterClass.SignedSubscription request,
        io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.ReplicationStatus> responseObserver) {
      asyncUnimplementedUnaryCall(getSubmitReplicationMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getAddMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                pb.ReplicationOuterClass.Subscription,
                pb.ReplicationOuterClass.ReplicationStatus>(
                  this, METHODID_ADD)))
          .addMethod(
            getStatusMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                pb.ReplicationOuterClass.Subscription,
                pb.ReplicationOuterClass.ReplicationStatus>(
                  this, METHODID_STATUS)))
          .addMethod(
            getGetSubscriptionUpdateMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.ReplicationOuterClass.Subscription,
                pb.ReplicationOuterClass.SubscriptionUpdate>(
                  this, METHODID_GET_SUBSCRIPTION_UPDATE)))
          .addMethod(
            getSubmitReplicationMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                pb.ReplicationOuterClass.SignedSubscription,
                pb.ReplicationOuterClass.ReplicationStatus>(
                  this, METHODID_SUBMIT_REPLICATION)))
          .build();
    }
  }

  /**
   * <pre>
   * The replicator provides replication services.
   * </pre>
   */
  public static final class replicatorStub extends io.grpc.stub.AbstractAsyncStub<replicatorStub> {
    private replicatorStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected replicatorStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new replicatorStub(channel, callOptions);
    }

    /**
     * <pre>
     * Add is used to add a replication to this server, changing it's status from reserved to active.
     * </pre>
     */
    public void add(pb.ReplicationOuterClass.Subscription request,
        io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.ReplicationStatus> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getAddMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Status returns an updating stream of the replication status on the server.
     * </pre>
     */
    public void status(pb.ReplicationOuterClass.Subscription request,
        io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.ReplicationStatus> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getStatusMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * GetSubscriptionUpdate returns the latest version of subscribed replication
     * </pre>
     */
    public void getSubscriptionUpdate(pb.ReplicationOuterClass.Subscription request,
        io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.SubscriptionUpdate> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetSubscriptionUpdateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * SubmitReplication is used by client agents to start replications, after they 
     * have uploaded the files and retrieved the cid, and collected servers to replicate too.
     * </pre>
     */
    public void submitReplication(pb.ReplicationOuterClass.SignedSubscription request,
        io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.ReplicationStatus> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getSubmitReplicationMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The replicator provides replication services.
   * </pre>
   */
  public static final class replicatorBlockingStub extends io.grpc.stub.AbstractBlockingStub<replicatorBlockingStub> {
    private replicatorBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected replicatorBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new replicatorBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Add is used to add a replication to this server, changing it's status from reserved to active.
     * </pre>
     */
    public java.util.Iterator<pb.ReplicationOuterClass.ReplicationStatus> add(
        pb.ReplicationOuterClass.Subscription request) {
      return blockingServerStreamingCall(
          getChannel(), getAddMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Status returns an updating stream of the replication status on the server.
     * </pre>
     */
    public java.util.Iterator<pb.ReplicationOuterClass.ReplicationStatus> status(
        pb.ReplicationOuterClass.Subscription request) {
      return blockingServerStreamingCall(
          getChannel(), getStatusMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * GetSubscriptionUpdate returns the latest version of subscribed replication
     * </pre>
     */
    public pb.ReplicationOuterClass.SubscriptionUpdate getSubscriptionUpdate(pb.ReplicationOuterClass.Subscription request) {
      return blockingUnaryCall(
          getChannel(), getGetSubscriptionUpdateMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * SubmitReplication is used by client agents to start replications, after they 
     * have uploaded the files and retrieved the cid, and collected servers to replicate too.
     * </pre>
     */
    public java.util.Iterator<pb.ReplicationOuterClass.ReplicationStatus> submitReplication(
        pb.ReplicationOuterClass.SignedSubscription request) {
      return blockingServerStreamingCall(
          getChannel(), getSubmitReplicationMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The replicator provides replication services.
   * </pre>
   */
  public static final class replicatorFutureStub extends io.grpc.stub.AbstractFutureStub<replicatorFutureStub> {
    private replicatorFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected replicatorFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new replicatorFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * GetSubscriptionUpdate returns the latest version of subscribed replication
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.ReplicationOuterClass.SubscriptionUpdate> getSubscriptionUpdate(
        pb.ReplicationOuterClass.Subscription request) {
      return futureUnaryCall(
          getChannel().newCall(getGetSubscriptionUpdateMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD = 0;
  private static final int METHODID_STATUS = 1;
  private static final int METHODID_GET_SUBSCRIPTION_UPDATE = 2;
  private static final int METHODID_SUBMIT_REPLICATION = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final replicatorImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(replicatorImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD:
          serviceImpl.add((pb.ReplicationOuterClass.Subscription) request,
              (io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.ReplicationStatus>) responseObserver);
          break;
        case METHODID_STATUS:
          serviceImpl.status((pb.ReplicationOuterClass.Subscription) request,
              (io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.ReplicationStatus>) responseObserver);
          break;
        case METHODID_GET_SUBSCRIPTION_UPDATE:
          serviceImpl.getSubscriptionUpdate((pb.ReplicationOuterClass.Subscription) request,
              (io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.SubscriptionUpdate>) responseObserver);
          break;
        case METHODID_SUBMIT_REPLICATION:
          serviceImpl.submitReplication((pb.ReplicationOuterClass.SignedSubscription) request,
              (io.grpc.stub.StreamObserver<pb.ReplicationOuterClass.ReplicationStatus>) responseObserver);
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

  private static abstract class replicatorBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    replicatorBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.ReplicationOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("replicator");
    }
  }

  private static final class replicatorFileDescriptorSupplier
      extends replicatorBaseDescriptorSupplier {
    replicatorFileDescriptorSupplier() {}
  }

  private static final class replicatorMethodDescriptorSupplier
      extends replicatorBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    replicatorMethodDescriptorSupplier(String methodName) {
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
      synchronized (replicatorGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new replicatorFileDescriptorSupplier())
              .addMethod(getAddMethod())
              .addMethod(getStatusMethod())
              .addMethod(getGetSubscriptionUpdateMethod())
              .addMethod(getSubmitReplicationMethod())
              .build();
        }
      }
    }
    return result;
  }
}
