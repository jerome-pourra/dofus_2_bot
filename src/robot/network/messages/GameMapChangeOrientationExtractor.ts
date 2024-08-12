import { GameMapChangeOrientationMessage } from "../../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationMessage";
import { NetworkMessageWrapper } from "../../../network/packet/NetworkMessageWrapper";
import { AbstractNetworkExtractor } from "../AbstractNetworkExtractor";

export class GameMapChangeOrientationExtractor extends AbstractNetworkExtractor<GameMapChangeOrientationMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, GameMapChangeOrientationMessage.prototype);
    }

    public process() {
        // TODO
    }

}