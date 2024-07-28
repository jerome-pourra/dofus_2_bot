import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ChatSmileyMessage } from "./ChatSmileyMessage";

export class LocalizedChatSmileyMessage extends ChatSmileyMessage
{

	public static readonly protocolId: number = 8626;

	public cellId: number = 0;

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
        this.deserializeAs_LocalizedChatSmileyMessage(input);
    }

    private deserializeAs_LocalizedChatSmileyMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._cellIdFunc(input);
    }

    private _cellIdFunc(input: ICustomDataInput)
    {
        this.cellId = input.readVarUhShort();
        if(this.cellId < 0 || this.cellId > 559)
        {
            throw new Error("Forbidden value (" + this.cellId + ") on element of LocalizedChatSmileyMessage.cellId.");
        }
    }

}