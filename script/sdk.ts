import {grpc} from "@improbable-eng/grpc-web"; 

import {DagAPI} from "./dag_pb_service";

import {DagPutRequest, DagPutResponse} from "./dag_pb";


const putRequest = new DagPutRequest();


putRequest.setData("hello world")

grpc.invoke(DagAPI.DagPut, {
    request: putRequest,
    host: "xapi-dev.temporal.cloud:9090",
    onMessage: (message: DagPutResponse) => {
        console.log("got response: ", message.toObject());
    },
    onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code == grpc.Code.OK) {
          console.log("all ok")
        } else {
          console.log("hit an error", code, msg, trailers);
        }
      }
}); 