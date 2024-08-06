import { IDataInput } from "../../../../network/utils/IDataInput";

export interface ICustomDataInput extends IDataInput {

	readVarInt(): number;
	readVarUhInt(): number;
	readVarShort(): number;
	readVarUhShort(): number;
	readVarLong(): number;
	readVarUhLong(): number;
    
}