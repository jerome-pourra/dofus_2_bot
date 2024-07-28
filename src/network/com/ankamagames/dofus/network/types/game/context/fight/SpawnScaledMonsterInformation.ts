import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BaseSpawnMonsterInformation } from "./BaseSpawnMonsterInformation";

export class SpawnScaledMonsterInformation extends BaseSpawnMonsterInformation
{

	public static readonly protocolId: number = 8568;

	public creatureLevel: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpawnScaledMonsterInformation(input);
    }

    private deserializeAs_SpawnScaledMonsterInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._creatureLevelFunc(input);
    }

    private _creatureLevelFunc(input: ICustomDataInput)
    {
        this.creatureLevel = input.readShort();
        if(this.creatureLevel < 0)
        {
            throw new Error("Forbidden value (" + this.creatureLevel + ") on element of SpawnScaledMonsterInformation.creatureLevel.");
        }
    }

}