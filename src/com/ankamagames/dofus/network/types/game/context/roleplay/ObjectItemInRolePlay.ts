import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class ObjectItemInRolePlay implements INetworkType
{

	public static readonly protocolId: number = 1282;

	public cellId: number = 0;
	public objectGID: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ObjectItemInRolePlay.protocolId;
    }

    public initObjectItemInRolePlay(cellId: number = 0, objectGID: number = 0): ObjectItemInRolePlay
    {
        this.cellId = cellId;
        this.objectGID = objectGID;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectItemInRolePlay(output);
    }

    public serializeAs_ObjectItemInRolePlay(output: ICustomDataOutput)
    {
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
        }
        output.writeVarShort(this.cellId);
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemInRolePlay(input);
    }

    private deserializeAs_ObjectItemInRolePlay(input: ICustomDataInput)
    {
        this._cellIdFunc(input);
        this._objectGIDFunc(input);
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readVarUhShort();
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of ObjectItemInRolePlay.cellId.");
        }
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemInRolePlay.objectGID.");
        }
    }

}