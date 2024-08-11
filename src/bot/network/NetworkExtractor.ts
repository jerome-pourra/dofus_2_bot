import { NetworkMessageWrapper } from "../../network/packet/NetworkMessageWrapper";
import { INetworkExtractor } from "./INetworkExtractor";
import { ChatClientMultiMessageExtractor } from "./messages/ChatClientMultiExtractor";
import { GameMapChangeOrientationExtractor } from "./messages/GameMapChangeOrientationExtractor";

export class NetworkExtractor {

    private static readonly _types: Map<string, new (wrapper: NetworkMessageWrapper) => INetworkExtractor> = new Map<string, new (wrapper: NetworkMessageWrapper) => INetworkExtractor>();

    static {
        this._types.set("ChatClientMultiMessage", ChatClientMultiMessageExtractor);
        this._types.set("GameMapChangeOrientationMessage", GameMapChangeOrientationExtractor);
    }

    public static getType(id: string): string {
        let type = NetworkExtractor._types.get(id);
        if (type) {
            return type.name;
        }
        return "UNHANDLED";
    }

    public static process(wrapper: NetworkMessageWrapper): void {
        let handlerType: new (wrapper: NetworkMessageWrapper) => INetworkExtractor = NetworkExtractor._types.get(wrapper.networkMessage.constructor.name);
        if (handlerType) {
            console.log("Handle network message (CLASS " + wrapper.networkMessage.constructor.name + ")");
            new handlerType(wrapper).process();
        }
    }

}