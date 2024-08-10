import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionSpeedMultiplier extends HumanOption implements INetworkType
{

	public static readonly protocolId: number = 4364;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public speedMultiplier: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return HumanOptionSpeedMultiplier.protocolId;
    }

    public isEndpointClient()
    {
        return HumanOptionSpeedMultiplier.endpointClient;
    }

    public isEndpointServer()
    {
        return HumanOptionSpeedMultiplier.endpointServer;
    }

    public initHumanOptionSpeedMultiplier(speedMultiplier: number = 0): HumanOptionSpeedMultiplier
    {
        this.speedMultiplier = speedMultiplier;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanOptionSpeedMultiplier(output);
    }

    public serializeAs_HumanOptionSpeedMultiplier(output: ICustomDataOutput)
    {
        super.serializeAs_HumanOption(output);
        if(this.speedMultiplier < 0)
        {
            throw new Error("Forbidden value (" + this.speedMultiplier + ") on element speedMultiplier.");
        }
        output.writeVarInt(this.speedMultiplier);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionSpeedMultiplier(input);
    }

    private deserializeAs_HumanOptionSpeedMultiplier(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._speedMultiplierFunc(input);
    }

    private _speedMultiplierFunc(input: ICustomDataInput)
    {
        this.speedMultiplier = input.readVarUhInt();
        if(this.speedMultiplier < 0)
        {
            throw new Error("Forbidden value (" + this.speedMultiplier + ") on element of HumanOptionSpeedMultiplier.speedMultiplier.");
        }
    }

}