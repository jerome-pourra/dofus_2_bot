import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class OpenHavenBagFurnitureSequenceRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7398;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return OpenHavenBagFurnitureSequenceRequestMessage.protocolId;
    }

    public initOpenHavenBagFurnitureSequenceRequestMessage(): OpenHavenBagFurnitureSequenceRequestMessage
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
        this.serializeAs_OpenHavenBagFurnitureSequenceRequestMessage(output);
    }

    public serializeAs_OpenHavenBagFurnitureSequenceRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_OpenHavenBagFurnitureSequenceRequestMessage(input);
    }

    private deserializeAs_OpenHavenBagFurnitureSequenceRequestMessage(input: ICustomDataInput)
    {

    }

}