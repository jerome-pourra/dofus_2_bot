import { DecraftedItemStackInfo } from "./../../../../types/game/context/roleplay/job/DecraftedItemStackInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DecraftResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3985;

	public results: Array<DecraftedItemStackInfo>;

    public constructor()
    {
        super();
        this.results = Array<DecraftedItemStackInfo>();
    }

    public getMessageId()
    {
        return DecraftResultMessage.protocolId;
    }

    public initDecraftResultMessage(results: Array<DecraftedItemStackInfo> = null): DecraftResultMessage
    {
        this.results = results;
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
        this.serializeAs_DecraftResultMessage(output);
    }

    public serializeAs_DecraftResultMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.results.length);
        for(var _i1: number = 0; _i1 < this.results.length; _i1++)
        {
            (this.results[_i1] as DecraftedItemStackInfo).serializeAs_DecraftedItemStackInfo(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DecraftResultMessage(input);
    }

    private deserializeAs_DecraftResultMessage(input: ICustomDataInput)
    {
        let _item1: DecraftedItemStackInfo;
        let _resultsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _resultsLen; _i1++)
        {
            _item1 = new DecraftedItemStackInfo();
            _item1.deserialize(input);
            this.results.push(_item1);
        }
    }

}