import { MapComplementaryInformationsDataMessage } from "../../../../../../com/ankamagames/dofus/network/messages/game/context/roleplay/MapComplementaryInformationsDataMessage";
import { NetworkMessageWrapper } from "../../../../../../network/packet/NetworkMessageWrapper";
import { PlayerState } from "../../../../../datacenter/player/PlayerStates";
import { Robot } from "../../../../../Robot";
import { AbstractNetworkExtract } from "../../../../AbstractNetworkExtract";

export class MapComplementaryInformationsDataMessageExtract extends AbstractNetworkExtract<MapComplementaryInformationsDataMessage> {

    constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, MapComplementaryInformationsDataMessage.prototype);
    }

    public process(): void {
        Robot.get().datacenter.me.statesManager.removeState(PlayerState.CHANGE_MAP);
    }

}