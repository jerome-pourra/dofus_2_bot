import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class CredentialsAcknowledgementMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7628;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CredentialsAcknowledgementMessage.protocolId;
    }

    public initCredentialsAcknowledgementMessage(): CredentialsAcknowledgementMessage
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
        this.serializeAs_CredentialsAcknowledgementMessage(output);
    }

    public serializeAs_CredentialsAcknowledgementMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CredentialsAcknowledgementMessage(input);
    }

    private deserializeAs_CredentialsAcknowledgementMessage(input: ICustomDataInput)
    {

    }

}