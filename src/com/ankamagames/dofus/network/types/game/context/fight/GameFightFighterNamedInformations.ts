import { PlayerStatus } from "./../../character/status/PlayerStatus";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameContextBasicSpawnInformation } from "./GameContextBasicSpawnInformation";
import { GameFightCharacteristics } from "./GameFightCharacteristics";
import { GameFightFighterInformations } from "./GameFightFighterInformations";

export class GameFightFighterNamedInformations extends GameFightFighterInformations implements INetworkType
{

	public static readonly protocolId: number = 4176;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public name: string = "";
	public status: PlayerStatus;
	public leagueId: number = 0;
	public ladderPosition: number = 0;
	public hiddenInPrefight: boolean = false;

    public constructor()
    {
        super();
        this.status = new PlayerStatus();
    }

    public getTypeId()
    {
        return GameFightFighterNamedInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightFighterNamedInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightFighterNamedInformations.endpointServer;
    }

    public initGameFightFighterNamedInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, spawnInfo: GameContextBasicSpawnInformation = null, wave: number = 0, stats: GameFightCharacteristics = null, previousPositions: Array<number> = null, name: string = "", status: PlayerStatus = null, leagueId: number = 0, ladderPosition: number = 0, hiddenInPrefight: boolean = false): GameFightFighterNamedInformations
    {
        super.initGameFightFighterInformations(contextualId,disposition,look,spawnInfo,wave,stats,previousPositions);
        this.name = name;
        this.status = status;
        this.leagueId = leagueId;
        this.ladderPosition = ladderPosition;
        this.hiddenInPrefight = hiddenInPrefight;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightFighterNamedInformations(output);
    }

    public serializeAs_GameFightFighterNamedInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightFighterInformations(output);
        output.writeUTF(this.name);
        this.status.serializeAs_PlayerStatus(output);
        output.writeVarShort(this.leagueId);
        output.writeInt(this.ladderPosition);
        output.writeBoolean(this.hiddenInPrefight);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightFighterNamedInformations(input);
    }

    private deserializeAs_GameFightFighterNamedInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
        this.status = new PlayerStatus();
        this.status.deserialize(input);
        this._leagueIdFunc(input);
        this._ladderPositionFunc(input);
        this._hiddenInPrefightFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _leagueIdFunc(input: ICustomDataInput)
    {
        this.leagueId = input.readVarShort();
    }

    private _ladderPositionFunc(input: ICustomDataInput)
    {
        this.ladderPosition = input.readInt();
    }

    private _hiddenInPrefightFunc(input: ICustomDataInput)
    {
        this.hiddenInPrefight = input.readBoolean();
    }

}