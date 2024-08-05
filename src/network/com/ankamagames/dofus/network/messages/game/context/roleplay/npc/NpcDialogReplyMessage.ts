import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class NpcDialogReplyMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4752;

	public replyId: number = 0;

    public constructor()
    {
        super();
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