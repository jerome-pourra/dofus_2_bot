import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ObjectUseMessage } from "./ObjectUseMessage";

export class ObjectUseMultipleMessage extends ObjectUseMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1310;

	public quantity: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ObjectUseMultipleMessage.protocolId;
    }

    public initObjectUseMultipleMessage(objectUID: number = 0, quantity: number = 0): ObjectUseMultipleMessage
    {
        super.initObjectUseMessage(objectUID);
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
        this.serializeAs_ObjectUseMultipleMessage(output);
    }

    public serializeAs_ObjectUseMultipleMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectUseMessage(output);
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
        }
        output.writeVarInt(this.quantity);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectUseMultipleMessage(input);
    }

    private deserializeAs_ObjectUseMultipleMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._quantityFunc(input);
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectUseMultipleMessage.quantity.");
        }
    }

}