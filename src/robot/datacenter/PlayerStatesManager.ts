import { PlayerState } from './PlayerStates';

export class PlayerStateManager {

    private _activeStates: Set<PlayerState>;

    constructor() {
        this._activeStates = new Set<PlayerState>();
    }

    public addState(state: PlayerState): void {
        this._activeStates.add(state);
        this.triggerIdle();
    }

    public removeState(state: PlayerState): void {
        if (!this._activeStates.has(state)) {
            throw new Error("State not found: " + state);
        }
        this._activeStates.delete(state);
        this.triggerIdle();
    }

    public hasState(state: PlayerState): boolean {
        return this._activeStates.has(state);
    }

    public clearStates(): void {
        this._activeStates.clear();
        this.triggerIdle();
    }

    public isIdle(): boolean {
        return this._activeStates.has(PlayerState.idle);
    }

    private triggerIdle() {
        if (this._activeStates.size === 0) {
            this._activeStates.add(PlayerState.idle);
        } else {
            if (this._activeStates.has(PlayerState.idle)) {
                this._activeStates.delete(PlayerState.idle);
            }
        }
    }

}