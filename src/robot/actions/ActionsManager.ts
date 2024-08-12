import { IAction } from "./IAction";

export class ActionManager {

    private _actions: Array<IAction>;

    constructor() {
        this._actions = new Array<IAction>();
    }

    public registerAction(action: IAction): void {
        this._actions.push(action);
    }

    public executeActions(): void {
        this._actions.forEach(action => action.execute());
    }

}