import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class JobBookSubscription implements INetworkType
{

	public static readonly protocolId: number = 5496;

	public jobId: number = 0;
	public subscribed: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return JobBookSubscription.protocolId;
    }

    public initJobBookSubscription(jobId: number = 0, subscribed: boolean = false): JobBookSubscription
    {
        this.jobId = jobId;
        this.subscribed = subscribed;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_JobBookSubscription(output);
    }

    public serializeAs_JobBookSubscription(output: ICustomDataOutput)
    {
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element jobId.");
        }
        output.writeByte(this.jobId);
        output.writeBoolean(this.subscribed);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobBookSubscription(input);
    }

    private deserializeAs_JobBookSubscription(input: ICustomDataInput)
    {
        this._jobIdFunc(input);
        this._subscribedFunc(input);
    }

    private _jobIdFunc(input: ICustomDataInput)
    {
        this.jobId = input.readByte();
        if(this.jobId < 0)
        {
            throw new Error("Forbidden value (" + this.jobId + ") on element of JobBookSubscription.jobId.");
        }
    }

    private _subscribedFunc(input: ICustomDataInput)
    {
        this.subscribed = input.readBoolean();
    }

}