import { GameMapChangeOrientationRequestMessage } from "../../../../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationRequestMessage";
import { NetworkMessageWrapper } from "../../../../../network/packet/NetworkMessageWrapper";
import { PlayerState } from "../../../../datacenter/player/PlayerStates";
import { Robot } from "../../../../Robot";
import { AbstractNetworkExtract } from "../../../AbstractNetworkExtract";

export class GameMapChangeOrientationRequestExtract extends AbstractNetworkExtract<GameMapChangeOrientationRequestMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, GameMapChangeOrientationRequestMessage.prototype);
    }

    public process() {
        Robot.get().datacenter.me.state.addState(PlayerState.changeorient);
    }

}