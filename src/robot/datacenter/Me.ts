import { PlayerStateManager } from "./PlayerStatesManager";

export class Me {

    public id: number;
    public name: string;
    public state: PlayerStateManager;

    public constructor() {
        this.id = null;
        this.name = null;
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

}