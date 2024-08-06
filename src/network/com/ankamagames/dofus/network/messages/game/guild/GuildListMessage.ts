import { GuildInformations } from "./../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 669;

	public guilds: Array<GuildInformations>;

    public constructor()
    {
        super();
        this.guilds = Array<GuildInformations>();
    }

    public getMessageId()
    {
        return GuildListMessage.protocolId;
    }

    public initGuildListMessage(guilds: Array<GuildInformations> = null): GuildListMessage
    {
        this.guilds = guilds;
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
        this.serializeAs_GuildListMessage(output);
    }

    public serializeAs_GuildListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.guilds.length);
        for(var _i1: number = 0; _i1 < this.guilds.length; _i1++)
        {
            (this.guilds[_i1] as GuildInformations).serializeAs_GuildInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildListMessage(input);
    }

    private deserializeAs_GuildListMessage(input: ICustomDataInput)
    {
        let _item1: GuildInformations;
        let _guildsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _guildsLen; _i1++)
        {
            _item1 = new GuildInformations();
            _item1.deserialize(input);
            this.guilds.push(_item1);
        }
    }

}