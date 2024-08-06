import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class NotificationResetMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4503;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NotificationResetMessage.protocolId;
    }

    public initNotificationResetMessage(): NotificationResetMessage
    {
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