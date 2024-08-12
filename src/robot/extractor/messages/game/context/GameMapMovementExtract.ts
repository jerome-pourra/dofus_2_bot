import { GameMapMovementMessage } from "../../../../../com/ankamagames/dofus/network/messages/game/context/GameMapMovementMessage";
import { NetworkMessageWrapper } from "../../../../../network/packet/NetworkMessageWrapper";
import { PlayerState } from "../../../../datacenter/player/PlayerStates";
import { Robot } from "../../../../Robot";
import { AbstractNetworkExtract } from "../../../AbstractNetworkExtract";

export class GameMapMovementExtract extends AbstractNetworkExtract<GameMapMovementMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, GameMapMovementMessage.prototype);
    }

    public process(): void {
        Robot.get().datacenter.me.ackManager.startAck(
            this._message.getMessageId(),
            () => Robot.get().datacenter.me.statesManager.removeState(PlayerState.move)
        );
    }

}