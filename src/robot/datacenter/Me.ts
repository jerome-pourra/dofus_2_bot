import { PlayerStateManager } from "./PlayerStatesManager";

export class Me {

    public id: number;
    public name: string;
    public orientation: number;
    public state: PlayerStateManager;

    public constructor() {
        this.id = 0;
        this.name = "";
        this.orientation = 0;
        this.state = new PlayerStateManager();
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setOrientation(orientation: number): void {
        this.orientation = orientation;
    }

    public getOrientation(): number {
        return this.orientation;
    }

}