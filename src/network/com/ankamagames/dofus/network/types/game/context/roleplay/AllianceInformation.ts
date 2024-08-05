import { SocialEmblem } from "./../../social/SocialEmblem";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BasicNamedAllianceInformations } from "./BasicNamedAllianceInformations";

export class AllianceInformation extends BasicNamedAllianceInformations
{

	public static readonly protocolId: number = 1197;

	public allianceEmblem: SocialEmblem;

    public constructor()
    {
        super();
        this.allianceEmblem = new SocialEmblem();
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