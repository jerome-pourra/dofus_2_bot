import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildLeftMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3266;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildLeftMessage.protocolId;
    }

    public initGuildLeftMessage(): GuildLeftMessage
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
        this.serializeAs_GuildLeftMessage(output);
    }

    public serializeAs_GuildLeftMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildLeftMessage(input);
    }

    private deserializeAs_GuildLeftMessage(input: ICustomDataInput)
    {

    }

}