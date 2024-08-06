import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class HouseBuyResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4284;

	public houseId: number = 0;
	public instanceId: number = 0;
	public secondHand: boolean = false;
	public bought: boolean = false;
	public realPrice: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseBuyResultMessage.protocolId;
    }

    public initHouseBuyResultMessage(houseId: number = 0, instanceId: number = 0, secondHand: boolean = false, bought: boolean = false, realPrice: number = 0): HouseBuyResultMessage
    {
        this.houseId = houseId;
        this.instanceId = instanceId;
        this.secondHand = secondHand;
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
        this.serializeAs_HouseBuyResultMessage(output);
    }

    public serializeAs_HouseBuyResultMessage(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.secondHand);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.bought);
        output.writeByte(_box0);
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
        if(this.realPrice < 0 || this.realPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.realPrice + ") on element realPrice.");
        }
        output.writeVarLong(this.realPrice);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseBuyResultMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.secondHand = BooleanByteWrapper.getFlag(_box0,0);
        this.bought = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_HouseBuyResultMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._houseIdFunc(input);
        this._instanceIdFunc(input);
        this._realPriceFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HouseBuyResultMessage.houseId.");
        }
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseBuyResultMessage.instanceId.");
        }
    }

    private _realPriceFunc(input: ICustomDataInput)
    {
        this.realPrice = input.readVarUhLong();
        if(this.realPrice < 0 || this.realPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.realPrice + ") on element of HouseBuyResultMessage.realPrice.");
        }
    }

}