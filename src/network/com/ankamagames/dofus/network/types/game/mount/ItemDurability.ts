import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class ItemDurability implements INetworkType
{

	public static readonly protocolId: number = 5929;

	public durability: number = 0;
	public durabilityMax: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ItemDurability.protocolId;
    }

    public initItemDurability(durability: number = 0, durabilityMax: number = 0): ItemDurability
    {
        this.durability = durability;
        this.durabilityMax = durabilityMax;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ItemDurability(output);
    }

    public serializeAs_ItemDurability(output: ICustomDataOutput)
    {
        output.writeShort(this.durability);
        output.writeShort(this.durabilityMax);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ItemDurability(input);
    }

    private deserializeAs_ItemDurability(input: ICustomDataInput)
    {
        this._durabilityFunc(input);
        this._durabilityMaxFunc(input);
    }

    private _durabilityFunc(input: ICustomDataInput)
    {
        this.durability = input.readShort();
    }

    private _durabilityMaxFunc(input: ICustomDataInput)
    {
        this.durabilityMax = input.readShort();
    }

}