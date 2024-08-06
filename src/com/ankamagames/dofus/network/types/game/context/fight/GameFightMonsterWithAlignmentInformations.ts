import { ActorAlignmentInformations } from "./../../character/alignment/ActorAlignmentInformations";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";
import { GameFightMonsterInformations } from "./GameFightMonsterInformations";

export class GameFightMonsterWithAlignmentInformations extends GameFightMonsterInformations implements INetworkType
{

	public static readonly protocolId: number = 7656;

	public alignmentInfos: ActorAlignmentInformations;

    public constructor()
    {
        super();
        this.alignmentInfos = new ActorAlignmentInformations();
    }

    public getTypeId()
    {
        return GameFightMonsterWithAlignmentInformations.protocolId;
    }

    public initGameFightMonsterWithAlignmentInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, spawnInfo: GameContextBasicSpawnInformation = null, wave: number = 0, stats: GameFightCharacteristics = null, previousPositions: Array<number> = null, creatureGenericId: number = 0, creatureGrade: number = 0, creatureLevel: number = 0, alignmentInfos: ActorAlignmentInformations = null): GameFightMonsterWithAlignmentInformations
    {
        super.initGameFightMonsterInformations(contextualId,disposition,look,spawnInfo,wave,stats,previousPositions,creatureGenericId,creatureGrade,creatureLevel);
        this.alignmentInfos = alignmentInfos;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightMonsterWithAlignmentInformations(output);
    }

    public serializeAs_GameFightMonsterWithAlignmentInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightMonsterInformations(output);
        this.alignmentInfos.serializeAs_ActorAlignmentInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightMonsterWithAlignmentInformations(input);
    }

    private deserializeAs_GameFightMonsterWithAlignmentInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(input);
    }

}