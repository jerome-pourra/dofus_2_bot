import { GoldItem } from "./../../../../types/game/data/items/GoldItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GoldAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1521;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public gold: GoldItem;

    public constructor()
    {
        super();
        this.gold = new GoldItem();
    }

    public getMessageId()
    {
        return GoldAddedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GoldAddedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GoldAddedMessage.endpointServer;
    }

    public initGoldAddedMessage(gold: GoldItem = null): GoldAddedMessage
    {
        this.gold = gold;
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
        this.serializeAs_GoldAddedMessage(output);
    }

    public serializeAs_GoldAddedMessage(output: ICustomDataOutput)
    {
        this.gold.serializeAs_GoldItem(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GoldAddedMessage(input);
    }

    private deserializeAs_GoldAddedMessage(input: ICustomDataInput)
    {
        this.gold = new GoldItem();
        this.gold.deserialize(input);
    }

}