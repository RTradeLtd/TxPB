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
        self.RemoveFile = channel.unary_unary(
                '/pb.FileAPI/RemoveFile',
                request_serializer=file__pb2.RemoveRequest.SerializeToString,
                response_deserializer=file__pb2.RemoveResponse.FromString,
                )


class FileAPIServicer(object):
    """FileAPI provides a gRPC api to upload/download files as UnixFS objects
    """

    def UploadFile(self, request_iterator, context):
        """UploadFile allows uploading a file as a UnixFS object (equivalent to ipfs pin add)
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

    def RemoveFile(self, request, context):
        """RemoveFile allows removing a UnixFS object or decrease it's reference counter (equivalent to ipfs pin rm)
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
            'RemoveFile': grpc.unary_unary_rpc_method_handler(
                    servicer.RemoveFile,
                    request_deserializer=file__pb2.RemoveRequest.FromString,
                    response_serializer=file__pb2.RemoveResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'pb.FileAPI', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class FileAPI(object):
    """FileAPI provides a gRPC api to upload/download files as UnixFS objects
    """

    @staticmethod
    def UploadFile(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_unary(request_iterator, target, '/pb.FileAPI/UploadFile',
            file__pb2.UploadRequest.SerializeToString,
            util__pb2.PutResponse.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DownloadFile(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/pb.FileAPI/DownloadFile',
            file__pb2.DownloadRequest.SerializeToString,
            file__pb2.DownloadResponse.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def RemoveFile(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pb.FileAPI/RemoveFile',
            file__pb2.RemoveRequest.SerializeToString,
            file__pb2.RemoveResponse.FromString,
            options, channel_credentials,
            call_credentials, compression, wait_for_ready, timeout, metadata)
