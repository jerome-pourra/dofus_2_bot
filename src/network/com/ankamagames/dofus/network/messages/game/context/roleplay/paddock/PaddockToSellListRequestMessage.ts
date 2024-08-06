import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PaddockToSellListRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 101;

	public pageIndex: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PaddockToSellListRequestMessage.protocolId;
    }

    public initPaddockToSellListRequestMessage(pageIndex: number = 0): PaddockToSellListRequestMessage
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
        this.serializeAs_PaddockToSellListRequestMessage(output);
    }

    public serializeAs_PaddockToSellListRequestMessage(output: ICustomDataOutput)
    {
        if(this.pageIndex < 0)
        {
            throw new Error("Forbidden value (" + this.pageIndex + ") on element pageIndex.");
        }
        output.writeVarShort(this.pageIndex);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockToSellListRequestMessage(input);
    }

    private deserializeAs_PaddockToSellListRequestMessage(input: ICustomDataInput)
    {
        this._pageIndexFunc(input);
    }

    private _pageIndexFunc(input: ICustomDataInput)
    {
        this.pageIndex = input.readVarUhShort();
        if(this.pageIndex < 0)
        {
            throw new Error("Forbidden value (" + this.pageIndex + ") on element of PaddockToSellListRequestMessage.pageIndex.");
        }
    }

}