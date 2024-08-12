import { PlayerStatesManager } from "./PlayerStatesManager";

export class Me {

    public id: number;
    public name: string;
    public orientation: number;
    public statesManager: PlayerStatesManager;

    public constructor() {
        this.id = 0;
        this.name = "";
        this.orientation = 0;
        this.statesManager = new PlayerStatesManager();
    }

}