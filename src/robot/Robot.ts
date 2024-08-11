import { Commands } from "./commands/Commands";
import { Datacenter } from "./datacenter/Datacenter";

export class Robot {

    private static _instance: Robot = null;

    public datacenter: Datacenter;
    public commands: Commands;

    public static get(): Robot {
        if (Robot._instance === null) {
            Robot._instance = new Robot();
        }
        return Robot._instance;
    }

    private constructor() {
        this.datacenter = new Datacenter();
        this.commands = new Commands();
    }

}