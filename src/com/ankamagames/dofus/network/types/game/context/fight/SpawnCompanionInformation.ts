import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SpawnInformation } from "./SpawnInformation";

export class SpawnCompanionInformation extends SpawnInformation implements INetworkType
{

	public static readonly protocolId: number = 4847;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public modelId: number = 0;
	public level: number = 0;
	public summonerId: number = 0;
	public ownerId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SpawnCompanionInformation.protocolId;
    }

    public isEndpointClient()
    {
        return SpawnCompanionInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return SpawnCompanionInformation.endpointServer;
    }

    public initSpawnCompanionInformation(modelId: number = 0, level: number = 0, summonerId: number = 0, ownerId: number = 0): SpawnCompanionInformation
    {
        this.modelId = modelId;
        this.level = level;
        this.summonerId = summonerId;
        this.ownerId = ownerId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpawnCompanionInformation(output);
    }

    public serializeAs_SpawnCompanionInformation(output: ICustomDataOutput)
    {
        super.serializeAs_SpawnInformation(output);
        if(this.modelId < 0)
        {
            throw new Error("Forbidden value (" + this.modelId + ") on element modelId.");
        }
        output.writeByte(this.modelId);
        if(this.level < 1 || this.level > 200)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        if(this.summonerId < -9007199254740992 || this.summonerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.summonerId + ") on element summonerId.");
        }
        output.writeDouble(this.summonerId);
        if(this.ownerId < -9007199254740992 || this.ownerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.ownerId + ") on element ownerId.");
        }
        output.writeDouble(this.ownerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpawnCompanionInformation(input);
    }

    private deserializeAs_SpawnCompanionInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._modelIdFunc(input);
        this._levelFunc(input);
        this._summonerIdFunc(input);
        this._ownerIdFunc(input);
    }

    private _modelIdFunc(input: ICustomDataInput)
    {
        this.modelId = input.readByte();
        if(this.modelId < 0)
        {
            throw new Error("Forbidden value (" + this.modelId + ") on element of SpawnCompanionInformation.modelId.");
        }
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 1 || this.level > 200)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of SpawnCompanionInformation.level.");
        }
    }

    private _summonerIdFunc(input: ICustomDataInput)
    {
        this.summonerId = input.readDouble();
        if(this.summonerId < -9007199254740992 || this.summonerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.summonerId + ") on element of SpawnCompanionInformation.summonerId.");
        }
    }

    private _ownerIdFunc(input: ICustomDataInput)
    {
        this.ownerId = input.readDouble();
        if(this.ownerId < -9007199254740992 || this.ownerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.ownerId + ") on element of SpawnCompanionInformation.ownerId.");
        }
    }

}