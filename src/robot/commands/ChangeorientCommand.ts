import { ChangeOrientAction } from "../actions/ChangeOrientActions";
import { Robot } from "../Robot";
import { ICommand } from "./ICommand";

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
        Robot.get().actions.registerAction(this.name, new ChangeOrientAction());
        Robot.get().actions.executeActions();
        Robot.get().commands.printChatCommand(this.name, this._active);
    }

    public deactive(): void {
        this._active = false;
        Robot.get().actions.unregisterAction(this.name);
        Robot.get().actions.executeActions();
        Robot.get().commands.printChatCommand(this.name, this._active);
    }

    public toogle(): void {
        if (this._active) {
            this.deactive();
        } else {
            this.active();
        }
    }

}