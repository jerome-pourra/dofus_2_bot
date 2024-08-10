import { ICustomDataInput } from "./ICustomDataInput";
import { ICustomDataOutput } from "./ICustomDataOutput";

export interface INetworkMessage {

    getMessageId(): number;
    
    getInstanceId(): number;
    increaseInstanceId(): void;
    decreaseInstanceId(): void;
    
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    
}