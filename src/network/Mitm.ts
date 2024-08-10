import { Server, Socket } from "net";
import { AnkClient } from "./AnkClient";
import { AnkServer } from "./AnkServer";
import { Robot } from "../bot/Robot";
import { GameInstance } from "../GameInstance";

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

            let gameInstance = new GameInstance(socketClient);
            gameInstance.ankClient.attachEvent("close", () => gameInstance.ankServer.end());
            gameInstance.ankClient.attachEvent("data", (data: Buffer) => {
                gameInstance.ankClient.hookRecv(data, (host: string, port: number) => {
                    gameInstance.ankServer.connect(host, port);
                    gameInstance.ankServer.attachEvent("close", () => gameInstance.ankClient.end());
                });
            });

        });

        this._socket.listen(port, host, () => {
            console.log("Mitm() -> listening on " + host + "::" + port);
        });

    }
}