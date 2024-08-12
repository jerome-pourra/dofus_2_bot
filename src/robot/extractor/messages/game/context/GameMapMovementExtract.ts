import { GameMapMovementMessage } from "../../../../../com/ankamagames/dofus/network/messages/game/context/GameMapMovementMessage";
import { NetworkMessageWrapper } from "../../../../../network/packet/NetworkMessageWrapper";
import { AbstractNetworkExtract } from "../../../AbstractNetworkExtract";

export class GameMapMovementExtract extends AbstractNetworkExtract<GameMapMovementMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, GameMapMovementMessage.prototype);
    }

    public process(): void {
        // TODO
    }

}