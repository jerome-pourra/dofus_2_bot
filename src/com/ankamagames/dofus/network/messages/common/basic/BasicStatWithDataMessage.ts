import { StatisticData } from "./../../../types/common/basic/StatisticData";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { BasicStatMessage } from "./BasicStatMessage";

export class BasicStatWithDataMessage extends BasicStatMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6918;

	public datas: Array<StatisticData>;

    public constructor()
    {
        super();
        this.datas = Array<StatisticData>();
    }

    public getMessageId()
    {
        return BasicStatWithDataMessage.protocolId;
    }

    public initBasicStatWithDataMessage(timeSpent: number = 0, statId: number = 0, datas: Array<StatisticData> = null): BasicStatWithDataMessage
    {
        super.initBasicStatMessage(timeSpent,statId);
        this.datas = datas;
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
        this.serializeAs_BasicStatWithDataMessage(output);
    }

    public serializeAs_BasicStatWithDataMessage(output: ICustomDataOutput)
    {
        super.serializeAs_BasicStatMessage(output);
        output.writeShort(this.datas.length);
        for(var _i1: number = 0; _i1 < this.datas.length; _i1++)
        {
            output.writeShort((this.datas[_i1] as StatisticData).getTypeId());
            (this.datas[_i1] as StatisticData).serialize(output);
        }
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