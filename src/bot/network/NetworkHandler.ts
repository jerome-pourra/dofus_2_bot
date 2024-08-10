import { INetworkMessage } from "../../com/ankamagames/jerakine/network/INetworkMessage";
import { NetworkMessageWrapper } from "../../network/packet/NetworkMessageWrapper";
import { INetworkHandler } from "./INetworkHandler";
import { ChatClientMultiMessageHandler } from "./messages/ChatClientMultiHandler";
import { GameMapChangeOrientationHandler } from "./messages/GameMapChangeOrientationHandler";

export class NetworkHandler {

    private static readonly _types: Map<string, new (wrapper: NetworkMessageWrapper) => INetworkHandler> = new Map<string, new (wrapper: NetworkMessageWrapper) => INetworkHandler>();

    static {
        this._types.set("ChatClientMultiMessage", ChatClientMultiMessageHandler);
        this._types.set("GameMapChangeOrientationMessage", GameMapChangeOrientationHandler);
    }

    public static getType(id: string): string {
        let type = NetworkHandler._types.get(id);
        if (type) {
            return type.name;
        }
        return "UNHANDLED";
    }

    public static process(wrapper: NetworkMessageWrapper): void {
        let handlerType: new (wrapper: NetworkMessageWrapper) => INetworkHandler = NetworkHandler._types.get(wrapper.networkMessage.constructor.name);
        if (handlerType) {
            console.log("Handle network message (CLASS " + wrapper.networkMessage.constructor.name + ")");
            new handlerType(wrapper).process();
        }
    }

}