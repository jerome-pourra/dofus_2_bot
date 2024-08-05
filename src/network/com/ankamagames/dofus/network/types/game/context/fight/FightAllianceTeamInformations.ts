import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamInformations } from "./FightTeamInformations";

export class FightAllianceTeamInformations extends FightTeamInformations
{

	public static readonly protocolId: number = 8585;

	public relation: number = 0;

    public constructor()
    {
        super();
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