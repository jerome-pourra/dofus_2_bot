import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";

export class FightTeamMemberMonsterInformations extends FightTeamMemberInformations implements INetworkType
{

	public static readonly protocolId: number = 7397;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public monsterId: number = 0;
	public grade: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTeamMemberMonsterInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FightTeamMemberMonsterInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FightTeamMemberMonsterInformations.endpointServer;
    }

    public initFightTeamMemberMonsterInformations(id: number = 0, monsterId: number = 0, grade: number = 0): FightTeamMemberMonsterInformations
    {
        super.initFightTeamMemberInformations(id);
        this.monsterId = monsterId;
        this.grade = grade;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTeamMemberMonsterInformations(output);
    }

    public serializeAs_FightTeamMemberMonsterInformations(output: ICustomDataOutput)
    {
        super.serializeAs_FightTeamMemberInformations(output);
        output.writeInt(this.monsterId);
        if(this.grade < 0)
        {
            throw new Error("Forbidden value (" + this.grade + ") on element grade.");
        }
        output.writeByte(this.grade);
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