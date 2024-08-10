import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectDice extends ObjectEffect implements INetworkType
{

	public static readonly protocolId: number = 670;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public diceNum: number = 0;
	public diceSide: number = 0;
	public diceConst: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectEffectDice.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectEffectDice.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectEffectDice.endpointServer;
    }

    public initObjectEffectDice(actionId: number = 0, diceNum: number = 0, diceSide: number = 0, diceConst: number = 0): ObjectEffectDice
    {
        super.initObjectEffect(actionId);
        this.diceNum = diceNum;
        this.diceSide = diceSide;
        this.diceConst = diceConst;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffectDice(output);
    }

    public serializeAs_ObjectEffectDice(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectEffect(output);
        if(this.diceNum < 0)
        {
            throw new Error("Forbidden value (" + this.diceNum + ") on element diceNum.");
        }
        output.writeVarInt(this.diceNum);
        if(this.diceSide < 0)
        {
            throw new Error("Forbidden value (" + this.diceSide + ") on element diceSide.");
        }
        output.writeVarInt(this.diceSide);
        if(this.diceConst < 0)
        {
            throw new Error("Forbidden value (" + this.diceConst + ") on element diceConst.");
        }
        output.writeVarInt(this.diceConst);
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