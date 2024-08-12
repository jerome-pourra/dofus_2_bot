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

}