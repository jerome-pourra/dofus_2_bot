import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ForgettableSpellEquipmentSlotsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 41;

	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ForgettableSpellEquipmentSlotsMessage.protocolId;
    }

    public initForgettableSpellEquipmentSlotsMessage(quantity: number = 0): ForgettableSpellEquipmentSlotsMessage
    {
        this.quantity = quantity;
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
        this.serializeAs_ForgettableSpellEquipmentSlotsMessage(output);
    }

    public serializeAs_ForgettableSpellEquipmentSlotsMessage(output: ICustomDataOutput)
    {
        output.writeVarShort(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ForgettableSpellEquipmentSlotsMessage(input);
    }

    private deserializeAs_ForgettableSpellEquipmentSlotsMessage(input: ICustomDataInput)
    {
        this._quantityFunc(input);
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarShort();
    }

}