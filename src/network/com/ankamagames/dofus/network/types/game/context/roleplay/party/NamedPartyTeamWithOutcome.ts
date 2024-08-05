import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { NamedPartyTeam } from "./NamedPartyTeam";

export class NamedPartyTeamWithOutcome
{

	public static readonly protocolId: number = 2171;

	public team: NamedPartyTeam;
	public outcome: number = 0;

    public constructor()
    {
        this.team = new NamedPartyTeam();
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