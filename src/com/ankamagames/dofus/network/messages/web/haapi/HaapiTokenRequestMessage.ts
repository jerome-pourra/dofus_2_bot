import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiTokenRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5934;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiTokenRequestMessage.protocolId;
    }

    public initHaapiTokenRequestMessage(): HaapiTokenRequestMessage
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
        this.serializeAs_HaapiTokenRequestMessage(output);
    }

    public serializeAs_HaapiTokenRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiTokenRequestMessage(input);
    }

    private deserializeAs_HaapiTokenRequestMessage(input: ICustomDataInput)
    {

    }

}