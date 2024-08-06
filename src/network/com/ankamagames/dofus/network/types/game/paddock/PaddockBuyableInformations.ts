import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class PaddockBuyableInformations implements INetworkType
{

	public static readonly protocolId: number = 5612;

	public price: number = 0;
	public locked: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return PaddockBuyableInformations.protocolId;
    }

    public initPaddockBuyableInformations(price: number = 0, locked: boolean = false): PaddockBuyableInformations
    {
        this.price = price;
        this.locked = locked;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PaddockBuyableInformations(output);
    }

    public serializeAs_PaddockBuyableInformations(output: ICustomDataOutput)
    {
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element price.");
        }
        output.writeVarLong(this.price);
        output.writeBoolean(this.locked);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockBuyableInformations(input);
    }

    private deserializeAs_PaddockBuyableInformations(input: ICustomDataInput)
    {
        this._priceFunc(input);
        this._lockedFunc(input);
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhLong();
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of PaddockBuyableInformations.price.");
        }
    }

    private _lockedFunc(input: ICustomDataInput)
    {
        this.locked = input.readBoolean();
    }

}