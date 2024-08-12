export class PlayerAckManager {

    private _activeAck: Map<number, () => void>;

    constructor() {
        this._activeAck = new Map<number, () => void>();
    }

    public startAck(id: number, callback: () => void): void {
        // console.log("PlayerAckManager.startAck() -> id: " + id);
        this._activeAck.set(id, callback);
    }

    public endAck(id: number): void {
        // console.log("PlayerAckManager.endAck() -> id: " + id);
        if (this._activeAck.has(id)) {
            let callback = this._activeAck.get(id);
            if (callback) {
                // console.log("PlayerAckManager.endAck() -> callback: " + id);
                callback();
                this.removeAck(id);
            }
        }
    }

    private removeAck(id: number): void {
        // console.log("PlayerAckManager.removeAck() -> id: " + id);
        this._activeAck.delete(id);
    }

}