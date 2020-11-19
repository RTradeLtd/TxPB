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

const METHOD_ADMIN_API_MANAGE_GC: ::grpcio::Method<super::admin::ManageGCRequest, super::admin::ManageGCResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.AdminAPI/ManageGC",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_ADMIN_API_REF_COUNT: ::grpcio::Method<super::admin::RefCountRequest, super::admin::RefCountResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.AdminAPI/RefCount",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

#[derive(Clone)]
pub struct AdminApiClient {
    client: ::grpcio::Client,
}

impl AdminApiClient {
    pub fn new(channel: ::grpcio::Channel) -> Self {
        AdminApiClient {
            client: ::grpcio::Client::new(channel),
        }
    }

    pub fn manage_gc_opt(&self, req: &super::admin::ManageGCRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::admin::ManageGCResponse> {
        self.client.unary_call(&METHOD_ADMIN_API_MANAGE_GC, req, opt)
    }

    pub fn manage_gc(&self, req: &super::admin::ManageGCRequest) -> ::grpcio::Result<super::admin::ManageGCResponse> {
        self.manage_gc_opt(req, ::grpcio::CallOption::default())
    }

    pub fn manage_gc_async_opt(&self, req: &super::admin::ManageGCRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::admin::ManageGCResponse>> {
        self.client.unary_call_async(&METHOD_ADMIN_API_MANAGE_GC, req, opt)
    }

    pub fn manage_gc_async(&self, req: &super::admin::ManageGCRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::admin::ManageGCResponse>> {
        self.manage_gc_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn ref_count_opt(&self, req: &super::admin::RefCountRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::admin::RefCountResponse> {
        self.client.unary_call(&METHOD_ADMIN_API_REF_COUNT, req, opt)
    }

    pub fn ref_count(&self, req: &super::admin::RefCountRequest) -> ::grpcio::Result<super::admin::RefCountResponse> {
        self.ref_count_opt(req, ::grpcio::CallOption::default())
    }

    pub fn ref_count_async_opt(&self, req: &super::admin::RefCountRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::admin::RefCountResponse>> {
        self.client.unary_call_async(&METHOD_ADMIN_API_REF_COUNT, req, opt)
    }

    pub fn ref_count_async(&self, req: &super::admin::RefCountRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::admin::RefCountResponse>> {
        self.ref_count_async_opt(req, ::grpcio::CallOption::default())
    }
    pub fn spawn<F>(&self, f: F) where F: ::futures::Future<Output = ()> + Send + 'static {
        self.client.spawn(f)
    }
}

pub trait AdminApi {
    fn manage_gc(&mut self, ctx: ::grpcio::RpcContext, req: super::admin::ManageGCRequest, sink: ::grpcio::UnarySink<super::admin::ManageGCResponse>);
    fn ref_count(&mut self, ctx: ::grpcio::RpcContext, req: super::admin::RefCountRequest, sink: ::grpcio::UnarySink<super::admin::RefCountResponse>);
}

pub fn create_admin_api<S: AdminApi + Send + Clone + 'static>(s: S) -> ::grpcio::Service {
    let mut builder = ::grpcio::ServiceBuilder::new();
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_ADMIN_API_MANAGE_GC, move |ctx, req, resp| {
        instance.manage_gc(ctx, req, resp)
    });
    let mut instance = s;
    builder = builder.add_unary_handler(&METHOD_ADMIN_API_REF_COUNT, move |ctx, req, resp| {
        instance.ref_count(ctx, req, resp)
    });
    builder.build()
}
