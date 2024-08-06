import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AdditionalTaxCollectorInformation implements INetworkType
{

	public static readonly protocolId: number = 1456;

	public collectorCallerId: number = 0;
	public collectorCallerName: string = "";
	public date: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AdditionalTaxCollectorInformation.protocolId;
    }

    public initAdditionalTaxCollectorInformation(collectorCallerId: number = 0, collectorCallerName: string = "", date: number = 0): AdditionalTaxCollectorInformation
    {
        this.collectorCallerId = collectorCallerId;
        this.collectorCallerName = collectorCallerName;
        this.date = date;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AdditionalTaxCollectorInformation(output);
    }

    public serializeAs_AdditionalTaxCollectorInformation(output: ICustomDataOutput)
    {
        if(this.collectorCallerId < 0 || this.collectorCallerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.collectorCallerId + ") on element collectorCallerId.");
        }
        output.writeVarLong(this.collectorCallerId);
        output.writeUTF(this.collectorCallerName);
        if(this.date < 0)
        {
            throw new Error("Forbidden value (" + this.date + ") on element date.");
        }
        output.writeInt(this.date);
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