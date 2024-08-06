import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class DocumentReadingBeginMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9246;

	public documentId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DocumentReadingBeginMessage.protocolId;
    }

    public initDocumentReadingBeginMessage(documentId: number = 0): DocumentReadingBeginMessage
    {
        this.documentId = documentId;
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
        this.serializeAs_DocumentReadingBeginMessage(output);
    }

    public serializeAs_DocumentReadingBeginMessage(output: ICustomDataOutput)
    {
        if(this.documentId < 0)
        {
            throw new Error("Forbidden value (" + this.documentId + ") on element documentId.");
        }
        output.writeVarShort(this.documentId);
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