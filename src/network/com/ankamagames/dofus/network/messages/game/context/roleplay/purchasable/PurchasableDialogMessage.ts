import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class PurchasableDialogMessage extends NetworkMessage
{

	public static readonly protocolId: number = 100;

	public buyOrSell: boolean = false;
	public purchasableId: number = 0;
	public purchasableInstanceId: number = 0;
	public secondHand: boolean = false;
	public price: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_PurchasableDialogMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.buyOrSell = BooleanByteWrapper.getFlag(_box0,0);
        this.secondHand = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_PurchasableDialogMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._purchasableIdFunc(input);
        this._purchasableInstanceIdFunc(input);
        this._priceFunc(input);
    }

    private _purchasableIdFunc(input: ICustomDataInput)
    {
        this.purchasableId = input.readDouble();
        if(this.purchasableId < 0 || this.purchasableId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.purchasableId + ") on element of PurchasableDialogMessage.purchasableId.");
        }
    }

    private _purchasableInstanceIdFunc(input: ICustomDataInput)
    {
        this.purchasableInstanceId = input.readInt();
        if(this.purchasableInstanceId < 0)
        {
            throw new Error("Forbidden value (" + this.purchasableInstanceId + ") on element of PurchasableDialogMessage.purchasableInstanceId.");
        }
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarUhLong();
        if(this.price < 0 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of PurchasableDialogMessage.price.");
        }
    }

}