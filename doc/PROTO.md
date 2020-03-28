# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [admin.proto](#admin.proto)
    - [ManageGCRequest](#pb.ManageGCRequest)
    - [ManageGCResponse](#pb.ManageGCResponse)
    - [RefCountRequest](#pb.RefCountRequest)
    - [RefCountResponse](#pb.RefCountResponse)
    - [RefCountResponse.CidsEntry](#pb.RefCountResponse.CidsEntry)
  
    - [GCREQTYPE](#pb.GCREQTYPE)
    - [REFREQOPTS](#pb.REFREQOPTS)
    - [REFREQTYPE](#pb.REFREQTYPE)
  
  
    - [AdminAPI](#pb.AdminAPI)
  

- [file.proto](#file.proto)
    - [Blob](#pb.Blob)
    - [DownloadRequest](#pb.DownloadRequest)
    - [DownloadResponse](#pb.DownloadResponse)
    - [UploadOptions](#pb.UploadOptions)
    - [UploadRequest](#pb.UploadRequest)
  
  
  
    - [FileAPI](#pb.FileAPI)
  

- [namesys.proto](#namesys.proto)
    - [NameSysPublishRequest](#pb.NameSysPublishRequest)
    - [NameSysResolveRequest](#pb.NameSysResolveRequest)
    - [NameSysResolveResult](#pb.NameSysResolveResult)
  
  
  
    - [NameSysAPI](#pb.NameSysAPI)
  

- [node.proto](#node.proto)
    - [Block](#pb.Block)
    - [BlockstoreRequest](#pb.BlockstoreRequest)
    - [BlockstoreResponse](#pb.BlockstoreResponse)
    - [ConnMgmtRequest](#pb.ConnMgmtRequest)
    - [ConnMgmtResponse](#pb.ConnMgmtResponse)
    - [ConnMgmtResponse.ConnectedEntry](#pb.ConnMgmtResponse.ConnectedEntry)
    - [ConnMgmtResponse.StatusEntry](#pb.ConnMgmtResponse.StatusEntry)
    - [ConnMgmtStatus](#pb.ConnMgmtStatus)
    - [DagRequest](#pb.DagRequest)
    - [DagRequest.LinksEntry](#pb.DagRequest.LinksEntry)
    - [DagResponse](#pb.DagResponse)
    - [ExtrasRequest](#pb.ExtrasRequest)
    - [GetPeersResponse](#pb.GetPeersResponse)
    - [IPLDLink](#pb.IPLDLink)
    - [IPLDNode](#pb.IPLDNode)
    - [KeystoreRequest](#pb.KeystoreRequest)
    - [KeystoreResponse](#pb.KeystoreResponse)
    - [P2PLsInfo](#pb.P2PLsInfo)
    - [P2PRequest](#pb.P2PRequest)
    - [P2PResponse](#pb.P2PResponse)
    - [PersistRequest](#pb.PersistRequest)
    - [PersistResponse](#pb.PersistResponse)
    - [PersistResponse.ErrorsEntry](#pb.PersistResponse.ErrorsEntry)
    - [PersistResponse.StatusEntry](#pb.PersistResponse.StatusEntry)
  
    - [BSREQOPTS](#pb.BSREQOPTS)
    - [BSREQTYPE](#pb.BSREQTYPE)
    - [CONNMGMTREQTYPE](#pb.CONNMGMTREQTYPE)
    - [DAGREQTYPE](#pb.DAGREQTYPE)
    - [EXTRASREQTYPE](#pb.EXTRASREQTYPE)
    - [EXTRASTYPE](#pb.EXTRASTYPE)
    - [KSREQTYPE](#pb.KSREQTYPE)
    - [P2PREQTYPE](#pb.P2PREQTYPE)
  
  
    - [NodeAPI](#pb.NodeAPI)
  

- [pubsub.proto](#pubsub.proto)
    - [PubSubMessage](#pb.PubSubMessage)
    - [PubSubPeer](#pb.PubSubPeer)
    - [PubSubRequest](#pb.PubSubRequest)
    - [PubSubResponse](#pb.PubSubResponse)
  
    - [PSREQTYPE](#pb.PSREQTYPE)
  
  
    - [PubSubAPI](#pb.PubSubAPI)
  

- [replication.proto](#replication.proto)
    - [AddrInfo](#pb.AddrInfo)
    - [Replication](#pb.Replication)
    - [ReplicationStatus](#pb.ReplicationStatus)
    - [ServerSource](#pb.ServerSource)
    - [SignedSubscription](#pb.SignedSubscription)
    - [Subscription](#pb.Subscription)
    - [SubscriptionUpdate](#pb.SubscriptionUpdate)
  
  
  
    - [replicator](#pb.replicator)
  

- [status.proto](#status.proto)
    - [StatusResponse](#pb.StatusResponse)
    - [VersionResponse](#pb.VersionResponse)
  
    - [APISTATUS](#pb.APISTATUS)
  
  
    - [StatusAPI](#pb.StatusAPI)
  

- [util.proto](#util.proto)
    - [Empty](#pb.Empty)
    - [PutResponse](#pb.PutResponse)
  
  
  
  

- [Scalar Value Types](#scalar-value-types)



<a name="admin.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## admin.proto



<a name="pb.ManageGCRequest"></a>

### ManageGCRequest
ManageGCRequest is a message used to control TemporalX garbage collection


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [GCREQTYPE](#pb.GCREQTYPE) |  | type is the type of gc request being performed |






<a name="pb.ManageGCResponse"></a>

### ManageGCResponse
ManageGCResponse is a message used as a response to gc control requests


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [string](#string) |  | status contains a status message |






<a name="pb.RefCountRequest"></a>

### RefCountRequest
RefCountRequest is used to analyze the reference
counter store, and retrieve usage information


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cids | [string](#string) | repeated | cids are optional cids to filter our requests by |
| limit | [int64](#int64) |  | can be used to apply limits to the number of store requests made, search limits, etc.. |






<a name="pb.RefCountResponse"></a>

### RefCountResponse
RefCountResponse is used to return the information
gathered by a RefCount rpc call.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cids | [RefCountResponse.CidsEntry](#pb.RefCountResponse.CidsEntry) | repeated | cids is a mapping of the cid to its reference count |






<a name="pb.RefCountResponse.CidsEntry"></a>

### RefCountResponse.CidsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [int64](#int64) |  |  |





 


<a name="pb.GCREQTYPE"></a>

### GCREQTYPE
GCREQTYPE specifies the type of GC management call being performed

| Name | Number | Description |
| ---- | ------ | ----------- |
| GC_START | 0 | GC_START is used to start gc |
| GC_STOP | 1 | C_STOP is used to stop GC |
| GC_STATUS | 2 | GC_STATUS is used to retrieve gc status |



<a name="pb.REFREQOPTS"></a>

### REFREQOPTS
REFREQOPTS are options for fine-tuning ref count requests

| Name | Number | Description |
| ---- | ------ | ----------- |
| REF_FORCE | 0 |  |



<a name="pb.REFREQTYPE"></a>

### REFREQTYPE
REFREQTYPE is used to indicate the type of ref count request being made

| Name | Number | Description |
| ---- | ------ | ----------- |
| REF_GET_COUNT | 0 | REF_GET_COUNT is used to get the reference count of a particular cid |
| REF_DELETE | 1 |  |


 

 


<a name="pb.AdminAPI"></a>

### AdminAPI
AdminAPI facilitates administrative management of TemporalX via a localhost gRPC API

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ManageGC | [ManageGCRequest](#pb.ManageGCRequest) | [ManageGCResponse](#pb.ManageGCResponse) | ManageGC is used to manage TemporalX&#39;s garbage collection process |
| RefCount | [RefCountRequest](#pb.RefCountRequest) | [RefCountResponse](#pb.RefCountResponse) | RefCount is used to analyze the counter store and pull reference count information |

 



<a name="file.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## file.proto



<a name="pb.Blob"></a>

### Blob
Blob is a chunk of binary data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | content is the actual binary data contained in this message |
| rangeStart | [uint64](#uint64) |  | Range start and end mirrors developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range. If both is zero, the blobs streams contents of the file from start to finish. The unit of range is alway in bytes. Currently, DownloadResponse support blob range. |
| rangeEnd | [uint64](#uint64) |  |  |






<a name="pb.DownloadRequest"></a>

### DownloadRequest
DownloadRequest is used to download a UnixFS object
although it can in theory be used with other type of objects
there may be some undefined behavior


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | hash is the ipfs hash/cid (content identifier) of the data to download |
| chunkSize | [int32](#int32) |  | chunkSize specifies the size of chunks to be sent to the client it allows us to efficiently control incoming data amounts which is useful on machines with low-memory |
| rangeStart | [uint64](#uint64) |  | Range start and end mirrors developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range. If both is none zero, only data within range is requested. The unit of range is alway in bytes. If used, please check the returned range values in blobs to make sure this feature is supported. |
| rangeEnd | [uint64](#uint64) |  |  |






<a name="pb.DownloadResponse"></a>

### DownloadResponse
DownloadResponse contains the response to a download request
which allows the gRPC server to stream blobs to the client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| blob | [Blob](#pb.Blob) |  | blob is a single chunk of data |






<a name="pb.UploadOptions"></a>

### UploadOptions
UploadOptions allows controlling the parameters of a file upload


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| multiHash | [string](#string) |  | specifes the multihash function to use |
| layout | [string](#string) |  | specifies the dag layout (balanced, tricklet) |
| chunker | [string](#string) |  | specifies the chunker type (rabin, default, etc...) |






<a name="pb.UploadRequest"></a>

### UploadRequest
UploadRequest is used to upload data as a UnixFS object


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| blob | [Blob](#pb.Blob) |  | blob is a single chunk of data |
| options | [UploadOptions](#pb.UploadOptions) |  | options allows setting the optoins for this upload |





 

 

 


<a name="pb.FileAPI"></a>

### FileAPI
FileAPI provides a gRPC api to upload/download files as UnixFS objects

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UploadFile | [UploadRequest](#pb.UploadRequest) stream | [PutResponse](#pb.PutResponse) | UploadFile allows uploading a file as a UnixFS object (equivalent to ipfs add) |
| DownloadFile | [DownloadRequest](#pb.DownloadRequest) | [DownloadResponse](#pb.DownloadResponse) stream | DownloadFile allows downloading a UnixFS object (equivalent to ipfs get) |

 



<a name="namesys.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## namesys.proto



<a name="pb.NameSysPublishRequest"></a>

### NameSysPublishRequest
NameSysPublishRequest is used to publish a value


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| privateKey | [bytes](#bytes) |  | the private key (name) for this record |
| value | [string](#string) |  | the value of this record |
| eol | [int32](#int32) |  | the eol for this publish, if 0 implies as NameSys::Publish call, if non 0 implies a NameSys:PublishWithEOL call |
| ttl | [int32](#int32) |  | if set, allows us to override default ttl value of ipns records |






<a name="pb.NameSysResolveRequest"></a>

### NameSysResolveRequest
NameSysResolveRequest is used to resolve an IPNS name


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | the name to resolve |
| depth | [uint32](#uint32) |  | recursion depth limit |
| dhtRecordCount | [uint32](#uint32) |  | number of ipns records to retrieve before selecting the best record |
| dhtTimeout | [int32](#int32) |  | the amount of time to wait for records to be fetched and verified |






<a name="pb.NameSysResolveResult"></a>

### NameSysResolveResult
NameSysResolveRequest is an answer to a resolve request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) |  | the path that was resolved |
| error | [string](#string) |  | an error if any |





 

 

 


<a name="pb.NameSysAPI"></a>

### NameSysAPI
NameSysAPI provides a generic name resolution API

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| NameSysResolve | [NameSysResolveRequest](#pb.NameSysResolveRequest) | [NameSysResolveResult](#pb.NameSysResolveResult) | NameSysResolve is used to resolve a name, waiting for the request to complete |
| NameSysResolveAsync | [NameSysResolveRequest](#pb.NameSysResolveRequest) | [NameSysResolveResult](#pb.NameSysResolveResult) stream | NameSysResolveAsync is like Resolve, except instead of waiting for the request to complete, we send back a stream which we will send the result on |
| NameSysPublish | [NameSysPublishRequest](#pb.NameSysPublishRequest) | [Empty](#pb.Empty) | NameSysPublish is used to publish an IPNS record, with/with-out an EOL |

 



<a name="node.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## node.proto



<a name="pb.Block"></a>

### Block



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cid | [string](#string) |  | cid is the identifier of the block |
| data | [bytes](#bytes) |  | data is the actual contents of the block |
| size | [int64](#int64) |  | size of the block, only filled out by BS_GET_STATS since if we just want stats, we dont want to retrieve all the data. |






<a name="pb.BlockstoreRequest"></a>

### BlockstoreRequest
BlockstoreRequest is a message used to control blockstores


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [BSREQTYPE](#pb.BSREQTYPE) |  | indicates the particular request type being made |
| reqOpts | [BSREQOPTS](#pb.BSREQOPTS) | repeated | optional request settings |
| cids | [string](#string) | repeated | cids of blocks sent by: BS_DELETE, BS_GET, BS_GET_MANY, BS_GET_STATS |
| data | [bytes](#bytes) | repeated | the data we are putting sent by: BS_PUT, BS_PUT_MANY |
| cidVersion | [string](#string) |  | the cid version to use when constructing blocks, default is v1 sent by: BS_PUT, BS_PUT_MANY |
| hashFunc | [string](#string) |  | the hash function to use when constructing blocks, default is sha2-256 sent by: BS_PUT, BS_PUT_MANY |






<a name="pb.BlockstoreResponse"></a>

### BlockstoreResponse
BlockstoreResponse is a response to a BlockstoreqRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [BSREQTYPE](#pb.BSREQTYPE) |  | indicates the particular request type being made |
| blocks | [Block](#pb.Block) | repeated | a copy of blocks from the blockstore sent by: BS_PUT, BS_PUT_MANY, BS_GET, BS_GET_MANY, BS_GET_STATS, BS_GET_ALL

in the case of BS_PUT, and BS_PUT_MANY requests the data field will be empty as this is only populated by get requests

in the case of BS_GET_STATS only the cid, and size params will be filled out, since we are just interested in the size |






<a name="pb.ConnMgmtRequest"></a>

### ConnMgmtRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [CONNMGMTREQTYPE](#pb.CONNMGMTREQTYPE) |  | indicates the particular connection management request being performed |
| multiAddrs | [string](#string) | repeated | a list of multiaddrs sent by: CM_CONNECT |
| peerIDs | [string](#string) | repeated | a list of peer IDs sent by: CM_DISCONNECT, CM_STATUS, CM_GET_PEERS |






<a name="pb.ConnMgmtResponse"></a>

### ConnMgmtResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [CONNMGMTREQTYPE](#pb.CONNMGMTREQTYPE) |  | indicates the particular connection management request being performed |
| connected | [ConnMgmtResponse.ConnectedEntry](#pb.ConnMgmtResponse.ConnectedEntry) | repeated |  |
| status | [ConnMgmtResponse.StatusEntry](#pb.ConnMgmtResponse.StatusEntry) | repeated | a map of the peer id, and a custom message indicating success, or why there was a failure |
| peerIDs | [string](#string) | repeated |  |






<a name="pb.ConnMgmtResponse.ConnectedEntry"></a>

### ConnMgmtResponse.ConnectedEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [bool](#bool) |  |  |






<a name="pb.ConnMgmtResponse.StatusEntry"></a>

### ConnMgmtResponse.StatusEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ConnMgmtStatus](#pb.ConnMgmtStatus) |  |  |






<a name="pb.ConnMgmtStatus"></a>

### ConnMgmtStatus
Contains status information about a particular disconnect attempt


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| disconnected | [bool](#bool) |  | indicate whether or not we actually disconnected |
| reason | [string](#string) |  | if disconnected is false, the reason why it is false |






<a name="pb.DagRequest"></a>

### DagRequest
Used to submit a request to Dag or DagStream RPCs


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [DAGREQTYPE](#pb.DAGREQTYPE) |  | indicates the request being performed sent by: all request types |
| data | [bytes](#bytes) |  | data that we will be storing sent by: DAG_PUT, DAG_NEW_NODE |
| objectEncoding | [string](#string) |  | the object encoding type (raw, cbor, protobuf, etc...) sent by: DAG_PUT |
| serializationFormat | [string](#string) |  | the serialization format (raw, cbor, protobuf, etc...) sent by: DAG_PUT |
| hashFunc | [string](#string) |  | the hash function to to use (sha2-256, sha3-512, etc...) sent by: DAG_PUT, DAG_NEW_NODE, DAG_ADD_LINKS |
| cidVersion | [int64](#int64) |  | the cid version to use (0, 1) sent by: DAG_PUT, DAG_NEW_NODE |
| hash | [string](#string) |  | the hash of the object we are processing sent by: DAG_GET, DAG_NEW_NODe, DAG_ADD_LINKS, DAG_GET_LINKS |
| links | [DagRequest.LinksEntry](#pb.DagRequest.LinksEntry) | repeated | indicates links and their names. key = name, value = link hash sent by: DAG_NEW_NODE, DAG_ADD_LINKS |






<a name="pb.DagRequest.LinksEntry"></a>

### DagRequest.LinksEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="pb.DagResponse"></a>

### DagResponse
Used in response to a Dag or DagStream RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [DAGREQTYPE](#pb.DAGREQTYPE) |  | indicates the request being performed sent by: all request types |
| hashes | [string](#string) | repeated | returns the hashes of newly generated IPLD objects sent by: DAG_PUT, DAG_NEW_NODE, DAG_ADD_LINKS, DAG_GET_LINKS |
| rawData | [bytes](#bytes) |  | the actual data contained by the IPLD object sent by: DAG_GET |
| links | [IPLDLink](#pb.IPLDLink) | repeated | the links contained within an IPLD node object sent by: DAG_GET_LINKS |






<a name="pb.ExtrasRequest"></a>

### ExtrasRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [EXTRASREQTYPE](#pb.EXTRASREQTYPE) |  | indicates the request being performed |
| extrasFeature | [EXTRASTYPE](#pb.EXTRASTYPE) |  | indicates the extras feature this request applies to |






<a name="pb.GetPeersResponse"></a>

### GetPeersResponse
GetPeersResponse is a response to GetPeers containing a slice of peer IDs


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerIDs | [string](#string) | repeated | a slice of peer IDs |






<a name="pb.IPLDLink"></a>

### IPLDLink
An IPFS MerkleDAG Link


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | multihash of the target object |
| name | [string](#string) |  | utf string name. should be unique per object |
| size | [uint64](#uint64) |  | cumulative size of target object |






<a name="pb.IPLDNode"></a>

### IPLDNode
An IPFS MerkleDAG Node


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| links | [IPLDLink](#pb.IPLDLink) | repeated | refs to other objects |
| data | [bytes](#bytes) |  | opaque user data |






<a name="pb.KeystoreRequest"></a>

### KeystoreRequest
Used to submit a request to Keystore RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [KSREQTYPE](#pb.KSREQTYPE) |  | indicates the request type being performed |
| name | [string](#string) |  | name of the key the request is for sent by: KS_HAS, KS_GET, KS_PUT, KS_DELETE |
| privateKey | [bytes](#bytes) |  | the actual private key bytes sent by: KS_PUT |






<a name="pb.KeystoreResponse"></a>

### KeystoreResponse
Used in response to a Keystore RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [KSREQTYPE](#pb.KSREQTYPE) |  | indicates the request type being performed |
| privateKey | [bytes](#bytes) |  | the private key bytes sent by: KS_GET |
| keyNames | [string](#string) | repeated | contains all known key names sent by: KS_LIST |
| has | [bool](#bool) |  | indicates if we have the key in our keystore sent by: KS_HAS |






<a name="pb.P2PLsInfo"></a>

### P2PLsInfo
P2PLsInfo contains information about a single p2p stream


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocolName | [string](#string) |  |  |
| listenAddress | [string](#string) |  |  |
| targetAddress | [string](#string) |  |  |
| local | [bool](#bool) |  | indicates whether or not this is a p2p listener or local listener |






<a name="pb.P2PRequest"></a>

### P2PRequest
P2PRequest is a request message holding the details of a particular P2P rpc call


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [P2PREQTYPE](#pb.P2PREQTYPE) |  | indicates the request type |
| all | [bool](#bool) |  | used by: P2PREQTYPE.CLOSE |
| verbose | [bool](#bool) |  | used by: P2PREQTYPE.LS |
| protocolName | [string](#string) |  | used by: P2PREQTYPE.CLOSE, P2PREQTYPE.FORWARD, P2PREQTYPE.LISTEN |
| listenAddress | [string](#string) |  | used by: P2PREQTYPE.CLOSE, P2PREQTYPE.FORWARD must be specified as a multiaddr |
| targetAddress | [string](#string) |  | used by: P2PREQTYPE.CLOSE, P2PREQTYPE.FORWARD must be specified as a multiaddr |
| remoteAddress | [string](#string) |  | used by: P2PREQTYPE.LISTEN must be specified as a multiaddr |
| allowCustomProtocols | [bool](#bool) |  | used by: P2PREQTYPE.LISTEN, P2PREQTYPE.FORWARD |
| reportPeerID | [bool](#bool) |  | used by: P2PREQTYPE.LISTEN |






<a name="pb.P2PResponse"></a>

### P2PResponse
P2PResponse is a response message sent in response to a P2PRequest message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [P2PREQTYPE](#pb.P2PREQTYPE) |  |  |
| names | [string](#string) | repeated | sent by: P2PREQTYPE.LISTEN |
| connsClosed | [int32](#int32) |  | sent by: P2PREQTYPE.CLOSE to indicate the number of connections closed |
| streamInfos | [P2PLsInfo](#pb.P2PLsInfo) | repeated | sent by: P2PREQTYPE.LS and contains all known stream information |






<a name="pb.PersistRequest"></a>

### PersistRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cids | [string](#string) | repeated | cids to persist locally |






<a name="pb.PersistResponse"></a>

### PersistResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [PersistResponse.StatusEntry](#pb.PersistResponse.StatusEntry) | repeated | key = cid, value = whether or not it was persisted |
| errors | [PersistResponse.ErrorsEntry](#pb.PersistResponse.ErrorsEntry) | repeated | key = cid, value = error if not persisted |






<a name="pb.PersistResponse.ErrorsEntry"></a>

### PersistResponse.ErrorsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="pb.PersistResponse.StatusEntry"></a>

### PersistResponse.StatusEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [bool](#bool) |  |  |





 


<a name="pb.BSREQOPTS"></a>

### BSREQOPTS
BSREQOPTS are options for blockstore requests

| Name | Number | Description |
| ---- | ------ | ----------- |
| DEFAULT | 0 | DEFAULT indicates to use the default settings |
| BS_FORCE | 1 | BS_FORCE indicates to force the request regardless of any possible issues |



<a name="pb.BSREQTYPE"></a>

### BSREQTYPE
BSREQTYPE is a particular blockstore request type

| Name | Number | Description |
| ---- | ------ | ----------- |
| BS_DELETE | 0 | BS_DELETE is used to delete a block from the store |
| BS_PUT | 1 | BS_PUT is used to put a single block in the store |
| BS_PUT_MANY | 2 | BS_PUT_MANY is used to put many blocks in the store |
| BS_GET | 3 | BS_GET is used to get a block from the store |
| BS_GET_MANY | 4 | BS_GET_MANY is used to get many blocks from the store |
| BS_GET_ALL | 5 | BS_GET_ALL is used to retrieve all blocks from the store It is the gRPC equivalent of Blockstore::AllKeysChan |
| BS_GET_STATS | 6 | BS_GET_STATS is used to retrieve statistics about individual blocks |



<a name="pb.CONNMGMTREQTYPE"></a>

### CONNMGMTREQTYPE
CONNMGMTREQTYPE indicates the particular ConnMgmt request being performed

| Name | Number | Description |
| ---- | ------ | ----------- |
| CM_CONNECT | 0 | CM_CONNECT is used to connect to a libp2p peer |
| CM_DISCONNECT | 1 | CM_DISCONNECT is used to disconnect from a libp2p peer |
| CM_STATUS | 2 | CM_STATUS is used to return status information about libp2p peer connections useful for determining whether or not we are connected to someone |
| CM_GET_PEERS | 3 | CM_GET_PEERS is used to return all known peers |



<a name="pb.DAGREQTYPE"></a>

### DAGREQTYPE
DAGREQTYPE indicates the particular DagAPI request being performed

| Name | Number | Description |
| ---- | ------ | ----------- |
| DAG_PUT | 0 | DAG_PUT is used to add new IPLD objects |
| DAG_GET | 1 | DAG_GET is used to retrieve IPLD object data |
| DAG_NEW_NODE | 2 | DAG_NEW_NODE is used to create a new IPLD node object |
| DAG_ADD_LINKS | 3 | DAG_ADD_LINKS is used to add links to an IPLD node object |
| DAG_GET_LINKS | 4 | DAG_GET_LINKS is used to retrieve all links contained in an IPLD node object |



<a name="pb.EXTRASREQTYPE"></a>

### EXTRASREQTYPE
EXTRASREQTYPE indicates the particular Extras request being performed

| Name | Number | Description |
| ---- | ------ | ----------- |
| EX_ENABLE | 0 | EX_ENABLE is used to enable a particular node extras feature |
| EX_DISABLE | 1 | EX_DISABLE is used to disable a particular node extras feature |



<a name="pb.EXTRASTYPE"></a>

### EXTRASTYPE
EXTRASTYPE denotes a particular extras type

| Name | Number | Description |
| ---- | ------ | ----------- |
| IDENTIFY | 0 | IDENTIFY is the identify service |
| PUBSUB | 1 | PUBSUB is the libp2p pubsub system |
| DISCOVERY | 2 | DISCOVERY is a libp2p discovery service |
| MDNS | 3 | MDNS is used to discover libp2p hosts over mdns |



<a name="pb.KSREQTYPE"></a>

### KSREQTYPE
KSREQTYPE indicates the particular KeystoreAPI request being performed

| Name | Number | Description |
| ---- | ------ | ----------- |
| KS_HAS | 0 | KS_HAS is used to check if the key exists in our keystore |
| KS_GET | 1 | KS_GET is used to retrieve private key bytes from our keystore |
| KS_PUT | 2 | KS_PUT is used to store private key bytes in our keystore |
| KS_DELETE | 3 | KS_DELETE is used to delete private keys from our keystore |
| KS_LIST | 4 | KS_LIST is used to list all keys in our keystore by their name |



<a name="pb.P2PREQTYPE"></a>

### P2PREQTYPE
P2PREQTYPE denotes the particular type of request being used in the p2p rpc

| Name | Number | Description |
| ---- | ------ | ----------- |
| CLOSE | 0 | equivalent of ipfs p2p close |
| FORWARD | 1 | equivalent of ipfs p2p forward |
| LISTEN | 2 | equivalent of ipfs p2p listen |
| LS | 3 | equivalent of ipfs p2p ls |


 

 


<a name="pb.NodeAPI"></a>

### NodeAPI
NodeAPI provide an API to control the underlying custom ipfs node

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ConnMgmt | [ConnMgmtRequest](#pb.ConnMgmtRequest) | [ConnMgmtResponse](#pb.ConnMgmtResponse) | ConnMgmt provides control over libp2p connections |
| Extras | [ExtrasRequest](#pb.ExtrasRequest) | [Empty](#pb.Empty) | Extras provide control over node extras capabilities |
| P2P | [P2PRequest](#pb.P2PRequest) | [P2PResponse](#pb.P2PResponse) | P2P allows control of generalized p2p streams for tcp/udp based protocol. By using this RPC, we can tunnel traffic similar to ssh tunneling except using libp2p as the transport layer, and and tcp/udp port. |
| Blockstore | [BlockstoreRequest](#pb.BlockstoreRequest) | [BlockstoreResponse](#pb.BlockstoreResponse) | Blockstore allows low-level management of the underlying blockstore |
| BlockstoreStream | [BlockstoreRequest](#pb.BlockstoreRequest) stream | [BlockstoreResponse](#pb.BlockstoreResponse) stream | BlockstoreStream is akin to Blockstore, except streamable Once v4 is out, condense this &#43; blockstore into a single call |
| Dag | [DagRequest](#pb.DagRequest) | [DagResponse](#pb.DagResponse) | Dag is a unidirectional rpc allowing manipulation of low-level ipld objects |
| Keystore | [KeystoreRequest](#pb.KeystoreRequest) | [KeystoreResponse](#pb.KeystoreResponse) | Keystore is a unidirectional RPC allowing management of ipfs keystores |
| Persist | [PersistRequest](#pb.PersistRequest) | [PersistResponse](#pb.PersistResponse) | Persist is used to retrieve data from the network and make it available locally |

 



<a name="pubsub.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## pubsub.proto



<a name="pb.PubSubMessage"></a>

### PubSubMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from | [bytes](#bytes) |  | who this message is from |
| data | [bytes](#bytes) |  | the data of this message |
| seqno | [bytes](#bytes) |  | the sequence number of this message |
| topicIDs | [string](#string) | repeated | the topic IDs this message is sent to |
| signature | [bytes](#bytes) |  | the signature of the sender |
| key | [bytes](#bytes) |  | the key of the sender |






<a name="pb.PubSubPeer"></a>

### PubSubPeer
represents an individual pubsub peer


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topic | [string](#string) |  | the topic this peer belongs to |
| peerID | [string](#string) |  | the id of this peer |






<a name="pb.PubSubRequest"></a>

### PubSubRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [PSREQTYPE](#pb.PSREQTYPE) |  | indicates the particular PubSubAPI request being performed |
| topics | [string](#string) | repeated | topics to request peers from, or publish data to sent by: PS_LIST_PEERS, PS_SUBSCRIBE, PS_PUBLISH |
| data | [bytes](#bytes) |  | data to sent to topics sent by: PS_PUBLISH |






<a name="pb.PubSubResponse"></a>

### PubSubResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requestType | [PSREQTYPE](#pb.PSREQTYPE) |  | indicates the particular PubSubAPI request being performed |
| message | [PubSubMessage](#pb.PubSubMessage) | repeated | messages we have received from a topic sent by: PS_SUBSCRIBE |
| topics | [string](#string) | repeated | topic names sent by: PS_GET_TOPICS |
| peers | [PubSubPeer](#pb.PubSubPeer) | repeated | pubsub peers sent by: PS_LIST_PEERS |





 


<a name="pb.PSREQTYPE"></a>

### PSREQTYPE
PSREQTYPE indicates the particular PubSubAPI request being performed

| Name | Number | Description |
| ---- | ------ | ----------- |
| PS_GET_TOPICS | 0 | PS_GET_TOPICS is used to return a list of subscribed pubsub topics |
| PS_LIST_PEERS | 1 | PS_LIST_PEERS is used to return a list of peers subscribed to topics we are subscribed to |
| PS_SUBSCRIBE | 2 | PS_SUBSCRIBE is used to establish a persistent subscription to a pubsub topic |
| PS_PUBLISH | 3 | PS_PUBLISH is used to publisbh a message to a pubsub topic |


 

 


<a name="pb.PubSubAPI"></a>

### PubSubAPI
PubSubAPI provides a libp2p pubsub API and is equivalent to go-ipfs
`ipfs pubsub` subset of commands.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| PubSub | [PubSubRequest](#pb.PubSubRequest) stream | [PubSubResponse](#pb.PubSubResponse) stream | PubSub allows controlling libp2p pubsub topics and subscriptions using a bidirectional streaming API |

 



<a name="replication.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## replication.proto



<a name="pb.AddrInfo"></a>

### AddrInfo
AddrInfo can be used to ID and locate a server (see also libp2p/go-libp2p-core/peer#AddrInfo)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id_bytes | [bytes](#bytes) |  | id_bytes is a libp2p peer identity. It is used to verity the Peer&#39;s public key. Please use helper functions GetID and SetID for this field |
| addrs_bytes | [bytes](#bytes) | repeated | addrBytes are bytes of Multiaddr for locating this peer. Please use helper functions GetMultiAddrs, and SetMultiAddrs for this field. |
| grpc_port | [int32](#int32) |  | grpc port for replication protocol. will be optional once grpc is integrated into multistream. |






<a name="pb.Replication"></a>

### Replication
Replication message is a signable data structure to represent a replication scheme


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [string](#string) |  | Header must be &#34;rtrade-replication v0...&#34; for development stage, this is a required security header. - Avoid collision from other signed data. - Allow future versions to require different validation rules. Any signer must understand every header tag to sign documents. |
| cids_bytes | [bytes](#bytes) | repeated | CIDs is the list of contents to replicate. Please use helper functions GetCIDs and AddCIDs for this field |
| servers | [ServerSource](#pb.ServerSource) | repeated | Servers list the candidate severs to replicate to, in the order of preference. |
| replication_factor | [int32](#int32) |  | replication_factor is the number of replications desired. |
| refresh_interval_seconds | [int32](#int32) |  | refresh_interval_seconds is the *suggested* number of seconds to wait before checking if a remote server is up. The first check should be random from 0 to refresh_interval_seconds. Each replicator can have it&#39;s own max_interval. A sensible default value should be used if it is 0. |
| server_down_delay_seconds | [int32](#int32) |  | server_down_delay_seconds is the number of seconds to wait after a server is down before the next reserved server is requested to be active. A sensible default value should be used if it is 0. |






<a name="pb.ReplicationStatus"></a>

### ReplicationStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ok | [bool](#bool) |  | ok report success for action submitted |
| is_active | [bool](#bool) |  | is_active report if the replication is currently active on this server |
| current_version | [int64](#int64) |  | current_version is the highest version this replicator/server has locally. |
| target_version | [int64](#int64) |  | target_version is the highest version this replicator/server knows about and can verify to exist. |






<a name="pb.ServerSource"></a>

### ServerSource
ServerSource is a list of one or more servers.
TODO: add field to allow referring to a list of servers from another file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addr_info | [AddrInfo](#pb.AddrInfo) |  |  |






<a name="pb.SignedSubscription"></a>

### SignedSubscription



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sub_part | [Subscription](#pb.Subscription) |  |  |
| update_part | [SubscriptionUpdate](#pb.SubscriptionUpdate) |  |  |






<a name="pb.Subscription"></a>

### Subscription



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topic | [string](#string) |  |  |
| author_id_bytes | [bytes](#bytes) |  |  |
| remove | [bool](#bool) |  | if true, remove this Subscription. For replicator.Add, deactive this replication. For replicator.WaitForUpdates, stop reporting updates. |






<a name="pb.SubscriptionUpdate"></a>

### SubscriptionUpdate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [int64](#int64) |  | strictly increasing version number |
| replication_bytes | [bytes](#bytes) |  | replication file is in bytes for signing |
| signature | [bytes](#bytes) |  | signature signs the Subscription and above data in length delimited form in the order topic|author|version|replication |





 

 

 


<a name="pb.replicator"></a>

### replicator
The replicator provides replication services.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Add | [Subscription](#pb.Subscription) | [ReplicationStatus](#pb.ReplicationStatus) stream | Add is used to add a replication to this server, changing it&#39;s status from reserved to active. |
| Status | [Subscription](#pb.Subscription) | [ReplicationStatus](#pb.ReplicationStatus) stream | Status returns an updating stream of the replication status on the server. |
| GetSubscriptionUpdate | [Subscription](#pb.Subscription) | [SubscriptionUpdate](#pb.SubscriptionUpdate) | GetSubscriptionUpdate returns the latest version of subscribed replication |
| SubmitReplication | [SignedSubscription](#pb.SignedSubscription) | [ReplicationStatus](#pb.ReplicationStatus) stream | SubmitReplication is used by client agents to start replications, after they have uploaded the files and retrieved the cid, and collected servers to replicate too. |

 



<a name="status.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## status.proto



<a name="pb.StatusResponse"></a>

### StatusResponse
StatusResponse is used to return API status information


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| host | [string](#string) |  | host is an identifier for the host of the system responding to the request. it may or may not be the hostname, it is up to the implementer of the service to choose what is here |
| status | [APISTATUS](#pb.APISTATUS) |  | status contains a status enum indicating the state of the system |






<a name="pb.VersionResponse"></a>

### VersionResponse
VersionResponse is used to return API version information


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  | version denotes the github version that was present when the api was built |





 


<a name="pb.APISTATUS"></a>

### APISTATUS
APISTATUS is an enum to return a concise description of api status

| Name | Number | Description |
| ---- | ------ | ----------- |
| ONLINE | 0 | ONLINE indicates everything is working as expected |
| PURGING | 1 | PURGING indicates the system is undergoing data removal a purging system is not available for use unless all other nodes are unavailable |
| DEGRADED_PERFORMANCE | 2 | DEGRADED_PERFORMANCE indicates the system is currently under heavy load |
| ERROR | 3 | ERROR indicates that the system is currently experiencing an error and should not be used |


 

 


<a name="pb.StatusAPI"></a>

### StatusAPI
provides utilities to retrieve api status information from

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Version | [Empty](#pb.Empty) | [VersionResponse](#pb.VersionResponse) | Version is used to retrieve api version information |
| Status | [Empty](#pb.Empty) | [StatusResponse](#pb.StatusResponse) | Status is used to retrieve api status information. |

 



<a name="util.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## util.proto



<a name="pb.Empty"></a>

### Empty
Empty is an empty message






<a name="pb.PutResponse"></a>

### PutResponse
PutResponse is a response to any data storage (put) requests


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | hash is hash/cid (content identifier) of the data that was stored |





 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

