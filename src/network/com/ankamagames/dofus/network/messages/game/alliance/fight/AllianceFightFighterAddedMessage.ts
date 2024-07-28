import { CharacterMinimalPlusLookInformations } from "./../../../../types/game/character/CharacterMinimalPlusLookInformations";
import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceFightFighterAddedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5310;

	public allianceFightInfo: SocialFightInfo;
	public fighter: CharacterMinimalPlusLookInformations;
	public team: number = 2;

    public constructor()
    {
        super();
        this.allianceFightInfo = new SocialFightInfo();
        this.fighter = new CharacterMinimalPlusLookInformations();
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
        this.deserializeAs_AllianceFightFighterAddedMessage(input);
    }

    private deserializeAs_AllianceFightFighterAddedMessage(input: ICustomDataInput)
    {
        this.allianceFightInfo = new SocialFightInfo();
        this.allianceFightInfo.deserialize(input);
        this.fighter = new CharacterMinimalPlusLookInformations();
        this.fighter.deserialize(input);
        this._teamFunc(input);
    }

    private _teamFunc(input: ICustomDataInput)
    {
        this.team = input.readByte();
        if(this.team < 0)
        {
            throw new Error("Forbidden value (" + this.team + ") on element of AllianceFightFighterAddedMessage.team.");
        }
    }

}