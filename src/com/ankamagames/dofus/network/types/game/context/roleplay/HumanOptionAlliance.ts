import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AllianceInformation } from "./AllianceInformation";
import { HumanOption } from "./HumanOption";

export class HumanOptionAlliance extends HumanOption implements INetworkType
{

	public static readonly protocolId: number = 7953;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public allianceInformation: AllianceInformation;
	public aggressable: number = 0;

    public constructor()
    {
        super();
        this.allianceInformation = new AllianceInformation();
    }

    public getTypeId()
    {
        return HumanOptionAlliance.protocolId;
    }

    public isEndpointClient()
    {
        return HumanOptionAlliance.endpointClient;
    }

    public isEndpointServer()
    {
        return HumanOptionAlliance.endpointServer;
    }

    public initHumanOptionAlliance(allianceInformation: AllianceInformation = null, aggressable: number = 0): HumanOptionAlliance
    {
        this.allianceInformation = allianceInformation;
        this.aggressable = aggressable;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanOptionAlliance(output);
    }

    public serializeAs_HumanOptionAlliance(output: ICustomDataOutput)
    {
        super.serializeAs_HumanOption(output);
        this.allianceInformation.serializeAs_AllianceInformation(output);
        output.writeByte(this.aggressable);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionAlliance(input);
    }

    private deserializeAs_HumanOptionAlliance(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.allianceInformation = new AllianceInformation();
        this.allianceInformation.deserialize(input);
        this._aggressableFunc(input);
    }

    private _aggressableFunc(input: ICustomDataInput)
    {
        this.aggressable = input.readByte();
        if(this.aggressable < 0)
        {
            throw new Error("Forbidden value (" + this.aggressable + ") on element of HumanOptionAlliance.aggressable.");
        }
    }

}