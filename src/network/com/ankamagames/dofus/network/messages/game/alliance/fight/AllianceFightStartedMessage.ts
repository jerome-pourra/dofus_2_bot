import { FightPhase } from "./../../../../types/game/context/fight/FightPhase";
import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceFightStartedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9676;

	public allianceFightInfo: SocialFightInfo;
	public phase: FightPhase;

    public constructor()
    {
        super();
        this.allianceFightInfo = new SocialFightInfo();
        this.phase = new FightPhase();
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
        this.deserializeAs_AllianceFightStartedMessage(input);
    }

    private deserializeAs_AllianceFightStartedMessage(input: ICustomDataInput)
    {
        this.allianceFightInfo = new SocialFightInfo();
        this.allianceFightInfo.deserialize(input);
        this.phase = new FightPhase();
        this.phase.deserialize(input);
    }

}