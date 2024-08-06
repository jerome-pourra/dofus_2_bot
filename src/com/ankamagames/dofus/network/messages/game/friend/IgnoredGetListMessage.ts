import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class IgnoredGetListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8068;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return IgnoredGetListMessage.protocolId;
    }

    public initIgnoredGetListMessage(): IgnoredGetListMessage
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
        this.serializeAs_IgnoredGetListMessage(output);
    }

    public serializeAs_IgnoredGetListMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IgnoredGetListMessage(input);
    }

    private deserializeAs_IgnoredGetListMessage(input: ICustomDataInput)
    {

    }

}