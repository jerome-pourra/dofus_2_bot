import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { GameContextActorInformations } from "./../GameContextActorInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";

export class GameFightFighterInformations extends GameContextActorInformations implements INetworkType
{

	public static readonly protocolId: number = 5601;

	public spawnInfo: GameContextBasicSpawnInformation;
	public wave: number = 0;
	public stats: GameFightCharacteristics;
	public previousPositions: Array<number>;

    public constructor()
    {
        super();
        this.spawnInfo = new GameContextBasicSpawnInformation();
        this.stats = new GameFightCharacteristics();
        this.previousPositions = Array<number>();
    }

    public getTypeId()
    {
        return GameFightFighterInformations.protocolId;
    }

    public initGameFightFighterInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, spawnInfo: GameContextBasicSpawnInformation = null, wave: number = 0, stats: GameFightCharacteristics = null, previousPositions: Array<number> = null): GameFightFighterInformations
    {
        super.initGameContextActorInformations(contextualId,disposition,look);
        this.spawnInfo = spawnInfo;
        this.wave = wave;
        this.stats = stats;
        this.previousPositions = previousPositions;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightFighterInformations(output);
    }

    public serializeAs_GameFightFighterInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameContextActorInformations(output);
        this.spawnInfo.serializeAs_GameContextBasicSpawnInformation(output);
        if(this.wave < 0)
        {
            throw new Error("Forbidden value (" + this.wave + ") on element wave.");
        }
        output.writeByte(this.wave);
        output.writeShort(this.stats.getTypeId());
        this.stats.serialize(output);
        output.writeShort(this.previousPositions.length);
        for(var _i4: number = 0; _i4 < this.previousPositions.length; _i4++)
        {
            if(this.previousPositions[_i4] < 0 || this.previousPositions[_i4] > 559)
            {
                throw new Error("Forbidden value (" + this.previousPositions[_i4] + ") on element 4 (starting at 1) of previousPositions.");
            }
            output.writeVarShort(this.previousPositions[_i4]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightFighterInformations(input);
    }

    private deserializeAs_GameFightFighterInformations(input: ICustomDataInput)
    {
        let _val4: number = 0;
        super.deserialize(input);
        this.spawnInfo = new GameContextBasicSpawnInformation();
        this.spawnInfo.deserialize(input);
        this._waveFunc(input);
        let _id3: number = input.readUnsignedShort();
        this.stats = ProtocolTypeManager.getInstance(GameFightCharacteristics,_id3);
        this.stats.deserialize(input);
        let _previousPositionsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _previousPositionsLen; _i4++)
        {
            _val4 = input.readVarUhShort();
            if(_val4 < 0 || _val4 > 559)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of previousPositions.");
            }
            this.previousPositions.push(_val4);
        }
    }

    private _waveFunc(input: ICustomDataInput)
    {
        this.wave = input.readByte();
        if(this.wave < 0)
        {
            throw new Error("Forbidden value (" + this.wave + ") on element of GameFightFighterInformations.wave.");
        }
    }

}