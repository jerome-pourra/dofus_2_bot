import { CharacterCharacteristicsInformations } from "./../../../../types/game/character/characteristic/CharacterCharacteristicsInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class FighterStatsListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4354;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public stats: CharacterCharacteristicsInformations;

    public constructor()
    {
        super();
        this.stats = new CharacterCharacteristicsInformations();
    }

    public getMessageId()
    {
        return FighterStatsListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FighterStatsListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FighterStatsListMessage.endpointServer;
    }

    public initFighterStatsListMessage(stats: CharacterCharacteristicsInformations = null): FighterStatsListMessage
    {
        this.stats = stats;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FighterStatsListMessage(output);
    }

    public serializeAs_FighterStatsListMessage(output: ICustomDataOutput)
    {
        this.stats.serializeAs_CharacterCharacteristicsInformations(output);
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