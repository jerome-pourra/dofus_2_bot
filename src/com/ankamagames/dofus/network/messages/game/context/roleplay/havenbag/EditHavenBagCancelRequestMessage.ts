import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class EditHavenBagCancelRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8480;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return EditHavenBagCancelRequestMessage.protocolId;
    }

    public initEditHavenBagCancelRequestMessage(): EditHavenBagCancelRequestMessage
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
        this.serializeAs_EditHavenBagCancelRequestMessage(output);
    }

    public serializeAs_EditHavenBagCancelRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_EditHavenBagCancelRequestMessage(input);
    }

    private deserializeAs_EditHavenBagCancelRequestMessage(input: ICustomDataInput)
    {

    }

}