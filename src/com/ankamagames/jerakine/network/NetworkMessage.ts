import { AnkSocketEndpoint } from "../../../../network/AnkSocket";
import { CustomDataWrapper } from "./CustomDataWrapper";
import { ICustomDataInput } from "./ICustomDataInput";
import { ICustomDataOutput } from "./ICustomDataOutput";
import { INetworkMessage } from "./INetworkMessage";

export abstract class NetworkMessage implements INetworkMessage {

    private static GLOBAL_INSTANCE_ID: number = 0;

    public static BIT_RIGHT_SHIFT_LEN_PACKET_ID: number = 2;
    public static BIT_MASK: number = 3;
    public static HASH_FUNCTION: Function;

    private _instance_id: number;

    public static getGlobalInstanceId(): number {
        return NetworkMessage.GLOBAL_INSTANCE_ID;
    }

    public static setGlobalInstanceId(instanceId: number): void {
        NetworkMessage.GLOBAL_INSTANCE_ID = instanceId;
    }

    public constructor() {
        this._instance_id = ++NetworkMessage.GLOBAL_INSTANCE_ID;
        // console.log("NetworkMessage.constructor() -> id: " + this._instance_id);
    }

    public abstract pack(param1: ICustomDataOutput): void;
    public abstract unpack(param1: ICustomDataInput, param2: number): void;

    public getMessageId(): number {
        throw new Error("Abstract method call");
    }

    public getInstanceId(): number {
        return this._instance_id;
    }

    // NEED STATIC ?
    public increaseInstanceId(): void {
        this._instance_id = ++NetworkMessage.GLOBAL_INSTANCE_ID;
    }

    // NEED STATIC ?
    public decreaseInstanceId(): void {
        this._instance_id = --NetworkMessage.GLOBAL_INSTANCE_ID;
    }

    public writePacketClient(output: ICustomDataOutput, id: number, data: CustomDataWrapper): void {
        this.writePacket(output, id, data, AnkSocketEndpoint.CLIENT);
    }

    public writePacketServer(output: ICustomDataOutput, id: number, data: CustomDataWrapper): void {
        this.writePacket(output, id, data, AnkSocketEndpoint.SERVER);
    }

    public writePacket(output: ICustomDataOutput, id: number, data: CustomDataWrapper, endpoint: AnkSocketEndpoint): void {

        let high: number = 0;
        let low: number = 0;
        let typeLen: number = NetworkMessage.computeTypeLen(data.length);

        output.writeShort(NetworkMessage.subComputeStaticHeader(id, typeLen));

        if (endpoint === AnkSocketEndpoint.SERVER) {
            output.writeUnsignedInt(this._instance_id);
        }

        switch (typeLen) {
            case 0:
                return;
            case 1:
                output.writeByte(data.length);
                break;
            case 2:
                output.writeShort(data.length);
                break;
            case 3:
                high = data.length >> 16 & 255;
                low = data.length & 65535;
                output.writeByte(high);
                output.writeShort(low);
        }

        output.writeBytes(data, 0, data.length);

    }

    private static computeTypeLen(param1: number): number {

        if (param1 > 65535) {
            return 3;
        }
        if (param1 > 255) {
            return 2;
        }
        if (param1 > 0) {
            return 1;
        }
        return 0;

    }

    private static subComputeStaticHeader(msgId: number, typeLen: number): number {
        return msgId << NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID | typeLen;
    }

}