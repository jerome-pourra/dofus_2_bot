import { CurrentMapMessage } from "../../../../../../com/ankamagames/dofus/network/messages/game/context/roleplay/CurrentMapMessage";
import { NetworkMessageWrapper } from "../../../../../../network/packet/NetworkMessageWrapper";
import { Robot } from "../../../../../Robot";
import { AbstractNetworkExtract } from "../../../../AbstractNetworkExtract";

export class CurrentMapExtract extends AbstractNetworkExtract<CurrentMapMessage> {

    constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, CurrentMapMessage.prototype);
    }

    public process(): void {
        Robot.get().datacenter.map.id = this._message.mapId;
    }

}