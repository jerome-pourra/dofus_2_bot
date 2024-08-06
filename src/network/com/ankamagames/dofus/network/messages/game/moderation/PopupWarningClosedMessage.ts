import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PopupWarningClosedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2757;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PopupWarningClosedMessage.protocolId;
    }

    public initPopupWarningClosedMessage(): PopupWarningClosedMessage
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
        this.serializeAs_PopupWarningClosedMessage(output);
    }

    public serializeAs_PopupWarningClosedMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PopupWarningClosedMessage(input);
    }

    private deserializeAs_PopupWarningClosedMessage(input: ICustomDataInput)
    {

    }

}