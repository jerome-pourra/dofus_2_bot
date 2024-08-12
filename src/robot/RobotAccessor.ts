import { Robot } from "./Robot";

export class RobotAccessor {

    public robot: Robot;

    constructor() {
        this.robot = Robot.get();
    }

}