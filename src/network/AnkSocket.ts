import { Socket } from "net";
import { PacketHandler } from "./packet/PacketHandler";
import { GameInstance } from "../GameInstance";

export enum AnkSocketEndpoint {
    CLIENT,
    SERVER
}

export abstract class AnkSocket {

    protected _socket: Socket;
    protected _gameInstance: GameInstance;
    protected _packetHandler: PacketHandler;

    public constructor(gameInstance: GameInstance) {
        this._socket = null;
        this._gameInstance = gameInstance;
        this._packetHandler = new PacketHandler();
    }

    public attachEvent(event: string, callback: (...args: any[]) => void) {
        this._socket.removeAllListeners(event);
        this._socket.addListener(event, callback);
    }

    public end() {
        if (this._socket.readyState === "open") {
            this._socket.end();
        } else {
            console.error(`${this.constructor.name}.end() -> socket not open`);
        }
    }

    public destroy() {
        if (this._socket.readyState === "open") {
            this._socket.destroy();
        } else {
            console.error(`${this.constructor.name}AnkServer.end() -> socket not open`);
        }
    }

}