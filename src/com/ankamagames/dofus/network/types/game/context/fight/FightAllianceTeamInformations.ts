import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";
import { FightTeamInformations } from "./FightTeamInformations";

export class FightAllianceTeamInformations extends FightTeamInformations implements INetworkType
{

	public static readonly protocolId: number = 8585;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public relation: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightAllianceTeamInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FightAllianceTeamInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FightAllianceTeamInformations.endpointServer;
    }

    public initFightAllianceTeamInformations(teamId: number = 2, leaderId: number = 0, teamSide: number = 0, teamTypeId: number = 0, nbWaves: number = 0, teamMembers: Array<FightTeamMemberInformations> = null, relation: number = 0): FightAllianceTeamInformations
    {
        super.initFightTeamInformations(teamId,leaderId,teamSide,teamTypeId,nbWaves,teamMembers);
        this.relation = relation;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightAllianceTeamInformations(output);
    }

    public serializeAs_FightAllianceTeamInformations(output: ICustomDataOutput)
    {
        super.serializeAs_FightTeamInformations(output);
        output.writeByte(this.relation);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightAllianceTeamInformations(input);
    }

    private deserializeAs_FightAllianceTeamInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._relationFunc(input);
    }

    private _relationFunc(input: ICustomDataInput)
    {
        this.relation = input.readByte();
        if(this.relation < 0)
        {
            throw new Error("Forbidden value (" + this.relation + ") on element of FightAllianceTeamInformations.relation.");
        }
    }

}