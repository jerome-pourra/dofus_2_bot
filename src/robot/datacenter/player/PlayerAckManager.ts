export class PlayerAckManager {

    private _activeAck: Map<number, () => void>;

    constructor() {
        this._activeAck = new Map<number, () => void>();
    }

    public startAck(id: number, callback: () => void): void {
        this._activeAck.set(id, callback);
    }

    public endAck(id: number): void {
        if (this._activeAck.has(id)) {
            let callback = this._activeAck.get(id);
            if (callback) {
                callback();
                this.removeAck(id);
            }
        }
    }

    private removeAck(id: number): void {
        this._activeAck.delete(id);
    }

}