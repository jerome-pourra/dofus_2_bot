import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildMemberStopWarnOnConnectionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8625;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildMemberStopWarnOnConnectionMessage.protocolId;
    }

    public initGuildMemberStopWarnOnConnectionMessage(): GuildMemberStopWarnOnConnectionMessage
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
        this.serializeAs_GuildMemberStopWarnOnConnectionMessage(output);
    }

    public serializeAs_GuildMemberStopWarnOnConnectionMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildMemberStopWarnOnConnectionMessage(input);
    }

    private deserializeAs_GuildMemberStopWarnOnConnectionMessage(input: ICustomDataInput)
    {

    }

}