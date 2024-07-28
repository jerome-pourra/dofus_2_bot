import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";
import { AbstractFightTeamInformations } from "./AbstractFightTeamInformations";

export class FightTeamInformations extends AbstractFightTeamInformations
{

	public static readonly protocolId: number = 3291;

	public teamMembers: Array<FightTeamMemberInformations>;

    public constructor()
    {
        super();
        this.teamMembers = Array<FightTeamMemberInformations>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTeamInformations(input);
    }

    private deserializeAs_FightTeamInformations(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: FightTeamMemberInformations;
        super.deserialize(input);
        let _teamMembersLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _teamMembersLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(FightTeamMemberInformations,_id1);
            _item1.deserialize(input);
            this.teamMembers.push(_item1);
        }
    }

}