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
 * DagAPI provides a gRPC API for manipulating IPLD objects
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.19.0)",
    comments = "Source: dag.proto")
public final class DagAPIGrpc {

  private DagAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.DagAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.Dag.DagPutRequest,
      pb.Dag.DagPutResponse> getDagPutMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DagPut",
      requestType = pb.Dag.DagPutRequest.class,
      responseType = pb.Dag.DagPutResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Dag.DagPutRequest,
      pb.Dag.DagPutResponse> getDagPutMethod() {
    io.grpc.MethodDescriptor<pb.Dag.DagPutRequest, pb.Dag.DagPutResponse> getDagPutMethod;
    if ((getDagPutMethod = DagAPIGrpc.getDagPutMethod) == null) {
      synchronized (DagAPIGrpc.class) {
        if ((getDagPutMethod = DagAPIGrpc.getDagPutMethod) == null) {
          DagAPIGrpc.getDagPutMethod = getDagPutMethod = 
              io.grpc.MethodDescriptor.<pb.Dag.DagPutRequest, pb.Dag.DagPutResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.DagAPI", "DagPut"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagPutRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagPutResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new DagAPIMethodDescriptorSupplier("DagPut"))
                  .build();
          }
        }
     }
     return getDagPutMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Dag.DagGetRequest,
      pb.Dag.DagGetResponse> getDagGetMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DagGet",
      requestType = pb.Dag.DagGetRequest.class,
      responseType = pb.Dag.DagGetResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Dag.DagGetRequest,
      pb.Dag.DagGetResponse> getDagGetMethod() {
    io.grpc.MethodDescriptor<pb.Dag.DagGetRequest, pb.Dag.DagGetResponse> getDagGetMethod;
    if ((getDagGetMethod = DagAPIGrpc.getDagGetMethod) == null) {
      synchronized (DagAPIGrpc.class) {
        if ((getDagGetMethod = DagAPIGrpc.getDagGetMethod) == null) {
          DagAPIGrpc.getDagGetMethod = getDagGetMethod = 
              io.grpc.MethodDescriptor.<pb.Dag.DagGetRequest, pb.Dag.DagGetResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.DagAPI", "DagGet"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagGetResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new DagAPIMethodDescriptorSupplier("DagGet"))
                  .build();
          }
        }
     }
     return getDagGetMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Dag.NewIPLDNodeRequest,
      pb.Dag.DagPutResponse> getNewIPLDNodeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "NewIPLDNode",
      requestType = pb.Dag.NewIPLDNodeRequest.class,
      responseType = pb.Dag.DagPutResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Dag.NewIPLDNodeRequest,
      pb.Dag.DagPutResponse> getNewIPLDNodeMethod() {
    io.grpc.MethodDescriptor<pb.Dag.NewIPLDNodeRequest, pb.Dag.DagPutResponse> getNewIPLDNodeMethod;
    if ((getNewIPLDNodeMethod = DagAPIGrpc.getNewIPLDNodeMethod) == null) {
      synchronized (DagAPIGrpc.class) {
        if ((getNewIPLDNodeMethod = DagAPIGrpc.getNewIPLDNodeMethod) == null) {
          DagAPIGrpc.getNewIPLDNodeMethod = getNewIPLDNodeMethod = 
              io.grpc.MethodDescriptor.<pb.Dag.NewIPLDNodeRequest, pb.Dag.DagPutResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.DagAPI", "NewIPLDNode"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.NewIPLDNodeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagPutResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new DagAPIMethodDescriptorSupplier("NewIPLDNode"))
                  .build();
          }
        }
     }
     return getNewIPLDNodeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Dag.AddLinksRequest,
      pb.Dag.DagPutResponse> getAddLinksToNodeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AddLinksToNode",
      requestType = pb.Dag.AddLinksRequest.class,
      responseType = pb.Dag.DagPutResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Dag.AddLinksRequest,
      pb.Dag.DagPutResponse> getAddLinksToNodeMethod() {
    io.grpc.MethodDescriptor<pb.Dag.AddLinksRequest, pb.Dag.DagPutResponse> getAddLinksToNodeMethod;
    if ((getAddLinksToNodeMethod = DagAPIGrpc.getAddLinksToNodeMethod) == null) {
      synchronized (DagAPIGrpc.class) {
        if ((getAddLinksToNodeMethod = DagAPIGrpc.getAddLinksToNodeMethod) == null) {
          DagAPIGrpc.getAddLinksToNodeMethod = getAddLinksToNodeMethod = 
              io.grpc.MethodDescriptor.<pb.Dag.AddLinksRequest, pb.Dag.DagPutResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.DagAPI", "AddLinksToNode"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.AddLinksRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.DagPutResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new DagAPIMethodDescriptorSupplier("AddLinksToNode"))
                  .build();
          }
        }
     }
     return getAddLinksToNodeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.Dag.GetLinksRequest,
      pb.Dag.GetLinksResponse> getGetLinksMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetLinks",
      requestType = pb.Dag.GetLinksRequest.class,
      responseType = pb.Dag.GetLinksResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<pb.Dag.GetLinksRequest,
      pb.Dag.GetLinksResponse> getGetLinksMethod() {
    io.grpc.MethodDescriptor<pb.Dag.GetLinksRequest, pb.Dag.GetLinksResponse> getGetLinksMethod;
    if ((getGetLinksMethod = DagAPIGrpc.getGetLinksMethod) == null) {
      synchronized (DagAPIGrpc.class) {
        if ((getGetLinksMethod = DagAPIGrpc.getGetLinksMethod) == null) {
          DagAPIGrpc.getGetLinksMethod = getGetLinksMethod = 
              io.grpc.MethodDescriptor.<pb.Dag.GetLinksRequest, pb.Dag.GetLinksResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "pb.DagAPI", "GetLinks"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.GetLinksRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Dag.GetLinksResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new DagAPIMethodDescriptorSupplier("GetLinks"))
                  .build();
          }
        }
     }
     return getGetLinksMethod;
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
   * <pre>
   * DagAPI provides a gRPC API for manipulating IPLD objects
   * </pre>
   */
  public static abstract class DagAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * DagPut is used to store arbitrary bytes as a custom IPLD object
     * </pre>
     */
    public void dagPut(pb.Dag.DagPutRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagPutResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getDagPutMethod(), responseObserver);
    }

    /**
     * <pre>
     * DagGet is used to request the raw ipld node data for an IPLD object
     * </pre>
     */
    public void dagGet(pb.Dag.DagGetRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagGetResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getDagGetMethod(), responseObserver);
    }

    /**
     * <pre>
     * NewIPLDNode is used to create a new IPFS MerkleDAG node.
     * This is the same type as in github.com/ipfs/go-ipld-format.Node
     * </pre>
     */
    public void newIPLDNode(pb.Dag.NewIPLDNodeRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagPutResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getNewIPLDNodeMethod(), responseObserver);
    }

    /**
     * <pre>
     * AddLinksToNode is used to add links to an existing IPFS MerkleDAG node
     * </pre>
     */
    public void addLinksToNode(pb.Dag.AddLinksRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagPutResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getAddLinksToNodeMethod(), responseObserver);
    }

