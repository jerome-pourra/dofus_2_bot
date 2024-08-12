import { GameMapChangeOrientationRequestMessage } from "../../../com/ankamagames/dofus/network/messages/game/context/GameMapChangeOrientationRequestMessage";
import { CustomDataWrapper } from "../../../com/ankamagames/jerakine/network/CustomDataWrapper";
import { AnkSocketEndpoint } from "../../../network/AnkSocket";
import { PlayerState } from "../../datacenter/player/PlayerStates";
import { Robot } from "../../Robot";
import { IAction } from "../IAction";

export class ChangeOrientAction implements IAction {

    public execute() {

        if (Robot.get().datacenter.me.statesManager.isIdle()) {

            let orientation = Robot.get().datacenter.me.orientation + 1;
            orientation = orientation > 7 ? 0 : orientation;

            let output = new CustomDataWrapper();
            let networkMessage = new GameMapChangeOrientationRequestMessage();
            networkMessage.initGameMapChangeOrientationRequestMessage(orientation);
            networkMessage.pack(output);

            Robot.get().send(output.buffer, AnkSocketEndpoint.SERVER);
            Robot.get().datacenter.me.statesManager.addState(PlayerState.CHANGE_ORIENT);

        }

    }

}