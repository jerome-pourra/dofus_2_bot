import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffectCreature } from "./ObjectEffectCreature";

export class ObjectEffectLadder extends ObjectEffectCreature
{

	public static readonly protocolId: number = 5489;

	public monsterCount: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectLadder(input);
    }

    private deserializeAs_ObjectEffectLadder(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._monsterCountFunc(input);
    }

    private _monsterCountFunc(input: ICustomDataInput)
    {
        this.monsterCount = input.readVarUhInt();
        if(this.monsterCount < 0)
        {
            throw new Error("Forbidden value (" + this.monsterCount + ") on element of ObjectEffectLadder.monsterCount.");
        }
    }

}