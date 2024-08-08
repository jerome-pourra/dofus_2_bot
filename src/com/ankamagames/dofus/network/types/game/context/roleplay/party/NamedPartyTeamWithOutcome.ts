import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { NamedPartyTeam } from "./NamedPartyTeam";

export class NamedPartyTeamWithOutcome implements INetworkType
{

	public static readonly protocolId: number = 2171;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public team: NamedPartyTeam;
	public outcome: number = 0;

    public constructor()
    {
        this.team = new NamedPartyTeam();
    }

    public getTypeId()
    {
        return NamedPartyTeamWithOutcome.protocolId;
    }

    public isEndpointClient()
    {
        return NamedPartyTeamWithOutcome.endpointClient;
    }

    public isEndpointServer()
    {
        return NamedPartyTeamWithOutcome.endpointServer;
    }

    public initNamedPartyTeamWithOutcome(team: NamedPartyTeam = null, outcome: number = 0): NamedPartyTeamWithOutcome
    {
        this.team = team;
        this.outcome = outcome;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_NamedPartyTeamWithOutcome(output);
    }

    public serializeAs_NamedPartyTeamWithOutcome(output: ICustomDataOutput)
    {
        this.team.serializeAs_NamedPartyTeam(output);
        output.writeVarShort(this.outcome);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NamedPartyTeamWithOutcome(input);
    }

    private deserializeAs_NamedPartyTeamWithOutcome(input: ICustomDataInput)
    {
        this.team = new NamedPartyTeam();
        this.team.deserialize(input);
        this._outcomeFunc(input);
    }

    private _outcomeFunc(input: ICustomDataInput)
    {
        this.outcome = input.readVarUhShort();
        if(this.outcome < 0)
        {
            throw new Error("Forbidden value (" + this.outcome + ") on element of NamedPartyTeamWithOutcome.outcome.");
        }
    }

}