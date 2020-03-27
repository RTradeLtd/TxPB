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

const METHOD_NODE_API_CONN_MGMT: ::grpcio::Method<super::node::ConnMgmtRequest, super::node::ConnMgmtResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.NodeAPI/ConnMgmt",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_NODE_API_EXTRAS: ::grpcio::Method<super::node::ExtrasRequest, super::util::Empty> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.NodeAPI/Extras",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_NODE_API_P2_P: ::grpcio::Method<super::node::P2PRequest, super::node::P2PResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.NodeAPI/P2P",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_NODE_API_BLOCKSTORE: ::grpcio::Method<super::node::BlockstoreRequest, super::node::BlockstoreResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.NodeAPI/Blockstore",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_NODE_API_BLOCKSTORE_STREAM: ::grpcio::Method<super::node::BlockstoreRequest, super::node::BlockstoreResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Duplex,
    name: "/pb.NodeAPI/BlockstoreStream",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_NODE_API_DAG: ::grpcio::Method<super::node::DagRequest, super::node::DagResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.NodeAPI/Dag",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_NODE_API_KEYSTORE: ::grpcio::Method<super::node::KeystoreRequest, super::node::KeystoreResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.NodeAPI/Keystore",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_NODE_API_PERSIST: ::grpcio::Method<super::node::PersistRequest, super::node::PersistResponse> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/pb.NodeAPI/Persist",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

#[derive(Clone)]
pub struct NodeApiClient {
    client: ::grpcio::Client,
}

impl NodeApiClient {
    pub fn new(channel: ::grpcio::Channel) -> Self {
        NodeApiClient {
            client: ::grpcio::Client::new(channel),
        }
    }

