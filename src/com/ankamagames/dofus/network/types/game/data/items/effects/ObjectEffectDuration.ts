import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectDuration extends ObjectEffect implements INetworkType
{

	public static readonly protocolId: number = 7031;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public days: number = 0;
	public hours: number = 0;
	public minutes: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectEffectDuration.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectEffectDuration.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectEffectDuration.endpointServer;
    }

    public initObjectEffectDuration(actionId: number = 0, days: number = 0, hours: number = 0, minutes: number = 0): ObjectEffectDuration
    {
        super.initObjectEffect(actionId);
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffectDuration(output);
    }

    public serializeAs_ObjectEffectDuration(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectEffect(output);
        if(this.days < 0)
        {
            throw new Error("Forbidden value (" + this.days + ") on element days.");
        }
        output.writeVarShort(this.days);
        if(this.hours < 0)
        {
            throw new Error("Forbidden value (" + this.hours + ") on element hours.");
        }
        output.writeByte(this.hours);
        if(this.minutes < 0)
        {
            throw new Error("Forbidden value (" + this.minutes + ") on element minutes.");
        }
        output.writeByte(this.minutes);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectDuration(input);
    }

    private deserializeAs_ObjectEffectDuration(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._daysFunc(input);
        this._hoursFunc(input);
        this._minutesFunc(input);
    }

    private _daysFunc(input: ICustomDataInput)
    {
        this.days = input.readVarUhShort();
        if(this.days < 0)
        {
            throw new Error("Forbidden value (" + this.days + ") on element of ObjectEffectDuration.days.");
        }
    }

    private _hoursFunc(input: ICustomDataInput)
    {
        this.hours = input.readByte();
        if(this.hours < 0)
        {
            throw new Error("Forbidden value (" + this.hours + ") on element of ObjectEffectDuration.hours.");
        }
    }

    private _minutesFunc(input: ICustomDataInput)
    {
        this.minutes = input.readByte();
        if(this.minutes < 0)
        {
            throw new Error("Forbidden value (" + this.minutes + ") on element of ObjectEffectDuration.minutes.");
        }
    }

}