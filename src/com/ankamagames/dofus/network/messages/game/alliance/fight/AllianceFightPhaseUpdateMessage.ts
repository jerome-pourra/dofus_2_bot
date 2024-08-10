import { FightPhase } from "./../../../../types/game/context/fight/FightPhase";
import { SocialFightInfo } from "./../../../../types/game/social/fight/SocialFightInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceFightPhaseUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1193;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public allianceFightInfo: SocialFightInfo;
	public newPhase: FightPhase;

    public constructor()
    {
        super();
        this.allianceFightInfo = new SocialFightInfo();
        this.newPhase = new FightPhase();
    }

    public getMessageId()
    {
        return AllianceFightPhaseUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceFightPhaseUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceFightPhaseUpdateMessage.endpointServer;
    }

    public initAllianceFightPhaseUpdateMessage(allianceFightInfo: SocialFightInfo = null, newPhase: FightPhase = null): AllianceFightPhaseUpdateMessage
    {
        this.allianceFightInfo = allianceFightInfo;
        this.newPhase = newPhase;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceFightPhaseUpdateMessage(output);
    }

    public serializeAs_AllianceFightPhaseUpdateMessage(output: ICustomDataOutput)
    {
        this.allianceFightInfo.serializeAs_SocialFightInfo(output);
        this.newPhase.serializeAs_FightPhase(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceFightPhaseUpdateMessage(input);
    }

    private deserializeAs_AllianceFightPhaseUpdateMessage(input: ICustomDataInput)
    {
        this.allianceFightInfo = new SocialFightInfo();
        this.allianceFightInfo.deserialize(input);
        this.newPhase = new FightPhase();
        this.newPhase.deserialize(input);
    }

}