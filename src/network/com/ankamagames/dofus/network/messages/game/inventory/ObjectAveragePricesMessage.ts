import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ObjectAveragePricesMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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