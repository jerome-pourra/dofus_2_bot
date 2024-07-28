import { CharacterMinimalPlusLookInformations } from "./../../character/CharacterMinimalPlusLookInformations";
import { FightPhase } from "./../../context/fight/FightPhase";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SocialFightInfo } from "./SocialFightInfo";

export class SocialFight
{

	public static readonly protocolId: number = 2810;

	public socialFightInfo: SocialFightInfo;
	public attackers: Array<CharacterMinimalPlusLookInformations>;
	public defenders: Array<CharacterMinimalPlusLookInformations>;
	public phase: FightPhase;

    public constructor()
    {
        this.socialFightInfo = new SocialFightInfo();
        this.attackers = Array<CharacterMinimalPlusLookInformations>();
        this.defenders = Array<CharacterMinimalPlusLookInformations>();
        this.phase = new FightPhase();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialFight(input);
    }

    private deserializeAs_SocialFight(input: ICustomDataInput)
    {
        let _item2: CharacterMinimalPlusLookInformations;
        let _item3: CharacterMinimalPlusLookInformations;
        this.socialFightInfo = new SocialFightInfo();
        this.socialFightInfo.deserialize(input);
        let _attackersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _attackersLen; _i2++)
        {
            _item2 = new CharacterMinimalPlusLookInformations();
            _item2.deserialize(input);
            this.attackers.push(_item2);
        }
        let _defendersLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _defendersLen; _i3++)
        {
            _item3 = new CharacterMinimalPlusLookInformations();
            _item3.deserialize(input);
            this.defenders.push(_item3);
        }
        this.phase = new FightPhase();
        this.phase.deserialize(input);
    }

}