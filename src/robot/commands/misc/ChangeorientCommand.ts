import { ChangeOrientAction } from "../../actions/misc/ChangeOrientActions";
import { Robot } from "../../Robot";
import { ICommand } from "../ICommand";

export class ChangeorientCommand implements ICommand {

    private _active: boolean;
    public name: string = "changeorient";

    constructor() {
        this._active = false;
    }

    public isActive(): boolean {
        return this._active;
    }

    public active(): void {
        this._active = true;
        Robot.get().commands.printChatCommand(this.name, this._active);
        Robot.get().actions.registerAction(this.name, new ChangeOrientAction());
        Robot.get().actions.executeActions();
    }

    public deactive(): void {
        this._active = false;
        Robot.get().commands.printChatCommand(this.name, this._active);
        Robot.get().actions.unregisterAction(this.name);
        Robot.get().actions.executeActions();
    }

    public toogle(): void {
        if (this._active) {
            this.deactive();
        } else {
            this.active();
        }
    }

}