import { CharacterCharacteristics } from "./../../character/characteristic/CharacterCharacteristics";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GameFightCharacteristics
{

	public static readonly protocolId: number = 714;

	public characteristics: CharacterCharacteristics;
	public summoner: number = 0;
	public summoned: boolean = false;
	public invisibilityState: number = 0;

    public constructor()
    {
        this.characteristics = new CharacterCharacteristics();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightCharacteristics(input);
    }

    private deserializeAs_GameFightCharacteristics(input: ICustomDataInput)
    {
        this.characteristics = new CharacterCharacteristics();
        this.characteristics.deserialize(input);
        this._summonerFunc(input);
        this._summonedFunc(input);
        this._invisibilityStateFunc(input);
    }

    private _summonerFunc(input: ICustomDataInput)
    {
        this.summoner = input.readDouble();
        if(this.summoner < -9007199254740992 || this.summoner > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.summoner + ") on element of GameFightCharacteristics.summoner.");
        }
    }

    private _summonedFunc(input: ICustomDataInput)
    {
        this.summoned = input.readBoolean();
    }

    private _invisibilityStateFunc(input: ICustomDataInput)
    {
        this.invisibilityState = input.readByte();
        if(this.invisibilityState < 0)
        {
            throw new Error("Forbidden value (" + this.invisibilityState + ") on element of GameFightCharacteristics.invisibilityState.");
        }
    }

}