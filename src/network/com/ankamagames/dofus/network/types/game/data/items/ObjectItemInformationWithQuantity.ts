import { ObjectEffect } from "./effects/ObjectEffect";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { ObjectItemMinimalInformation } from "./ObjectItemMinimalInformation";

export class ObjectItemInformationWithQuantity extends ObjectItemMinimalInformation implements INetworkType
{

	public static readonly protocolId: number = 8098;

	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectItemInformationWithQuantity.protocolId;
    }

    public initObjectItemInformationWithQuantity(objectGID: number = 0, effects: Array<ObjectEffect> = null, quantity: number = 0): ObjectItemInformationWithQuantity
    {
        super.initObjectItemMinimalInformation(objectGID,effects);
        this.quantity = quantity;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectItemInformationWithQuantity(output);
    }

    public serializeAs_ObjectItemInformationWithQuantity(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectItemMinimalInformation(output);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarInt(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemInformationWithQuantity(input);
    }

    private deserializeAs_ObjectItemInformationWithQuantity(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._quantityFunc(input);
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemInformationWithQuantity.quantity.");
        }
    }

}