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

            // TODO Ici on va peut etre avoir un soucis avec le switch de connexion entre l'host server et le game server
            // Quand on switch de connexion on reset tout c'est comme si un nouveau client vennait de se connecter (FRIDA)

            let gameInstance = new GameInstance(socketClient);
            GameInstance.add(gameInstance);

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