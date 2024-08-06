import { ObjectEffectInteger } from "./../../../../../types/game/data/items/effects/ObjectEffectInteger";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachBonusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 427;

	public bonus: ObjectEffectInteger;

    public constructor()
    {
        super();
        this.bonus = new ObjectEffectInteger();
    }

    public getMessageId()
    {
        return BreachBonusMessage.protocolId;
    }

    public initBreachBonusMessage(bonus: ObjectEffectInteger = null): BreachBonusMessage
    {
        this.bonus = bonus;
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
        this.serializeAs_BreachBonusMessage(output);
    }

    public serializeAs_BreachBonusMessage(output: ICustomDataOutput)
    {
        this.bonus.serializeAs_ObjectEffectInteger(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachBonusMessage(input);
    }

    private deserializeAs_BreachBonusMessage(input: ICustomDataInput)
    {
        this.bonus = new ObjectEffectInteger();
        this.bonus.deserialize(input);
    }

}