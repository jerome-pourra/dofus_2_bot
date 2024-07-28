import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class HouseInformations
{

	public static readonly protocolId: number = 2374;

	public houseId: number = 0;
	public modelId: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseInformations(input);
    }

    private deserializeAs_HouseInformations(input: ICustomDataInput)
    {
        this._houseIdFunc(input);
        this._modelIdFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HouseInformations.houseId.");
        }
    }

    private _modelIdFunc(input: ICustomDataInput)
    {
        this.modelId = input.readVarUhShort();
        if(this.modelId < 0)
        {
            throw new Error("Forbidden value (" + this.modelId + ") on element of HouseInformations.modelId.");
        }
    }

}