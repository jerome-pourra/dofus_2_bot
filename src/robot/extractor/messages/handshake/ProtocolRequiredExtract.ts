import * as fs from "fs";
import { MessageReceiver } from "../../../../com/ankamagames/dofus/network/MessageReceiver";
import { ProtocolRequired } from "../../../../com/ankamagames/dofus/network/messages/handshake/ProtocolRequired";
import { NetworkMessageWrapper } from "../../../../network/packet/NetworkMessageWrapper";
import { AbstractNetworkExtract } from "../../AbstractNetworkExtract";
import path from "path";
import { config } from "../../../../config";

export class ProtocolRequiredExtract extends AbstractNetworkExtract<ProtocolRequired> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, ProtocolRequired.prototype);
    }

    public process(): void {

        const protocolVersionPath = config.paths.protovolVersion;

        if (fs.existsSync(protocolVersionPath)) {
            const protocolVersion = JSON.parse(fs.readFileSync(protocolVersionPath, "utf-8"));
            if (protocolVersion.version !== this._message.version) {
                throw new Error(`ProtocolRequiredExtract.process() -> protocol version mismatch: ${this._message.version} (expected: ${protocolVersion.version})`);
            }
        } else {
            fs.writeFileSync(protocolVersionPath, JSON.stringify({ version: this._message.version, }, null, 4), "utf-8");
        }

    }

}