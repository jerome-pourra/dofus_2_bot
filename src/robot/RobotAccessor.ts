import { Robot } from "./Robot";

export class RobotAccessor {

    protected callActions() {
        Robot.get().actions.executeActions();
    }

}