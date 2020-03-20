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

const METHOD_REPLICATOR_ADD: ::grpcio::Method<super::replication::Subscription, super::replication::ReplicationStatus> = ::grpcio::Method {
    ty: ::grpcio::MethodType::ServerStreaming,
    name: "/pb.replicator/Add",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_REPLICATOR_STATUS: ::grpcio::Method<super::replication::Subscription, super::replication::ReplicationStatus> = ::grpcio::Method {
    ty: ::grpcio::MethodType::ServerStreaming,
    name: "/pb.replicator/Status",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_REPLICATOR_GET_SUBSCRIPTION_UPDATE: ::grpcio::Method<super::replication::Subscription, super::replication::SubscriptionUpdate> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.replicator/GetSubscriptionUpdate",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_REPLICATOR_SUBMIT_REPLICATION: ::grpcio::Method<super::replication::SignedSubscription, super::replication::ReplicationStatus> = ::grpcio::Method {
    ty: ::grpcio::MethodType::ServerStreaming,
    name: "/pb.replicator/SubmitReplication",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

#[derive(Clone)]
pub struct ReplicatorClient {
    client: ::grpcio::Client,
}

impl ReplicatorClient {
    pub fn new(channel: ::grpcio::Channel) -> Self {
        ReplicatorClient {
            client: ::grpcio::Client::new(channel),
        }
    }

    pub fn add_opt(&self, req: &super::replication::Subscription, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::replication::ReplicationStatus>> {
        self.client.server_streaming(&METHOD_REPLICATOR_ADD, req, opt)
    }

    pub fn add(&self, req: &super::replication::Subscription) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::replication::ReplicationStatus>> {
        self.add_opt(req, ::grpcio::CallOption::default())
    }

    pub fn status_opt(&self, req: &super::replication::Subscription, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::replication::ReplicationStatus>> {
        self.client.server_streaming(&METHOD_REPLICATOR_STATUS, req, opt)
    }

    pub fn status(&self, req: &super::replication::Subscription) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::replication::ReplicationStatus>> {
        self.status_opt(req, ::grpcio::CallOption::default())
    }

    pub fn get_subscription_update_opt(&self, req: &super::replication::Subscription, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::replication::SubscriptionUpdate> {
        self.client.unary_call(&METHOD_REPLICATOR_GET_SUBSCRIPTION_UPDATE, req, opt)
    }

    pub fn get_subscription_update(&self, req: &super::replication::Subscription) -> ::grpcio::Result<super::replication::SubscriptionUpdate> {
        self.get_subscription_update_opt(req, ::grpcio::CallOption::default())
    }

    pub fn get_subscription_update_async_opt(&self, req: &super::replication::Subscription, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::replication::SubscriptionUpdate>> {
        self.client.unary_call_async(&METHOD_REPLICATOR_GET_SUBSCRIPTION_UPDATE, req, opt)
    }

    pub fn get_subscription_update_async(&self, req: &super::replication::Subscription) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::replication::SubscriptionUpdate>> {
        self.get_subscription_update_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn submit_replication_opt(&self, req: &super::replication::SignedSubscription, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::replication::ReplicationStatus>> {
        self.client.server_streaming(&METHOD_REPLICATOR_SUBMIT_REPLICATION, req, opt)
    }

    pub fn submit_replication(&self, req: &super::replication::SignedSubscription) -> ::grpcio::Result<::grpcio::ClientSStreamReceiver<super::replication::ReplicationStatus>> {
        self.submit_replication_opt(req, ::grpcio::CallOption::default())
    }
    pub fn spawn<F>(&self, f: F) where F: ::futures::Future<Item = (), Error = ()> + Send + 'static {
        self.client.spawn(f)
    }
}

pub trait Replicator {
    fn add(&mut self, ctx: ::grpcio::RpcContext, req: super::replication::Subscription, sink: ::grpcio::ServerStreamingSink<super::replication::ReplicationStatus>);
    fn status(&mut self, ctx: ::grpcio::RpcContext, req: super::replication::Subscription, sink: ::grpcio::ServerStreamingSink<super::replication::ReplicationStatus>);
    fn get_subscription_update(&mut self, ctx: ::grpcio::RpcContext, req: super::replication::Subscription, sink: ::grpcio::UnarySink<super::replication::SubscriptionUpdate>);
    fn submit_replication(&mut self, ctx: ::grpcio::RpcContext, req: super::replication::SignedSubscription, sink: ::grpcio::ServerStreamingSink<super::replication::ReplicationStatus>);
}

pub fn create_replicator<S: Replicator + Send + Clone + 'static>(s: S) -> ::grpcio::Service {
    let mut builder = ::grpcio::ServiceBuilder::new();
    let mut instance = s.clone();
    builder = builder.add_server_streaming_handler(&METHOD_REPLICATOR_ADD, move |ctx, req, resp| {
        instance.add(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_server_streaming_handler(&METHOD_REPLICATOR_STATUS, move |ctx, req, resp| {
        instance.status(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_REPLICATOR_GET_SUBSCRIPTION_UPDATE, move |ctx, req, resp| {
        instance.get_subscription_update(ctx, req, resp)
    });
    let mut instance = s;
    builder = builder.add_server_streaming_handler(&METHOD_REPLICATOR_SUBMIT_REPLICATION, move |ctx, req, resp| {
        instance.submit_replication(ctx, req, resp)
    });
    builder.build()
}
