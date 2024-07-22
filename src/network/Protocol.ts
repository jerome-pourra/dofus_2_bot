import { Packet } from "./Packet";

export class Protocol {

    private static buffClient: Buffer = Buffer.from([]);
    private static buffServer: Buffer = Buffer.from([]);

    public static recvClient(data: Buffer) {

        let buff = Buffer.concat([Protocol.buffClient, data]);

        while (buff.byteLength > 0) {
            let packet = new Packet(buff);
            let offset = packet.build({from: "client"});
            buff = buff.subarray(offset);
            // console.log(buff.toString("hex"));
        }

        Protocol.buffClient = buff;

    }

    public static recvServer(data: Buffer) {

        let buff = Buffer.concat([Protocol.buffServer, data]);

        while (buff.byteLength > 0) {
            let packet = new Packet(buff);
            let offset = packet.build({from: "server"});
            buff = buff.subarray(offset);
            // console.log(buff.toString("hex"));
        }

        Protocol.buffServer = buff;

    }

}