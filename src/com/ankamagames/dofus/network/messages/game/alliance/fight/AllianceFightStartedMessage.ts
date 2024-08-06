import { FightPhase } from "./../../../../types/game/context/fight/FightPhase";
import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceFightStartedMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return AllianceFightStartedMessage.protocolId;
    }

    public initAllianceFightStartedMessage(allianceFightInfo: SocialFightInfo = null, phase: FightPhase = null): AllianceFightStartedMessage
    {
        this.allianceFightInfo = allianceFightInfo;
        this.phase = phase;
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
        this.serializeAs_AllianceFightStartedMessage(output);
    }

    public serializeAs_AllianceFightStartedMessage(output: ICustomDataOutput)
    {
        this.allianceFightInfo.serializeAs_SocialFightInfo(output);
        this.phase.serializeAs_FightPhase(output);
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