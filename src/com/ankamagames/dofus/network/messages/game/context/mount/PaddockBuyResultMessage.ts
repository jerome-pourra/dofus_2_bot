import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class PaddockBuyResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5838;

	public paddockId: number = 0;
	public bought: boolean = false;
	public realPrice: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PaddockBuyResultMessage.protocolId;
    }

    public initPaddockBuyResultMessage(paddockId: number = 0, bought: boolean = false, realPrice: number = 0): PaddockBuyResultMessage
    {
        this.paddockId = paddockId;
        this.bought = bought;
        this.realPrice = realPrice;
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
        this.serializeAs_PaddockBuyResultMessage(output);
    }

    public serializeAs_PaddockBuyResultMessage(output: ICustomDataOutput)
    {
        if(this.paddockId < 0 || this.paddockId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.paddockId + ") on element paddockId.");
        }
        output.writeDouble(this.paddockId);
        output.writeBoolean(this.bought);
        if(this.realPrice < 0 || this.realPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.realPrice + ") on element realPrice.");
        }
        output.writeVarLong(this.realPrice);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockBuyResultMessage(input);
    }

    private deserializeAs_PaddockBuyResultMessage(input: ICustomDataInput)
    {
        this._paddockIdFunc(input);
        this._boughtFunc(input);
        this._realPriceFunc(input);
    }

    private _paddockIdFunc(input: ICustomDataInput)
    {
        this.paddockId = input.readDouble();
        if(this.paddockId < 0 || this.paddockId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.paddockId + ") on element of PaddockBuyResultMessage.paddockId.");
        }
    }

    private _boughtFunc(input: ICustomDataInput)
    {
        this.bought = input.readBoolean();
    }

    private _realPriceFunc(input: ICustomDataInput)
    {
        this.realPrice = input.readVarUhLong();
        if(this.realPrice < 0 || this.realPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.realPrice + ") on element of PaddockBuyResultMessage.realPrice.");
        }
    }

}