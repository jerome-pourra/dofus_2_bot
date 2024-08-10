import { Datacenter } from "./datacenter/Datacenter";

export class Robot {

    public datacenter: Datacenter;

    public constructor() {
        this.datacenter = new Datacenter();
    }

}