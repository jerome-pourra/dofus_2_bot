import { Socket } from "net";
import { Robot } from "./bot/Robot";
import { AnkClient } from "./network/AnkClient";
import { AnkServer } from "./network/AnkServer";

export class GameInstance {

    private _robot: Robot;
    private _ankClient: AnkClient;
    private _ankServer: AnkServer;

    public constructor(socketClient: Socket) {
        this.robot = new Robot(this);
        this.ankClient = new AnkClient(this, socketClient);
        this.ankServer = new AnkServer(this);
    }

    public get robot(): Robot {
        return this._robot;
    }

    public set robot(robot: Robot) {
        this._robot = robot;
    }

    public get ankClient(): AnkClient {
        return this._ankClient;
    }

    public set ankClient(ankClient: AnkClient) {
        this._ankClient = ankClient;
    }

    public get ankServer(): AnkServer {
        return this._ankServer;
    }

    public set ankServer(ankServer: AnkServer) {
        this._ankServer = ankServer;
    }

}