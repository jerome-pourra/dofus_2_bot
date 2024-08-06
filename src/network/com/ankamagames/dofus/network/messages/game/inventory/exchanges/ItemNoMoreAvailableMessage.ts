import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ItemNoMoreAvailableMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2498;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ItemNoMoreAvailableMessage.protocolId;
    }

    public initItemNoMoreAvailableMessage(): ItemNoMoreAvailableMessage
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
        this.serializeAs_ItemNoMoreAvailableMessage(output);
    }

    public serializeAs_ItemNoMoreAvailableMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ItemNoMoreAvailableMessage(input);
    }

    private deserializeAs_ItemNoMoreAvailableMessage(input: ICustomDataInput)
    {

    }

}