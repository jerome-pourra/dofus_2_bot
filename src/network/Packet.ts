import { Logger } from "../tools/Logger";
import { DataWrapper } from "./DataWrapper";
import { MessageReceiver } from "./com/ankamagames/dofus/network/MessageReceiver";
import { CustomDataWrapper } from "./com/ankamagames/jerakine/network/CustomDataWrapper";

export class Packet extends DataWrapper {

    private id: number;
    private seq: number;
    private sos: number;
    private size: number;

    constructor(packet: Buffer) {
        super(packet);
    }

    public build(options: {from: string}) {
        
        let infos = this.readUnsignedShort();
        this.id = infos >> 2;
        this.sos = infos & 3;

        if (options.from == "client") {
            this.seq = this.readInt();
        }

        switch (this.sos) {
            case 0:
                this.size = 0;
                break;
            case 1:
                this.size = this.readUnsignedByte();
                break;
            case 2:
                this.size = this.readUnsignedShort();
                break;
            case 3:
                this.size = this.readUnsignedInt();
                break
        }

        this.finalPacket(this.size);

        // new CustomDataWrapper(this.packet);
        
        if (options.from == "client") {
            Logger.Log("[S " + Logger.Coloring("<<<", Logger.C.B.Green) + " C] -> id:" + this.id + " name:" + MessageReceiver.getType(this.id) + " sos:" + this.sos + " seq:" + this.seq + " size:" + this.size + " data:" + this.packet.toString("hex"))
        } else {
            Logger.Log("[S " + Logger.Coloring(">>>", Logger.C.B.Red) + " C] -> id:" + this.id + " name:" + MessageReceiver.getType(this.id) + " sos:" + this.sos + " size:" + this.size + " data:" + this.packet.toString("hex"));
        }

        try {
            let dataWrapper = new CustomDataWrapper(this.packet);
            let result = MessageReceiver.parse(dataWrapper, this.id, this.size);
            // console.log(JSON.stringify(result, null, 4));
        } catch (e) {
            Logger.Error(e);
        }

        // SAY HELLO

        return this.finalSize(this.size);

    }
 
}