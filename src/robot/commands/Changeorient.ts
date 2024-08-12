import { ICommand } from "./ICommand";

export class Changeorient implements ICommand {

    private _active: boolean;

    constructor() {
        this._active = false;
    }

    public isActive(): boolean {
        return this._active;
    }

    public active(): void {
        console.log("Changeorient active");
        
        this._active = true;
        // confirm message in chat
    }

    public deactive(): void {
        console.log("Changeorient deactive");
        
        this._active = false;
        // confirm message in chat
    }

    public toogle(): void {
        if (this._active) {
            this.deactive();
        } else {
            this.active();
        }
    }

}