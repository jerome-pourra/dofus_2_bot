import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class NpcDialogQuestionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5481;

	public messageId: number = 0;
	public dialogParams: Array<string>;
	public visibleReplies: Array<number>;

    public constructor()
    {
        super();
        this.dialogParams = Array<string>();
        this.visibleReplies = Array<number>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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