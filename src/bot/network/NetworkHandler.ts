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

    public static getType(id: number): string {
        let type = NetworkHandler._types[id];
        if (type) {
            return type.name;
        }
        return "UNKNOWN";
    }

    public static process(wrapper: NetworkMessageWrapper): void {

        let message: INetworkMessage = wrapper.networkMessage;
        let networkClassName = message.constructor.name;

        if (!this._types.has(networkClassName)) {
            return;
        }

        let handlerClass = this._types.get(networkClassName);
        if (!handlerClass) {
            return;
        }
        
        new handlerClass(wrapper).process();

    }

}