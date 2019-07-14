# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import dag_pb2 as dag__pb2


class DagAPIStub(object):
  """provides protocol buffer definitions for interactin with IPLD objects

  """

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.DagPut = channel.unary_unary(
        '/pb.DagAPI/DagPut',
        request_serializer=dag__pb2.DagPutRequest.SerializeToString,
        response_deserializer=dag__pb2.DagPutResponse.FromString,
        )
    self.DagGet = channel.unary_unary(
        '/pb.DagAPI/DagGet',
        request_serializer=dag__pb2.DagGetRequest.SerializeToString,
        response_deserializer=dag__pb2.DagGetResponse.FromString,
        )
    self.NewIPLDNode = channel.unary_unary(
        '/pb.DagAPI/NewIPLDNode',
        request_serializer=dag__pb2.NewIPLDNodeRequest.SerializeToString,
        response_deserializer=dag__pb2.DagPutResponse.FromString,
        )
    self.AddLinksToNode = channel.unary_unary(
        '/pb.DagAPI/AddLinksToNode',
        request_serializer=dag__pb2.AddLinksRequest.SerializeToString,
        response_deserializer=dag__pb2.DagPutResponse.FromString,
        )
    self.GetLinks = channel.unary_unary(
        '/pb.DagAPI/GetLinks',
        request_serializer=dag__pb2.GetLinksRequest.SerializeToString,
        response_deserializer=dag__pb2.GetLinksResponse.FromString,
        )


class DagAPIServicer(object):
  """provides protocol buffer definitions for interactin with IPLD objects

  """

  def DagPut(self, request, context):
    """DagPut is used to store arbitrary bytes as a custom IPLD object
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def DagGet(self, request, context):
    """DagGet is used to request the raw ipld node data for an IPLD object
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def NewIPLDNode(self, request, context):
    """NewIPLDNode is used to create a new IPFS MerkleDAG node.
    This is the same type as in github.com/ipfs/go-ipld-format.Node
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def AddLinksToNode(self, request, context):
    """AddLinksToNode is used to add links to an existing IPFS MerkleDAG node
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetLinks(self, request, context):
    """GetLinks is used to request all the links for a given object
    """
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_DagAPIServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'DagPut': grpc.unary_unary_rpc_method_handler(
          servicer.DagPut,
          request_deserializer=dag__pb2.DagPutRequest.FromString,
          response_serializer=dag__pb2.DagPutResponse.SerializeToString,
      ),
      'DagGet': grpc.unary_unary_rpc_method_handler(
          servicer.DagGet,
          request_deserializer=dag__pb2.DagGetRequest.FromString,
          response_serializer=dag__pb2.DagGetResponse.SerializeToString,
      ),
      'NewIPLDNode': grpc.unary_unary_rpc_method_handler(
          servicer.NewIPLDNode,
          request_deserializer=dag__pb2.NewIPLDNodeRequest.FromString,
          response_serializer=dag__pb2.DagPutResponse.SerializeToString,
      ),
      'AddLinksToNode': grpc.unary_unary_rpc_method_handler(
          servicer.AddLinksToNode,
          request_deserializer=dag__pb2.AddLinksRequest.FromString,
          response_serializer=dag__pb2.DagPutResponse.SerializeToString,
      ),
      'GetLinks': grpc.unary_unary_rpc_method_handler(
          servicer.GetLinks,
          request_deserializer=dag__pb2.GetLinksRequest.FromString,
          response_serializer=dag__pb2.GetLinksResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'pb.DagAPI', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))