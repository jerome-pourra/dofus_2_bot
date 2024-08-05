import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DocumentReadingBeginMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9246;

	public documentId: number = 0;

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
        this.deserializeAs_DocumentReadingBeginMessage(input);
    }

    private deserializeAs_DocumentReadingBeginMessage(input: ICustomDataInput)
    {
        this._documentIdFunc(input);
    }

    private _documentIdFunc(input: ICustomDataInput)
    {
        this.documentId = input.readVarUhShort();
        if(this.documentId < 0)
        {
            throw new Error("Forbidden value (" + this.documentId + ") on element of DocumentReadingBeginMessage.documentId.");
        }
    }

}