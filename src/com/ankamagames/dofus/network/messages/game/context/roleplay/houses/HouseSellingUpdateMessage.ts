import { AccountTagInformation } from "./../../../../../types/common/AccountTagInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HouseSellingUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6800;

	public houseId: number = 0;
	public instanceId: number = 0;
	public secondHand: boolean = false;
	public realPrice: number = 0;
	public buyerTag: AccountTagInformation;

    public constructor()
    {
        super();
        this.buyerTag = new AccountTagInformation();
    }

    public getMessageId()
    {
        return HouseSellingUpdateMessage.protocolId;
    }

    public initHouseSellingUpdateMessage(houseId: number = 0, instanceId: number = 0, secondHand: boolean = false, realPrice: number = 0, buyerTag: AccountTagInformation = null): HouseSellingUpdateMessage
    {
        this.houseId = houseId;
        this.instanceId = instanceId;
        this.secondHand = secondHand;
        this.realPrice = realPrice;
        this.buyerTag = buyerTag;
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
        this.serializeAs_HouseSellingUpdateMessage(output);
    }

    public serializeAs_HouseSellingUpdateMessage(output: ICustomDataOutput)
    {
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
        }
        output.writeVarInt(this.houseId);
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element instanceId.");
        }
        output.writeInt(this.instanceId);
        output.writeBoolean(this.secondHand);
        if(this.realPrice < 0 || this.realPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.realPrice + ") on element realPrice.");
        }
        output.writeVarLong(this.realPrice);
        this.buyerTag.serializeAs_AccountTagInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseSellingUpdateMessage(input);
    }

    private deserializeAs_HouseSellingUpdateMessage(input: ICustomDataInput)
    {
        this._houseIdFunc(input);
        this._instanceIdFunc(input);
        this._secondHandFunc(input);
        this._realPriceFunc(input);
        this.buyerTag = new AccountTagInformation();
        this.buyerTag.deserialize(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HouseSellingUpdateMessage.houseId.");
        }
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseSellingUpdateMessage.instanceId.");
        }
    }

    private _secondHandFunc(input: ICustomDataInput)
    {
        this.secondHand = input.readBoolean();
    }

    private _realPriceFunc(input: ICustomDataInput)
    {
        this.realPrice = input.readVarUhLong();
        if(this.realPrice < 0 || this.realPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.realPrice + ") on element of HouseSellingUpdateMessage.realPrice.");
        }
    }

}