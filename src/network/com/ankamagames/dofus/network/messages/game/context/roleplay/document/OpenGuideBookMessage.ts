import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class OpenGuideBookMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9970;

	public articleId: number = 0;

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