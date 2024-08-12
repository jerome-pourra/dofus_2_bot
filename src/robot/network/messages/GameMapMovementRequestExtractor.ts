import { GameMapMovementRequestMessage } from "../../../com/ankamagames/dofus/network/messages/game/context/GameMapMovementRequestMessage";
import { NetworkMessageWrapper } from "../../../network/packet/NetworkMessageWrapper";
import { PlayerState } from "../../datacenter/PlayerStates";
import { Robot } from "../../Robot";
import { AbstractNetworkExtractor } from "../AbstractNetworkExtractor";

export class GameMapMovementRequestExtractor extends AbstractNetworkExtractor<GameMapMovementRequestMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, GameMapMovementRequestMessage.prototype);
    }

    public process(): void {
        Robot.get().datacenter.me.state.addState(PlayerState.move);
    }

}