    pub fn conn_mgmt_opt(&self, req: &super::node::ConnMgmtRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::node::ConnMgmtResponse> {
        self.client.unary_call(&METHOD_NODE_API_CONN_MGMT, req, opt)
    }

    pub fn conn_mgmt(&self, req: &super::node::ConnMgmtRequest) -> ::grpcio::Result<super::node::ConnMgmtResponse> {
        self.conn_mgmt_opt(req, ::grpcio::CallOption::default())
    }

    pub fn conn_mgmt_async_opt(&self, req: &super::node::ConnMgmtRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::ConnMgmtResponse>> {
        self.client.unary_call_async(&METHOD_NODE_API_CONN_MGMT, req, opt)
    }

    pub fn conn_mgmt_async(&self, req: &super::node::ConnMgmtRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::ConnMgmtResponse>> {
        self.conn_mgmt_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn extras_opt(&self, req: &super::node::ExtrasRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::util::Empty> {
        self.client.unary_call(&METHOD_NODE_API_EXTRAS, req, opt)
    }

    pub fn extras(&self, req: &super::node::ExtrasRequest) -> ::grpcio::Result<super::util::Empty> {
        self.extras_opt(req, ::grpcio::CallOption::default())
    }

    pub fn extras_async_opt(&self, req: &super::node::ExtrasRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::util::Empty>> {
        self.client.unary_call_async(&METHOD_NODE_API_EXTRAS, req, opt)
    }

    pub fn extras_async(&self, req: &super::node::ExtrasRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::util::Empty>> {
        self.extras_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn p2_p_opt(&self, req: &super::node::P2PRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::node::P2PResponse> {
        self.client.unary_call(&METHOD_NODE_API_P2_P, req, opt)
    }

    pub fn p2_p(&self, req: &super::node::P2PRequest) -> ::grpcio::Result<super::node::P2PResponse> {
        self.p2_p_opt(req, ::grpcio::CallOption::default())
    }

    pub fn p2_p_async_opt(&self, req: &super::node::P2PRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::P2PResponse>> {
        self.client.unary_call_async(&METHOD_NODE_API_P2_P, req, opt)
    }

    pub fn p2_p_async(&self, req: &super::node::P2PRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::P2PResponse>> {
        self.p2_p_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn blockstore_opt(&self, req: &super::node::BlockstoreRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::node::BlockstoreResponse> {
        self.client.unary_call(&METHOD_NODE_API_BLOCKSTORE, req, opt)
    }

    pub fn blockstore(&self, req: &super::node::BlockstoreRequest) -> ::grpcio::Result<super::node::BlockstoreResponse> {
        self.blockstore_opt(req, ::grpcio::CallOption::default())
    }

    pub fn blockstore_async_opt(&self, req: &super::node::BlockstoreRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::BlockstoreResponse>> {
        self.client.unary_call_async(&METHOD_NODE_API_BLOCKSTORE, req, opt)
    }

    pub fn blockstore_async(&self, req: &super::node::BlockstoreRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::BlockstoreResponse>> {
        self.blockstore_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn blockstore_stream_opt(&self, opt: ::grpcio::CallOption) -> ::grpcio::Result<(::grpcio::ClientDuplexSender<super::node::BlockstoreRequest>, ::grpcio::ClientDuplexReceiver<super::node::BlockstoreResponse>)> {
        self.client.duplex_streaming(&METHOD_NODE_API_BLOCKSTORE_STREAM, opt)
    }

    pub fn blockstore_stream(&self) -> ::grpcio::Result<(::grpcio::ClientDuplexSender<super::node::BlockstoreRequest>, ::grpcio::ClientDuplexReceiver<super::node::BlockstoreResponse>)> {
        self.blockstore_stream_opt(::grpcio::CallOption::default())
    }

    pub fn dag_opt(&self, req: &super::node::DagRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::node::DagResponse> {
        self.client.unary_call(&METHOD_NODE_API_DAG, req, opt)
    }

    pub fn dag(&self, req: &super::node::DagRequest) -> ::grpcio::Result<super::node::DagResponse> {
        self.dag_opt(req, ::grpcio::CallOption::default())
    }

    pub fn dag_async_opt(&self, req: &super::node::DagRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::DagResponse>> {
        self.client.unary_call_async(&METHOD_NODE_API_DAG, req, opt)
    }

    pub fn dag_async(&self, req: &super::node::DagRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::DagResponse>> {
        self.dag_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn keystore_opt(&self, req: &super::node::KeystoreRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::node::KeystoreResponse> {
        self.client.unary_call(&METHOD_NODE_API_KEYSTORE, req, opt)
    }

    pub fn keystore(&self, req: &super::node::KeystoreRequest) -> ::grpcio::Result<super::node::KeystoreResponse> {
        self.keystore_opt(req, ::grpcio::CallOption::default())
    }

    pub fn keystore_async_opt(&self, req: &super::node::KeystoreRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::KeystoreResponse>> {
        self.client.unary_call_async(&METHOD_NODE_API_KEYSTORE, req, opt)
    }

    pub fn keystore_async(&self, req: &super::node::KeystoreRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::KeystoreResponse>> {
        self.keystore_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn persist_opt(&self, req: &super::node::PersistRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::node::PersistResponse> {
        self.client.unary_call(&METHOD_NODE_API_PERSIST, req, opt)
    }

    pub fn persist(&self, req: &super::node::PersistRequest) -> ::grpcio::Result<super::node::PersistResponse> {
        self.persist_opt(req, ::grpcio::CallOption::default())
    }

    pub fn persist_async_opt(&self, req: &super::node::PersistRequest, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::PersistResponse>> {
        self.client.unary_call_async(&METHOD_NODE_API_PERSIST, req, opt)
    }

    pub fn persist_async(&self, req: &super::node::PersistRequest) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::node::PersistResponse>> {
        self.persist_async_opt(req, ::grpcio::CallOption::default())
    }
    pub fn spawn<F>(&self, f: F) where F: ::futures::Future<Item = (), Error = ()> + Send + 'static {
        self.client.spawn(f)
    }
}

pub trait NodeApi {
    fn conn_mgmt(&mut self, ctx: ::grpcio::RpcContext, req: super::node::ConnMgmtRequest, sink: ::grpcio::UnarySink<super::node::ConnMgmtResponse>);
    fn extras(&mut self, ctx: ::grpcio::RpcContext, req: super::node::ExtrasRequest, sink: ::grpcio::UnarySink<super::util::Empty>);
    fn p2_p(&mut self, ctx: ::grpcio::RpcContext, req: super::node::P2PRequest, sink: ::grpcio::UnarySink<super::node::P2PResponse>);
    fn blockstore(&mut self, ctx: ::grpcio::RpcContext, req: super::node::BlockstoreRequest, sink: ::grpcio::UnarySink<super::node::BlockstoreResponse>);
    fn blockstore_stream(&mut self, ctx: ::grpcio::RpcContext, stream: ::grpcio::RequestStream<super::node::BlockstoreRequest>, sink: ::grpcio::DuplexSink<super::node::BlockstoreResponse>);
    fn dag(&mut self, ctx: ::grpcio::RpcContext, req: super::node::DagRequest, sink: ::grpcio::UnarySink<super::node::DagResponse>);
    fn keystore(&mut self, ctx: ::grpcio::RpcContext, req: super::node::KeystoreRequest, sink: ::grpcio::UnarySink<super::node::KeystoreResponse>);
    fn persist(&mut self, ctx: ::grpcio::RpcContext, req: super::node::PersistRequest, sink: ::grpcio::UnarySink<super::node::PersistResponse>);
}

pub fn create_node_api<S: NodeApi + Send + Clone + 'static>(s: S) -> ::grpcio::Service {
    let mut builder = ::grpcio::ServiceBuilder::new();
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_NODE_API_CONN_MGMT, move |ctx, req, resp| {
        instance.conn_mgmt(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_NODE_API_EXTRAS, move |ctx, req, resp| {
        instance.extras(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_NODE_API_P2_P, move |ctx, req, resp| {
        instance.p2_p(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_NODE_API_BLOCKSTORE, move |ctx, req, resp| {
        instance.blockstore(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_duplex_streaming_handler(&METHOD_NODE_API_BLOCKSTORE_STREAM, move |ctx, req, resp| {
        instance.blockstore_stream(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_NODE_API_DAG, move |ctx, req, resp| {
        instance.dag(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_NODE_API_KEYSTORE, move |ctx, req, resp| {
        instance.keystore(ctx, req, resp)
    });
    let mut instance = s;
    builder = builder.add_unary_handler(&METHOD_NODE_API_PERSIST, move |ctx, req, resp| {
        instance.persist(ctx, req, resp)
    });
    builder.build()
}
