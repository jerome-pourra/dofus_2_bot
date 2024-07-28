import { Socket } from "net";
import { AnkServer } from "./AnkServer";
import { AnkSocket, AnkSocketEndpoint } from "./AnkSocket";

export class AnkClient extends AnkSocket {

    private _ankServer: AnkServer;

    public constructor(socket: Socket) {

        super();

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

    public attachAnkServer(ankServer: AnkServer) {
        this._ankServer = ankServer;
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

    private recv(data: Buffer) {
        // console.log("[Client >>> Mitm] : " + data.toString("hex"));
        let queue = this._packetHandler.acquisition(data, AnkSocketEndpoint.SERVER);
        if (queue) {
            for (let packet of queue) {
                this._ankServer.send(packet);
            }
        }
    }

    public send(data: Buffer) {
        if (this._socket.writable) {
            // console.log("[Mitm >>> Client] : " + data.toString("hex"));
            this._socket.write(data, (error) => {
                if (error) {
                    console.error("AnkClient.send() -> writing data error: " + error);
                }
            });
        } else {
            console.error("AnkClient.send() -> socket not writable");
        }
    }

}