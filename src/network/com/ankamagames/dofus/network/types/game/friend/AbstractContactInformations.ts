import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AbstractContactInformations
{

	public static readonly protocolId: number = 8841;

	public accountId: number = 0;
	public accountTag: AccountTagInformation;

    public constructor()
    {
        this.accountTag = new AccountTagInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractContactInformations(input);
    }

    private deserializeAs_AbstractContactInformations(input: ICustomDataInput)
    {
        this._accountIdFunc(input);
        this.accountTag = new AccountTagInformation();
        this.accountTag.deserialize(input);
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of AbstractContactInformations.accountId.");
        }
    }

}