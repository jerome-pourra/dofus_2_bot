import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class PaginationRequestAbstractMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6633;

	public offset: number = 0;
	public count: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PaginationRequestAbstractMessage.protocolId;
    }

    public initPaginationRequestAbstractMessage(offset: number = 0, count: number = 0): PaginationRequestAbstractMessage
    {
        this.offset = offset;
        this.count = count;
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
        this.serializeAs_PaginationRequestAbstractMessage(output);
    }

    public serializeAs_PaginationRequestAbstractMessage(output: ICustomDataOutput)
    {
        if(this.offset < 0 || this.offset > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.offset + ") on element offset.");
        }
        output.writeDouble(this.offset);
        if(this.count < 0 || this.count > 4294967295)
        {
            throw new Error("Forbidden value (" + this.count + ") on element count.");
        }
        output.writeUnsignedInt(this.count);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaginationRequestAbstractMessage(input);
    }

    private deserializeAs_PaginationRequestAbstractMessage(input: ICustomDataInput)
    {
        this._offsetFunc(input);
        this._countFunc(input);
    }

    private _offsetFunc(input: ICustomDataInput)
    {
        this.offset = input.readDouble();
        if(this.offset < 0 || this.offset > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.offset + ") on element of PaginationRequestAbstractMessage.offset.");
        }
    }

    private _countFunc(input: ICustomDataInput)
    {
        this.count = input.readUnsignedInt();
        if(this.count < 0 || this.count > 4294967295)
        {
            throw new Error("Forbidden value (" + this.count + ") on element of PaginationRequestAbstractMessage.count.");
        }
    }

}