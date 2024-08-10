import { Socket } from "net";
import { AnkSocket, AnkSocketEndpoint } from "./AnkSocket";
import { GameInstance } from "../GameInstance";

export class AnkServer extends AnkSocket {

    public constructor(gameInstance: GameInstance) {

        super(gameInstance);

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
        // console.log("[Server >>> Mitm] : " + data.toString("hex"));
        let queue = this._packetHandler.acquisition(data, AnkSocketEndpoint.CLIENT);
        if (queue) {
            for (let packet of queue) {
                this._gameInstance.ankClient.send(packet);
            }
        }
    }

    public send(data: Buffer) {
        if (this._socket.writable) {
            // console.log("[Mitm >>> Server] : " + data.toString("hex"));
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