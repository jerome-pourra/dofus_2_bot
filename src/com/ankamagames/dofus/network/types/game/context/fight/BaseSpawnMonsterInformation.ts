import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SpawnInformation } from "./SpawnInformation";

export class BaseSpawnMonsterInformation extends SpawnInformation implements INetworkType
{

	public static readonly protocolId: number = 5062;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public creatureGenericId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return BaseSpawnMonsterInformation.protocolId;
    }

    public isEndpointClient()
    {
        return BaseSpawnMonsterInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return BaseSpawnMonsterInformation.endpointServer;
    }

    public initBaseSpawnMonsterInformation(creatureGenericId: number = 0): BaseSpawnMonsterInformation
    {
        this.creatureGenericId = creatureGenericId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_BaseSpawnMonsterInformation(output);
    }

    public serializeAs_BaseSpawnMonsterInformation(output: ICustomDataOutput)
    {
        super.serializeAs_SpawnInformation(output);
        if(this.creatureGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGenericId + ") on element creatureGenericId.");
        }
        output.writeVarShort(this.creatureGenericId);
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