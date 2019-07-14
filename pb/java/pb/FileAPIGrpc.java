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
    comments = "Source: file.proto")
public final class FileAPIGrpc {

  private FileAPIGrpc() {}

  public static final String SERVICE_NAME = "pb.FileAPI";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<pb.File.UploadRequest,
      pb.Util.PutResponse> getUploadFileMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UploadFile",
      requestType = pb.File.UploadRequest.class,
      responseType = pb.Util.PutResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
  public static io.grpc.MethodDescriptor<pb.File.UploadRequest,
      pb.Util.PutResponse> getUploadFileMethod() {
    io.grpc.MethodDescriptor<pb.File.UploadRequest, pb.Util.PutResponse> getUploadFileMethod;
    if ((getUploadFileMethod = FileAPIGrpc.getUploadFileMethod) == null) {
      synchronized (FileAPIGrpc.class) {
        if ((getUploadFileMethod = FileAPIGrpc.getUploadFileMethod) == null) {
          FileAPIGrpc.getUploadFileMethod = getUploadFileMethod = 
              io.grpc.MethodDescriptor.<pb.File.UploadRequest, pb.Util.PutResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.FileAPI", "UploadFile"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.File.UploadRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.PutResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new FileAPIMethodDescriptorSupplier("UploadFile"))
                  .build();
          }
        }
     }
     return getUploadFileMethod;
  }

  private static volatile io.grpc.MethodDescriptor<pb.File.DownloadRequest,
      pb.File.DownloadResponse> getDownloadFileMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "DownloadFile",
      requestType = pb.File.DownloadRequest.class,
      responseType = pb.File.DownloadResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<pb.File.DownloadRequest,
      pb.File.DownloadResponse> getDownloadFileMethod() {
    io.grpc.MethodDescriptor<pb.File.DownloadRequest, pb.File.DownloadResponse> getDownloadFileMethod;
    if ((getDownloadFileMethod = FileAPIGrpc.getDownloadFileMethod) == null) {
      synchronized (FileAPIGrpc.class) {
        if ((getDownloadFileMethod = FileAPIGrpc.getDownloadFileMethod) == null) {
          FileAPIGrpc.getDownloadFileMethod = getDownloadFileMethod = 
              io.grpc.MethodDescriptor.<pb.File.DownloadRequest, pb.File.DownloadResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "pb.FileAPI", "DownloadFile"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.File.DownloadRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.File.DownloadResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new FileAPIMethodDescriptorSupplier("DownloadFile"))
                  .build();
          }
        }
     }
     return getDownloadFileMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static FileAPIStub newStub(io.grpc.Channel channel) {
    return new FileAPIStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static FileAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new FileAPIBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static FileAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new FileAPIFutureStub(channel);
  }

  /**
   */
  public static abstract class FileAPIImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * UploadFile allows uploading a file as a UnixFS object (equivalent to ipfs add)
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.File.UploadRequest> uploadFile(
        io.grpc.stub.StreamObserver<pb.Util.PutResponse> responseObserver) {
      return asyncUnimplementedStreamingCall(getUploadFileMethod(), responseObserver);
    }

    /**
     * <pre>
     * DownloadFile allows downloading a UnixFS object (equivalent to ipfs get)
     * </pre>
     */
    public void downloadFile(pb.File.DownloadRequest request,
        io.grpc.stub.StreamObserver<pb.File.DownloadResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getDownloadFileMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getUploadFileMethod(),
            asyncClientStreamingCall(
              new MethodHandlers<
                pb.File.UploadRequest,
                pb.Util.PutResponse>(
                  this, METHODID_UPLOAD_FILE)))
          .addMethod(
            getDownloadFileMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                pb.File.DownloadRequest,
                pb.File.DownloadResponse>(
                  this, METHODID_DOWNLOAD_FILE)))
          .build();
    }
  }

  /**
   */
  public static final class FileAPIStub extends io.grpc.stub.AbstractStub<FileAPIStub> {
    private FileAPIStub(io.grpc.Channel channel) {
      super(channel);
    }

    private FileAPIStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected FileAPIStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new FileAPIStub(channel, callOptions);
    }

    /**
     * <pre>
     * UploadFile allows uploading a file as a UnixFS object (equivalent to ipfs add)
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.File.UploadRequest> uploadFile(
        io.grpc.stub.StreamObserver<pb.Util.PutResponse> responseObserver) {
      return asyncClientStreamingCall(
          getChannel().newCall(getUploadFileMethod(), getCallOptions()), responseObserver);
    }

    /**
     * <pre>
     * DownloadFile allows downloading a UnixFS object (equivalent to ipfs get)
     * </pre>
     */
    public void downloadFile(pb.File.DownloadRequest request,
        io.grpc.stub.StreamObserver<pb.File.DownloadResponse> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getDownloadFileMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class FileAPIBlockingStub extends io.grpc.stub.AbstractStub<FileAPIBlockingStub> {
    private FileAPIBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private FileAPIBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected FileAPIBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new FileAPIBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * DownloadFile allows downloading a UnixFS object (equivalent to ipfs get)
     * </pre>
     */
    public java.util.Iterator<pb.File.DownloadResponse> downloadFile(
        pb.File.DownloadRequest request) {
      return blockingServerStreamingCall(
          getChannel(), getDownloadFileMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class FileAPIFutureStub extends io.grpc.stub.AbstractStub<FileAPIFutureStub> {
    private FileAPIFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private FileAPIFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected FileAPIFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new FileAPIFutureStub(channel, callOptions);
    }
  }

  private static final int METHODID_DOWNLOAD_FILE = 0;
  private static final int METHODID_UPLOAD_FILE = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final FileAPIImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(FileAPIImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_DOWNLOAD_FILE:
          serviceImpl.downloadFile((pb.File.DownloadRequest) request,
              (io.grpc.stub.StreamObserver<pb.File.DownloadResponse>) responseObserver);
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
        case METHODID_UPLOAD_FILE:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.uploadFile(
              (io.grpc.stub.StreamObserver<pb.Util.PutResponse>) responseObserver);
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class FileAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    FileAPIBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return pb.File.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("FileAPI");
    }
  }

  private static final class FileAPIFileDescriptorSupplier
      extends FileAPIBaseDescriptorSupplier {
    FileAPIFileDescriptorSupplier() {}
  }

  private static final class FileAPIMethodDescriptorSupplier
      extends FileAPIBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    FileAPIMethodDescriptorSupplier(String methodName) {
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
      synchronized (FileAPIGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new FileAPIFileDescriptorSupplier())
              .addMethod(getUploadFileMethod())
              .addMethod(getDownloadFileMethod())
              .build();
        }
      }
    }
    return result;
  }
}
