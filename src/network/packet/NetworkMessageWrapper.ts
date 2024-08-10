import { INetworkMessage } from "../../com/ankamagames/jerakine/network/INetworkMessage";
import { AnkSocketEndpoint } from "../AnkSocket";

export class NetworkMessageWrapper {

    public locked: boolean;
    public id: number;
    public sequence: number;
    public endpoint: AnkSocketEndpoint;
    public networkMessage: INetworkMessage;

    public constructor(id: number, sequence: number, endpoint: AnkSocketEndpoint, networkMessage: INetworkMessage) {

        this.locked = false; // TODO: lock message when sending to the endpoint

        this.id = id;
        this.sequence = sequence;
        this.endpoint = endpoint;
        this.networkMessage = networkMessage;

    }

}