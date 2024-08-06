import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AbstractContactInformations implements INetworkType
{

	public static readonly protocolId: number = 8841;

	public accountId: number = 0;
	public accountTag: AccountTagInformation;

    public constructor()
    {
        this.accountTag = new AccountTagInformation();
    }

    public getTypeId()
    {
        return AbstractContactInformations.protocolId;
    }

    public initAbstractContactInformations(accountId: number = 0, accountTag: AccountTagInformation = null): AbstractContactInformations
    {
        this.accountId = accountId;
        this.accountTag = accountTag;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AbstractContactInformations(output);
    }

    public serializeAs_AbstractContactInformations(output: ICustomDataOutput)
    {
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
        this.accountTag.serializeAs_AccountTagInformation(output);
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