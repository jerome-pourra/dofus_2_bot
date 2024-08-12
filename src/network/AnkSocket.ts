import { Socket } from "net";
import { Worker } from "worker_threads";
import { PacketHandler } from "./packet/PacketHandler";
import { MainWorkerNetworkMessage, WorkerMessageType } from "../worker/WorkerMessage";

export enum AnkSocketEndpoint {
    CLIENT,
    SERVER
}

export abstract class AnkSocket {

    public static readonly ENDPOINT: AnkSocketEndpoint;

    protected _socket: Socket;
    protected _worker: Worker;
    protected _untreated: number;
    protected _packetHandler: PacketHandler;
    protected abstract _endpoint: AnkSocketEndpoint;

    public constructor(worker: Worker) {
        this._socket = null;
        this._worker = worker;
        this._untreated = 0;
        this._packetHandler = new PacketHandler();
    }

    public treated(value: number) {
        this._untreated -= value;
    }

    public attachEvent(event: string, callback: (...args: any[]) => void) {
        this._socket.removeAllListeners(event);
        this._socket.addListener(event, callback);
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
                    console.error(`${this.constructor.name}.send() -> writing data error: ${error}`);
                }
            });
        } else {
            console.error(`${this.constructor.name}.send() -> socket not writable`);
        }
    }

    public end(other: AnkSocket) {
        let interval = setInterval(() => {
            if (other._untreated === 0) {
                clearInterval(interval);
                if (this._socket.readyState === "open") {
                    this._socket.end();
                    this._worker.terminate();
                } else {
                    console.error(`${this.constructor.name}.end() -> socket not open`);
                }
            }
        }, 100);
    }

    public destroy() {
        if (this._socket.readyState === "open") {
            this._socket.destroy();
            this._worker.terminate();
        } else {
            console.error(`${this.constructor.name}.destroy() -> socket not open`);
        }
    }

    protected recv(data: Buffer) {
        let message: MainWorkerNetworkMessage = {
            type: WorkerMessageType.NETWORK_MAIN,
            raw: data.toString("hex"),
            endpoint: this._endpoint,
            timestamp: Date.now()
        };
        this._untreated += data.length;
        this._worker.postMessage(message);
    }

}