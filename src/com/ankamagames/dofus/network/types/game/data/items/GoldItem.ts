import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { Item } from "./Item";

export class GoldItem extends Item implements INetworkType
{

	public static readonly protocolId: number = 8076;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public sum: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GoldItem.protocolId;
    }

    public isEndpointClient()
    {
        return GoldItem.endpointClient;
    }

    public isEndpointServer()
    {
        return GoldItem.endpointServer;
    }

    public initGoldItem(sum: number = 0): GoldItem
    {
        this.sum = sum;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GoldItem(output);
    }

    public serializeAs_GoldItem(output: ICustomDataOutput)
    {
        super.serializeAs_Item(output);
        if(this.sum < 0 || this.sum > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sum + ") on element sum.");
        }
        output.writeVarLong(this.sum);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GoldItem(input);
    }

    private deserializeAs_GoldItem(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._sumFunc(input);
    }

    private _sumFunc(input: ICustomDataInput)
    {
        this.sum = input.readVarUhLong();
        if(this.sum < 0 || this.sum > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sum + ") on element of GoldItem.sum.");
        }
    }

}