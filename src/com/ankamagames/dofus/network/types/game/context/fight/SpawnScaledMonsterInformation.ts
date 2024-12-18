import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BaseSpawnMonsterInformation } from "./BaseSpawnMonsterInformation";

export class SpawnScaledMonsterInformation extends BaseSpawnMonsterInformation implements INetworkType
{

	public static readonly protocolId: number = 8568;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public creatureLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SpawnScaledMonsterInformation.protocolId;
    }

    public isEndpointClient()
    {
        return SpawnScaledMonsterInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return SpawnScaledMonsterInformation.endpointServer;
    }

    public initSpawnScaledMonsterInformation(creatureGenericId: number = 0, creatureLevel: number = 0): SpawnScaledMonsterInformation
    {
        super.initBaseSpawnMonsterInformation(creatureGenericId);
        this.creatureLevel = creatureLevel;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpawnScaledMonsterInformation(output);
    }

    public serializeAs_SpawnScaledMonsterInformation(output: ICustomDataOutput)
    {
        super.serializeAs_BaseSpawnMonsterInformation(output);
        if(this.creatureLevel < 0)
        {
            throw new Error("Forbidden value (" + this.creatureLevel + ") on element creatureLevel.");
        }
        output.writeShort(this.creatureLevel);
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