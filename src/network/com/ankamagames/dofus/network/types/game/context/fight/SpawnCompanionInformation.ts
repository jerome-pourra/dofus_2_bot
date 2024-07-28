import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SpawnInformation } from "./SpawnInformation";

export class SpawnCompanionInformation extends SpawnInformation
{

	public static readonly protocolId: number = 4847;

	public modelId: number = 0;
	public level: number = 0;
	public summonerId: number = 0;
	public ownerId: number = 0;

    public constructor()
    {
        super();
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