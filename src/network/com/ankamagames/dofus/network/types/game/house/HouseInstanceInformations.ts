import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class HouseInstanceInformations
{

	public static readonly protocolId: number = 3219;

	public instanceId: number = 0;
	public secondHand: boolean = false;
	public isLocked: boolean = false;
	public ownerTag: AccountTagInformation;
	public hasOwner: boolean = false;
	public price: number = 0;
	public isSaleLocked: boolean = false;
	public isAdminLocked: boolean = false;

    public constructor()
    {
        this.ownerTag = new AccountTagInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseInstanceInformations(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.secondHand = BooleanByteWrapper.getFlag(_box0,0);
        this.isLocked = BooleanByteWrapper.getFlag(_box0,1);
        this.hasOwner = BooleanByteWrapper.getFlag(_box0,2);
        this.isSaleLocked = BooleanByteWrapper.getFlag(_box0,3);
        this.isAdminLocked = BooleanByteWrapper.getFlag(_box0,4);
    }

    private deserializeAs_HouseInstanceInformations(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._instanceIdFunc(input);
        this.ownerTag = new AccountTagInformation();
        this.ownerTag.deserialize(input);
        this._priceFunc(input);
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseInstanceInformations.instanceId.");
        }
    }

    private _priceFunc(input: ICustomDataInput)
    {
        this.price = input.readVarLong();
        if(this.price < -9007199254740992 || this.price > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.price + ") on element of HouseInstanceInformations.price.");
        }
    }

}