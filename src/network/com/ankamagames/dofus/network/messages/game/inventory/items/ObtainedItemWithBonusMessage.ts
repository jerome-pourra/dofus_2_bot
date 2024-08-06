import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ObtainedItemMessage } from "./ObtainedItemMessage";

export class ObtainedItemWithBonusMessage extends ObtainedItemMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7133;

	public bonusQuantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObtainedItemWithBonusMessage.protocolId;
    }

    public initObtainedItemWithBonusMessage(genericId: number = 0, baseQuantity: number = 0, bonusQuantity: number = 0): ObtainedItemWithBonusMessage
    {
        super.initObtainedItemMessage(genericId,baseQuantity);
        this.bonusQuantity = bonusQuantity;
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
        this.serializeAs_ObtainedItemWithBonusMessage(output);
    }

    public serializeAs_ObtainedItemWithBonusMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ObtainedItemMessage(output);
        if(this.bonusQuantity < 0)
        {
            throw new Error("Forbidden value (" + this.bonusQuantity + ") on element bonusQuantity.");
        }
        output.writeVarInt(this.bonusQuantity);
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