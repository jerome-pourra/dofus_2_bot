import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PrismTeleportationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7355;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PrismTeleportationRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PrismTeleportationRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PrismTeleportationRequestMessage.endpointServer;
    }

    public initPrismTeleportationRequestMessage(): PrismTeleportationRequestMessage
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
        this.serializeAs_PrismTeleportationRequestMessage(output);
    }

    public serializeAs_PrismTeleportationRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PrismTeleportationRequestMessage(input);
    }

    private deserializeAs_PrismTeleportationRequestMessage(input: ICustomDataInput)
    {

    }

}