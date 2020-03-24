// This file is generated. Do not edit
// @generated

// https://github.com/Manishearth/rust-clippy/issues/702
#![allow(unknown_lints)]
#![allow(clippy::all)]

#![cfg_attr(rustfmt, rustfmt_skip)]

#![allow(box_pointers)]
#![allow(dead_code)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(non_upper_case_globals)]
#![allow(trivial_casts)]
#![allow(unsafe_code)]
#![allow(unused_imports)]
#![allow(unused_results)]

const METHOD_FILE_API_UPLOAD_FILE: ::grpcio::Method<super::file::UploadRequest, super::util::PutResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::ClientStreaming,
    name: "/pb.FileAPI/UploadFile",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_FILE_API_DOWNLOAD_FILE: ::grpcio::Method<super::file::DownloadRequest, super::file::DownloadResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::ServerStreaming,
    name: "/pb.FileAPI/DownloadFile",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

#[derive(Clone)]
pub struct FileApiClient {
    client: ::grpcio::Client,
}

impl FileApiClient {
    pub fn new(channel: ::grpcio::Channel) -> Self {
        FileApiClient {
            client: ::grpcio::Client::new(channel),
        }
    }

    pub fn upload_file_opt(&self, opt: ::grpcio::CallOption) -> ::grpcio::Result<(::grpcio::ClientCStreamSender<super::file::UploadRequest>, ::grpcio::ClientCStreamReceiver<super::util::PutResponse>)> {
        self.client.client_streaming(&METHOD_FILE_API_UPLOAD_FILE, opt)
    }

    pub fn upload_file(&self) -> ::grpcio::Result<(::grpcio::ClientCStreamSender<super::file::UploadRequest>, ::grpcio::ClientCStreamReceiver<super::util::PutResponse>)> {
        self.upload_file_opt(::grpcio::CallOption::default())
    }

    pub fn download_file_opt(&self, req: &super::file::DownloadRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::file::DownloadResponse>> {
        self.client.server_streaming(&METHOD_FILE_API_DOWNLOAD_FILE, req, opt)
    }

    pub fn download_file(&self, req: &super::file::DownloadRequest) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::file::DownloadResponse>> {
        self.download_file_opt(req, ::grpcio::CallOption::default())
    }
    pub fn spawn<F>(&self, f: F) where F: ::futures::Future<Item = (), Error = ()> + Send + 'static {
        self.client.spawn(f)
    }
}

pub trait FileApi {
    fn upload_file(&mut self, ctx: ::grpcio::RpcContext, stream: ::grpcio::RequestStream<super::file::UploadRequest>, sink: ::grpcio::ClientStreamingSink<super::util::PutResponse>);
    fn download_file(&mut self, ctx: ::grpcio::RpcContext, req: super::file::DownloadRequest, sink: ::grpcio::ServerStreamingSink<super::file::DownloadResponse>);
}

pub fn create_file_api<S: FileApi + Send + Clone + 'static>(s: S) -> ::grpcio::Service {
    let mut builder = ::grpcio::ServiceBuilder::new();
    let mut instance = s.clone();
    builder = builder.add_client_streaming_handler(&METHOD_FILE_API_UPLOAD_FILE, move |ctx, req, resp| {
        instance.upload_file(ctx, req, resp)
    });
    let mut instance = s;
    builder = builder.add_server_streaming_handler(&METHOD_FILE_API_DOWNLOAD_FILE, move |ctx, req, resp| {
        instance.download_file(ctx, req, resp)
    });
    builder.build()
}
