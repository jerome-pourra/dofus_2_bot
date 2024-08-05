import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";
import { AbstractFightTeamInformations } from "./AbstractFightTeamInformations";

export class FightTeamLightInformations extends AbstractFightTeamInformations
{

	public static readonly protocolId: number = 6964;

	public teamMembersCount: number = 0;
	public meanLevel: number = 0;
	public hasFriend: boolean = false;
	public hasGuildMember: boolean = false;
	public hasAllianceMember: boolean = false;
	public hasGroupMember: boolean = false;
	public hasMyTaxCollector: boolean = false;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTeamLightInformations(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.hasFriend = BooleanByteWrapper.getFlag(_box0,0);
        this.hasGuildMember = BooleanByteWrapper.getFlag(_box0,1);
        this.hasAllianceMember = BooleanByteWrapper.getFlag(_box0,2);
        this.hasGroupMember = BooleanByteWrapper.getFlag(_box0,3);
        this.hasMyTaxCollector = BooleanByteWrapper.getFlag(_box0,4);
    }

    private deserializeAs_FightTeamLightInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.deserializeByteBoxes(input);
        this._teamMembersCountFunc(input);
        this._meanLevelFunc(input);
    }

    private _teamMembersCountFunc(input: ICustomDataInput)
    {
        this.teamMembersCount = input.readByte();
        if(this.teamMembersCount < 0)
        {
            throw new Error("Forbidden value (" + this.teamMembersCount + ") on element of FightTeamLightInformations.teamMembersCount.");
        }
    }

    private _meanLevelFunc(input: ICustomDataInput)
    {
        this.meanLevel = input.readVarUhInt();
        if(this.meanLevel < 0)
        {
            throw new Error("Forbidden value (" + this.meanLevel + ") on element of FightTeamLightInformations.meanLevel.");
        }
    }

}