import { Server, Socket } from "net";
import { AnkClient } from "./AnkClient";
import { AnkServer } from "./AnkServer";
import { Worker } from "worker_threads";
import { config } from "../config";
import { AnkSocketEndpoint } from "./AnkSocket";
import { RobotWorkerNetworkMessage, ThreadWorkerNetworkMessage, WorkerMessage, WorkerMessageType } from "../worker/WorkerMessage";

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

            let worker = new Worker(config.worker.script);
            let ankClient = new AnkClient(worker, socketClient);
            let ankServer = new AnkServer(worker);

            this.listenWorkerEvents(worker, ankClient, ankServer);

            // TODO Ici on va peut etre avoir un soucis avec le switch de connexion entre l'host server et le game server
            // Quand on switch de connexion on reset tout c'est comme si un nouveau client vennait de se connecter (FRIDA)

            ankClient.attachEvent("close", () => ankServer.end(ankClient));
            ankClient.attachEvent("data", (data: Buffer) => {
                ankClient.hookRecv(data, (host: string, port: number) => {
                    ankServer.connect(host, port);
                    ankServer.attachEvent("close", () => ankClient.end(ankServer));
                });
            });

        });

        this._socket.listen(port, host, () => {
            console.log("Mitm() -> listening on " + host + "::" + port);
        });

    }

    private listenWorkerEvents(worker: Worker, ankClient: AnkClient, ankServer: AnkServer): void {

        worker.on("online", () => {
            console.log("Mitm() -> worker online");
            // setTimeout(() => {
            //     worker.postMessage({ type: WorkerMessageType.TERMINATE });
            // }, 100);
        })

        worker.on("error", (error: Error) => {
            console.error("Mitm() -> worker error:", error);
        });

        worker.on("exit", (code: number) => {
            console.log("Mitm() -> worker exit with code " + code);
            ankClient.end(ankServer);
            ankServer.end(ankClient);
            return;
        });

        worker.on("message", (message: WorkerMessage) => {
            this.onWorkerMessage(message, ankClient, ankServer);
        });

    }

    private onWorkerMessage(message: WorkerMessage, ankClient: AnkClient, ankServer: AnkServer): void {
        switch (message.type) {
            case WorkerMessageType.TERMINATE:
                this.onThreadTerminate(message);
                break;
            case WorkerMessageType.NETWORK_THREAD:
                this.onThreadMessage(message as ThreadWorkerNetworkMessage, ankClient, ankServer);
                break;
            case WorkerMessageType.NETWORK_ROBOT:
                this.onRobotMessage(message as RobotWorkerNetworkMessage, ankClient, ankServer);
                break;
            default:
                throw new Error("Mitm() -> unknown message type");
        }
    }

    private onThreadTerminate(message: any): void {
        console.log("Mitm() -> thread termination sequence: " + message.sequence);
    }

    private onThreadMessage(message: ThreadWorkerNetworkMessage, ankClient: AnkClient, ankServer: AnkServer): void {

        let { queue, endpoint, treatments } = message as ThreadWorkerNetworkMessage;
        let bufferQueue = queue.map(data => Buffer.from(data, "hex"));

        switch (endpoint) {
            case AnkSocketEndpoint.CLIENT:
                ankClient.multiSend(bufferQueue);
                ankServer.treated(treatments);
                break;
            case AnkSocketEndpoint.SERVER:
                ankServer.multiSend(bufferQueue);
                ankClient.treated(treatments);
                break;
        }

    }

    private onRobotMessage(message: RobotWorkerNetworkMessage, ankClient: AnkClient, ankServer: AnkServer): void {

        let { raw, endpoint } = message;
        let buffer = Buffer.from(raw, "hex");

        switch (endpoint) {
            case AnkSocketEndpoint.CLIENT:
                ankClient.send(buffer);
                break;
            case AnkSocketEndpoint.SERVER:
                ankServer.send(buffer);
                break;
        }

    }

}