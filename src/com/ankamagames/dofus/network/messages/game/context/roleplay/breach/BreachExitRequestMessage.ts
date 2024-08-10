import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachExitRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6366;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachExitRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachExitRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachExitRequestMessage.endpointServer;
    }

    public initBreachExitRequestMessage(): BreachExitRequestMessage
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
        this.serializeAs_BreachExitRequestMessage(output);
    }

    public serializeAs_BreachExitRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachExitRequestMessage(input);
    }

    private deserializeAs_BreachExitRequestMessage(input: ICustomDataInput)
    {

    }

}