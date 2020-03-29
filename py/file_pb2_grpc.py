# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import file_pb2 as file__pb2
import util_pb2 as util__pb2


class FileAPIStub(object):
  """FileAPI provides a gRPC api to upload/download files as UnixFS objects
  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.UploadFile = channel.stream_unary(
        '/pb.FileAPI/UploadFile',
        request_serializer=file__pb2.UploadRequest.SerializeToString,
        response_deserializer=util__pb2.PutResponse.FromString,
        )
    self.DownloadFile = channel.unary_stream(
        '/pb.FileAPI/DownloadFile',
        request_serializer=file__pb2.DownloadRequest.SerializeToString,
        response_deserializer=file__pb2.DownloadResponse.FromString,
        )
    self.UploadDirectory = channel.stream_unary(
        '/pb.FileAPI/UploadDirectory',
        request_serializer=file__pb2.DirectoryUploadRequest.SerializeToString,
        response_deserializer=util__pb2.PutResponse.FromString,
        )


class FileAPIServicer(object):
  """FileAPI provides a gRPC api to upload/download files as UnixFS objects
  """

  def UploadFile(self, request_iterator, context):
    """UploadFile allows uploading a file as a UnixFS object (equivalent to ipfs add)
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DownloadFile(self, request, context):
    """DownloadFile allows downloading a UnixFS object (equivalent to ipfs get)
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UploadDirectory(self, request_iterator, context):
    """UploadDirectory is used to upload a directory to IPFS and is equivalent to `ipfs add -r` or `ipfs add -rw`
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_FileAPIServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'UploadFile': grpc.stream_unary_rpc_method_handler(
          servicer.UploadFile,
          request_deserializer=file__pb2.UploadRequest.FromString,
          response_serializer=util__pb2.PutResponse.SerializeToString,
      ),
      'DownloadFile': grpc.unary_stream_rpc_method_handler(
          servicer.DownloadFile,
          request_deserializer=file__pb2.DownloadRequest.FromString,
          response_serializer=file__pb2.DownloadResponse.SerializeToString,
      ),
      'UploadDirectory': grpc.stream_unary_rpc_method_handler(
          servicer.UploadDirectory,
          request_deserializer=file__pb2.DirectoryUploadRequest.FromString,
          response_serializer=util__pb2.PutResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'pb.FileAPI', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
