import { GameMapChangeOrientationMessage } from "../../../../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationMessage";
import { NetworkMessageWrapper } from "../../../../../network/packet/NetworkMessageWrapper";
import { PlayerState } from "../../../../datacenter/player/PlayerStates";
import { Robot } from "../../../../Robot";
import { AbstractNetworkExtract } from "../../../AbstractNetworkExtract";

export class GameMapChangeOrientationExtract extends AbstractNetworkExtract<GameMapChangeOrientationMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, GameMapChangeOrientationMessage.prototype);
    }

    public process() {
        if (this._message.orientation.id === Robot.get().datacenter.me.id) {
            Robot.get().datacenter.me.orientation = this._message.orientation.direction;
            Robot.get().datacenter.me.statesManager.removeState(PlayerState.changeorient);
        }
    }

}