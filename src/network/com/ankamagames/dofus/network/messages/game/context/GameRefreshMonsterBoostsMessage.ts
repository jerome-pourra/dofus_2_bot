import { MonsterBoosts } from "./../../../types/game/context/roleplay/MonsterBoosts";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameRefreshMonsterBoostsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3997;

	public monsterBoosts: Array<MonsterBoosts>;
	public familyBoosts: Array<MonsterBoosts>;

    public constructor()
    {
        super();
        this.monsterBoosts = Array<MonsterBoosts>();
        this.familyBoosts = Array<MonsterBoosts>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRefreshMonsterBoostsMessage(input);
    }

    private deserializeAs_GameRefreshMonsterBoostsMessage(input: ICustomDataInput)
    {
        let _item1: MonsterBoosts;
        let _item2: MonsterBoosts;
        let _monsterBoostsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _monsterBoostsLen; _i1++)
        {
            _item1 = new MonsterBoosts();
            _item1.deserialize(input);
            this.monsterBoosts.push(_item1);
        }
        let _familyBoostsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _familyBoostsLen; _i2++)
        {
            _item2 = new MonsterBoosts();
            _item2.deserialize(input);
            this.familyBoosts.push(_item2);
        }
    }

}