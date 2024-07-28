import { GameFightCharacteristics } from "./../../../../types/game/context/fight/GameFightCharacteristics";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RefreshCharacterStatsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2710;

	public fighterId: number = 0;
	public stats: GameFightCharacteristics;

    public constructor()
    {
        super();
        this.stats = new GameFightCharacteristics();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RefreshCharacterStatsMessage(input);
    }

    private deserializeAs_RefreshCharacterStatsMessage(input: ICustomDataInput)
    {
        this._fighterIdFunc(input);
        this.stats = new GameFightCharacteristics();
        this.stats.deserialize(input);
    }

    private _fighterIdFunc(input: ICustomDataInput)
    {
        this.fighterId = input.readDouble();
        if(this.fighterId < -9007199254740992 || this.fighterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fighterId + ") on element of RefreshCharacterStatsMessage.fighterId.");
        }
    }

}