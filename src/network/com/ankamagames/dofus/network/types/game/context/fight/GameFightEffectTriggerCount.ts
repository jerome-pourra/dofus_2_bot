import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GameFightEffectTriggerCount
{

	public static readonly protocolId: number = 7405;

	public effectId: number = 0;
	public targetId: number = 0;
	public count: number = 0;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightEffectTriggerCount(input);
    }

    private deserializeAs_GameFightEffectTriggerCount(input: ICustomDataInput)
    {
        this._effectIdFunc(input);
        this._targetIdFunc(input);
        this._countFunc(input);
    }

    private _effectIdFunc(input: ICustomDataInput)
    {
        this.effectId = input.readVarUhInt();
        if(this.effectId < 0)
        {
            throw new Error("Forbidden value (" + this.effectId + ") on element of GameFightEffectTriggerCount.effectId.");
        }
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameFightEffectTriggerCount.targetId.");
        }
    }

    private _countFunc(input: ICustomDataInput)
    {
        this.count = input.readShort();
        if(this.count < 0)
        {
            throw new Error("Forbidden value (" + this.count + ") on element of GameFightEffectTriggerCount.count.");
        }
    }

}