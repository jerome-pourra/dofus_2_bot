import { CharacterCharacteristicsInformations } from "./../../../../types/game/character/characteristic/CharacterCharacteristicsInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class FighterStatsListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4354;

	public stats: CharacterCharacteristicsInformations;

    public constructor()
    {
        super();
        this.stats = new CharacterCharacteristicsInformations();
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
        this.deserializeAs_FighterStatsListMessage(input);
    }

    private deserializeAs_FighterStatsListMessage(input: ICustomDataInput)
    {
        this.stats = new CharacterCharacteristicsInformations();
        this.stats.deserialize(input);
    }

}