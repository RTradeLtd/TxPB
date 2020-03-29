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
 * FileAPI provides a gRPC api to upload/download files as UnixFS objects
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.27.2)",
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
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UploadFile"))
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
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "DownloadFile"))
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

  private static volatile io.grpc.MethodDescriptor<pb.File.DirectoryUploadRequest,
      pb.Util.PutResponse> getUploadDirectoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UploadDirectory",
      requestType = pb.File.DirectoryUploadRequest.class,
      responseType = pb.Util.PutResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
  public static io.grpc.MethodDescriptor<pb.File.DirectoryUploadRequest,
      pb.Util.PutResponse> getUploadDirectoryMethod() {
    io.grpc.MethodDescriptor<pb.File.DirectoryUploadRequest, pb.Util.PutResponse> getUploadDirectoryMethod;
    if ((getUploadDirectoryMethod = FileAPIGrpc.getUploadDirectoryMethod) == null) {
      synchronized (FileAPIGrpc.class) {
        if ((getUploadDirectoryMethod = FileAPIGrpc.getUploadDirectoryMethod) == null) {
          FileAPIGrpc.getUploadDirectoryMethod = getUploadDirectoryMethod =
              io.grpc.MethodDescriptor.<pb.File.DirectoryUploadRequest, pb.Util.PutResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.CLIENT_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UploadDirectory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.File.DirectoryUploadRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  pb.Util.PutResponse.getDefaultInstance()))
              .setSchemaDescriptor(new FileAPIMethodDescriptorSupplier("UploadDirectory"))
              .build();
        }
      }
    }
    return getUploadDirectoryMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static FileAPIStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<FileAPIStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<FileAPIStub>() {
        @java.lang.Override
        public FileAPIStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new FileAPIStub(channel, callOptions);
        }
      };
    return FileAPIStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static FileAPIBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<FileAPIBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<FileAPIBlockingStub>() {
        @java.lang.Override
        public FileAPIBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new FileAPIBlockingStub(channel, callOptions);
        }
      };
    return FileAPIBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static FileAPIFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<FileAPIFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<FileAPIFutureStub>() {
        @java.lang.Override
        public FileAPIFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new FileAPIFutureStub(channel, callOptions);
        }
      };
    return FileAPIFutureStub.newStub(factory, channel);
  }

  /**
   * <pre>
   * FileAPI provides a gRPC api to upload/download files as UnixFS objects
   * </pre>
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

    /**
     * <pre>
     * UploadDirectory is used to upload a directory to IPFS and is equivalent to `ipfs add -r` or `ipfs add -rw`
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.File.DirectoryUploadRequest> uploadDirectory(
        io.grpc.stub.StreamObserver<pb.Util.PutResponse> responseObserver) {
      return asyncUnimplementedStreamingCall(getUploadDirectoryMethod(), responseObserver);
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
          .addMethod(
            getUploadDirectoryMethod(),
            asyncClientStreamingCall(
              new MethodHandlers<
                pb.File.DirectoryUploadRequest,
                pb.Util.PutResponse>(
                  this, METHODID_UPLOAD_DIRECTORY)))
          .build();
    }
  }

  /**
   * <pre>
   * FileAPI provides a gRPC api to upload/download files as UnixFS objects
   * </pre>
   */
  public static final class FileAPIStub extends io.grpc.stub.AbstractAsyncStub<FileAPIStub> {
    private FileAPIStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected FileAPIStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
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

    /**
     * <pre>
     * UploadDirectory is used to upload a directory to IPFS and is equivalent to `ipfs add -r` or `ipfs add -rw`
     * </pre>
     */
    public io.grpc.stub.StreamObserver<pb.File.DirectoryUploadRequest> uploadDirectory(
        io.grpc.stub.StreamObserver<pb.Util.PutResponse> responseObserver) {
      return asyncClientStreamingCall(
          getChannel().newCall(getUploadDirectoryMethod(), getCallOptions()), responseObserver);
    }
  }

  /**
   * <pre>
   * FileAPI provides a gRPC api to upload/download files as UnixFS objects
   * </pre>
   */
  public static final class FileAPIBlockingStub extends io.grpc.stub.AbstractBlockingStub<FileAPIBlockingStub> {
    private FileAPIBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected FileAPIBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
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
   * <pre>
   * FileAPI provides a gRPC api to upload/download files as UnixFS objects
   * </pre>
   */
  public static final class FileAPIFutureStub extends io.grpc.stub.AbstractFutureStub<FileAPIFutureStub> {
    private FileAPIFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected FileAPIFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new FileAPIFutureStub(channel, callOptions);
    }
  }

  private static final int METHODID_DOWNLOAD_FILE = 0;
  private static final int METHODID_UPLOAD_FILE = 1;
  private static final int METHODID_UPLOAD_DIRECTORY = 2;

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
        case METHODID_UPLOAD_DIRECTORY:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.uploadDirectory(
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
              .addMethod(getUploadDirectoryMethod())
              .build();
        }
      }
    }
    return result;
  }
}
