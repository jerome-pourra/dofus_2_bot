import { PlayerStatus } from "./../../character/status/PlayerStatus";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterInformations } from "./GameFightFighterInformations";

export class GameFightFighterNamedInformations extends GameFightFighterInformations
{

	public static readonly protocolId: number = 4176;

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