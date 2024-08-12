import { Robot } from '../Robot';
import { PlayerState } from './PlayerStates';

export class PlayerStateManager {

    private _activeStates: Set<PlayerState>;

    constructor() {
        this._activeStates = new Set<PlayerState>();
        this._activeStates.add(PlayerState.idle);
    }

    public addState(state: PlayerState): void {
        // console.log("Add state: " + state);
        this._activeStates.add(state);
        this.triggerIdle();
        Robot.get().actions.executeActions();
    }

    public removeState(state: PlayerState): void {
        // console.log("Remove state: " + state);
        this._activeStates.delete(state);
        this.triggerIdle();
        Robot.get().actions.executeActions();
    }

    public hasState(state: PlayerState): boolean {
        return this._activeStates.has(state);
    }

    public clearStates(): void {
        this._activeStates.clear();
        this.triggerIdle();
        Robot.get().actions.executeActions();
    }

    public isIdle(): boolean {
        return this._activeStates.has(PlayerState.idle);
    }

    private triggerIdle() {
        if (this._activeStates.size === 0) {
            // console.log("Add state: " + PlayerState.idle);
            this._activeStates.add(PlayerState.idle);
        } else {
            if (this._activeStates.has(PlayerState.idle)) {
                this._activeStates.delete(PlayerState.idle);
            }
        }
    }

}