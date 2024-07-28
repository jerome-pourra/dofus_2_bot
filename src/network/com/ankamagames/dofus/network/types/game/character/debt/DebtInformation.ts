import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class DebtInformation
{

	public static readonly protocolId: number = 8943;

	public id: number = 0;
	public timestamp: number = 0;

    public constructor()
    {

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