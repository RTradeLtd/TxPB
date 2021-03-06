# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import status_pb2 as status__pb2
import util_pb2 as util__pb2


class StatusAPIStub(object):
  """provides utilities to retrieve api status information from
  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.Version = channel.unary_unary(
        '/pb.StatusAPI/Version',
        request_serializer=util__pb2.Empty.SerializeToString,
        response_deserializer=status__pb2.VersionResponse.FromString,
        )
    self.Status = channel.unary_unary(
        '/pb.StatusAPI/Status',
        request_serializer=util__pb2.Empty.SerializeToString,
        response_deserializer=status__pb2.StatusResponse.FromString,
        )


class StatusAPIServicer(object):
  """provides utilities to retrieve api status information from
  """

  def Version(self, request, context):
    """Version is used to retrieve api version information
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Status(self, request, context):
    """Status is used to retrieve api status information.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_StatusAPIServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'Version': grpc.unary_unary_rpc_method_handler(
          servicer.Version,
          request_deserializer=util__pb2.Empty.FromString,
          response_serializer=status__pb2.VersionResponse.SerializeToString,
      ),
      'Status': grpc.unary_unary_rpc_method_handler(
          servicer.Status,
          request_deserializer=util__pb2.Empty.FromString,
          response_serializer=status__pb2.StatusResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'pb.StatusAPI', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
