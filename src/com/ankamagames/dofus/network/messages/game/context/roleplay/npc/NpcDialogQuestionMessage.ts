import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class NpcDialogQuestionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5481;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public messageId: number = 0;
	public dialogParams: Array<string>;
	public visibleReplies: Array<number>;

    public constructor()
    {
        super();
        this.dialogParams = Array<string>();
        this.visibleReplies = Array<number>();
    }

    public getMessageId()
    {
        return NpcDialogQuestionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NpcDialogQuestionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NpcDialogQuestionMessage.endpointServer;
    }

    public initNpcDialogQuestionMessage(messageId: number = 0, dialogParams: Array<string> = null, visibleReplies: Array<number> = null): NpcDialogQuestionMessage
    {
        this.messageId = messageId;
        this.dialogParams = dialogParams;
        this.visibleReplies = visibleReplies;
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
        this.serializeAs_NpcDialogQuestionMessage(output);
    }

    public serializeAs_NpcDialogQuestionMessage(output: ICustomDataOutput)
    {
        if(this.messageId < 0)
        {
            throw new Error("Forbidden value (" + this.messageId + ") on element messageId.");
        }
        output.writeVarInt(this.messageId);
        output.writeShort(this.dialogParams.length);
        for(var _i2: number = 0; _i2 < this.dialogParams.length; _i2++)
        {
            output.writeUTF(this.dialogParams[_i2]);
        }
        output.writeShort(this.visibleReplies.length);
        for(var _i3: number = 0; _i3 < this.visibleReplies.length; _i3++)
        {
            if(this.visibleReplies[_i3] < 0)
            {
                throw new Error("Forbidden value (" + this.visibleReplies[_i3] + ") on element 3 (starting at 1) of visibleReplies.");
            }
            output.writeVarInt(this.visibleReplies[_i3]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NpcDialogQuestionMessage(input);
    }

    private deserializeAs_NpcDialogQuestionMessage(input: ICustomDataInput)
    {
        let _val2: string;
        let _val3: number = 0;
        this._messageIdFunc(input);
        let _dialogParamsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _dialogParamsLen; _i2++)
        {
            _val2 = String(input.readUTF());
            this.dialogParams.push(_val2);
        }
        let _visibleRepliesLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _visibleRepliesLen; _i3++)
        {
            _val3 = input.readVarUhInt();
            if(_val3 < 0)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of visibleReplies.");
            }
            this.visibleReplies.push(_val3);
        }
    }

    private _messageIdFunc(input: ICustomDataInput)
    {
        this.messageId = input.readVarUhInt();
        if(this.messageId < 0)
        {
            throw new Error("Forbidden value (" + this.messageId + ") on element of NpcDialogQuestionMessage.messageId.");
        }
    }

}