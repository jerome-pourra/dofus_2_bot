import { ActorAlignmentInformations } from "./../../character/alignment/ActorAlignmentInformations";
import { PlayerStatus } from "./../../character/status/PlayerStatus";
import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterNamedInformations } from "./GameFightFighterNamedInformations";

export class GameFightCharacterInformations extends GameFightFighterNamedInformations
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