import { Socket } from "net";
import { Protocol } from "./Protocol";
import { Logger } from "../tools/Logger";

export class Game {

    private soClient: Socket;
    private soServer: Socket;

    constructor(soClient: Socket) {

        this.soClient = soClient;

        this.soClient.on("close", (hadError: boolean) => {
            Logger.Info("Le client a coupé le socket error:" + hadError);
            this.soServer.destroy();
        });

        this.soClient.on("data", (data: Buffer) => {
            this.recvClient(data);
        });

    }

    private recvClient(data: Buffer) {

        if (this.soServer === undefined) {
            this.soClient.write(Buffer.from([0x00]));
            const { host, port } = JSON.parse(data.toString("utf8"));
            this.connectToAnkama(host, port);
        } else {
            // console.log("[Client] : " + data.toString("hex"));
            Protocol.recvClient(data);
            this.soServer.write(data);
        }

    }

    private recvServer(data: Buffer) {
        // console.log("[Server] : " + data.toString("hex"));
        Protocol.recvServer(data);
        this.soClient.write(data);
    }

    private connectToAnkama(host: string, port: number) {

        this.soServer = new Socket();

        this.soServer.on("data", (data: Buffer) => {
            this.recvServer(data);
        });

        this.soServer.connect(port, host, () => {
            Logger.Info("Connexion au serveur Ankama " + host + "::" + port);
        });

        this.soServer.on("close", (hadError: boolean) => {
            Logger.Info("Le serveur a coupé la connexion error:" + hadError);
            this.soClient.destroy();
        });

        this.soServer.on("error", (error: Error) => {
            Logger.Error("Erreur de connexion au serveur Ankama " + host + "::" + port + " : " + error.message);
            this.soClient.destroy();
        });

    }

}