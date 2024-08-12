import { MapComplementaryInformationsDataMessage } from "../../../../../../com/ankamagames/dofus/network/messages/game/context/roleplay/MapComplementaryInformationsDataMessage";
import { NetworkMessageWrapper } from "../../../../../../network/packet/NetworkMessageWrapper";
import { AbstractNetworkExtract } from "../../../../AbstractNetworkExtract";

export class MapComplementaryInformationsDataMessageExtract extends AbstractNetworkExtract<MapComplementaryInformationsDataMessage> {

    constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, MapComplementaryInformationsDataMessage.prototype);
    }

    public process(): void {
        console.log("MapCompleteInformationsDataExtractor: " + this._message);
    }

}