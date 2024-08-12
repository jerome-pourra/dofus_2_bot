import { ProtocolRequired } from "../../../com/ankamagames/dofus/network/messages/handshake/ProtocolRequired";
import { NetworkMessageWrapper } from "../../../network/packet/NetworkMessageWrapper";
import { AbstractNetworkExtractor } from "../AbstractNetworkExtractor";

export class ProtocolRequiredExtractor extends AbstractNetworkExtractor<ProtocolRequired> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, ProtocolRequired.prototype);
    }

    public process(): void {
        console.log("ProtocolRequiredExtractor: " + this._message.version);
    }

}