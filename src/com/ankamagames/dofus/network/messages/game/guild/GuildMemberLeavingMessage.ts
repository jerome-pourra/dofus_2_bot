import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildMemberLeavingMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7246;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public kicked: boolean = false;
	public memberId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildMemberLeavingMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildMemberLeavingMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildMemberLeavingMessage.endpointServer;
    }

    public initGuildMemberLeavingMessage(kicked: boolean = false, memberId: number = 0): GuildMemberLeavingMessage
    {
        this.kicked = kicked;
        this.memberId = memberId;
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
        this.serializeAs_GuildMemberLeavingMessage(output);
    }

    public serializeAs_GuildMemberLeavingMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.kicked);
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
        }
        output.writeVarLong(this.memberId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildMemberLeavingMessage(input);
    }

    private deserializeAs_GuildMemberLeavingMessage(input: ICustomDataInput)
    {
        this._kickedFunc(input);
        this._memberIdFunc(input);
    }

    private _kickedFunc(input: ICustomDataInput)
    {
        this.kicked = input.readBoolean();
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of GuildMemberLeavingMessage.memberId.");
        }
    }

}