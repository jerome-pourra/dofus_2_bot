import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GroupTeleportPlayerAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1816;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public accept: boolean = false;
	public requesterId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GroupTeleportPlayerAnswerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GroupTeleportPlayerAnswerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GroupTeleportPlayerAnswerMessage.endpointServer;
    }

    public initGroupTeleportPlayerAnswerMessage(accept: boolean = false, requesterId: number = 0): GroupTeleportPlayerAnswerMessage
    {
        this.accept = accept;
        this.requesterId = requesterId;
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
        this.serializeAs_GroupTeleportPlayerAnswerMessage(output);
    }

    public serializeAs_GroupTeleportPlayerAnswerMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.accept);
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element requesterId.");
        }
        output.writeVarLong(this.requesterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GroupTeleportPlayerAnswerMessage(input);
    }

    private deserializeAs_GroupTeleportPlayerAnswerMessage(input: ICustomDataInput)
    {
        this._acceptFunc(input);
        this._requesterIdFunc(input);
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

    private _requesterIdFunc(input: ICustomDataInput)
    {
        this.requesterId = input.readVarUhLong();
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element of GroupTeleportPlayerAnswerMessage.requesterId.");
        }
    }

}