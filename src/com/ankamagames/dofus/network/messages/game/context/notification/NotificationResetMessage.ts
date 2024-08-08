import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class NotificationResetMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4503;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NotificationResetMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NotificationResetMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NotificationResetMessage.endpointServer;
    }

    public initNotificationResetMessage(): NotificationResetMessage
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
        this.serializeAs_NotificationResetMessage(output);
    }

    public serializeAs_NotificationResetMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NotificationResetMessage(input);
    }

    private deserializeAs_NotificationResetMessage(input: ICustomDataInput)
    {

    }

}