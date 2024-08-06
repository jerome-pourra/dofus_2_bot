import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ChatSmileyRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9020;

	public smileyId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChatSmileyRequestMessage.protocolId;
    }

    public initChatSmileyRequestMessage(smileyId: number = 0): ChatSmileyRequestMessage
    {
        this.smileyId = smileyId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ChatSmileyRequestMessage(output);
    }

    public serializeAs_ChatSmileyRequestMessage(output: ICustomDataOutput)
    {
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element smileyId.");
        }
        output.writeVarShort(this.smileyId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChatSmileyRequestMessage(input);
    }

    private deserializeAs_ChatSmileyRequestMessage(input: ICustomDataInput)
    {
        this._smileyIdFunc(input);
    }

    private _smileyIdFunc(input: ICustomDataInput)
    {
        this.smileyId = input.readVarUhShort();
        if(this.smileyId < 0)
        {
            throw new Error("Forbidden value (" + this.smileyId + ") on element of ChatSmileyRequestMessage.smileyId.");
        }
    }

}