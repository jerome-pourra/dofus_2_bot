import { ActorAlignmentInformations } from "./../../character/alignment/ActorAlignmentInformations";
import { PlayerStatus } from "./../../character/status/PlayerStatus";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";
import { GameFightFighterNamedInformations } from "./GameFightFighterNamedInformations";

export class GameFightCharacterInformations extends GameFightFighterNamedInformations implements INetworkType
{

	public static readonly protocolId: number = 3578;

	public level: number = 0;
	public alignmentInfos: ActorAlignmentInformations;
	public breed: number = 0;
	public sex: boolean = false;

    public constructor()
    {
        super();
        this.alignmentInfos = new ActorAlignmentInformations();
    }

    public getTypeId()
    {
        return GameFightCharacterInformations.protocolId;
    }

    public initGameFightCharacterInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, spawnInfo: GameContextBasicSpawnInformation = null, wave: number = 0, stats: GameFightCharacteristics = null, previousPositions: Array<number> = null, name: string = "", status: PlayerStatus = null, leagueId: number = 0, ladderPosition: number = 0, hiddenInPrefight: boolean = false, level: number = 0, alignmentInfos: ActorAlignmentInformations = null, breed: number = 0, sex: boolean = false): GameFightCharacterInformations
    {
        super.initGameFightFighterNamedInformations(contextualId,disposition,look,spawnInfo,wave,stats,previousPositions,name,status,leagueId,ladderPosition,hiddenInPrefight);
        this.level = level;
        this.alignmentInfos = alignmentInfos;
        this.breed = breed;
        this.sex = sex;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightCharacterInformations(output);
    }

    public serializeAs_GameFightCharacterInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightFighterNamedInformations(output);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        this.alignmentInfos.serializeAs_ActorAlignmentInformations(output);
        output.writeByte(this.breed);
        output.writeBoolean(this.sex);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightCharacterInformations(input);
    }

    private deserializeAs_GameFightCharacterInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._levelFunc(input);
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(input);
        this._breedFunc(input);
        this._sexFunc(input);
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of GameFightCharacterInformations.level.");
        }
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

}