import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class ObjectEffect implements INetworkType
{

	public static readonly protocolId: number = 7605;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public actionId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return ObjectEffect.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectEffect.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectEffect.endpointServer;
    }

    public initObjectEffect(actionId: number = 0): ObjectEffect
    {
        this.actionId = actionId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffect(output);
    }

    public serializeAs_ObjectEffect(output: ICustomDataOutput)
    {
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
        }
        output.writeVarShort(this.actionId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffect(input);
    }

    private deserializeAs_ObjectEffect(input: ICustomDataInput)
    {
        this._actionIdFunc(input);
    }

    private _actionIdFunc(input: ICustomDataInput)
    {
        this.actionId = input.readVarUhShort();
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element of ObjectEffect.actionId.");
        }
    }

}