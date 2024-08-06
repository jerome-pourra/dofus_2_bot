import { CharacterMinimalPlusLookInformations } from "./../../character/CharacterMinimalPlusLookInformations";
import { FightPhase } from "./../../context/fight/FightPhase";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SocialFightInfo } from "./SocialFightInfo";

export class SocialFight implements INetworkType
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

    public getTypeId()
    {
        return SocialFight.protocolId;
    }

    public initSocialFight(socialFightInfo: SocialFightInfo = null, attackers: Array<CharacterMinimalPlusLookInformations> = null, defenders: Array<CharacterMinimalPlusLookInformations> = null, phase: FightPhase = null): SocialFight
    {
        this.socialFightInfo = socialFightInfo;
        this.attackers = attackers;
        this.defenders = defenders;
        this.phase = phase;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SocialFight(output);
    }

    public serializeAs_SocialFight(output: ICustomDataOutput)
    {
        this.socialFightInfo.serializeAs_SocialFightInfo(output);
        output.writeShort(this.attackers.length);
        for(var _i2: number = 0; _i2 < this.attackers.length; _i2++)
        {
            (this.attackers[_i2] as CharacterMinimalPlusLookInformations).serializeAs_CharacterMinimalPlusLookInformations(output);
        }
        output.writeShort(this.defenders.length);
        for(var _i3: number = 0; _i3 < this.defenders.length; _i3++)
        {
            (this.defenders[_i3] as CharacterMinimalPlusLookInformations).serializeAs_CharacterMinimalPlusLookInformations(output);
        }
        this.phase.serializeAs_FightPhase(output);
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