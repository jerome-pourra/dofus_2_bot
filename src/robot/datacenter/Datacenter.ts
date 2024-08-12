import { Map } from "./map/Map";
import { Me } from "./player/Me";

export class Datacenter {

    public me: Me;
    public map: Map;
    public players: any;
    public entities: any;

    public constructor() {
        this.me = new Me();
        this.map = new Map();
        this.players = null;
        this.entities = null;
    }

}