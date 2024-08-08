import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffect } from "./ObjectEffect";

export class ObjectEffectCreature extends ObjectEffect implements INetworkType
{

	public static readonly protocolId: number = 3987;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public monsterFamilyId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectEffectCreature.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectEffectCreature.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectEffectCreature.endpointServer;
    }

    public initObjectEffectCreature(actionId: number = 0, monsterFamilyId: number = 0): ObjectEffectCreature
    {
        super.initObjectEffect(actionId);
        this.monsterFamilyId = monsterFamilyId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffectCreature(output);
    }

    public serializeAs_ObjectEffectCreature(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectEffect(output);
        if(this.monsterFamilyId < 0)
        {
            throw new Error("Forbidden value (" + this.monsterFamilyId + ") on element monsterFamilyId.");
        }
        output.writeVarShort(this.monsterFamilyId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectEffectCreature(input);
    }

    private deserializeAs_ObjectEffectCreature(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._monsterFamilyIdFunc(input);
    }

    private _monsterFamilyIdFunc(input: ICustomDataInput)
    {
        this.monsterFamilyId = input.readVarUhShort();
        if(this.monsterFamilyId < 0)
        {
            throw new Error("Forbidden value (" + this.monsterFamilyId + ") on element of ObjectEffectCreature.monsterFamilyId.");
        }
    }

}