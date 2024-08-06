import { CharacterMinimalPlusLookInformations } from "./../../../../types/game/character/CharacterMinimalPlusLookInformations";
import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceFightFighterAddedMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return AllianceFightFighterAddedMessage.protocolId;
    }

    public initAllianceFightFighterAddedMessage(allianceFightInfo: SocialFightInfo = null, fighter: CharacterMinimalPlusLookInformations = null, team: number = 2): AllianceFightFighterAddedMessage
    {
        this.allianceFightInfo = allianceFightInfo;
        this.fighter = fighter;
        this.team = team;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceFightFighterAddedMessage(output);
    }

    public serializeAs_AllianceFightFighterAddedMessage(output: ICustomDataOutput)
    {
        this.allianceFightInfo.serializeAs_SocialFightInfo(output);
        this.fighter.serializeAs_CharacterMinimalPlusLookInformations(output);
        output.writeByte(this.team);
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