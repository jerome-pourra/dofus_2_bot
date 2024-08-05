import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { MonsterInGroupLightInformations } from "./MonsterInGroupLightInformations";

export class AlternativeMonstersInGroupLightInformations
{

	public static readonly protocolId: number = 6089;

	public playerCount: number = 0;
	public monsters: Array<MonsterInGroupLightInformations>;

    public constructor()
    {
        this.monsters = Array<MonsterInGroupLightInformations>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlternativeMonstersInGroupLightInformations(input);
    }

    private deserializeAs_AlternativeMonstersInGroupLightInformations(input: ICustomDataInput)
    {
        let _item2: MonsterInGroupLightInformations;
        this._playerCountFunc(input);
        let _monstersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _monstersLen; _i2++)
        {
            _item2 = new MonsterInGroupLightInformations();
            _item2.deserialize(input);
            this.monsters.push(_item2);
        }
    }

    private _playerCountFunc(input: ICustomDataInput)
    {
        this.playerCount = input.readInt();
    }

}