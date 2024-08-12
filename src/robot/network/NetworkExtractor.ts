import { INetworkMessage } from "../../com/ankamagames/jerakine/network/INetworkMessage";
import { NetworkMessageWrapper } from "../../network/packet/NetworkMessageWrapper";
import { AbstractNetworkExtractor } from "./AbstractNetworkExtractor";
import { CharacterSelectionExtractor } from "./messages/CharacterSelectionExtractor";
import { ChatClientMultiMessageExtractor } from "./messages/ChatClientMultiExtractor";
import { GameMapChangeOrientationExtractor } from "./messages/GameMapChangeOrientationExtractor";
import { GameMapChangeOrientationRequestExtractor } from "./messages/GameMapChangeOrientationRequestExtractor";
import { ProtocolRequiredExtractor } from "./messages/ProtocolRequiredExtractor";

export class NetworkExtractor {

    private static readonly _types: Map<string, new (wrapper: NetworkMessageWrapper) => AbstractNetworkExtractor<INetworkMessage>> = new Map<string, new (wrapper: NetworkMessageWrapper) => AbstractNetworkExtractor<INetworkMessage>>();

    static {
        this._types.set("ChatClientMultiMessage", ChatClientMultiMessageExtractor);
        this._types.set("GameMapChangeOrientationMessage", GameMapChangeOrientationExtractor);
        this._types.set("CharacterSelectionMessage", CharacterSelectionExtractor);
        this._types.set("ProtocolRequired", ProtocolRequiredExtractor);
        this._types.set("GameMapChangeOrientationRequestMessage", GameMapChangeOrientationRequestExtractor);
    }

    public static getType(id: string): string {
        let type = NetworkExtractor._types.get(id);
        if (type) {
            return type.name;
        }
        return "UNHANDLED";
    }

    public static process(wrapper: NetworkMessageWrapper): void {
        let handlerType: new (wrapper: NetworkMessageWrapper) => AbstractNetworkExtractor<INetworkMessage> = NetworkExtractor._types.get(wrapper.networkMessage.constructor.name);
        if (handlerType) {
            console.log("Handle network message (CLASS " + wrapper.networkMessage.constructor.name + ")");
            new handlerType(wrapper).process();
        }
    }

}