import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class NpcDialogReplyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4752;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public replyId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NpcDialogReplyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NpcDialogReplyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NpcDialogReplyMessage.endpointServer;
    }

    public initNpcDialogReplyMessage(replyId: number = 0): NpcDialogReplyMessage
    {
        this.replyId = replyId;
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
        this.serializeAs_NpcDialogReplyMessage(output);
    }

    public serializeAs_NpcDialogReplyMessage(output: ICustomDataOutput)
    {
        if(this.replyId < 0)
        {
            throw new Error("Forbidden value (" + this.replyId + ") on element replyId.");
        }
        output.writeVarInt(this.replyId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NpcDialogReplyMessage(input);
    }

    private deserializeAs_NpcDialogReplyMessage(input: ICustomDataInput)
    {
        this._replyIdFunc(input);
    }

    private _replyIdFunc(input: ICustomDataInput)
    {
        this.replyId = input.readVarUhInt();
        if(this.replyId < 0)
        {
            throw new Error("Forbidden value (" + this.replyId + ") on element of NpcDialogReplyMessage.replyId.");
        }
    }

}