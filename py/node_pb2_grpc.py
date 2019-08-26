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
    self.GetPeers = channel.unary_unary(
        '/pb.NodeAPI/GetPeers',
        request_serializer=util__pb2.Empty.SerializeToString,
        response_deserializer=node__pb2.GetPeersResponse.FromString,
        )
    self.Connect = channel.unary_unary(
        '/pb.NodeAPI/Connect',
        request_serializer=node__pb2.ConnectRequest.SerializeToString,
        response_deserializer=util__pb2.Empty.FromString,
        )
    self.Disconnect = channel.unary_unary(
        '/pb.NodeAPI/Disconnect',
        request_serializer=node__pb2.DisconnectRequest.SerializeToString,
        response_deserializer=node__pb2.DisconnectResponse.FromString,
        )
    self.IsConnected = channel.unary_unary(
        '/pb.NodeAPI/IsConnected',
        request_serializer=node__pb2.IsConnectedRequest.SerializeToString,
        response_deserializer=node__pb2.IsConnectedResponse.FromString,
        )
    self.EnableExtras = channel.unary_unary(
        '/pb.NodeAPI/EnableExtras',
        request_serializer=node__pb2.EnableExtrasRequest.SerializeToString,
        response_deserializer=util__pb2.Empty.FromString,
        )
    self.DisableExtras = channel.unary_unary(
        '/pb.NodeAPI/DisableExtras',
        request_serializer=node__pb2.DisableExtrasRequest.SerializeToString,
        response_deserializer=util__pb2.Empty.FromString,
        )


class NodeAPIServicer(object):
  """NodeAPI provide an API to control the underlying custom ipfs node
  """

  def GetPeers(self, request, context):
    """GetPeers returns a message containing a slice of current peers in our peerstore
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Connect(self, request, context):
    """Connect is used to connect to remote libp2p peers
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Disconnect(self, request, context):
    """Disconnect is used to disconnect remote libp2p peer connections
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def IsConnected(self, request, context):
    """IsConnected is used to check if we are connected with a given peer
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def EnableExtras(self, request, context):
    """EnableExtras is used to enable a particular extras feature
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DisableExtras(self, request, context):
    """DisableExtras is used to disable a particular extras feature
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_NodeAPIServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'GetPeers': grpc.unary_unary_rpc_method_handler(
          servicer.GetPeers,
          request_deserializer=util__pb2.Empty.FromString,
          response_serializer=node__pb2.GetPeersResponse.SerializeToString,
      ),
      'Connect': grpc.unary_unary_rpc_method_handler(
          servicer.Connect,
          request_deserializer=node__pb2.ConnectRequest.FromString,
          response_serializer=util__pb2.Empty.SerializeToString,
      ),
      'Disconnect': grpc.unary_unary_rpc_method_handler(
          servicer.Disconnect,
          request_deserializer=node__pb2.DisconnectRequest.FromString,
          response_serializer=node__pb2.DisconnectResponse.SerializeToString,
      ),
      'IsConnected': grpc.unary_unary_rpc_method_handler(
          servicer.IsConnected,
          request_deserializer=node__pb2.IsConnectedRequest.FromString,
          response_serializer=node__pb2.IsConnectedResponse.SerializeToString,
      ),
      'EnableExtras': grpc.unary_unary_rpc_method_handler(
          servicer.EnableExtras,
          request_deserializer=node__pb2.EnableExtrasRequest.FromString,
          response_serializer=util__pb2.Empty.SerializeToString,
      ),
      'DisableExtras': grpc.unary_unary_rpc_method_handler(
          servicer.DisableExtras,
          request_deserializer=node__pb2.DisableExtrasRequest.FromString,
          response_serializer=util__pb2.Empty.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'pb.NodeAPI', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
