import { ActionManager } from "./actions/ActionsManager";
import { Commands } from "./commands/Commands";
import { Datacenter } from "./datacenter/Datacenter";
import { AnkSocketEndpoint } from "../network/AnkSocket";
import { ThreadWorker } from "../worker/thread/ThreadWorker";

export class Robot {

    private static _instance: Robot = null;

    private _worker: ThreadWorker;

    public datacenter: Datacenter;
    public commands: Commands;
    public actions: ActionManager;

    public static initialize(worker: ThreadWorker): void {
        if (Robot._instance !== null) {
            throw new Error("Robot already initialized");
        }
        this._instance = new Robot(worker);
    }

    public static get(): Robot {
        if (Robot._instance === null) {
            throw new Error("Robot not initialized");
        }
        return Robot._instance;
    }

    private constructor(worker: ThreadWorker) {

        this._worker = worker;

        this.datacenter = new Datacenter();
        this.commands = new Commands();
        this.actions = new ActionManager();

    }

    public send(buffer: Buffer, endpoint: AnkSocketEndpoint): void {
        this._worker.postNetworkRobotMessage(buffer.toString("hex"), endpoint);
    }

}