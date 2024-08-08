import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildKickRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9738;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public kickedId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildKickRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildKickRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildKickRequestMessage.endpointServer;
    }

    public initGuildKickRequestMessage(kickedId: number = 0): GuildKickRequestMessage
    {
        this.kickedId = kickedId;
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
        this.serializeAs_GuildKickRequestMessage(output);
    }

    public serializeAs_GuildKickRequestMessage(output: ICustomDataOutput)
    {
        if(this.kickedId < 0 || this.kickedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kickedId + ") on element kickedId.");
        }
        output.writeVarLong(this.kickedId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildKickRequestMessage(input);
    }

    private deserializeAs_GuildKickRequestMessage(input: ICustomDataInput)
    {
        this._kickedIdFunc(input);
    }

    private _kickedIdFunc(input: ICustomDataInput)
    {
        this.kickedId = input.readVarUhLong();
        if(this.kickedId < 0 || this.kickedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kickedId + ") on element of GuildKickRequestMessage.kickedId.");
        }
    }

}