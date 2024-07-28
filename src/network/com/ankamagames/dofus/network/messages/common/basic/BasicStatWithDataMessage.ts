import { StatisticData } from "./../../../types/common/basic/StatisticData";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { BasicStatMessage } from "./BasicStatMessage";

export class BasicStatWithDataMessage extends BasicStatMessage
{

	public static readonly protocolId: number = 6918;

	public datas: Array<StatisticData>;

    public constructor()
    {
        super();
        this.datas = Array<StatisticData>();
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
        this.deserializeAs_BasicStatWithDataMessage(input);
    }

    private deserializeAs_BasicStatWithDataMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: StatisticData;
        super.deserialize(input);
        let _datasLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _datasLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(StatisticData,_id1);
            _item1.deserialize(input);
            this.datas.push(_item1);
        }
    }

}