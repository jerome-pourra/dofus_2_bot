export class Me {

    public id: number;
    public name: string;

    private _initialized: boolean;

    public constructor() {
        this.id = null;
        this.name = null;
    }

    public isInitialized(): boolean {
        return this._initialized;
    }

    public set(id: number, name: string): void {
        this.id = id;
        this.name = name;
        this._initialized = true;
    }

    public reset(): void {
        this.id = null;
        this.name = null;
        this._initialized = false;
    }

}