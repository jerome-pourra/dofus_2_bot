import { Socket } from "net";
import { Worker } from "worker_threads";
import { AnkSocket, AnkSocketEndpoint } from "./AnkSocket";
import { MainMessage, WorkerMessage } from "../worker/WorkerMessage";

export class AnkServer extends AnkSocket {

    protected _endpoint = AnkSocketEndpoint.CLIENT;

    public constructor(worker: Worker) {

        super(worker);

        this._socket = new Socket();

        this._socket.on("error", (error: Error) => {
            console.error("AnkServer() -> socket error:" + error.message);
        });

        this._socket.on("end", () => {
            console.log("AnkServer() -> socket end");
        });

        this._socket.on("close", () => {
            console.log("AnkServer() -> socket close");
        });

        this._socket.on("connect", () => {
            console.log("AnkServer() -> socket connected");
        });

        this._socket.on("data", (data: Buffer) => {
            this.recv(data);
        });

    }

    public connect(host: string, port: number) {
        this._socket.connect(port, host);
    }

}