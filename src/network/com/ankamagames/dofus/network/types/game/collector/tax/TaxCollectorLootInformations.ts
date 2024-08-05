import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { TaxCollectorComplementaryInformations } from "./TaxCollectorComplementaryInformations";

export class TaxCollectorLootInformations extends TaxCollectorComplementaryInformations
{

	public static readonly protocolId: number = 4183;

	public pods: number = 0;
	public itemsValue: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TaxCollectorLootInformations(input);
    }

    private deserializeAs_TaxCollectorLootInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._podsFunc(input);
        this._itemsValueFunc(input);
    }

    private _podsFunc(input: ICustomDataInput)
    {
        this.pods = input.readVarUhInt();
        if(this.pods < 0)
        {
            throw new Error("Forbidden value (" + this.pods + ") on element of TaxCollectorLootInformations.pods.");
        }
    }

    private _itemsValueFunc(input: ICustomDataInput)
    {
        this.itemsValue = input.readVarUhLong();
        if(this.itemsValue < 0 || this.itemsValue > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.itemsValue + ") on element of TaxCollectorLootInformations.itemsValue.");
        }
    }

}