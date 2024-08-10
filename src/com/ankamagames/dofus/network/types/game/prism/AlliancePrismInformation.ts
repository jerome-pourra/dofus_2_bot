import { AllianceInformation } from "./../context/roleplay/AllianceInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { PrismInformation } from "./PrismInformation";

export class AlliancePrismInformation extends PrismInformation implements INetworkType
{

	public static readonly protocolId: number = 4594;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public alliance: AllianceInformation;

    public constructor()
    {
        super();
        this.alliance = new AllianceInformation();
    }

    public getTypeId()
    {
        return AlliancePrismInformation.protocolId;
    }

    public isEndpointClient()
    {
        return AlliancePrismInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return AlliancePrismInformation.endpointServer;
    }

    public initAlliancePrismInformation(state: number = 1, placementDate: number = 0, nuggetsCount: number = 0, durability: number = 0, nextEvolutionDate: number = 0, alliance: AllianceInformation = null): AlliancePrismInformation
    {
        super.initPrismInformation(state,placementDate,nuggetsCount,durability,nextEvolutionDate);
        this.alliance = alliance;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AlliancePrismInformation(output);
    }

    public serializeAs_AlliancePrismInformation(output: ICustomDataOutput)
    {
        super.serializeAs_PrismInformation(output);
        this.alliance.serializeAs_AllianceInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlliancePrismInformation(input);
    }

    private deserializeAs_AlliancePrismInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.alliance = new AllianceInformation();
        this.alliance.deserialize(input);
    }

}