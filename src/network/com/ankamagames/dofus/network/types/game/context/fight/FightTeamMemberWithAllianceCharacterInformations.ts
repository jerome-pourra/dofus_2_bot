import { BasicAllianceInformations } from "./../roleplay/BasicAllianceInformations";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberCharacterInformations } from "./FightTeamMemberCharacterInformations";

export class FightTeamMemberWithAllianceCharacterInformations extends FightTeamMemberCharacterInformations implements INetworkType
{

	public static readonly protocolId: number = 793;

	public allianceInfos: BasicAllianceInformations;

    public constructor()
    {
        super();
        this.allianceInfos = new BasicAllianceInformations();
    }

    public getTypeId()
    {
        return FightTeamMemberWithAllianceCharacterInformations.protocolId;
    }

    public initFightTeamMemberWithAllianceCharacterInformations(id: number = 0, name: string = "", level: number = 0, allianceInfos: BasicAllianceInformations = null): FightTeamMemberWithAllianceCharacterInformations
    {
        super.initFightTeamMemberCharacterInformations(id,name,level);
        this.allianceInfos = allianceInfos;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTeamMemberWithAllianceCharacterInformations(output);
    }

    public serializeAs_FightTeamMemberWithAllianceCharacterInformations(output: ICustomDataOutput)
    {
        super.serializeAs_FightTeamMemberCharacterInformations(output);
        this.allianceInfos.serializeAs_BasicAllianceInformations(output);
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