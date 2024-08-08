import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { MonsterInGroupLightInformations } from "./MonsterInGroupLightInformations";

export class MonsterInGroupInformations extends MonsterInGroupLightInformations implements INetworkType
{

	public static readonly protocolId: number = 7023;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public look: EntityLook;

    public constructor()
    {
        super();
        this.look = new EntityLook();
    }

    public getTypeId()
    {
        return MonsterInGroupInformations.protocolId;
    }

    public isEndpointClient()
    {
        return MonsterInGroupInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return MonsterInGroupInformations.endpointServer;
    }

    public initMonsterInGroupInformations(genericId: number = 0, grade: number = 0, level: number = 0, look: EntityLook = null): MonsterInGroupInformations
    {
        super.initMonsterInGroupLightInformations(genericId,grade,level);
        this.look = look;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_MonsterInGroupInformations(output);
    }

    public serializeAs_MonsterInGroupInformations(output: ICustomDataOutput)
    {
        super.serializeAs_MonsterInGroupLightInformations(output);
        this.look.serializeAs_EntityLook(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MonsterInGroupInformations(input);
    }

    private deserializeAs_MonsterInGroupInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

}