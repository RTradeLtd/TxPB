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
    self.Blockstore = channel.unary_unary(
        '/pb.NodeAPI/Blockstore',
        request_serializer=node__pb2.BlockstoreRequest.SerializeToString,
        response_deserializer=node__pb2.BlockstoreResponse.FromString,
        )
    self.BlockstoreStream = channel.stream_stream(
        '/pb.NodeAPI/BlockstoreStream',
        request_serializer=node__pb2.BlockstoreRequest.SerializeToString,
        response_deserializer=node__pb2.BlockstoreResponse.FromString,
        )
    self.Dag = channel.unary_unary(
        '/pb.NodeAPI/Dag',
        request_serializer=node__pb2.DagRequest.SerializeToString,
        response_deserializer=node__pb2.DagResponse.FromString,
        )
    self.Keystore = channel.unary_unary(
        '/pb.NodeAPI/Keystore',
        request_serializer=node__pb2.KeystoreRequest.SerializeToString,
        response_deserializer=node__pb2.KeystoreResponse.FromString,
        )
    self.Persist = channel.unary_unary(
        '/pb.NodeAPI/Persist',
        request_serializer=node__pb2.PersistRequest.SerializeToString,
        response_deserializer=node__pb2.PersistResponse.FromString,
        )


class NodeAPIServicer(object):
  """NodeAPI provide an API to control the underlying custom ipfs node
  """

  def ConnMgmt(self, request, context):
    """ConnMgmt provides control over libp2p connections
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Extras(self, request, context):
    """Extras provide control over node extras capabilities
    """
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

  def Blockstore(self, request, context):
    """Blockstore allows low-level management of the underlying blockstore
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def BlockstoreStream(self, request_iterator, context):
    """BlockstoreStream is akin to Blockstore, except streamable
    Once v4 is out, condense this + blockstore into a single call
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Dag(self, request, context):
    """Dag is a unidirectional rpc allowing manipulation of low-level ipld objects
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Keystore(self, request, context):
    """Keystore is a unidirectional RPC allowing management of ipfs keystores
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Persist(self, request, context):
    """Persist is used to retrieve data from the network and make it available locally
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
      'Blockstore': grpc.unary_unary_rpc_method_handler(
          servicer.Blockstore,
          request_deserializer=node__pb2.BlockstoreRequest.FromString,
          response_serializer=node__pb2.BlockstoreResponse.SerializeToString,
      ),
      'BlockstoreStream': grpc.stream_stream_rpc_method_handler(
          servicer.BlockstoreStream,
          request_deserializer=node__pb2.BlockstoreRequest.FromString,
          response_serializer=node__pb2.BlockstoreResponse.SerializeToString,
      ),
      'Dag': grpc.unary_unary_rpc_method_handler(
          servicer.Dag,
          request_deserializer=node__pb2.DagRequest.FromString,
          response_serializer=node__pb2.DagResponse.SerializeToString,
      ),
      'Keystore': grpc.unary_unary_rpc_method_handler(
          servicer.Keystore,
          request_deserializer=node__pb2.KeystoreRequest.FromString,
          response_serializer=node__pb2.KeystoreResponse.SerializeToString,
      ),
      'Persist': grpc.unary_unary_rpc_method_handler(
          servicer.Persist,
          request_deserializer=node__pb2.PersistRequest.FromString,
          response_serializer=node__pb2.PersistResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'pb.NodeAPI', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
