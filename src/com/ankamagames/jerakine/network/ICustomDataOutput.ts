import { IDataOutput } from "../../../../network/utils/IDataOutput";

export interface ICustomDataOutput extends IDataOutput {

	writeVarInt(param1: number): void;
	writeVarShort(param1: number): void;
	writeVarLong(param1: number): void;
    
}