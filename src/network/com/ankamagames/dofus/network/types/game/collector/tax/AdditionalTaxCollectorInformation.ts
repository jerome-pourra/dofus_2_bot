import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AdditionalTaxCollectorInformation
{

	public static readonly protocolId: number = 1456;

	public collectorCallerId: number = 0;
	public collectorCallerName: string = "";
	public date: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AdditionalTaxCollectorInformation(input);
    }

    private deserializeAs_AdditionalTaxCollectorInformation(input: ICustomDataInput)
    {
        this._collectorCallerIdFunc(input);
        this._collectorCallerNameFunc(input);
        this._dateFunc(input);
    }

    private _collectorCallerIdFunc(input: ICustomDataInput)
    {
        this.collectorCallerId = input.readVarUhLong();
        if(this.collectorCallerId < 0 || this.collectorCallerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.collectorCallerId + ") on element of AdditionalTaxCollectorInformation.collectorCallerId.");
        }
    }

    private _collectorCallerNameFunc(input: ICustomDataInput)
    {
        this.collectorCallerName = input.readUTF();
    }

    private _dateFunc(input: ICustomDataInput)
    {
        this.date = input.readInt();
        if(this.date < 0)
        {
            throw new Error("Forbidden value (" + this.date + ") on element of AdditionalTaxCollectorInformation.date.");
        }
    }

}