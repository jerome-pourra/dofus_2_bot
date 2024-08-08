import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AchievementObjective implements INetworkType
{

	public static readonly protocolId: number = 2341;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public id: number = 0;
	public maxValue: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AchievementObjective.protocolId;
    }

    public isEndpointClient()
    {
        return AchievementObjective.endpointClient;
    }

    public isEndpointServer()
    {
        return AchievementObjective.endpointServer;
    }

    public initAchievementObjective(id: number = 0, maxValue: number = 0): AchievementObjective
    {
        this.id = id;
        this.maxValue = maxValue;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AchievementObjective(output);
    }

    public serializeAs_AchievementObjective(output: ICustomDataOutput)
    {
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarInt(this.id);
        if(this.maxValue < 0 || this.maxValue > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.maxValue + ") on element maxValue.");
        }
        output.writeVarLong(this.maxValue);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AchievementObjective(input);
    }

    private deserializeAs_AchievementObjective(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._maxValueFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhInt();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of AchievementObjective.id.");
        }
    }

    private _maxValueFunc(input: ICustomDataInput)
    {
        this.maxValue = input.readVarUhLong();
        if(this.maxValue < 0 || this.maxValue > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.maxValue + ") on element of AchievementObjective.maxValue.");
        }
    }

}