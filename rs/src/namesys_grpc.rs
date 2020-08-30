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

const METHOD_NAME_SYS_API_NAME_SYS_RESOLVE: ::grpcio::Method<super::namesys::NameSysResolveRequest, super::namesys::NameSysResolveResult> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.NameSysAPI/NameSysResolve",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_NAME_SYS_API_NAME_SYS_RESOLVE_ASYNC: ::grpcio::Method<super::namesys::NameSysResolveRequest, super::namesys::NameSysResolveResult> = ::grpcio::Method {
    ty: ::grpcio::MethodType::ServerStreaming,
    name: "/pb.NameSysAPI/NameSysResolveAsync",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_NAME_SYS_API_NAME_SYS_PUBLISH: ::grpcio::Method<super::namesys::NameSysPublishRequest, super::util::Empty> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.NameSysAPI/NameSysPublish",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

#[derive(Clone)]
pub struct NameSysApiClient {
    client: ::grpcio::Client,
}

impl NameSysApiClient {
    pub fn new(channel: ::grpcio::Channel) -> Self {
        NameSysApiClient {
            client: ::grpcio::Client::new(channel),
        }
    }

    pub fn name_sys_resolve_opt(&self, req: &super::namesys::NameSysResolveRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::namesys::NameSysResolveResult> {
        self.client.unary_call(&METHOD_NAME_SYS_API_NAME_SYS_RESOLVE, req, opt)
    }

    pub fn name_sys_resolve(&self, req: &super::namesys::NameSysResolveRequest) -> ::grpcio::Result<super::namesys::NameSysResolveResult> {
        self.name_sys_resolve_opt(req, ::grpcio::CallOption::default())
    }

    pub fn name_sys_resolve_async_opt(&self, req: &super::namesys::NameSysResolveRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::namesys::NameSysResolveResult>> {
        self.client.unary_call_async(&METHOD_NAME_SYS_API_NAME_SYS_RESOLVE, req, opt)
    }

    pub fn name_sys_resolve_async(&self, req: &super::namesys::NameSysResolveRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::namesys::NameSysResolveResult>> {
        self.name_sys_resolve_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn name_sys_resolve_async_opt(&self, req: &super::namesys::NameSysResolveRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::namesys::NameSysResolveResult>> {
        self.client.server_streaming(&METHOD_NAME_SYS_API_NAME_SYS_RESOLVE_ASYNC, req, opt)
    }

    pub fn name_sys_resolve_async(&self, req: &super::namesys::NameSysResolveRequest) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::namesys::NameSysResolveResult>> {
        self.name_sys_resolve_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn name_sys_publish_opt(&self, req: &super::namesys::NameSysPublishRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::util::Empty> {
        self.client.unary_call(&METHOD_NAME_SYS_API_NAME_SYS_PUBLISH, req, opt)
    }

    pub fn name_sys_publish(&self, req: &super::namesys::NameSysPublishRequest) -> ::grpcio::Result<super::util::Empty> {
        self.name_sys_publish_opt(req, ::grpcio::CallOption::default())
    }

    pub fn name_sys_publish_async_opt(&self, req: &super::namesys::NameSysPublishRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::util::Empty>> {
        self.client.unary_call_async(&METHOD_NAME_SYS_API_NAME_SYS_PUBLISH, req, opt)
    }

    pub fn name_sys_publish_async(&self, req: &super::namesys::NameSysPublishRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::util::Empty>> {
        self.name_sys_publish_async_opt(req, ::grpcio::CallOption::default())
    }
    pub fn spawn<F>(&self, f: F) where F: ::futures::Future<Output = ()> + Send + 'static {
        self.client.spawn(f)
    }
}

pub trait NameSysApi {
    fn name_sys_resolve(&mut self, ctx: ::grpcio::RpcContext, req: super::namesys::NameSysResolveRequest, sink: ::grpcio::UnarySink<super::namesys::NameSysResolveResult>);
    fn name_sys_resolve_async(&mut self, ctx: ::grpcio::RpcContext, req: super::namesys::NameSysResolveRequest, sink: ::grpcio::ServerStreamingSink<super::namesys::NameSysResolveResult>);
    fn name_sys_publish(&mut self, ctx: ::grpcio::RpcContext, req: super::namesys::NameSysPublishRequest, sink: ::grpcio::UnarySink<super::util::Empty>);
}

pub fn create_name_sys_api<S: NameSysApi + Send + Clone + 'static>(s: S) -> ::grpcio::Service {
    let mut builder = ::grpcio::ServiceBuilder::new();
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_NAME_SYS_API_NAME_SYS_RESOLVE, move |ctx, req, resp| {
        instance.name_sys_resolve(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_server_streaming_handler(&METHOD_NAME_SYS_API_NAME_SYS_RESOLVE_ASYNC, move |ctx, req, resp| {
        instance.name_sys_resolve_async(ctx, req, resp)
    });
    let mut instance = s;
    builder = builder.add_unary_handler(&METHOD_NAME_SYS_API_NAME_SYS_PUBLISH, move |ctx, req, resp| {
        instance.name_sys_publish(ctx, req, resp)
    });
    builder.build()
}
