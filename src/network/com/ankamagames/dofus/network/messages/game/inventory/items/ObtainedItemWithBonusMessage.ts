import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ObtainedItemMessage } from "./ObtainedItemMessage";

export class ObtainedItemWithBonusMessage extends ObtainedItemMessage
{

	public static readonly protocolId: number = 7133;

	public bonusQuantity: number = 0;

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
        this.deserializeAs_ObtainedItemWithBonusMessage(input);
    }

    private deserializeAs_ObtainedItemWithBonusMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._bonusQuantityFunc(input);
    }

    private _bonusQuantityFunc(input: ICustomDataInput)
    {
        this.bonusQuantity = input.readVarUhInt();
        if(this.bonusQuantity < 0)
        {
            throw new Error("Forbidden value (" + this.bonusQuantity + ") on element of ObtainedItemWithBonusMessage.bonusQuantity.");
        }
    }

}