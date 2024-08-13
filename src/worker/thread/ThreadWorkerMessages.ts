import { AnkSocketEndpoint } from "../../network/AnkSocket";

export enum ThreadWorkerMessageType {
    TERMINATE,
    NETWORK_ROBOT,
    NETWORK_PROCESS,
};

export type ThreadWorkerMessage = {
    type: ThreadWorkerMessageType,
    timestamp: number,
};

export type ThreadWorkerTerminateMessage = {
    sequence: number,
} & ThreadWorkerMessage;

export type ThreadWorkerNetworkRobotMessage = {
    raw: string,
    endpoint: AnkSocketEndpoint,
} & ThreadWorkerMessage;

export type ThreadWorkerNetworkProcessMessage = {
    queue: Array<string>,
    endpoint: AnkSocketEndpoint,
    treatments: number,
} & ThreadWorkerMessage;