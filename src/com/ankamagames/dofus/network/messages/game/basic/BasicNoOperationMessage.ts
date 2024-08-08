import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicNoOperationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2887;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicNoOperationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BasicNoOperationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BasicNoOperationMessage.endpointServer;
    }

    public initBasicNoOperationMessage(): BasicNoOperationMessage
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
        this.serializeAs_BasicNoOperationMessage(output);
    }

    public serializeAs_BasicNoOperationMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicNoOperationMessage(input);
    }

    private deserializeAs_BasicNoOperationMessage(input: ICustomDataInput)
    {

    }

}