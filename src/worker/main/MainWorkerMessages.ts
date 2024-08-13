import { AnkSocketEndpoint } from "../../network/AnkSocket";

export enum MainWorkerMessageType {
    INITIALIZE,
    TERMINATE,
    NETWORK_PROCESS,
};

export type MainWorkerMessage = {
    type: MainWorkerMessageType,
    timestamp: number,
};

export type MainWorkerInitializeMessage = {
    sequence: number,
} & MainWorkerMessage;

export type MainWorkerTerminateMessage = {} & MainWorkerMessage;

export type MainWorkerNetworkProcessMessage = {
    raw: string,
    endpoint: AnkSocketEndpoint,
} & MainWorkerMessage;