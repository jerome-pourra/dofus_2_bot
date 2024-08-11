import { Socket } from "net";
import { Worker } from "worker_threads";
import { AnkSocket, AnkSocketEndpoint } from "./AnkSocket";
import { MainMessage, WorkerMessage } from "../worker/WorkerMessage";

export class AnkClient extends AnkSocket {

    protected _endpoint = AnkSocketEndpoint.SERVER;

    public constructor(worker: Worker, socket: Socket) {

        super(worker);

        if (socket.readyState !== "open") {
            throw new Error("AnkClient() -> socket not open");
        }

        this._socket = socket;

        this._socket.addListener("error", (error: Error) => {
            console.error("AnkClient() -> socket error:" + error.message);
        });

        this._socket.addListener("end", () => {
            console.log("AnkClient() -> socket end");
        });

        this._socket.addListener("close", () => {
            console.log("AnkClient() -> socket closed");
        });

    }
    
    public hookRecv(data: Buffer, callback: (host: string, port: number) => void) {

        console.log("[Hook >>> Mitm] : " + data.toString("utf-8"));
        const { host, port } = JSON.parse(data.toString("utf-8"));

        this.attachEvent("data", (data: Buffer) => {
            this.recv(data);
        });

        // TODO: trouver une meilleure solution que d'envoyer un packet de merde...
        this.send(Buffer.alloc(1, 0x00, "hex"));
        callback(host, port);

    }

}