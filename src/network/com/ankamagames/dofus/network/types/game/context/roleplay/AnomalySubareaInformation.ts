import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AnomalySubareaInformation
{

	public static readonly protocolId: number = 4038;

	public subAreaId: number = 0;
	public rewardRate: number = 0;
	public hasAnomaly: boolean = false;
	public anomalyClosingTime: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AnomalySubareaInformation(input);
    }

    private deserializeAs_AnomalySubareaInformation(input: ICustomDataInput)
    {
        this._subAreaIdFunc(input);
        this._rewardRateFunc(input);
        this._hasAnomalyFunc(input);
        this._anomalyClosingTimeFunc(input);
    }

    private _subAreaIdFunc(input: ICustomDataInput)
    {
        this.subAreaId = input.readVarUhShort();
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of AnomalySubareaInformation.subAreaId.");
        }
    }

    private _rewardRateFunc(input: ICustomDataInput)
    {
        this.rewardRate = input.readVarShort();
    }

    private _hasAnomalyFunc(input: ICustomDataInput)
    {
        this.hasAnomaly = input.readBoolean();
    }

    private _anomalyClosingTimeFunc(input: ICustomDataInput)
    {
        this.anomalyClosingTime = input.readVarUhLong();
        if(this.anomalyClosingTime < 0 || this.anomalyClosingTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.anomalyClosingTime + ") on element of AnomalySubareaInformation.anomalyClosingTime.");
        }
    }

}