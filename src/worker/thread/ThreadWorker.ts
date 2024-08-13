export class ThreadWorker {

    private _worker: Worker;
    private _onMessage: (message: any) => void;

    constructor() {
        this._worker = new Worker("worker.js");
        this._onMessage = () => {};
        this._worker.onmessage = (event) => {
            this._onMessage(event.data);
        };
    }

    public terminate(): void {
        this._worker.terminate();
    }

    public postMessage(message: any): void {
        this._worker.postMessage(message);
    }

    public set onMessage(callback: (message: any) => void) {
        this._onMessage = callback;
    }

}