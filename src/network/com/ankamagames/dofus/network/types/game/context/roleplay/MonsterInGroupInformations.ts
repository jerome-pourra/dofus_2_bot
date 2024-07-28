import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { MonsterInGroupLightInformations } from "./MonsterInGroupLightInformations";

export class MonsterInGroupInformations extends MonsterInGroupLightInformations
{

	public static readonly protocolId: number = 7023;

	public look: EntityLook;

    public constructor()
    {
        super();
        this.look = new EntityLook();
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