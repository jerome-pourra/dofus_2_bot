import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class PaginationAnswerAbstractMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1468;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public offset: number = 0;
	public count: number = 0;
	public total: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PaginationAnswerAbstractMessage.protocolId;
    }

    public isEndpointClient()
    {
        return PaginationAnswerAbstractMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return PaginationAnswerAbstractMessage.endpointServer;
    }

    public initPaginationAnswerAbstractMessage(offset: number = 0, count: number = 0, total: number = 0): PaginationAnswerAbstractMessage
    {
        this.offset = offset;
        this.count = count;
        this.total = total;
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
        this.serializeAs_PaginationAnswerAbstractMessage(output);
    }

    public serializeAs_PaginationAnswerAbstractMessage(output: ICustomDataOutput)
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
        if(this.total < 0 || this.total > 4294967295)
        {
            throw new Error("Forbidden value (" + this.total + ") on element total.");
        }
        output.writeUnsignedInt(this.total);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaginationAnswerAbstractMessage(input);
    }

    private deserializeAs_PaginationAnswerAbstractMessage(input: ICustomDataInput)
    {
        this._offsetFunc(input);
        this._countFunc(input);
        this._totalFunc(input);
    }

    private _offsetFunc(input: ICustomDataInput)
    {
        this.offset = input.readDouble();
        if(this.offset < 0 || this.offset > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.offset + ") on element of PaginationAnswerAbstractMessage.offset.");
        }
    }

    private _countFunc(input: ICustomDataInput)
    {
        this.count = input.readUnsignedInt();
        if(this.count < 0 || this.count > 4294967295)
        {
            throw new Error("Forbidden value (" + this.count + ") on element of PaginationAnswerAbstractMessage.count.");
        }
    }

    private _totalFunc(input: ICustomDataInput)
    {
        this.total = input.readUnsignedInt();
        if(this.total < 0 || this.total > 4294967295)
        {
            throw new Error("Forbidden value (" + this.total + ") on element of PaginationAnswerAbstractMessage.total.");
        }
    }

}