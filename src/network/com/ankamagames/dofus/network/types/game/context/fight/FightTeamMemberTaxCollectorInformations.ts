import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";

export class FightTeamMemberTaxCollectorInformations extends FightTeamMemberInformations
{

	public static readonly protocolId: number = 4832;

	public firstNameId: number = 0;
	public lastNameId: number = 0;
	public groupId: number = 0;
	public uid: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTeamMemberTaxCollectorInformations(input);
    }

    private deserializeAs_FightTeamMemberTaxCollectorInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._firstNameIdFunc(input);
        this._lastNameIdFunc(input);
        this._groupIdFunc(input);
        this._uidFunc(input);
    }

    private _firstNameIdFunc(input: ICustomDataInput)
    {
        this.firstNameId = input.readVarUhShort();
        if(this.firstNameId < 0)
        {
            throw new Error("Forbidden value (" + this.firstNameId + ") on element of FightTeamMemberTaxCollectorInformations.firstNameId.");
        }
    }

    private _lastNameIdFunc(input: ICustomDataInput)
    {
        this.lastNameId = input.readVarUhShort();
        if(this.lastNameId < 0)
        {
            throw new Error("Forbidden value (" + this.lastNameId + ") on element of FightTeamMemberTaxCollectorInformations.lastNameId.");
        }
    }

    private _groupIdFunc(input: ICustomDataInput)
    {
        this.groupId = input.readVarUhInt();
        if(this.groupId < 0)
        {
            throw new Error("Forbidden value (" + this.groupId + ") on element of FightTeamMemberTaxCollectorInformations.groupId.");
        }
    }

    private _uidFunc(input: ICustomDataInput)
    {
        this.uid = input.readDouble();
        if(this.uid < 0 || this.uid > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element of FightTeamMemberTaxCollectorInformations.uid.");
        }
    }

}