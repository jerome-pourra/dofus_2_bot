import { AnkSocketEndpoint } from "../network/AnkSocket";

export type MainMessage = {
    raw: string,
    endpoint: AnkSocketEndpoint,
    timestamp: number
};

export type WorkerMessage = {
    queue: Array<string>,
    endpoint: AnkSocketEndpoint,
    timestamp: number,
    treatments: number
};