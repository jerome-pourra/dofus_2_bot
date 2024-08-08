import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AnomalySubareaInformation implements INetworkType
{

	public static readonly protocolId: number = 4038;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public subAreaId: number = 0;
	public rewardRate: number = 0;
	public hasAnomaly: boolean = false;
	public anomalyClosingTime: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AnomalySubareaInformation.protocolId;
    }

    public isEndpointClient()
    {
        return AnomalySubareaInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return AnomalySubareaInformation.endpointServer;
    }

    public initAnomalySubareaInformation(subAreaId: number = 0, rewardRate: number = 0, hasAnomaly: boolean = false, anomalyClosingTime: number = 0): AnomalySubareaInformation
    {
        this.subAreaId = subAreaId;
        this.rewardRate = rewardRate;
        this.hasAnomaly = hasAnomaly;
        this.anomalyClosingTime = anomalyClosingTime;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AnomalySubareaInformation(output);
    }

    public serializeAs_AnomalySubareaInformation(output: ICustomDataOutput)
    {
        if(this.subAreaId < 0)
        {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        }
        output.writeVarShort(this.subAreaId);
        output.writeVarShort(this.rewardRate);
        output.writeBoolean(this.hasAnomaly);
        if(this.anomalyClosingTime < 0 || this.anomalyClosingTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.anomalyClosingTime + ") on element anomalyClosingTime.");
        }
        output.writeVarLong(this.anomalyClosingTime);
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