import { Me } from "./Me";

export class Datacenter {

    public me: Me;
    public map: any;
    public players: any;
    public entities: any;

    public constructor() {
        this.me = new Me();
        this.map = null;
        this.players = null;
        this.entities = null;
    }

}