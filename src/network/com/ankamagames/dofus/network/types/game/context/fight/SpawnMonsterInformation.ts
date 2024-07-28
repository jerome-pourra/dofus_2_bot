import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BaseSpawnMonsterInformation } from "./BaseSpawnMonsterInformation";

export class SpawnMonsterInformation extends BaseSpawnMonsterInformation
{

	public static readonly protocolId: number = 571;

	public creatureGrade: number = 0;

    public constructor()
    {
        super();
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