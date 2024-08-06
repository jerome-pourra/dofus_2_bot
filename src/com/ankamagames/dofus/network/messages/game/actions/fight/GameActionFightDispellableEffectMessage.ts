import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { AbstractFightDispellableEffect } from "./../../../../types/game/actions/fight/AbstractFightDispellableEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightDispellableEffectMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3071;

	public effect: AbstractFightDispellableEffect;

    public constructor()
    {
        super();
        this.effect = new AbstractFightDispellableEffect();
    }

    public getMessageId()
    {
        return GameActionFightDispellableEffectMessage.protocolId;
    }

    public initGameActionFightDispellableEffectMessage(actionId: number = 0, sourceId: number = 0, effect: AbstractFightDispellableEffect = null): GameActionFightDispellableEffectMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.effect = effect;
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
        this.serializeAs_GameActionFightDispellableEffectMessage(output);
    }

    public serializeAs_GameActionFightDispellableEffectMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        output.writeShort(this.effect.getTypeId());
        this.effect.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightDispellableEffectMessage(input);
    }

    private deserializeAs_GameActionFightDispellableEffectMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.effect = ProtocolTypeManager.getInstance(AbstractFightDispellableEffect,_id1);
        this.effect.deserialize(input);
    }

}