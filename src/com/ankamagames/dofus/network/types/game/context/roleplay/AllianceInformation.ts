import { SocialEmblem } from "./../../social/SocialEmblem";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BasicNamedAllianceInformations } from "./BasicNamedAllianceInformations";

export class AllianceInformation extends BasicNamedAllianceInformations implements INetworkType
{

	public static readonly protocolId: number = 1197;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public allianceEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.allianceEmblem = new SocialEmblem();
    }

    public getTypeId()
    {
        return AllianceInformation.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceInformation.endpointServer;
    }

    public initAllianceInformation(allianceId: number = 0, allianceTag: string = "", allianceName: string = "", allianceEmblem: SocialEmblem = null): AllianceInformation
    {
        super.initBasicNamedAllianceInformations(allianceId,allianceTag,allianceName);
        this.allianceEmblem = allianceEmblem;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceInformation(output);
    }

    public serializeAs_AllianceInformation(output: ICustomDataOutput)
    {
        super.serializeAs_BasicNamedAllianceInformations(output);
        this.allianceEmblem.serializeAs_SocialEmblem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceInformation(input);
    }

    private deserializeAs_AllianceInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.allianceEmblem = new SocialEmblem();
        this.allianceEmblem.deserialize(input);
    }

}