import { GameMapMovementConfirmMessage } from "../../../../../com/ankamagames/dofus/network/messages/game/context/GameMapMovementConfirmMessage";
import { NetworkMessageWrapper } from "../../../../../network/packet/NetworkMessageWrapper";
import { PlayerState } from "../../../../datacenter/player/PlayerStates";
import { Robot } from "../../../../Robot";
import { AbstractNetworkExtract } from "../../../AbstractNetworkExtract";

export class GameMapMovementConfirmExtract extends AbstractNetworkExtract<GameMapMovementConfirmMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, GameMapMovementConfirmMessage.prototype);
    }

    public process(): void {
        Robot.get().datacenter.me.ackManager.startAck(
            this._message.getMessageId(),
            () => Robot.get().datacenter.me.statesManager.removeState(PlayerState.move)
        );
    }

}