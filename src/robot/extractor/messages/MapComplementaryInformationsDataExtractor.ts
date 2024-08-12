import { MapComplementaryInformationsDataMessage } from "../../../com/ankamagames/dofus/network/messages/game/context/roleplay/MapComplementaryInformationsDataMessage";
import { NetworkMessageWrapper } from "../../../network/packet/NetworkMessageWrapper";
import { AbstractNetworkExtractor } from "../AbstractNetworkExtractor";

export class MapComplementaryInformationsDataMessageExtractor extends AbstractNetworkExtractor<MapComplementaryInformationsDataMessage> {

    constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, MapComplementaryInformationsDataMessage.prototype);
    }

    public process(): void {
        console.log("MapCompleteInformationsDataExtractor: " + this._message);
    }

}