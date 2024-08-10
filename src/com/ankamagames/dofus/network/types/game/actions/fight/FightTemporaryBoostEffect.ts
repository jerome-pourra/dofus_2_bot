import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AbstractFightDispellableEffect } from "./AbstractFightDispellableEffect";

export class FightTemporaryBoostEffect extends AbstractFightDispellableEffect implements INetworkType
{

	public static readonly protocolId: number = 2521;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public delta: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTemporaryBoostEffect.protocolId;
    }

    public isEndpointClient()
    {
        return FightTemporaryBoostEffect.endpointClient;
    }

    public isEndpointServer()
    {
        return FightTemporaryBoostEffect.endpointServer;
    }

    public initFightTemporaryBoostEffect(uid: number = 0, targetId: number = 0, turnDuration: number = 0, dispelable: number = 1, spellId: number = 0, effectId: number = 0, parentBoostUid: number = 0, delta: number = 0): FightTemporaryBoostEffect
    {
        super.initAbstractFightDispellableEffect(uid,targetId,turnDuration,dispelable,spellId,effectId,parentBoostUid);
        this.delta = delta;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTemporaryBoostEffect(output);
    }

    public serializeAs_FightTemporaryBoostEffect(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractFightDispellableEffect(output);
        output.writeInt(this.delta);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTemporaryBoostEffect(input);
    }

    private deserializeAs_FightTemporaryBoostEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._deltaFunc(input);
    }

    private _deltaFunc(input: ICustomDataInput)
    {
        this.delta = input.readInt();
    }

}