import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";
import { GameFightFighterInformations } from "./GameFightFighterInformations";

export class GameFightAIInformations extends GameFightFighterInformations implements INetworkType
{

	public static readonly protocolId: number = 8061;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameFightAIInformations.protocolId;
    }

    public initGameFightAIInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, spawnInfo: GameContextBasicSpawnInformation = null, wave: number = 0, stats: GameFightCharacteristics = null, previousPositions: Array<number> = null): GameFightAIInformations
    {
        super.initGameFightFighterInformations(contextualId,disposition,look,spawnInfo,wave,stats,previousPositions);
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightAIInformations(output);
    }

    public serializeAs_GameFightAIInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightFighterInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightAIInformations(input);
    }

    private deserializeAs_GameFightAIInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}