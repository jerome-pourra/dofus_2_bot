import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class StartListenNuggetsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4559;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return StartListenNuggetsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return StartListenNuggetsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return StartListenNuggetsMessage.endpointServer;
    }

    public initStartListenNuggetsMessage(): StartListenNuggetsMessage
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
        this.serializeAs_StartListenNuggetsMessage(output);
    }

    public serializeAs_StartListenNuggetsMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_StartListenNuggetsMessage(input);
    }

    private deserializeAs_StartListenNuggetsMessage(input: ICustomDataInput)
    {

    }

}