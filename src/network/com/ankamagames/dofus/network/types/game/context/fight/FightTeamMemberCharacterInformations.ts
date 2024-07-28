import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";

export class FightTeamMemberCharacterInformations extends FightTeamMemberInformations
{

	public static readonly protocolId: number = 4535;

	public name: string = "";
	public level: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTeamMemberCharacterInformations(input);
    }

    private deserializeAs_FightTeamMemberCharacterInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
        this._levelFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of FightTeamMemberCharacterInformations.level.");
        }
    }

}