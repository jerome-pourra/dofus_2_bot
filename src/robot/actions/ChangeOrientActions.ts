import { Robot } from "../Robot";
import { IAction } from "./IAction";

export class ChangeOrientActions implements IAction {

    public execute() {

        if (Robot.get().datacenter.me.state.isIdle()) {



            // Robot.get().datacenter.me.state.changeOrient();
        }
        
    }

}