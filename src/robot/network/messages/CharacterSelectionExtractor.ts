import { CharacterSelectionMessage } from "../../../com/ankamagames/dofus/network/messages/game/character/choice/CharacterSelectionMessage";
import { NetworkMessageWrapper } from "../../../network/packet/NetworkMessageWrapper";
import { Robot } from "../../Robot";
import { AbstractNetworkExtractor } from "../AbstractNetworkExtractor";

export class CharacterSelectionExtractor extends AbstractNetworkExtractor<CharacterSelectionMessage> {

    // private _wrapper: NetworkMessageWrapper;
    // declare protected _message: CharacterSelectionMessage;

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, CharacterSelectionMessage.prototype);
    }

    public process() {
        Robot.get().datacenter.me.setId(this._message.id);
    }

}