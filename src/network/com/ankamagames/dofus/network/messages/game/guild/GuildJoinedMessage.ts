import { GuildInformations } from "./../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildJoinedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2814;

	public guildInfo: GuildInformations;
	public rankId: number = 0;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
    }

    public getMessageId()
    {
        return GuildJoinedMessage.protocolId;
    }

    public initGuildJoinedMessage(guildInfo: GuildInformations = null, rankId: number = 0): GuildJoinedMessage
    {
        this.guildInfo = guildInfo;
        this.rankId = rankId;
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
        this.serializeAs_GuildJoinedMessage(output);
    }

    public serializeAs_GuildJoinedMessage(output: ICustomDataOutput)
    {
        this.guildInfo.serializeAs_GuildInformations(output);
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element rankId.");
        }
        output.writeVarInt(this.rankId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildJoinedMessage(input);
    }

    private deserializeAs_GuildJoinedMessage(input: ICustomDataInput)
    {
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
        this._rankIdFunc(input);
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readVarUhInt();
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element of GuildJoinedMessage.rankId.");
        }
    }

}