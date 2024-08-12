import { ChangeMapMessage } from "../../../../../../com/ankamagames/dofus/network/messages/game/context/roleplay/ChangeMapMessage";
import { NetworkMessageWrapper } from "../../../../../../network/packet/NetworkMessageWrapper";
import { PlayerState } from "../../../../../datacenter/player/PlayerStates";
import { Robot } from "../../../../../Robot";
import { AbstractNetworkExtract } from "../../../../AbstractNetworkExtract";

export class ChangeMapExtract extends AbstractNetworkExtract<ChangeMapMessage> {

    constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, ChangeMapMessage.prototype);
    }

    public process(): void {
        Robot.get().datacenter.me.statesManager.addState(PlayerState.CHANGE_MAP);
    }

}