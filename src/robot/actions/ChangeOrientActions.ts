import { PlayerState } from "../datacenter/PlayerStates";
import { Robot } from "../Robot";
import { IAction } from "./IAction";

export class ChangeOrientAction implements IAction {

    public execute() {

        if (Robot.get().datacenter.me.state.isIdle()) {
            Robot.get().datacenter.me.state.addState(PlayerState.changeorient);
        }
        
    }

}