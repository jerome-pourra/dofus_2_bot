import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { AbstractFightDispellableEffect } from "./AbstractFightDispellableEffect";

export class FightTriggeredEffect extends AbstractFightDispellableEffect implements INetworkType
{

	public static readonly protocolId: number = 5487;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public param1: number = 0;
	public param2: number = 0;
	public param3: number = 0;
	public delay: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTriggeredEffect.protocolId;
    }

    public isEndpointClient()
    {
        return FightTriggeredEffect.endpointClient;
    }

    public isEndpointServer()
    {
        return FightTriggeredEffect.endpointServer;
    }

    public initFightTriggeredEffect(uid: number = 0, targetId: number = 0, turnDuration: number = 0, dispelable: number = 1, spellId: number = 0, effectId: number = 0, parentBoostUid: number = 0, param1: number = 0, param2: number = 0, param3: number = 0, delay: number = 0): FightTriggeredEffect
    {
        super.initAbstractFightDispellableEffect(uid,targetId,turnDuration,dispelable,spellId,effectId,parentBoostUid);
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.delay = delay;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTriggeredEffect(output);
    }

    public serializeAs_FightTriggeredEffect(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractFightDispellableEffect(output);
        output.writeInt(this.param1);
        output.writeInt(this.param2);
        output.writeInt(this.param3);
        output.writeShort(this.delay);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTriggeredEffect(input);
    }

    private deserializeAs_FightTriggeredEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._param1Func(input);
        this._param2Func(input);
        this._param3Func(input);
        this._delayFunc(input);
    }

    private _param1Func(input: ICustomDataInput)
    {
        this.param1 = input.readInt();
    }

    private _param2Func(input: ICustomDataInput)
    {
        this.param2 = input.readInt();
    }

    private _param3Func(input: ICustomDataInput)
    {
        this.param3 = input.readInt();
    }

    private _delayFunc(input: ICustomDataInput)
    {
        this.delay = input.readShort();
    }

}