import { IDataInput } from "../../../../utils/IDataInput";

export interface ICustomDataOutput extends IDataInput {

	writeVarInt(param1: number): void;
	writeVarShort(param1: number): void;
	writeVarLong(param1: number): void;
    
}