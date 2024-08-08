import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";
import { AbstractFightTeamInformations } from "./AbstractFightTeamInformations";

export class FightTeamInformations extends AbstractFightTeamInformations implements INetworkType
{

	public static readonly protocolId: number = 3291;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public teamMembers: Array<FightTeamMemberInformations>;

    public constructor()
    {
        super();
        this.teamMembers = Array<FightTeamMemberInformations>();
    }

    public getTypeId()
    {
        return FightTeamInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FightTeamInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FightTeamInformations.endpointServer;
    }

    public initFightTeamInformations(teamId: number = 2, leaderId: number = 0, teamSide: number = 0, teamTypeId: number = 0, nbWaves: number = 0, teamMembers: Array<FightTeamMemberInformations> = null): FightTeamInformations
    {
        super.initAbstractFightTeamInformations(teamId,leaderId,teamSide,teamTypeId,nbWaves);
        this.teamMembers = teamMembers;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTeamInformations(output);
    }

    public serializeAs_FightTeamInformations(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractFightTeamInformations(output);
        output.writeShort(this.teamMembers.length);
        for(var _i1: number = 0; _i1 < this.teamMembers.length; _i1++)
        {
            output.writeShort((this.teamMembers[_i1] as FightTeamMemberInformations).getTypeId());
            (this.teamMembers[_i1] as FightTeamMemberInformations).serialize(output);
        }
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