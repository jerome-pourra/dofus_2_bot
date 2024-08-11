import { GameInstance } from "../GameInstance";
import { Datacenter } from "./datacenter/Datacenter";

export class Robot {

    private _gameInstance: GameInstance;
    public datacenter: Datacenter;

    public constructor(gameInstance: GameInstance) {
        this._gameInstance = gameInstance;
        this.datacenter = new Datacenter();
    }

}