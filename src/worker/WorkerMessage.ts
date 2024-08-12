import { AnkSocketEndpoint } from "../network/AnkSocket";

export enum WorkerMessageType {
    NETWORK_MAIN,
    NETWORK_ROBOT,
    NETWORK_THREAD,
};

export type WorkerMessage = {
    type: WorkerMessageType,
};

export type MainWorkerNetworkMessage = {
    raw: string,
    endpoint: AnkSocketEndpoint,
    timestamp: number
} & WorkerMessage;

export type RobotWorkerNetworkMessage = {
    raw: string,
    endpoint: AnkSocketEndpoint,
    timestamp: number
} & WorkerMessage;

export type ThreadWorkerNetworkMessage = {
    queue: Array<string>,
    endpoint: AnkSocketEndpoint,
    timestamp: number,
    treatments: number
} & WorkerMessage;