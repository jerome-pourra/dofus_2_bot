import { MessagePort } from "worker_threads";
import { ActionManager } from "./actions/ActionsManager";
import { Commands } from "./commands/Commands";
import { Datacenter } from "./datacenter/Datacenter";
import { RobotWorkerNetworkMessage, WorkerMessageType } from "../worker/WorkerMessage";
import { AnkSocketEndpoint } from "../network/AnkSocket";

export class Robot {

    private static _instance: Robot = null;

    private _parentThread: MessagePort;

    public datacenter: Datacenter;
    public commands: Commands;
    public actions: ActionManager;

    public static initialize(parentThread: MessagePort): void {
        if (Robot._instance !== null) {
            throw new Error("Robot already initialized");
        }
        this._instance = new Robot(parentThread);
    }

    public static get(): Robot {
        if (Robot._instance === null) {
            throw new Error("Robot not initialized");
        }
        return Robot._instance;
    }

    private constructor(parentThread: MessagePort) {

        this._parentThread = parentThread;

        this.datacenter = new Datacenter();
        this.commands = new Commands();
        this.actions = new ActionManager();

    }

    public send(buffer: Buffer, endpoint: AnkSocketEndpoint): void {
        let message: RobotWorkerNetworkMessage = {
            type: WorkerMessageType.NETWORK_ROBOT,
            raw: buffer.toString("hex"),
            endpoint: endpoint,
            timestamp: Date.now()
        };
        this._parentThread.postMessage(message);
    }

}