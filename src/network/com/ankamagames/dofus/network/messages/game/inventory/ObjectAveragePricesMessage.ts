import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ObjectAveragePricesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2729;

	public ids: Array<number>;
	public avgPrices: Array<number>;

    public constructor()
    {
        super();
        this.ids = Array<number>();
        this.avgPrices = Array<number>();
    }

    public getMessageId()
    {
        return ObjectAveragePricesMessage.protocolId;
    }

    public initObjectAveragePricesMessage(ids: Array<number> = null, avgPrices: Array<number> = null): ObjectAveragePricesMessage
    {
        this.ids = ids;
        this.avgPrices = avgPrices;
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
        this.serializeAs_ObjectAveragePricesMessage(output);
    }

    public serializeAs_ObjectAveragePricesMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.ids.length);
        for(var _i1: number = 0; _i1 < this.ids.length; _i1++)
        {
            if(this.ids[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.ids[_i1] + ") on element 1 (starting at 1) of ids.");
            }
            output.writeVarInt(this.ids[_i1]);
        }
        output.writeShort(this.avgPrices.length);
        for(var _i2: number = 0; _i2 < this.avgPrices.length; _i2++)
        {
            if(this.avgPrices[_i2] < 0 || this.avgPrices[_i2] > 9007199254740992)
            {
                throw new Error("Forbidden value (" + this.avgPrices[_i2] + ") on element 2 (starting at 1) of avgPrices.");
            }
            output.writeVarLong(this.avgPrices[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectAveragePricesMessage(input);
    }

    private deserializeAs_ObjectAveragePricesMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = NaN;
        let _idsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _idsLen; _i1++)
        {
            _val1 = input.readVarUhInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of ids.");
            }
            this.ids.push(_val1);
        }
        let _avgPricesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _avgPricesLen; _i2++)
        {
            _val2 = input.readVarUhLong();
            if(_val2 < 0 || _val2 > 9007199254740992)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of avgPrices.");
            }
            this.avgPrices.push(_val2);
        }
    }

}