import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildUpdateApplicationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7570;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public applyText: string = "";
	public guildId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildUpdateApplicationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildUpdateApplicationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildUpdateApplicationMessage.endpointServer;
    }

    public initGuildUpdateApplicationMessage(applyText: string = "", guildId: number = 0): GuildUpdateApplicationMessage
    {
        this.applyText = applyText;
        this.guildId = guildId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GuildUpdateApplicationMessage(output);
    }

    public serializeAs_GuildUpdateApplicationMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.applyText);
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
        }
        output.writeVarInt(this.guildId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildUpdateApplicationMessage(input);
    }

    private deserializeAs_GuildUpdateApplicationMessage(input: ICustomDataInput)
    {
        this._applyTextFunc(input);
        this._guildIdFunc(input);
    }

    private _applyTextFunc(input: ICustomDataInput)
    {
        this.applyText = input.readUTF();
    }

    private _guildIdFunc(input: ICustomDataInput)
    {
        this.guildId = input.readVarUhInt();
        if(this.guildId < 0)
        {
            throw new Error("Forbidden value (" + this.guildId + ") on element of GuildUpdateApplicationMessage.guildId.");
        }
    }

}