import { GameMapChangeOrientationMessage } from "../../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationMessage";
import { NetworkMessageWrapper } from "../../../network/packet/NetworkMessageWrapper";
import { PlayerState } from "../../datacenter/PlayerStates";
import { Robot } from "../../Robot";
import { AbstractNetworkExtractor } from "../AbstractNetworkExtractor";

export class GameMapChangeOrientationExtractor extends AbstractNetworkExtractor<GameMapChangeOrientationMessage> {

    public constructor(wrapper: NetworkMessageWrapper) {
        super(wrapper, GameMapChangeOrientationMessage.prototype);
    }

    public process() {
        if (this._message.orientation.id === Robot.get().datacenter.me.id) {
            Robot.get().datacenter.me.orientation = this._message.orientation.direction;
            Robot.get().datacenter.me.state.removeState(PlayerState.changeorient);
        }
    }

}