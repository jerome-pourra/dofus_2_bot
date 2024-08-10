import { CharacterCharacteristics } from "./../../character/characteristic/CharacterCharacteristics";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GameFightCharacteristics implements INetworkType
{

	public static readonly protocolId: number = 714;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public characteristics: CharacterCharacteristics;
	public summoner: number = 0;
	public summoned: boolean = false;
	public invisibilityState: number = 0;

    public constructor()
    {
        this.characteristics = new CharacterCharacteristics();
    }

    public getTypeId()
    {
        return GameFightCharacteristics.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightCharacteristics.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightCharacteristics.endpointServer;
    }

    public initGameFightCharacteristics(characteristics: CharacterCharacteristics = null, summoner: number = 0, summoned: boolean = false, invisibilityState: number = 0): GameFightCharacteristics
    {
        this.characteristics = characteristics;
        this.summoner = summoner;
        this.summoned = summoned;
        this.invisibilityState = invisibilityState;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightCharacteristics(output);
    }

    public serializeAs_GameFightCharacteristics(output: ICustomDataOutput)
    {
        this.characteristics.serializeAs_CharacterCharacteristics(output);
        if(this.summoner < -9007199254740992 || this.summoner > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.summoner + ") on element summoner.");
        }
        output.writeDouble(this.summoner);
        output.writeBoolean(this.summoned);
        output.writeByte(this.invisibilityState);
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