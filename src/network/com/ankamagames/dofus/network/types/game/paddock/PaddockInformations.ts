import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class PaddockInformations
{

	public static readonly protocolId: number = 208;

	public maxOutdoorMount: number = 0;
	public maxItems: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockInformations(input);
    }

    private deserializeAs_PaddockInformations(input: ICustomDataInput)
    {
        this._maxOutdoorMountFunc(input);
        this._maxItemsFunc(input);
    }

    private _maxOutdoorMountFunc(input: ICustomDataInput)
    {
        this.maxOutdoorMount = input.readVarUhShort();
        if(this.maxOutdoorMount < 0)
        {
            throw new Error("Forbidden value (" + this.maxOutdoorMount + ") on element of PaddockInformations.maxOutdoorMount.");
        }
    }

    private _maxItemsFunc(input: ICustomDataInput)
    {
        this.maxItems = input.readVarUhShort();
        if(this.maxItems < 0)
        {
            throw new Error("Forbidden value (" + this.maxItems + ") on element of PaddockInformations.maxItems.");
        }
    }

}