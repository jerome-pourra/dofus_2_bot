import { Server, Socket } from "net";
import { AnkClient } from "./AnkClient";
import { AnkServer } from "./AnkServer";

export class Mitm {

    private _socket: Server;

    public constructor(host: string, port: number) {

        this._socket = new Server();

        this._socket.on("error", (error: Error) => {
            console.error("Mitm() -> socket error:" + error.message);
        });

        this._socket.on("end", () => {
            console.log("Mitm() -> socket end");
        });

        this._socket.on("close", (hadError: boolean) => {
            console.log("Mitm() -> socket closed");
        });

        this._socket.on("connection", (socketClient: Socket) => {

            console.log("Mitm() -> new connection from " + socketClient.remoteAddress + "::" + socketClient.remotePort);

            let ankClient = new AnkClient(socketClient);
            let ankServer = new AnkServer();

            ankClient.attachAnkServer(ankServer);
            ankServer.attachAnkClient(ankClient);

            ankClient.attachEvent("close", () => ankServer.end());
            ankClient.attachEvent("data", (data: Buffer) => {
                ankClient.hookRecv(data, (host: string, port: number) => {
                    ankServer.connect(host, port);
                    ankServer.attachEvent("close", () => ankClient.end());
                });
            });

        });

        this._socket.listen(port, host, () => {
            console.log("Mitm() -> listening on " + host + "::" + port);
        });

    }

}