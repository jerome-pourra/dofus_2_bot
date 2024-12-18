import { AbstractFightDispellableEffect } from "./../../actions/fight/AbstractFightDispellableEffect";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class FightDispellableEffectExtendedInformations implements INetworkType
{

	public static readonly protocolId: number = 8836;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public actionId: number = 0;
	public sourceId: number = 0;
	public effect: AbstractFightDispellableEffect;

    public constructor()
    {
        this.effect = new AbstractFightDispellableEffect();
    }

    public getTypeId()
    {
        return FightDispellableEffectExtendedInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FightDispellableEffectExtendedInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FightDispellableEffectExtendedInformations.endpointServer;
    }

    public initFightDispellableEffectExtendedInformations(actionId: number = 0, sourceId: number = 0, effect: AbstractFightDispellableEffect = null): FightDispellableEffectExtendedInformations
    {
        this.actionId = actionId;
        this.sourceId = sourceId;
        this.effect = effect;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightDispellableEffectExtendedInformations(output);
    }

    public serializeAs_FightDispellableEffectExtendedInformations(output: ICustomDataOutput)
    {
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
        }
        output.writeVarShort(this.actionId);
        if(this.sourceId < -9007199254740992 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element sourceId.");
        }
        output.writeDouble(this.sourceId);
        output.writeShort(this.effect.getTypeId());
        this.effect.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightDispellableEffectExtendedInformations(input);
    }

    private deserializeAs_FightDispellableEffectExtendedInformations(input: ICustomDataInput)
    {
        this._actionIdFunc(input);
        this._sourceIdFunc(input);
        let _id3: number = input.readUnsignedShort();
        this.effect = ProtocolTypeManager.getInstance(AbstractFightDispellableEffect,_id3);
        this.effect.deserialize(input);
    }

    private _actionIdFunc(input: ICustomDataInput)
    {
        this.actionId = input.readVarUhShort();
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element of FightDispellableEffectExtendedInformations.actionId.");
        }
    }

    private _sourceIdFunc(input: ICustomDataInput)
    {
        this.sourceId = input.readDouble();
        if(this.sourceId < -9007199254740992 || this.sourceId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.sourceId + ") on element of FightDispellableEffectExtendedInformations.sourceId.");
        }
    }

}