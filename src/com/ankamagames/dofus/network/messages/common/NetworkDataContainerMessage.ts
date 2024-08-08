import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class NetworkDataContainerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7777;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NetworkDataContainerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NetworkDataContainerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NetworkDataContainerMessage.endpointServer;
    }

    public initNetworkDataContainerMessage(content: Buffer = null): NetworkDataContainerMessage
    {
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
        this.serializeAs_NetworkDataContainerMessage(output);
    }

    public serializeAs_NetworkDataContainerMessage(output: ICustomDataOutput)
    {
        throw new Error("Not implemented");
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NetworkDataContainerMessage(input);
    }

    private deserializeAs_NetworkDataContainerMessage(input: ICustomDataInput)
    {
    }

}