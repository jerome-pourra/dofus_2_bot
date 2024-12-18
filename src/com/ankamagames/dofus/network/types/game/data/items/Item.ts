import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class Item implements INetworkType
{

	public static readonly protocolId: number = 8235;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {

    }

    public getTypeId()
    {
        return Item.protocolId;
    }

    public isEndpointClient()
    {
        return Item.endpointClient;
    }

    public isEndpointServer()
    {
        return Item.endpointServer;
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