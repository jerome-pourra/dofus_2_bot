import { GameMapMovementRequestMessage } from "../../../../../com/ankamagames/dofus/network/messages/game/context/GameMapMovementRequestMessage";
import { NetworkMessageWrapper } from "../../../../../network/packet/NetworkMessageWrapper";
import { PlayerState } from "../../../../datacenter/player/PlayerStates";
import { Robot } from "../../../../Robot";
import { AbstractNetworkExtract } from "../../../AbstractNetworkExtract";

export class GameMapMovementRequestExtract extends AbstractNetworkExtract<GameMapMovementRequestMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, GameMapMovementRequestMessage.prototype);
    }

    public process(): void {
        Robot.get().datacenter.me.statesManager.addState(PlayerState.MOVE);
    }

}