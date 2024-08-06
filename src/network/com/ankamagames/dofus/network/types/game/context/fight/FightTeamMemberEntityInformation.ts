import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";

export class FightTeamMemberEntityInformation extends FightTeamMemberInformations implements INetworkType
{

	public static readonly protocolId: number = 5854;

	public entityModelId: number = 0;
	public level: number = 0;
	public masterId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTeamMemberEntityInformation.protocolId;
    }

    public initFightTeamMemberEntityInformation(id: number = 0, entityModelId: number = 0, level: number = 0, masterId: number = 0): FightTeamMemberEntityInformation
    {
        super.initFightTeamMemberInformations(id);
        this.entityModelId = entityModelId;
        this.level = level;
        this.masterId = masterId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTeamMemberEntityInformation(output);
    }

    public serializeAs_FightTeamMemberEntityInformation(output: ICustomDataOutput)
    {
        super.serializeAs_FightTeamMemberInformations(output);
        if(this.entityModelId < 0)
        {
            throw new Error("Forbidden value (" + this.entityModelId + ") on element entityModelId.");
        }
        output.writeByte(this.entityModelId);
        if(this.level < 1 || this.level > 200)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element masterId.");
        }
        output.writeDouble(this.masterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTeamMemberEntityInformation(input);
    }

    private deserializeAs_FightTeamMemberEntityInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._entityModelIdFunc(input);
        this._levelFunc(input);
        this._masterIdFunc(input);
    }

    private _entityModelIdFunc(input: ICustomDataInput)
    {
        this.entityModelId = input.readByte();
        if(this.entityModelId < 0)
        {
            throw new Error("Forbidden value (" + this.entityModelId + ") on element of FightTeamMemberEntityInformation.entityModelId.");
        }
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 1 || this.level > 200)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of FightTeamMemberEntityInformation.level.");
        }
    }

    private _masterIdFunc(input: ICustomDataInput)
    {
        this.masterId = input.readDouble();
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element of FightTeamMemberEntityInformation.masterId.");
        }
    }

}