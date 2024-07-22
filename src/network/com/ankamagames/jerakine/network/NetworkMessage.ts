import { ICustomDataInput } from "./ICustomDataInput";
import { ICustomDataOutput } from "./ICustomDataOutput";
import { INetworkMessage } from "./INetworkMessage";

export abstract class NetworkMessage implements INetworkMessage {

    private static GLOBAL_INSTANCE_ID: number = 0;
    
    public static BIT_RIGHT_SHIFT_LEN_PACKET_ID: number = 2;
    public static BIT_MASK: number = 3;

    private _instance_id: number;

    public constructor() {
        this._instance_id = NetworkMessage.GLOBAL_INSTANCE_ID++;
    }

	public pack(param1: ICustomDataOutput): void {
        throw new Error("Method not implemented.");
    };

	public unpack(param1: ICustomDataInput, param2: number): void {
        throw new Error("Method not implemented.");
    };

	get isInitialized(): boolean { return true; };
	get unpacked(): boolean { return true; };
	set unpacked(param1: boolean) { };
    
}