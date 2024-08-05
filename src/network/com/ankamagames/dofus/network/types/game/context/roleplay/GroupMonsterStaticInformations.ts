import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { MonsterInGroupLightInformations } from "./MonsterInGroupLightInformations";
import { MonsterInGroupInformations } from "./MonsterInGroupInformations";

export class GroupMonsterStaticInformations
{

	public static readonly protocolId: number = 5953;

	public mainCreatureLightInfos: MonsterInGroupLightInformations;
	public underlings: Array<MonsterInGroupInformations>;

    public constructor()
    {
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.underlings = Array<MonsterInGroupInformations>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GroupMonsterStaticInformations(input);
    }

    private deserializeAs_GroupMonsterStaticInformations(input: ICustomDataInput)
    {
        let _item2: MonsterInGroupInformations;
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.mainCreatureLightInfos.deserialize(input);
        let _underlingsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _underlingsLen; _i2++)
        {
            _item2 = new MonsterInGroupInformations();
            _item2.deserialize(input);
            this.underlings.push(_item2);
        }
    }

}