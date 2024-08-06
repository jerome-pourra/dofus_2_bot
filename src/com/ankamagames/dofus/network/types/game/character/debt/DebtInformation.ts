import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class DebtInformation implements INetworkType
{

	public static readonly protocolId: number = 8943;

	public id: number = 0;
	public timestamp: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return DebtInformation.protocolId;
    }

    public initDebtInformation(id: number = 0, timestamp: number = 0): DebtInformation
    {
        this.id = id;
        this.timestamp = timestamp;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_DebtInformation(output);
    }

    public serializeAs_DebtInformation(output: ICustomDataOutput)
    {
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
        if(this.timestamp < 0 || this.timestamp > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.timestamp + ") on element timestamp.");
        }
        output.writeDouble(this.timestamp);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DebtInformation(input);
    }

    private deserializeAs_DebtInformation(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._timestampFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of DebtInformation.id.");
        }
    }

    private _timestampFunc(input: ICustomDataInput)
    {
        this.timestamp = input.readDouble();
        if(this.timestamp < 0 || this.timestamp > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.timestamp + ") on element of DebtInformation.timestamp.");
        }
    }

}