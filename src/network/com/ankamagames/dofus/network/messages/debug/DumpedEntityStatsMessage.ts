import { CharacterCharacteristics } from "./../../types/game/character/characteristic/CharacterCharacteristics";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class DumpedEntityStatsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2370;

	public actorId: number = 0;
	public stats: CharacterCharacteristics;

    public constructor()
    {
        super();
        this.stats = new CharacterCharacteristics();
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
        this.deserializeAs_DumpedEntityStatsMessage(input);
    }

    private deserializeAs_DumpedEntityStatsMessage(input: ICustomDataInput)
    {
        this._actorIdFunc(input);
        this.stats = new CharacterCharacteristics();
        this.stats.deserialize(input);
    }

    private _actorIdFunc(input: ICustomDataInput)
    {
        this.actorId = input.readDouble();
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element of DumpedEntityStatsMessage.actorId.");
        }
    }

}