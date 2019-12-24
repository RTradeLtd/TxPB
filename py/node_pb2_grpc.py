# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import node_pb2 as node__pb2
import util_pb2 as util__pb2


class NodeAPIStub(object):
  """NodeAPI provide an API to control the underlying custom ipfs node
  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.ConnMgmt = channel.unary_unary(
        '/pb.NodeAPI/ConnMgmt',
        request_serializer=node__pb2.ConnMgmtRequest.SerializeToString,
        response_deserializer=node__pb2.ConnMgmtResponse.FromString,
        )
    self.Extras = channel.unary_unary(
        '/pb.NodeAPI/Extras',
        request_serializer=node__pb2.ExtrasRequest.SerializeToString,
        response_deserializer=util__pb2.Empty.FromString,
        )
    self.P2P = channel.unary_unary(
        '/pb.NodeAPI/P2P',
        request_serializer=node__pb2.P2PRequest.SerializeToString,
        response_deserializer=node__pb2.P2PResponse.FromString,
        )


class NodeAPIServicer(object):
  """NodeAPI provide an API to control the underlying custom ipfs node
  """

  def ConnMgmt(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Extras(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def P2P(self, request, context):
    """P2P allows control of generalized p2p streams for tcp/udp based protocol.
    By using this RPC, we can tunnel traffic similar to ssh tunneling
    except using libp2p as the transport layer, and and tcp/udp port.
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_NodeAPIServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'ConnMgmt': grpc.unary_unary_rpc_method_handler(
          servicer.ConnMgmt,
          request_deserializer=node__pb2.ConnMgmtRequest.FromString,
          response_serializer=node__pb2.ConnMgmtResponse.SerializeToString,
      ),
      'Extras': grpc.unary_unary_rpc_method_handler(
          servicer.Extras,
          request_deserializer=node__pb2.ExtrasRequest.FromString,
          response_serializer=util__pb2.Empty.SerializeToString,
      ),
      'P2P': grpc.unary_unary_rpc_method_handler(
          servicer.P2P,
          request_deserializer=node__pb2.P2PRequest.FromString,
          response_serializer=node__pb2.P2PResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'pb.NodeAPI', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
