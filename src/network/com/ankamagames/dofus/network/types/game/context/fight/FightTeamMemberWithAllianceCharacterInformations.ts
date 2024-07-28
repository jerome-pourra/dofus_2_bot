import { BasicAllianceInformations } from "./../roleplay/BasicAllianceInformations";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberCharacterInformations } from "./FightTeamMemberCharacterInformations";

export class FightTeamMemberWithAllianceCharacterInformations extends FightTeamMemberCharacterInformations
{

	public static readonly protocolId: number = 793;

	public allianceInfos: BasicAllianceInformations;

    public constructor()
    {
        super();
        this.allianceInfos = new BasicAllianceInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTeamMemberWithAllianceCharacterInformations(input);
    }

    private deserializeAs_FightTeamMemberWithAllianceCharacterInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.allianceInfos = new BasicAllianceInformations();
        this.allianceInfos.deserialize(input);
    }

}