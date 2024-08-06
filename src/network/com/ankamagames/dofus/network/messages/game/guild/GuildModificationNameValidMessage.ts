import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildModificationNameValidMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5733;

	public guildName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildModificationNameValidMessage.protocolId;
    }

    public initGuildModificationNameValidMessage(guildName: string = ""): GuildModificationNameValidMessage
    {
        this.guildName = guildName;
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
        this.serializeAs_GuildModificationNameValidMessage(output);
    }

    public serializeAs_GuildModificationNameValidMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.guildName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildModificationNameValidMessage(input);
    }

    private deserializeAs_GuildModificationNameValidMessage(input: ICustomDataInput)
    {
        this._guildNameFunc(input);
    }

    private _guildNameFunc(input: ICustomDataInput)
    {
        this.guildName = input.readUTF();
    }

}