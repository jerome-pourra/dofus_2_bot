import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";

export class FightTeamMemberMonsterInformations extends FightTeamMemberInformations
{

	public static readonly protocolId: number = 7397;

	public monsterId: number = 0;
	public grade: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTeamMemberMonsterInformations(input);
    }

    private deserializeAs_FightTeamMemberMonsterInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._monsterIdFunc(input);
        this._gradeFunc(input);
    }

    private _monsterIdFunc(input: ICustomDataInput)
    {
        this.monsterId = input.readInt();
    }

    private _gradeFunc(input: ICustomDataInput)
    {
        this.grade = input.readByte();
        if(this.grade < 0)
        {
            throw new Error("Forbidden value (" + this.grade + ") on element of FightTeamMemberMonsterInformations.grade.");
        }
    }

}