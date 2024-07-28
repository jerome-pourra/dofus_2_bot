import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SpawnInformation } from "./SpawnInformation";

export class BaseSpawnMonsterInformation extends SpawnInformation
{

	public static readonly protocolId: number = 5062;

	public creatureGenericId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BaseSpawnMonsterInformation(input);
    }

    private deserializeAs_BaseSpawnMonsterInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._creatureGenericIdFunc(input);
    }

    private _creatureGenericIdFunc(input: ICustomDataInput)
    {
        this.creatureGenericId = input.readVarUhShort();
        if(this.creatureGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGenericId + ") on element of BaseSpawnMonsterInformation.creatureGenericId.");
        }
    }

}