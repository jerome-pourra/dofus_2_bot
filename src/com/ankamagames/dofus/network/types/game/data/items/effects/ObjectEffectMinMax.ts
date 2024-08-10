import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectMinMax extends ObjectEffect implements INetworkType
{

	public static readonly protocolId: number = 843;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public min: number = 0;
	public max: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectEffectMinMax.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectEffectMinMax.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectEffectMinMax.endpointServer;
    }

    public initObjectEffectMinMax(actionId: number = 0, min: number = 0, max: number = 0): ObjectEffectMinMax
    {
        super.initObjectEffect(actionId);
        this.min = min;
        this.max = max;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffectMinMax(output);
    }

    public serializeAs_ObjectEffectMinMax(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectEffect(output);
        if(this.min < 0)
        {
            throw new Error("Forbidden value (" + this.min + ") on element min.");
        }
        output.writeVarInt(this.min);
        if(this.max < 0)
        {
            throw new Error("Forbidden value (" + this.max + ") on element max.");
        }
        output.writeVarInt(this.max);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectMinMax(input);
    }

    private deserializeAs_ObjectEffectMinMax(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._minFunc(input);
        this._maxFunc(input);
    }

    private _minFunc(input: ICustomDataInput)
    {
        this.min = input.readVarUhInt();
        if(this.min < 0)
        {
            throw new Error("Forbidden value (" + this.min + ") on element of ObjectEffectMinMax.min.");
        }
    }

    private _maxFunc(input: ICustomDataInput)
    {
        this.max = input.readVarUhInt();
        if(this.max < 0)
        {
            throw new Error("Forbidden value (" + this.max + ") on element of ObjectEffectMinMax.max.");
        }
    }

}