import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInvitationStateRecrutedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9851;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public invitationState: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuildInvitationStateRecrutedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildInvitationStateRecrutedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildInvitationStateRecrutedMessage.endpointServer;
    }

    public initGuildInvitationStateRecrutedMessage(invitationState: number = 0): GuildInvitationStateRecrutedMessage
    {
        this.invitationState = invitationState;
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
        this.serializeAs_GuildInvitationStateRecrutedMessage(output);
    }

    public serializeAs_GuildInvitationStateRecrutedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.invitationState);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildInvitationStateRecrutedMessage(input);
    }

    private deserializeAs_GuildInvitationStateRecrutedMessage(input: ICustomDataInput)
    {
        this._invitationStateFunc(input);
    }

    private _invitationStateFunc(input: ICustomDataInput)
    {
        this.invitationState = input.readByte();
        if(this.invitationState < 0)
        {
            throw new Error("Forbidden value (" + this.invitationState + ") on element of GuildInvitationStateRecrutedMessage.invitationState.");
        }
    }

}