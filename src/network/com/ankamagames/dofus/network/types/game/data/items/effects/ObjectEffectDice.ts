import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectDice extends ObjectEffect
{

	public static readonly protocolId: number = 670;

	public diceNum: number = 0;
	public diceSide: number = 0;
	public diceConst: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectDice(input);
    }

    private deserializeAs_ObjectEffectDice(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._diceNumFunc(input);
        this._diceSideFunc(input);
        this._diceConstFunc(input);
    }

    private _diceNumFunc(input: ICustomDataInput)
    {
        this.diceNum = input.readVarUhInt();
        if(this.diceNum < 0)
        {
            throw new Error("Forbidden value (" + this.diceNum + ") on element of ObjectEffectDice.diceNum.");
        }
    }

    private _diceSideFunc(input: ICustomDataInput)
    {
        this.diceSide = input.readVarUhInt();
        if(this.diceSide < 0)
        {
            throw new Error("Forbidden value (" + this.diceSide + ") on element of ObjectEffectDice.diceSide.");
        }
    }

    private _diceConstFunc(input: ICustomDataInput)
    {
        this.diceConst = input.readVarUhInt();
        if(this.diceConst < 0)
        {
            throw new Error("Forbidden value (" + this.diceConst + ") on element of ObjectEffectDice.diceConst.");
        }
    }

}