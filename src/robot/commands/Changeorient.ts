import { RobotAccessor } from "../RobotAccessor";
import { ICommand } from "./ICommand";

export class Changeorient extends RobotAccessor implements ICommand {

    private _active: boolean;

    constructor() {
        super();
        this._active = false;
    }

    public isActive(): boolean {
        return this._active;
    }

    public active(): void {
        this._active = true;
        this.robot.actions.executeActions();
    }

    public deactive(): void {
        this._active = false;
        this.robot.actions.executeActions();
    }

    public toogle(): void {
        if (this._active) {
            this.deactive();
        } else {
            this.active();
        }
    }

}