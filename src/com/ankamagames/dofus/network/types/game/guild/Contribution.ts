import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class Contribution implements INetworkType
{

	public static readonly protocolId: number = 7492;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public contributorId: number = 0;
	public contributorName: string = "";
	public amount: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return Contribution.protocolId;
    }

    public isEndpointClient()
    {
        return Contribution.endpointClient;
    }

    public isEndpointServer()
    {
        return Contribution.endpointServer;
    }

    public initContribution(contributorId: number = 0, contributorName: string = "", amount: number = 0): Contribution
    {
        this.contributorId = contributorId;
        this.contributorName = contributorName;
        this.amount = amount;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_Contribution(output);
    }

    public serializeAs_Contribution(output: ICustomDataOutput)
    {
        if(this.contributorId < 0 || this.contributorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.contributorId + ") on element contributorId.");
        }
        output.writeVarLong(this.contributorId);
        output.writeUTF(this.contributorName);
        if(this.amount < 0 || this.amount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element amount.");
        }
        output.writeVarLong(this.amount);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_Contribution(input);
    }

    private deserializeAs_Contribution(input: ICustomDataInput)
    {
        this._contributorIdFunc(input);
        this._contributorNameFunc(input);
        this._amountFunc(input);
    }

    private _contributorIdFunc(input: ICustomDataInput)
    {
        this.contributorId = input.readVarUhLong();
        if(this.contributorId < 0 || this.contributorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.contributorId + ") on element of Contribution.contributorId.");
        }
    }

    private _contributorNameFunc(input: ICustomDataInput)
    {
        this.contributorName = input.readUTF();
    }

    private _amountFunc(input: ICustomDataInput)
    {
        this.amount = input.readVarUhLong();
        if(this.amount < 0 || this.amount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element of Contribution.amount.");
        }
    }

}