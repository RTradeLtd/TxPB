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

const METHOD_STATUS_API_VERSION: ::grpcio::Method<super::util::Empty, super::status::VersionResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.StatusAPI/Version",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_STATUS_API_STATUS: ::grpcio::Method<super::util::Empty, super::status::StatusResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.StatusAPI/Status",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

#[derive(Clone)]
pub struct StatusApiClient {
    client: ::grpcio::Client,
}

impl StatusApiClient {
    pub fn new(channel: ::grpcio::Channel) -> Self {
        StatusApiClient {
            client: ::grpcio::Client::new(channel),
        }
    }

    pub fn version_opt(&self, req: &super::util::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::status::VersionResponse> {
        self.client.unary_call(&METHOD_STATUS_API_VERSION, req, opt)
    }

    pub fn version(&self, req: &super::util::Empty) -> ::grpcio::Result<super::status::VersionResponse> {
        self.version_opt(req, ::grpcio::CallOption::default())
    }

    pub fn version_async_opt(&self, req: &super::util::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::status::VersionResponse>> {
        self.client.unary_call_async(&METHOD_STATUS_API_VERSION, req, opt)
    }

    pub fn version_async(&self, req: &super::util::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::status::VersionResponse>> {
        self.version_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn status_opt(&self, req: &super::util::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::status::StatusResponse> {
        self.client.unary_call(&METHOD_STATUS_API_STATUS, req, opt)
    }

    pub fn status(&self, req: &super::util::Empty) -> ::grpcio::Result<super::status::StatusResponse> {
        self.status_opt(req, ::grpcio::CallOption::default())
    }

    pub fn status_async_opt(&self, req: &super::util::Empty, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::status::StatusResponse>> {
        self.client.unary_call_async(&METHOD_STATUS_API_STATUS, req, opt)
    }

    pub fn status_async(&self, req: &super::util::Empty) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::status::StatusResponse>> {
        self.status_async_opt(req, ::grpcio::CallOption::default())
    }
    pub fn spawn<F>(&self, f: F) where F: ::futures::Future<Item = (), Error = ()> + Send + 'static {
        self.client.spawn(f)
    }
}

pub trait StatusApi {
    fn version(&mut self, ctx: ::grpcio::RpcContext, req: super::util::Empty, sink: ::grpcio::UnarySink<super::status::VersionResponse>);
    fn status(&mut self, ctx: ::grpcio::RpcContext, req: super::util::Empty, sink: ::grpcio::UnarySink<super::status::StatusResponse>);
}

pub fn create_status_api<S: StatusApi + Send + Clone + 'static>(s: S) -> ::grpcio::Service {
    let mut builder = ::grpcio::ServiceBuilder::new();
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_STATUS_API_VERSION, move |ctx, req, resp| {
        instance.version(ctx, req, resp)
    });
    let mut instance = s;
    builder = builder.add_unary_handler(&METHOD_STATUS_API_STATUS, move |ctx, req, resp| {
        instance.status(ctx, req, resp)
    });
    builder.build()
}
