import { IAction } from "./IAction";

export class ActionManager {

    private _actions: Map<string, IAction>;

    constructor() {
        this._actions = new Map<string, IAction>();
    }

    public registerAction(name: string, action: IAction): void {
        this._actions.set(name, action);
        console.log("Action registered: " + name);
    }

    public unregisterAction(name: string): void {
        if (!this._actions.has(name)) {
            throw new Error("Action not found: " + name);
        }
        this._actions.delete(name);
        console.log("Action unregistered: " + name);
        
    }

    public executeActions(): void {
        this._actions.forEach(action => action.execute());
    }

}