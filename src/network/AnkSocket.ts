import { Socket } from "net";
import { Worker } from "worker_threads";
import { PacketHandler } from "./packet/PacketHandler";

export enum AnkSocketEndpoint {
    CLIENT,
    SERVER
}

export abstract class AnkSocket {

    protected _socket: Socket;
    protected _worker: Worker;
    protected _untreated: number;
    protected _packetHandler: PacketHandler;

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

    public end(other: AnkSocket) {
        let interval = setInterval(() => {
            if (other._untreated === 0) {
                clearInterval(interval);
                if (this._socket.readyState === "open") {
                    this._socket.end();
                } else {
                    console.error(`${this.constructor.name}.end() -> socket not open`);
                }
            }
        }, 100);
    }

    public destroy() {
        if (this._socket.readyState === "open") {
            this._socket.destroy();
        } else {
            console.error(`${this.constructor.name}.destroy() -> socket not open`);
        }
    }

}