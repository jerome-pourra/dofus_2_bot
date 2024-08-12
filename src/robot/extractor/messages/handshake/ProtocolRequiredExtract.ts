import { ProtocolRequired } from "../../../../com/ankamagames/dofus/network/messages/handshake/ProtocolRequired";
import { NetworkMessageWrapper } from "../../../../network/packet/NetworkMessageWrapper";
import { AbstractNetworkExtract } from "../../AbstractNetworkExtract";

export class ProtocolRequiredExtract extends AbstractNetworkExtract<ProtocolRequired> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, ProtocolRequired.prototype);
    }

    public process(): void {
        // Check version builder ? :)
    }

}