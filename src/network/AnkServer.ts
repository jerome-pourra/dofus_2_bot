import { Socket } from "net";
import { Worker } from "worker_threads";
import { AnkSocket, AnkSocketEndpoint } from "./AnkSocket";
import { MainMessage, WorkerMessage } from "../worker/WorkerMessage";

export class AnkServer extends AnkSocket {

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

    private recv(data: Buffer) {
        this._untreated += data.length;
        this._worker.postMessage({
            raw: data.toString("hex"), 
            endpoint: AnkSocketEndpoint.CLIENT,
            timestamp: Date.now()
        } as MainMessage);
    }

    public multiSend(dataList: Buffer[]) {
        for (let data of dataList) {
            this.send(data);
        }
    }

    public send(data: Buffer) {
        if (this._socket.writable) {
            this._socket.write(data, (error) => {
                if (error) {
                    console.error("AnkServer.send() -> writing data error: " + error);
                }
            });
        } else {
            console.error("AnkServer.send() -> socket not writable");
        }
    }

}