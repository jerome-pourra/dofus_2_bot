import { Robot } from "../../Robot";
import { PlayerState } from "./PlayerStates";

export class PlayerStatesManager {

    private _activeStates: Set<PlayerState>;

    constructor() {
        this._activeStates = new Set<PlayerState>();
        this._activeStates.add(PlayerState.IDLE);
    }

    public addState(state: PlayerState): void {
        // console.log("PlayerStatesManager.addState() -> state: " + state);
        this._activeStates.add(state);
        this.triggerIdle();
        Robot.get().actions.executeActions();
    }

    public removeState(state: PlayerState): void {
        // console.log("PlayerStatesManager.removeState() -> state: " + state);
        this._activeStates.delete(state);
        this.triggerIdle();
        Robot.get().actions.executeActions();
    }

    public hasState(state: PlayerState): boolean {
        return this._activeStates.has(state);
    }

    public clearStates(): void {
        // console.log("PlayerStatesManager.clearStates()");
        this._activeStates.clear();
        this.triggerIdle();
        Robot.get().actions.executeActions();
    }

    public isIdle(): boolean {
        return this._activeStates.has(PlayerState.IDLE);
    }

    private triggerIdle() {
        if (this._activeStates.size === 0) {
            // console.log("PlayerStatesManager.triggerIdle() -> state: " + PlayerState.IDLE);
            this._activeStates.add(PlayerState.IDLE);
        } else {
            if (this._activeStates.has(PlayerState.IDLE)) {
                this._activeStates.delete(PlayerState.IDLE);
            }
        }
    }

}