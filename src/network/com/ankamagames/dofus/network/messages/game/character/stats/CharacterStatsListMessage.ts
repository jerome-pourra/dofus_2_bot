import { CharacterCharacteristicsInformations } from "./../../../../types/game/character/characteristic/CharacterCharacteristicsInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterStatsListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4395;

	public stats: CharacterCharacteristicsInformations;

    public constructor()
    {
        super();
        this.stats = new CharacterCharacteristicsInformations();
    }

    public getMessageId()
    {
        return CharacterStatsListMessage.protocolId;
    }

    public initCharacterStatsListMessage(stats: CharacterCharacteristicsInformations = null): CharacterStatsListMessage
    {
        this.stats = stats;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterStatsListMessage(output);
    }

    public serializeAs_CharacterStatsListMessage(output: ICustomDataOutput)
    {
        this.stats.serializeAs_CharacterCharacteristicsInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterStatsListMessage(input);
    }

    private deserializeAs_CharacterStatsListMessage(input: ICustomDataInput)
    {
        this.stats = new CharacterCharacteristicsInformations();
        this.stats.deserialize(input);
    }

}