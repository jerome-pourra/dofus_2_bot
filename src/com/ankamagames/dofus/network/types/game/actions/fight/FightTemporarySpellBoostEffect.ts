import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTemporaryBoostEffect } from "./FightTemporaryBoostEffect";

export class FightTemporarySpellBoostEffect extends FightTemporaryBoostEffect implements INetworkType
{

	public static readonly protocolId: number = 7119;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public boostedSpellId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTemporarySpellBoostEffect.protocolId;
    }

    public isEndpointClient()
    {
        return FightTemporarySpellBoostEffect.endpointClient;
    }

    public isEndpointServer()
    {
        return FightTemporarySpellBoostEffect.endpointServer;
    }

    public initFightTemporarySpellBoostEffect(uid: number = 0, targetId: number = 0, turnDuration: number = 0, dispelable: number = 1, spellId: number = 0, effectId: number = 0, parentBoostUid: number = 0, delta: number = 0, boostedSpellId: number = 0): FightTemporarySpellBoostEffect
    {
        super.initFightTemporaryBoostEffect(uid,targetId,turnDuration,dispelable,spellId,effectId,parentBoostUid,delta);
        this.boostedSpellId = boostedSpellId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTemporarySpellBoostEffect(output);
    }

    public serializeAs_FightTemporarySpellBoostEffect(output: ICustomDataOutput)
    {
        super.serializeAs_FightTemporaryBoostEffect(output);
        if(this.boostedSpellId < 0)
        {
            throw new Error("Forbidden value (" + this.boostedSpellId + ") on element boostedSpellId.");
        }
        output.writeVarShort(this.boostedSpellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTemporarySpellBoostEffect(input);
    }

    private deserializeAs_FightTemporarySpellBoostEffect(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._boostedSpellIdFunc(input);
    }

    private _boostedSpellIdFunc(input: ICustomDataInput)
    {
        this.boostedSpellId = input.readVarUhShort();
        if(this.boostedSpellId < 0)
        {
            throw new Error("Forbidden value (" + this.boostedSpellId + ") on element of FightTemporarySpellBoostEffect.boostedSpellId.");
        }
    }

}