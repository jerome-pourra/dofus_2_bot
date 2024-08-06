import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";
import { GameFightFighterInformations } from "./GameFightFighterInformations";

export class GameFightEntityInformation extends GameFightFighterInformations implements INetworkType
{

	public static readonly protocolId: number = 4556;

	public entityModelId: number = 0;
	public level: number = 0;
	public masterId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameFightEntityInformation.protocolId;
    }

    public initGameFightEntityInformation(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, spawnInfo: GameContextBasicSpawnInformation = null, wave: number = 0, stats: GameFightCharacteristics = null, previousPositions: Array<number> = null, entityModelId: number = 0, level: number = 0, masterId: number = 0): GameFightEntityInformation
    {
        super.initGameFightFighterInformations(contextualId,disposition,look,spawnInfo,wave,stats,previousPositions);
        this.entityModelId = entityModelId;
        this.level = level;
        this.masterId = masterId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightEntityInformation(output);
    }

    public serializeAs_GameFightEntityInformation(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightFighterInformations(output);
        if(this.entityModelId < 0)
        {
            throw new Error("Forbidden value (" + this.entityModelId + ") on element entityModelId.");
        }
        output.writeByte(this.entityModelId);
        if(this.level < 1 || this.level > 200)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element masterId.");
        }
        output.writeDouble(this.masterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightEntityInformation(input);
    }

    private deserializeAs_GameFightEntityInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._entityModelIdFunc(input);
        this._levelFunc(input);
        this._masterIdFunc(input);
    }

    private _entityModelIdFunc(input: ICustomDataInput)
    {
        this.entityModelId = input.readByte();
        if(this.entityModelId < 0)
        {
            throw new Error("Forbidden value (" + this.entityModelId + ") on element of GameFightEntityInformation.entityModelId.");
        }
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 1 || this.level > 200)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of GameFightEntityInformation.level.");
        }
    }

    private _masterIdFunc(input: ICustomDataInput)
    {
        this.masterId = input.readDouble();
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element of GameFightEntityInformation.masterId.");
        }
    }

}