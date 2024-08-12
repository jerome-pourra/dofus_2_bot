import { INetworkMessage } from "../../com/ankamagames/jerakine/network/INetworkMessage";
import { NetworkMessageWrapper } from "../../network/packet/NetworkMessageWrapper";
import { AbstractNetworkExtract } from "./AbstractNetworkExtract";
import { BasicAckExtract } from "./messages/game/basic/BasicAckExtract";
import { CharacterSelectionExtract } from "./messages/game/character/choice/CharacterSelectionExtract";
import { ChatClientMultiMessageExtract } from "./messages/game/chat/ChatClientMultiExtract";
import { GameMapChangeOrientationExtract } from "./messages/game/context/GameMapChangeOrientationExtract";
import { GameMapChangeOrientationRequestExtract } from "./messages/game/context/GameMapChangeOrientationRequestExtract";
import { GameMapMovementConfirmExtract } from "./messages/game/context/GameMapMovementConfirmExtract";
import { GameMapMovementExtract } from "./messages/game/context/GameMapMovementExtract";
import { GameMapMovementRequestExtract } from "./messages/game/context/GameMapMovementRequestExtract";
import { MapComplementaryInformationsDataMessageExtract } from "./messages/game/context/roleplay/MapComplementaryInformationsDataExtract";
import { ProtocolRequiredExtract } from "./messages/handshake/ProtocolRequiredExtract";

export class NetworkExtractor {

    private static readonly _types: Map<string, new (wrapper: NetworkMessageWrapper) => AbstractNetworkExtract<INetworkMessage>> = new Map<string, new (wrapper: NetworkMessageWrapper) => AbstractNetworkExtract<INetworkMessage>>();

    static {

        this._types.set("ProtocolRequired", ProtocolRequiredExtract);
        this._types.set("CharacterSelectionMessage", CharacterSelectionExtract);

        this._types.set("BasicAckMessage", BasicAckExtract);

        this._types.set("ChatClientMultiMessage", ChatClientMultiMessageExtract);

        this._types.set("GameMapChangeOrientationMessage", GameMapChangeOrientationExtract);
        this._types.set("GameMapChangeOrientationRequestMessage", GameMapChangeOrientationRequestExtract);

        this._types.set("GameMapMovementMessage", GameMapMovementExtract);
        this._types.set("GameMapMovementRequestMessage", GameMapMovementRequestExtract);
        this._types.set("GameMapMovementConfirmMessage", GameMapMovementConfirmExtract);

        this._types.set("MapComplementaryInformationsDataMessage", MapComplementaryInformationsDataMessageExtract);
    }

    public static getType(id: string): string {
        let type = NetworkExtractor._types.get(id);
        if (type) {
            return type.name;
        }
        return "UNHANDLED";
    }

    public static process(wrapper: NetworkMessageWrapper): void {
        let handlerType: new (wrapper: NetworkMessageWrapper) => AbstractNetworkExtract<INetworkMessage> = NetworkExtractor._types.get(wrapper.networkMessage.constructor.name);
        if (handlerType) {
            console.log("Handle network message (CLASS " + wrapper.networkMessage.constructor.name + ")");
            new handlerType(wrapper).process();
        }
    }

}