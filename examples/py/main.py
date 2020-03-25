import grpc
import node_pb2_grpc
import node_pb2

channel = grpc.insecure_channel('xapi.temporal.cloud:9090')
s = node_pb2_grpc.NodeAPIStub(channel)
resp = s.Dag(node_pb2.DagRequest(requestType=node_pb2.DAG_PUT, data=bytes(0)))

print(resp)