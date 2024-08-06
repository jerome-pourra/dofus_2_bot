import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HouseSellRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1606;

	public instanceId: number = 0;
	public amount: number = 0;
	public forSale: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HouseSellRequestMessage.protocolId;
    }

    public initHouseSellRequestMessage(instanceId: number = 0, amount: number = 0, forSale: boolean = false): HouseSellRequestMessage
    {
        this.instanceId = instanceId;
        this.amount = amount;
        this.forSale = forSale;
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
        this.serializeAs_HouseSellRequestMessage(output);
    }

    public serializeAs_HouseSellRequestMessage(output: ICustomDataOutput)
    {
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element instanceId.");
        }
        output.writeInt(this.instanceId);
        if(this.amount < 0 || this.amount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element amount.");
        }
        output.writeVarLong(this.amount);
        output.writeBoolean(this.forSale);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseSellRequestMessage(input);
    }

    private deserializeAs_HouseSellRequestMessage(input: ICustomDataInput)
    {
        this._instanceIdFunc(input);
        this._amountFunc(input);
        this._forSaleFunc(input);
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseSellRequestMessage.instanceId.");
        }
    }

    private _amountFunc(input: ICustomDataInput)
    {
        this.amount = input.readVarUhLong();
        if(this.amount < 0 || this.amount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element of HouseSellRequestMessage.amount.");
        }
    }

    private _forSaleFunc(input: ICustomDataInput)
    {
        this.forSale = input.readBoolean();
    }

}