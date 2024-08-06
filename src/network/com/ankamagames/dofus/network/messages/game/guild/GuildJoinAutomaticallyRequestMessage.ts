import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildJoinAutomaticallyRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2737;

	public guildId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildJoinAutomaticallyRequestMessage.protocolId;
    }

    public initGuildJoinAutomaticallyRequestMessage(guildId: number = 0): GuildJoinAutomaticallyRequestMessage
    {
        this.guildId = guildId;
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
        this.serializeAs_GuildJoinAutomaticallyRequestMessage(output);
    }

    public serializeAs_GuildJoinAutomaticallyRequestMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.guildId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildJoinAutomaticallyRequestMessage(input);
    }

    private deserializeAs_GuildJoinAutomaticallyRequestMessage(input: ICustomDataInput)
    {
        this._guildIdFunc(input);
    }

    private _guildIdFunc(input: ICustomDataInput)
    {
        this.guildId = input.readInt();
    }

}