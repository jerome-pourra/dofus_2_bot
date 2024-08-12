import { BasicAckMessage } from "../../../../../com/ankamagames/dofus/network/messages/game/basic/BasicAckMessage";
import { NetworkMessageWrapper } from "../../../../../network/packet/NetworkMessageWrapper";
import { Robot } from "../../../../Robot";
import { AbstractNetworkExtract } from "../../../AbstractNetworkExtract";

export class BasicAckExtract extends AbstractNetworkExtract<BasicAckMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, BasicAckMessage.prototype);
    }

    public process() {
        Robot.get().datacenter.me.ackManager.endAck(this._message.lastPacketId);
    }

}