    /**
     * <pre>
     * GetLinks is used to request all the links for a given object
     * </pre>
     */
    public void getLinks(pb.Dag.GetLinksRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.GetLinksResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetLinksMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getDagPutMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Dag.DagPutRequest,
                pb.Dag.DagPutResponse>(
                  this, METHODID_DAG_PUT)))
          .addMethod(
            getDagGetMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Dag.DagGetRequest,
                pb.Dag.DagGetResponse>(
                  this, METHODID_DAG_GET)))
          .addMethod(
            getNewIPLDNodeMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Dag.NewIPLDNodeRequest,
                pb.Dag.DagPutResponse>(
                  this, METHODID_NEW_IPLDNODE)))
          .addMethod(
            getAddLinksToNodeMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Dag.AddLinksRequest,
                pb.Dag.DagPutResponse>(
                  this, METHODID_ADD_LINKS_TO_NODE)))
          .addMethod(
            getGetLinksMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                pb.Dag.GetLinksRequest,
                pb.Dag.GetLinksResponse>(
                  this, METHODID_GET_LINKS)))
          .build();
    }
  }

  /**
   * <pre>
   * DagAPI provides a gRPC API for manipulating IPLD objects
   * </pre>
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
     * DagPut is used to store arbitrary bytes as a custom IPLD object
     * </pre>
     */
    public void dagPut(pb.Dag.DagPutRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagPutResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDagPutMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * DagGet is used to request the raw ipld node data for an IPLD object
     * </pre>
     */
    public void dagGet(pb.Dag.DagGetRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagGetResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDagGetMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * NewIPLDNode is used to create a new IPFS MerkleDAG node.
     * This is the same type as in github.com/ipfs/go-ipld-format.Node
     * </pre>
     */
    public void newIPLDNode(pb.Dag.NewIPLDNodeRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagPutResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getNewIPLDNodeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * AddLinksToNode is used to add links to an existing IPFS MerkleDAG node
     * </pre>
     */
    public void addLinksToNode(pb.Dag.AddLinksRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.DagPutResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddLinksToNodeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * GetLinks is used to request all the links for a given object
     * </pre>
     */
    public void getLinks(pb.Dag.GetLinksRequest request,
        io.grpc.stub.StreamObserver<pb.Dag.GetLinksResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetLinksMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * DagAPI provides a gRPC API for manipulating IPLD objects
   * </pre>
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
     * DagPut is used to store arbitrary bytes as a custom IPLD object
     * </pre>
     */
    public pb.Dag.DagPutResponse dagPut(pb.Dag.DagPutRequest request) {
      return blockingUnaryCall(
          getChannel(), getDagPutMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * DagGet is used to request the raw ipld node data for an IPLD object
     * </pre>
     */
    public pb.Dag.DagGetResponse dagGet(pb.Dag.DagGetRequest request) {
      return blockingUnaryCall(
          getChannel(), getDagGetMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * NewIPLDNode is used to create a new IPFS MerkleDAG node.
     * This is the same type as in github.com/ipfs/go-ipld-format.Node
     * </pre>
     */
    public pb.Dag.DagPutResponse newIPLDNode(pb.Dag.NewIPLDNodeRequest request) {
      return blockingUnaryCall(
          getChannel(), getNewIPLDNodeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * AddLinksToNode is used to add links to an existing IPFS MerkleDAG node
     * </pre>
     */
    public pb.Dag.DagPutResponse addLinksToNode(pb.Dag.AddLinksRequest request) {
      return blockingUnaryCall(
          getChannel(), getAddLinksToNodeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * GetLinks is used to request all the links for a given object
     * </pre>
     */
    public pb.Dag.GetLinksResponse getLinks(pb.Dag.GetLinksRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetLinksMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * DagAPI provides a gRPC API for manipulating IPLD objects
   * </pre>
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
     * DagPut is used to store arbitrary bytes as a custom IPLD object
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Dag.DagPutResponse> dagPut(
        pb.Dag.DagPutRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getDagPutMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * DagGet is used to request the raw ipld node data for an IPLD object
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Dag.DagGetResponse> dagGet(
        pb.Dag.DagGetRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getDagGetMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * NewIPLDNode is used to create a new IPFS MerkleDAG node.
     * This is the same type as in github.com/ipfs/go-ipld-format.Node
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Dag.DagPutResponse> newIPLDNode(
        pb.Dag.NewIPLDNodeRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getNewIPLDNodeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * AddLinksToNode is used to add links to an existing IPFS MerkleDAG node
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Dag.DagPutResponse> addLinksToNode(
        pb.Dag.AddLinksRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getAddLinksToNodeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * GetLinks is used to request all the links for a given object
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<pb.Dag.GetLinksResponse> getLinks(
        pb.Dag.GetLinksRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetLinksMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_DAG_PUT = 0;
  private static final int METHODID_DAG_GET = 1;
  private static final int METHODID_NEW_IPLDNODE = 2;
  private static final int METHODID_ADD_LINKS_TO_NODE = 3;
  private static final int METHODID_GET_LINKS = 4;

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
        case METHODID_DAG_PUT:
          serviceImpl.dagPut((pb.Dag.DagPutRequest) request,
              (io.grpc.stub.StreamObserver<pb.Dag.DagPutResponse>) responseObserver);
          break;
        case METHODID_DAG_GET:
          serviceImpl.dagGet((pb.Dag.DagGetRequest) request,
              (io.grpc.stub.StreamObserver<pb.Dag.DagGetResponse>) responseObserver);
          break;
        case METHODID_NEW_IPLDNODE:
          serviceImpl.newIPLDNode((pb.Dag.NewIPLDNodeRequest) request,
              (io.grpc.stub.StreamObserver<pb.Dag.DagPutResponse>) responseObserver);
          break;
        case METHODID_ADD_LINKS_TO_NODE:
          serviceImpl.addLinksToNode((pb.Dag.AddLinksRequest) request,
              (io.grpc.stub.StreamObserver<pb.Dag.DagPutResponse>) responseObserver);
          break;
        case METHODID_GET_LINKS:
          serviceImpl.getLinks((pb.Dag.GetLinksRequest) request,
              (io.grpc.stub.StreamObserver<pb.Dag.GetLinksResponse>) responseObserver);
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
              .addMethod(getDagPutMethod())
              .addMethod(getDagGetMethod())
              .addMethod(getNewIPLDNodeMethod())
              .addMethod(getAddLinksToNodeMethod())
              .addMethod(getGetLinksMethod())
              .build();
        }
      }
    }
    return result;
  }
}
