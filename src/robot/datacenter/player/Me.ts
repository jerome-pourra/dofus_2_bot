import { PlayerAckManager } from "./PlayerAckManager";
import { PlayerStatesManager } from "./PlayerStatesManager";

export class Me {

    public id: number;
    public name: string;
    public orientation: number;
    public ackManager: PlayerAckManager;
    public statesManager: PlayerStatesManager;

    public constructor() {
        this.id = 0;
        this.name = "";
        this.orientation = 0;
        this.ackManager = new PlayerAckManager();
        this.statesManager = new PlayerStatesManager();
    }

}