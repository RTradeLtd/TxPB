# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [admin.proto](#admin.proto)
    - [Block](#pb.Block)
    - [BlockstoreRequest](#pb.BlockstoreRequest)
    - [BlockstoreResponse](#pb.BlockstoreResponse)
    - [ManageGCRequest](#pb.ManageGCRequest)
    - [ManageGCResponse](#pb.ManageGCResponse)
    - [RefCountRequest](#pb.RefCountRequest)
    - [RefCountResponse](#pb.RefCountResponse)
    - [RefCountResponse.CidsEntry](#pb.RefCountResponse.CidsEntry)
  
    - [BSREQOPTS](#pb.BSREQOPTS)
    - [BSREQTYPE](#pb.BSREQTYPE)
    - [GCREQTYPE](#pb.GCREQTYPE)
    - [REFREQOPTS](#pb.REFREQOPTS)
    - [REFREQTYPE](#pb.REFREQTYPE)
  
  
    - [AdminAPI](#pb.AdminAPI)
  

- [dag.proto](#dag.proto)
    - [AddLinksRequest](#pb.AddLinksRequest)
    - [AddLinksRequest.LinksEntry](#pb.AddLinksRequest.LinksEntry)
    - [DagGetRequest](#pb.DagGetRequest)
    - [DagGetResponse](#pb.DagGetResponse)
    - [DagPutRequest](#pb.DagPutRequest)
    - [DagPutResponse](#pb.DagPutResponse)
    - [GetLinksRequest](#pb.GetLinksRequest)
    - [GetLinksResponse](#pb.GetLinksResponse)
    - [IPLDLink](#pb.IPLDLink)
    - [IPLDNode](#pb.IPLDNode)
    - [NewIPLDNodeRequest](#pb.NewIPLDNodeRequest)
    - [NewIPLDNodeRequest.LinksEntry](#pb.NewIPLDNodeRequest.LinksEntry)
  
  
  
    - [DagAPI](#pb.DagAPI)
  

- [file.proto](#file.proto)
    - [Blob](#pb.Blob)
    - [DownloadRequest](#pb.DownloadRequest)
    - [DownloadResponse](#pb.DownloadResponse)
    - [UploadOptions](#pb.UploadOptions)
    - [UploadRequest](#pb.UploadRequest)
  
  
  
    - [FileAPI](#pb.FileAPI)
  

- [keystore.proto](#keystore.proto)
    - [KeystoreRequest](#pb.KeystoreRequest)
    - [KeystoreResponse](#pb.KeystoreResponse)
  
  
  
    - [KeystoreAPI](#pb.KeystoreAPI)
  

- [namesys.proto](#namesys.proto)
    - [NameSysPublishRequest](#pb.NameSysPublishRequest)
    - [NameSysResolveRequest](#pb.NameSysResolveRequest)
    - [NameSysResolveResult](#pb.NameSysResolveResult)
  
  
  
    - [NameSysAPI](#pb.NameSysAPI)
  

- [node.proto](#node.proto)
    - [ConnectRequest](#pb.ConnectRequest)
    - [DisableExtrasRequest](#pb.DisableExtrasRequest)
    - [DisconnectRequest](#pb.DisconnectRequest)
    - [DisconnectResponse](#pb.DisconnectResponse)
    - [DisconnectResponse.StatusEntry](#pb.DisconnectResponse.StatusEntry)
    - [DisconnectResponse.StatusMessage](#pb.DisconnectResponse.StatusMessage)
    - [EnableExtrasRequest](#pb.EnableExtrasRequest)
    - [GetPeersResponse](#pb.GetPeersResponse)
    - [IsConnectedRequest](#pb.IsConnectedRequest)
    - [IsConnectedResponse](#pb.IsConnectedResponse)
    - [IsConnectedResponse.ConnectedEntry](#pb.IsConnectedResponse.ConnectedEntry)
    - [PersistCIDRequest](#pb.PersistCIDRequest)
  
    - [EXTRASTYPE](#pb.EXTRASTYPE)
  
  
    - [NodeAPI](#pb.NodeAPI)
  

- [pubsub.proto](#pubsub.proto)
    - [PubSubListPeersRequest](#pb.PubSubListPeersRequest)
    - [PubSubListPeersResponse](#pb.PubSubListPeersResponse)
    - [PubSubListPeersResponse.Peer](#pb.PubSubListPeersResponse.Peer)
    - [PubSubMessageResponse](#pb.PubSubMessageResponse)
    - [PubSubPublishRequest](#pb.PubSubPublishRequest)
    - [PubSubSubscribeRequest](#pb.PubSubSubscribeRequest)
    - [PubSubTopicsResponse](#pb.PubSubTopicsResponse)
  
  
  
    - [PubSubAPI](#pb.PubSubAPI)
  

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



<a name="pb.Block"></a>

### Block
Block is a single block of ipfs data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cid | [string](#string) |  | cid is the identifier of the block |
| data | [bytes](#bytes) |  | data is the actual contnets of this block |






<a name="pb.BlockstoreRequest"></a>

### BlockstoreRequest
BlockstoreRequest is a message used to control blockstores


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cids | [string](#string) | repeated | cids holds at least 1 cid, to hold 0 is considered an error |
| reqType | [BSREQTYPE](#pb.BSREQTYPE) |  | reqType is used to indicate the particular request being mande |
| reqOpts | [BSREQOPTS](#pb.BSREQOPTS) |  | reqOpts is an optional parameter that can be used for fine-tuned request control |






<a name="pb.BlockstoreResponse"></a>

### BlockstoreResponse
BlockstoreResponse is a response to a BlockstoreqRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| blocks | [Block](#pb.Block) | repeated |  |






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
| Blockstore | [BlockstoreRequest](#pb.BlockstoreRequest) | [BlockstoreResponse](#pb.BlockstoreResponse) | Blockstore allows management of the blockstore, and optionally, the counted store |

 



<a name="dag.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## dag.proto



<a name="pb.AddLinksRequest"></a>

### AddLinksRequest
AddLinksRequest is used to add links to an existing ipld node


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| links | [AddLinksRequest.LinksEntry](#pb.AddLinksRequest.LinksEntry) | repeated | links are optional hashes to include as links of the node the name is used as the key, while the value of the key is used as the hash |
| hash | [string](#string) |  | the hash of the node we want to add lin skto |
| hashFunc | [string](#string) |  | the hash function to to use (sha2-256, sha3-512, etc...) |






<a name="pb.AddLinksRequest.LinksEntry"></a>

### AddLinksRequest.LinksEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="pb.DagGetRequest"></a>

### DagGetRequest
DagGetRequest is used to retrieve the raw data
of an ipld dag node for the specified hash. This can
then be used by libraries like go-ipld-format to
decoded into a dag object on the client side using 
merkledag.DecodeProtobuf and passing in the returned bytes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | the hash of the ipld node to get |






<a name="pb.DagGetResponse"></a>

### DagGetResponse
DagGetResponse is a response to DagGetRequest
that returns the raw data of the matching ipld node


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rawData | [bytes](#bytes) |  | the raw data of the ipld node |






<a name="pb.DagPutRequest"></a>

### DagPutRequest
DagPut allows us to store arbitrary bytes as a custom IPLD object


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | data that we will be storing |
| objectEncoding | [string](#string) |  | the object encoding type (raw, cbor, protobuf, etc...) |
| serializationFormat | [string](#string) |  | the serialization format (raw, cbor, protobuf, etc...) |
| hashFunc | [string](#string) |  | the hash function to to use (sha2-256, sha3-512, etc...) |
| cidVersion | [int64](#int64) |  | the cid version to use (0, 1) |






<a name="pb.DagPutResponse"></a>

### DagPutResponse
DagPutResponse contains the hashes of ipld nodes generated
by the dag put request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hashes | [string](#string) | repeated | an array of hashes (cids) of the root ipld nod |






<a name="pb.GetLinksRequest"></a>

### GetLinksRequest
GetLinksRequest is used to return all the links associated with a particular hash


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | the hash to request links for |






<a name="pb.GetLinksResponse"></a>

### GetLinksResponse
GetLinksResponse returns all the links for the 
associated hash that was requested


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| links | [IPLDLink](#pb.IPLDLink) | repeated | each of the links referenced by the requested hash |






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






<a name="pb.NewIPLDNodeRequest"></a>

### NewIPLDNodeRequest
NewIPLDNodeRequest is used to create a new ipld node


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| links | [NewIPLDNodeRequest.LinksEntry](#pb.NewIPLDNodeRequest.LinksEntry) | repeated | links are optional hashes to include as links of the node the name is used as the key, while the value of the key is used as the hash |
| data | [bytes](#bytes) |  | data to store as part of the data field |
| hashFunc | [string](#string) |  | the hash function to to use (sha2-256, sha3-512, etc...) |






<a name="pb.NewIPLDNodeRequest.LinksEntry"></a>

### NewIPLDNodeRequest.LinksEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |





 

 

 


<a name="pb.DagAPI"></a>

### DagAPI
DagAPI provides a gRPC API for manipulating IPLD objects

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| DagPut | [DagPutRequest](#pb.DagPutRequest) | [DagPutResponse](#pb.DagPutResponse) | DagPut is used to store arbitrary bytes as a custom IPLD object |
| DagGet | [DagGetRequest](#pb.DagGetRequest) | [DagGetResponse](#pb.DagGetResponse) | DagGet is used to request the raw ipld node data for an IPLD object |
| NewIPLDNode | [NewIPLDNodeRequest](#pb.NewIPLDNodeRequest) | [DagPutResponse](#pb.DagPutResponse) | NewIPLDNode is used to create a new IPFS MerkleDAG node. This is the same type as in github.com/ipfs/go-ipld-format.Node |
| AddLinksToNode | [AddLinksRequest](#pb.AddLinksRequest) | [DagPutResponse](#pb.DagPutResponse) | AddLinksToNode is used to add links to an existing IPFS MerkleDAG node |
| GetLinks | [GetLinksRequest](#pb.GetLinksRequest) | [GetLinksResponse](#pb.GetLinksResponse) | GetLinks is used to request all the links for a given object |

 



<a name="file.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## file.proto



<a name="pb.Blob"></a>

### Blob
Blob is a chunk of binary data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [bytes](#bytes) |  | content is the actual binary data contained in this message |






<a name="pb.DownloadRequest"></a>

### DownloadRequest
DownloadRequest is used to download a UnixFS object
although it can in theory be used with other type of objects
there may be some undefined behavior


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | hash is the ipfs hash/cid (content identifier) of the data to download |
| chunkSize | [int32](#int32) |  | chunkSize specifies the size of chunks to be sent to the client it allows us to efficiently control incoming data amounts which is useful on machines with low-memory |






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

 



<a name="keystore.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## keystore.proto



<a name="pb.KeystoreRequest"></a>

### KeystoreRequest
KeystoreRequest is a message used in any keystore API request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name of the key the request is for applicable to: has, get, put, delete |
| privateKey | [bytes](#bytes) |  | the actual private key applicable to: put |






<a name="pb.KeystoreResponse"></a>

### KeystoreResponse
KeystoreResponse is a responsed to any keystore API request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [string](#string) |  | a generic status message returned by Has requests, and may or may not be returned by other requests |
| privateKey | [bytes](#bytes) |  | the actual private key returned by Get requests |
| keyNames | [string](#string) | repeated | names of keys returned by a List request |





 

 

 


<a name="pb.KeystoreAPI"></a>

### KeystoreAPI
KeystoreAPI provides a keystore management API

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| KeystoreHas | [KeystoreRequest](#pb.KeystoreRequest) | [KeystoreResponse](#pb.KeystoreResponse) | KeystoreHas is used to check if we have the key in our store |
| KeystoreGet | [KeystoreRequest](#pb.KeystoreRequest) | [KeystoreResponse](#pb.KeystoreResponse) | KeystoreGet is used to return a key from our store |
| KeystorePut | [KeystoreRequest](#pb.KeystoreRequest) | [KeystoreResponse](#pb.KeystoreResponse) | KeystorePut is used to store a key in our store |
| KeystoreDelete | [KeystoreRequest](#pb.KeystoreRequest) | [KeystoreResponse](#pb.KeystoreResponse) | KeystoreDelete is used to remove a key from our store |
| KeystoreList | [KeystoreRequest](#pb.KeystoreRequest) | [KeystoreResponse](#pb.KeystoreResponse) | KeystoreList is used to returns all keyIDs of keys in our store |

 



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



<a name="pb.ConnectRequest"></a>

### ConnectRequest
ConnectRequest is used to connect to libp2p peers


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| multiAddrs | [string](#string) | repeated | a slice of all multiaddrs we want to connect to |






<a name="pb.DisableExtrasRequest"></a>

### DisableExtrasRequest
DisableExtrasRequest is used to disable a particular extras feature


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| extrasFeature | [EXTRASTYPE](#pb.EXTRASTYPE) |  | extrasFeature denotes the particular extras functionality to disable |






<a name="pb.DisconnectRequest"></a>

### DisconnectRequest
DisconnectRequest is used to disconnect a connection to a libp2p peer


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerIDs | [string](#string) | repeated | a slice of the peer IDs to disconnect from |






<a name="pb.DisconnectResponse"></a>

### DisconnectResponse
DisconnectResponse is a response to a disconnect request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [DisconnectResponse.StatusEntry](#pb.DisconnectResponse.StatusEntry) | repeated | a map of the peer id, and a custom message indicating success, or why there was a failure |






<a name="pb.DisconnectResponse.StatusEntry"></a>

### DisconnectResponse.StatusEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [DisconnectResponse.StatusMessage](#pb.DisconnectResponse.StatusMessage) |  |  |






<a name="pb.DisconnectResponse.StatusMessage"></a>

### DisconnectResponse.StatusMessage
StatusMessage is used to contain the status information about a particular disconnection attempt


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| disconnected | [bool](#bool) |  | indicate whether or not we actually disconnected |
| reason | [string](#string) |  | if disconnected is false, the reason why it is false |






<a name="pb.EnableExtrasRequest"></a>

### EnableExtrasRequest
EnableExtrasRequest is used to enable a particular extras feature


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| extrasFeature | [EXTRASTYPE](#pb.EXTRASTYPE) |  | extrasFeature denotes the particular extras functionality to enable |






<a name="pb.GetPeersResponse"></a>

### GetPeersResponse
GetPeersResponse is a response to GetPeers containing a slice of peer IDs


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerIDs | [string](#string) | repeated | a slice of peer IDs |






<a name="pb.IsConnectedRequest"></a>

### IsConnectedRequest
IsConnectedRequest is used check whether or not we are currently peered with these peers


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerIDs | [string](#string) | repeated | a slice of the peer IDs to examine |






<a name="pb.IsConnectedResponse"></a>

### IsConnectedResponse
IsConnectedResponse is a response to an IsConnectedRequest request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connected | [IsConnectedResponse.ConnectedEntry](#pb.IsConnectedResponse.ConnectedEntry) | repeated | a map of the peer ID and a boolean indicating if we are connected with them |






<a name="pb.IsConnectedResponse.ConnectedEntry"></a>

### IsConnectedResponse.ConnectedEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [bool](#bool) |  |  |






<a name="pb.PersistCIDRequest"></a>

### PersistCIDRequest
PersistCIDRequest is used to persist a cid on the local retaining it in permanent storage.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cid | [string](#string) |  | the cid we will request from the network |





 


<a name="pb.EXTRASTYPE"></a>

### EXTRASTYPE
EXTRASTYPE denotes a particular extras type

| Name | Number | Description |
| ---- | ------ | ----------- |
| IDENTIFY | 0 | IDENTIFY is the identify service |
| PUBSUB | 1 | PUBSUB is the libp2p pubsub system |
| DISCOVERY | 2 | DISCOVERY is a libp2p discovery service |


 

 


<a name="pb.NodeAPI"></a>

### NodeAPI
NodeAPI provide an API to control the underlying custom ipfs node

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetPeers | [Empty](#pb.Empty) | [GetPeersResponse](#pb.GetPeersResponse) | GetPeers returns a message containing a slice of current peers in our peerstore |
| Connect | [ConnectRequest](#pb.ConnectRequest) | [Empty](#pb.Empty) | Connect is used to connect to remote libp2p peers |
| Disconnect | [DisconnectRequest](#pb.DisconnectRequest) | [DisconnectResponse](#pb.DisconnectResponse) | Disconnect is used to disconnect remote libp2p peer connections |
| IsConnected | [IsConnectedRequest](#pb.IsConnectedRequest) | [IsConnectedResponse](#pb.IsConnectedResponse) | IsConnected is used to check if we are connected with a given peer |
| EnableExtras | [EnableExtrasRequest](#pb.EnableExtrasRequest) | [Empty](#pb.Empty) | EnableExtras is used to enable a particular extras feature |
| DisableExtras | [DisableExtrasRequest](#pb.DisableExtrasRequest) | [Empty](#pb.Empty) | DisableExtras is used to disable a particular extras feature |
| PersistCID | [PersistCIDRequest](#pb.PersistCIDRequest) | [Empty](#pb.Empty) | PersistCID is used to persist a cid in local storage, and is the equivalent of running ipfs pin add |

 



<a name="pubsub.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## pubsub.proto



<a name="pb.PubSubListPeersRequest"></a>

### PubSubListPeersRequest
PubSubListPeersRequest is used to return a list of
peers that are subscribed to the given topic(s)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topics | [string](#string) | repeated | the topics for which we should list peers for |






<a name="pb.PubSubListPeersResponse"></a>

### PubSubListPeersResponse
PubSubListPeersResponse is a response to a ListPeersRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peers | [PubSubListPeersResponse.Peer](#pb.PubSubListPeersResponse.Peer) | repeated |  |






<a name="pb.PubSubListPeersResponse.Peer"></a>

### PubSubListPeersResponse.Peer
peer is a single peer


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topic | [string](#string) |  | topic is the topic this peer is a part of |
| peerID | [string](#string) |  | lists the peerid for this peer |






<a name="pb.PubSubMessageResponse"></a>

### PubSubMessageResponse
PubSubMessageResposne is a received pubsub message
sent as a response to a subscription rpc call


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from | [bytes](#bytes) |  | who this message is from |
| data | [bytes](#bytes) |  | the data of this message |
| seqno | [bytes](#bytes) |  | the sequence number of this message |
| topicIDs | [string](#string) | repeated | the topic IDs this message is sent to |
| signature | [bytes](#bytes) |  | the signature of the sender |
| key | [bytes](#bytes) |  | the key of the sender |






<a name="pb.PubSubPublishRequest"></a>

### PubSubPublishRequest
PubSubPublishRequest is a message used to publish data to a topic


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topic | [string](#string) |  | the topic we are publishing too |
| data | [bytes](#bytes) |  | the data we are publishing |
| advertise | [bool](#bool) |  | whether or not we should engage in advertise operations |






<a name="pb.PubSubSubscribeRequest"></a>

### PubSubSubscribeRequest
PubSubSubscribeRequest is used to initiate a subscription
to a given pubsub topic and stream received messages


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topic | [string](#string) |  | the topic we should subscribe to |
| discover | [bool](#bool) |  | indicates whether the server should perform service discover for peers on the same topic |






<a name="pb.PubSubTopicsResponse"></a>

### PubSubTopicsResponse
PubSubTopics is a response that returns
the names of all known topics


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| names | [string](#string) | repeated | the names of topics |





 

 

 


<a name="pb.PubSubAPI"></a>

### PubSubAPI
PubSubAPI provides a gRPC API for a libp2p pubsub instance

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| PubSubGetTopics | [Empty](#pb.Empty) | [PubSubTopicsResponse](#pb.PubSubTopicsResponse) | PubSubGetTopics is used to return a list of all known topics the pubsub instance is subscribed to. |
| PubSubListPeers | [PubSubListPeersRequest](#pb.PubSubListPeersRequest) | [PubSubListPeersResponse](#pb.PubSubListPeersResponse) | PubSubListPeers is used to return a list of peers subscribed to a given topic or topics. |
| PubSubSubscribe | [PubSubSubscribeRequest](#pb.PubSubSubscribeRequest) | [PubSubMessageResponse](#pb.PubSubMessageResponse) stream | PubSubSubscribe is used to subscribe to a topic and receive messages Server will stream the messages received on the topic specified during the initial subscription call, and send each message back to the client as it is received. |
| PubSubPublish | [PubSubPublishRequest](#pb.PubSubPublishRequest) stream | [Empty](#pb.Empty) | PubSubPublish is used to send a stream of messages to a pubsub topic. |

 



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

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |

