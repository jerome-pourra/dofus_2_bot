import { PlayerStatus } from "./../../character/status/PlayerStatus";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";
import { GameFightFighterNamedInformations } from "./GameFightFighterNamedInformations";

export class GameFightMutantInformations extends GameFightFighterNamedInformations implements INetworkType
{

	public static readonly protocolId: number = 419;

	public powerLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameFightMutantInformations.protocolId;
    }

    public initGameFightMutantInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, spawnInfo: GameContextBasicSpawnInformation = null, wave: number = 0, stats: GameFightCharacteristics = null, previousPositions: Array<number> = null, name: string = "", status: PlayerStatus = null, leagueId: number = 0, ladderPosition: number = 0, hiddenInPrefight: boolean = false, powerLevel: number = 0): GameFightMutantInformations
    {
        super.initGameFightFighterNamedInformations(contextualId,disposition,look,spawnInfo,wave,stats,previousPositions,name,status,leagueId,ladderPosition,hiddenInPrefight);
        this.powerLevel = powerLevel;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightMutantInformations(output);
    }

    public serializeAs_GameFightMutantInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightFighterNamedInformations(output);
        if(this.powerLevel < 0)
        {
            throw new Error("Forbidden value (" + this.powerLevel + ") on element powerLevel.");
        }
        output.writeByte(this.powerLevel);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightMutantInformations(input);
    }

    private deserializeAs_GameFightMutantInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._powerLevelFunc(input);
    }

    private _powerLevelFunc(input: ICustomDataInput)
    {
        this.powerLevel = input.readByte();
        if(this.powerLevel < 0)
        {
            throw new Error("Forbidden value (" + this.powerLevel + ") on element of GameFightMutantInformations.powerLevel.");
        }
    }

}