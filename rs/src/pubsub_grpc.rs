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

const METHOD_PUB_SUB_API_PUB_SUB: ::grpcio::Method<super::pubsub::PubSubRequest, super::pubsub::PubSubResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Duplex,
    name: "/pb.PubSubAPI/PubSub",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

#[derive(Clone)]
pub struct PubSubApiClient {
    client: ::grpcio::Client,
}

impl PubSubApiClient {
    pub fn new(channel: ::grpcio::Channel) -> Self {
        PubSubApiClient {
            client: ::grpcio::Client::new(channel),
        }
    }

    pub fn pub_sub_opt(&self, opt: ::grpcio::CallOption) -> ::grpcio::Result<(::grpcio::ClientDuplexSender<super::pubsub::PubSubRequest>, ::grpcio::ClientDuplexReceiver<super::pubsub::PubSubResponse>)> {
        self.client.duplex_streaming(&METHOD_PUB_SUB_API_PUB_SUB, opt)
    }

    pub fn pub_sub(&self) -> ::grpcio::Result<(::grpcio::ClientDuplexSender<super::pubsub::PubSubRequest>, ::grpcio::ClientDuplexReceiver<super::pubsub::PubSubResponse>)> {
        self.pub_sub_opt(::grpcio::CallOption::default())
    }
    pub fn spawn<F>(&self, f: F) where F: ::futures::Future<Item = (), Error = ()> + Send + 'static {
        self.client.spawn(f)
    }
}

pub trait PubSubApi {
    fn pub_sub(&mut self, ctx: ::grpcio::RpcContext, stream: ::grpcio::RequestStream<super::pubsub::PubSubRequest>, sink: ::grpcio::DuplexSink<super::pubsub::PubSubResponse>);
}

pub fn create_pub_sub_api<S: PubSubApi + Send + Clone + 'static>(s: S) -> ::grpcio::Service {
    let mut builder = ::grpcio::ServiceBuilder::new();
    let mut instance = s;
    builder = builder.add_duplex_streaming_handler(&METHOD_PUB_SUB_API_PUB_SUB, move |ctx, req, resp| {
        instance.pub_sub(ctx, req, resp)
    });
    builder.build()
}
