import { AbstractCommand } from "./AbstractCommand";
import { ICommand } from "./ICommand";

export class Changeorient extends AbstractCommand implements ICommand {

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
        this.callActions();
    }

    public deactive(): void {
        this._active = false;
        this.callActions();
    }

    public toogle(): void {
        if (this._active) {
            this.deactive();
        } else {
            this.active();
        }
    }

}