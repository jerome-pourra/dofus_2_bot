import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";

export class FightTeamMemberTaxCollectorInformations extends FightTeamMemberInformations implements INetworkType
{

	public static readonly protocolId: number = 4832;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public firstNameId: number = 0;
	public lastNameId: number = 0;
	public groupId: number = 0;
	public uid: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTeamMemberTaxCollectorInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FightTeamMemberTaxCollectorInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FightTeamMemberTaxCollectorInformations.endpointServer;
    }

    public initFightTeamMemberTaxCollectorInformations(id: number = 0, firstNameId: number = 0, lastNameId: number = 0, groupId: number = 0, uid: number = 0): FightTeamMemberTaxCollectorInformations
    {
        super.initFightTeamMemberInformations(id);
        this.firstNameId = firstNameId;
        this.lastNameId = lastNameId;
        this.groupId = groupId;
        this.uid = uid;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTeamMemberTaxCollectorInformations(output);
    }

    public serializeAs_FightTeamMemberTaxCollectorInformations(output: ICustomDataOutput)
    {
        super.serializeAs_FightTeamMemberInformations(output);
        if(this.firstNameId < 0)
        {
            throw new Error("Forbidden value (" + this.firstNameId + ") on element firstNameId.");
        }
        output.writeVarShort(this.firstNameId);
        if(this.lastNameId < 0)
        {
            throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
        }
        output.writeVarShort(this.lastNameId);
        if(this.groupId < 0)
        {
            throw new Error("Forbidden value (" + this.groupId + ") on element groupId.");
        }
        output.writeVarInt(this.groupId);
        if(this.uid < 0 || this.uid > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element uid.");
        }
        output.writeDouble(this.uid);
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