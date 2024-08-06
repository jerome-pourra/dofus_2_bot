import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiConsumeBufferRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2127;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiConsumeBufferRequestMessage.protocolId;
    }

    public initHaapiConsumeBufferRequestMessage(): HaapiConsumeBufferRequestMessage
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
        this.serializeAs_HaapiConsumeBufferRequestMessage(output);
    }

    public serializeAs_HaapiConsumeBufferRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiConsumeBufferRequestMessage(input);
    }

    private deserializeAs_HaapiConsumeBufferRequestMessage(input: ICustomDataInput)
    {

    }

}