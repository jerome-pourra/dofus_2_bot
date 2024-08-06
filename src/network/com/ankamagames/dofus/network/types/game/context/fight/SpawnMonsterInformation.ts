import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BaseSpawnMonsterInformation } from "./BaseSpawnMonsterInformation";

export class SpawnMonsterInformation extends BaseSpawnMonsterInformation implements INetworkType
{

	public static readonly protocolId: number = 571;

	public creatureGrade: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SpawnMonsterInformation.protocolId;
    }

    public initSpawnMonsterInformation(creatureGenericId: number = 0, creatureGrade: number = 0): SpawnMonsterInformation
    {
        super.initBaseSpawnMonsterInformation(creatureGenericId);
        this.creatureGrade = creatureGrade;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpawnMonsterInformation(output);
    }

    public serializeAs_SpawnMonsterInformation(output: ICustomDataOutput)
    {
        super.serializeAs_BaseSpawnMonsterInformation(output);
        if(this.creatureGrade < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGrade + ") on element creatureGrade.");
        }
        output.writeByte(this.creatureGrade);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpawnMonsterInformation(input);
    }

    private deserializeAs_SpawnMonsterInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._creatureGradeFunc(input);
    }

    private _creatureGradeFunc(input: ICustomDataInput)
    {
        this.creatureGrade = input.readByte();
        if(this.creatureGrade < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGrade + ") on element of SpawnMonsterInformation.creatureGrade.");
        }
    }

}