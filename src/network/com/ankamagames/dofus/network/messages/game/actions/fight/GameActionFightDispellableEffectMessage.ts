import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { AbstractFightDispellableEffect } from "./../../../../types/game/actions/fight/AbstractFightDispellableEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightDispellableEffectMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 3071;

	public effect: AbstractFightDispellableEffect;

    public constructor()
    {
        super();
        this.effect = new AbstractFightDispellableEffect();
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