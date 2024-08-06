import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HouseToSellListRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6950;

	public pageIndex: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseToSellListRequestMessage.protocolId;
    }

    public initHouseToSellListRequestMessage(pageIndex: number = 0): HouseToSellListRequestMessage
    {
        this.pageIndex = pageIndex;
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
        this.serializeAs_HouseToSellListRequestMessage(output);
    }

    public serializeAs_HouseToSellListRequestMessage(output: ICustomDataOutput)
    {
        if(this.pageIndex < 0)
        {
            throw new Error("Forbidden value (" + this.pageIndex + ") on element pageIndex.");
        }
        output.writeVarShort(this.pageIndex);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseToSellListRequestMessage(input);
    }

    private deserializeAs_HouseToSellListRequestMessage(input: ICustomDataInput)
    {
        this._pageIndexFunc(input);
    }

    private _pageIndexFunc(input: ICustomDataInput)
    {
        this.pageIndex = input.readVarUhShort();
        if(this.pageIndex < 0)
        {
            throw new Error("Forbidden value (" + this.pageIndex + ") on element of HouseToSellListRequestMessage.pageIndex.");
        }
    }

}