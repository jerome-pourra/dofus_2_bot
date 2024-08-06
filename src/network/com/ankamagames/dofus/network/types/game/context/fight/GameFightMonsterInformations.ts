import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";
import { GameFightAIInformations } from "./GameFightAIInformations";

export class GameFightMonsterInformations extends GameFightAIInformations implements INetworkType
{

	public static readonly protocolId: number = 1792;

	public creatureGenericId: number = 0;
	public creatureGrade: number = 0;
	public creatureLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameFightMonsterInformations.protocolId;
    }

    public initGameFightMonsterInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, spawnInfo: GameContextBasicSpawnInformation = null, wave: number = 0, stats: GameFightCharacteristics = null, previousPositions: Array<number> = null, creatureGenericId: number = 0, creatureGrade: number = 0, creatureLevel: number = 0): GameFightMonsterInformations
    {
        super.initGameFightAIInformations(contextualId,disposition,look,spawnInfo,wave,stats,previousPositions);
        this.creatureGenericId = creatureGenericId;
        this.creatureGrade = creatureGrade;
        this.creatureLevel = creatureLevel;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightMonsterInformations(output);
    }

    public serializeAs_GameFightMonsterInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightAIInformations(output);
        if(this.creatureGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGenericId + ") on element creatureGenericId.");
        }
        output.writeVarShort(this.creatureGenericId);
        if(this.creatureGrade < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGrade + ") on element creatureGrade.");
        }
        output.writeByte(this.creatureGrade);
        if(this.creatureLevel < 0)
        {
            throw new Error("Forbidden value (" + this.creatureLevel + ") on element creatureLevel.");
        }
        output.writeShort(this.creatureLevel);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightMonsterInformations(input);
    }

    private deserializeAs_GameFightMonsterInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._creatureGenericIdFunc(input);
        this._creatureGradeFunc(input);
        this._creatureLevelFunc(input);
    }

    private _creatureGenericIdFunc(input: ICustomDataInput)
    {
        this.creatureGenericId = input.readVarUhShort();
        if(this.creatureGenericId < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGenericId + ") on element of GameFightMonsterInformations.creatureGenericId.");
        }
    }

    private _creatureGradeFunc(input: ICustomDataInput)
    {
        this.creatureGrade = input.readByte();
        if(this.creatureGrade < 0)
        {
            throw new Error("Forbidden value (" + this.creatureGrade + ") on element of GameFightMonsterInformations.creatureGrade.");
        }
    }

    private _creatureLevelFunc(input: ICustomDataInput)
    {
        this.creatureLevel = input.readShort();
        if(this.creatureLevel < 0)
        {
            throw new Error("Forbidden value (" + this.creatureLevel + ") on element of GameFightMonsterInformations.creatureLevel.");
        }
    }

}