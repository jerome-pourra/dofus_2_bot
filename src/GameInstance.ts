import * as crypto from "crypto";
import { Socket } from "net";
import { Robot } from "./bot/Robot";
import { AnkClient } from "./network/AnkClient";
import { AnkServer } from "./network/AnkServer";

export class GameInstance {

    private static _instance: GameInstance = null;
    private static _instances: Map<string, GameInstance> = new Map<string, GameInstance>();

    public uuid: string;
    private _robot: Robot;
    private _ankClient: AnkClient;
    private _ankServer: AnkServer;

    public static get(): GameInstance {
        if (!GameInstance._instance) {
            throw new Error("GameInstance.get() -> attempt to get instance before setting it");
        }
        return GameInstance._instance;
    }

    public static set(uuid: string): void {
        if (!GameInstance._instances.has(uuid)) {
            throw new Error("GameInstance.set instance() -> instance uuid " + uuid + " not found");
        }
        GameInstance._instance = GameInstance._instances.get(uuid);
    }

    public static unset(): void {
        if (!GameInstance._instance) {
            throw new Error("GameInstance.unset() -> instance not set");
        }
        GameInstance._instance = null;
    }

    public static add(gameInstance: GameInstance): void {
        if (GameInstance._instances.has(gameInstance.uuid)) {
            throw new Error("GameInstance.add() -> instance uuid " + gameInstance.uuid + " already exists");
        }
        GameInstance._instances.set(gameInstance.uuid, gameInstance);
    }

    public static remove(uuid: string): void {
        if (!GameInstance._instances.has(uuid)) {
            throw new Error("GameInstance.remove() -> instance uuid " + uuid + " not found");
        }
        GameInstance._instances.delete(uuid);
    }

    public constructor(socketClient: Socket) {
        this.uuid = crypto.randomUUID();
        this._robot = new Robot(this);
        this._ankClient = new AnkClient(this, socketClient);
        this._ankServer = new AnkServer(this);
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