import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class Item implements INetworkType
{

	public static readonly protocolId: number = 8235;

    public constructor()
    {

    }

    public getTypeId()
    {
        return Item.protocolId;
    }

    public initItem(): Item
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_Item(output);
    }

    public serializeAs_Item(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_Item(input);
    }

    private deserializeAs_Item(input: ICustomDataInput)
    {

    }

}