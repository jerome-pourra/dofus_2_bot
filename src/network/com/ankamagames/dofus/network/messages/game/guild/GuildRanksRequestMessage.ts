import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildRanksRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5381;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildRanksRequestMessage.protocolId;
    }

    public initGuildRanksRequestMessage(): GuildRanksRequestMessage
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
        this.serializeAs_GuildRanksRequestMessage(output);
    }

    public serializeAs_GuildRanksRequestMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildRanksRequestMessage(input);
    }

    private deserializeAs_GuildRanksRequestMessage(input: ICustomDataInput)
    {

    }

}