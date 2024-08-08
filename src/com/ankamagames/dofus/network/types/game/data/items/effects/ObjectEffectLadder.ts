import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { ObjectEffectCreature } from "./ObjectEffectCreature";

export class ObjectEffectLadder extends ObjectEffectCreature implements INetworkType
{

	public static readonly protocolId: number = 5489;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public monsterCount: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectEffectLadder.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectEffectLadder.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectEffectLadder.endpointServer;
    }

    public initObjectEffectLadder(actionId: number = 0, monsterFamilyId: number = 0, monsterCount: number = 0): ObjectEffectLadder
    {
        super.initObjectEffectCreature(actionId,monsterFamilyId);
        this.monsterCount = monsterCount;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectEffectLadder(output);
    }

    public serializeAs_ObjectEffectLadder(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectEffectCreature(output);
        if(this.monsterCount < 0)
        {
            throw new Error("Forbidden value (" + this.monsterCount + ") on element monsterCount.");
        }
        output.writeVarInt(this.monsterCount);
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