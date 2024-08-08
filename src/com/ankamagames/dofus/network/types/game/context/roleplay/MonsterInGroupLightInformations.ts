import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class MonsterInGroupLightInformations implements INetworkType
{

	public static readonly protocolId: number = 1537;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public genericId: number = 0;
	public grade: number = 0;
	public level: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return MonsterInGroupLightInformations.protocolId;
    }

    public isEndpointClient()
    {
        return MonsterInGroupLightInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return MonsterInGroupLightInformations.endpointServer;
    }

    public initMonsterInGroupLightInformations(genericId: number = 0, grade: number = 0, level: number = 0): MonsterInGroupLightInformations
    {
        this.genericId = genericId;
        this.grade = grade;
        this.level = level;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MonsterInGroupLightInformations(output);
    }

    public serializeAs_MonsterInGroupLightInformations(output: ICustomDataOutput)
    {
        output.writeInt(this.genericId);
        if(this.grade < 0)
        {
            throw new Error("Forbidden value (" + this.grade + ") on element grade.");
        }
        output.writeByte(this.grade);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeShort(this.level);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MonsterInGroupLightInformations(input);
    }

    private deserializeAs_MonsterInGroupLightInformations(input: ICustomDataInput)
    {
        this._genericIdFunc(input);
        this._gradeFunc(input);
        this._levelFunc(input);
    }

    private _genericIdFunc(input: ICustomDataInput)
    {
        this.genericId = input.readInt();
    }

    private _gradeFunc(input: ICustomDataInput)
    {
        this.grade = input.readByte();
        if(this.grade < 0)
        {
            throw new Error("Forbidden value (" + this.grade + ") on element of MonsterInGroupLightInformations.grade.");
        }
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of MonsterInGroupLightInformations.level.");
        }
    }

}