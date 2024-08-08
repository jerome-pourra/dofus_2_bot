import { UpdatedStorageTabInformation } from "./../../../types/game/inventory/UpdatedStorageTabInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildUpdateChestTabRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6464;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public tab: UpdatedStorageTabInformation;

    public constructor()
    {
        super();
        this.tab = new UpdatedStorageTabInformation();
    }

    public getMessageId()
    {
        return GuildUpdateChestTabRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildUpdateChestTabRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildUpdateChestTabRequestMessage.endpointServer;
    }

    public initGuildUpdateChestTabRequestMessage(tab: UpdatedStorageTabInformation = null): GuildUpdateChestTabRequestMessage
    {
        this.tab = tab;
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
        this.serializeAs_GuildUpdateChestTabRequestMessage(output);
    }

    public serializeAs_GuildUpdateChestTabRequestMessage(output: ICustomDataOutput)
    {
        this.tab.serializeAs_UpdatedStorageTabInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildUpdateChestTabRequestMessage(input);
    }

    private deserializeAs_GuildUpdateChestTabRequestMessage(input: ICustomDataInput)
    {
        this.tab = new UpdatedStorageTabInformation();
        this.tab.deserialize(input);
    }

}