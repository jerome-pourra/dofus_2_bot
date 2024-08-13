import path from "path";

export const config = {
    hook: {
        search: /Dofus.*/i,
        redirectPorts: [5555],
    },
    mitm: {
        host: "127.0.0.1",
        port: 54321,
    },
    worker: {
        script: "./dist/worker.js",
    },
    paths: {
        root: path.resolve(__dirname, "../"),
        protovolVersion: path.resolve(__dirname, "../ProtocolVersion.json"),
    },
}