import { EntityLook } from "./../../../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../../jerakine/network/INetworkType";

export class PartyEntityBaseInformation
{

	public static readonly protocolId: number = 5790;

	public indexId: number = 0;
	public entityModelId: number = 0;
	public entityLook: EntityLook;

    public constructor()
    {
        this.entityLook = new EntityLook();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PartyEntityBaseInformation(input);
    }

    private deserializeAs_PartyEntityBaseInformation(input: ICustomDataInput)
    {
        this._indexIdFunc(input);
        this._entityModelIdFunc(input);
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(input);
    }

    private _indexIdFunc(input: ICustomDataInput)
    {
        this.indexId = input.readByte();
        if(this.indexId < 0)
        {
            throw new Error("Forbidden value (" + this.indexId + ") on element of PartyEntityBaseInformation.indexId.");
        }
    }

    private _entityModelIdFunc(input: ICustomDataInput)
    {
        this.entityModelId = input.readByte();
        if(this.entityModelId < 0)
        {
            throw new Error("Forbidden value (" + this.entityModelId + ") on element of PartyEntityBaseInformation.entityModelId.");
        }
    }

}