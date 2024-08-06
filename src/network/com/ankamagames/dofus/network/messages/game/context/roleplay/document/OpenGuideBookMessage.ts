import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class OpenGuideBookMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9970;

	public articleId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return OpenGuideBookMessage.protocolId;
    }

    public initOpenGuideBookMessage(articleId: number = 0): OpenGuideBookMessage
    {
        this.articleId = articleId;
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
        this.serializeAs_OpenGuideBookMessage(output);
    }

    public serializeAs_OpenGuideBookMessage(output: ICustomDataOutput)
    {
        if(this.articleId < 0)
        {
            throw new Error("Forbidden value (" + this.articleId + ") on element articleId.");
        }
        output.writeVarShort(this.articleId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_OpenGuideBookMessage(input);
    }

    private deserializeAs_OpenGuideBookMessage(input: ICustomDataInput)
    {
        this._articleIdFunc(input);
    }

    private _articleIdFunc(input: ICustomDataInput)
    {
        this.articleId = input.readVarUhShort();
        if(this.articleId < 0)
        {
            throw new Error("Forbidden value (" + this.articleId + ") on element of OpenGuideBookMessage.articleId.");
        }
    }

}