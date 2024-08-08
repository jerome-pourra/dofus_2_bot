import { FightCommonInformations } from "./../../../../../types/game/context/fight/FightCommonInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayShowChallengeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7254;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public commonsInfos: FightCommonInformations;

    public constructor()
    {
        super();
        this.commonsInfos = new FightCommonInformations();
    }

    public getMessageId()
    {
        return GameRolePlayShowChallengeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayShowChallengeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayShowChallengeMessage.endpointServer;
    }

    public initGameRolePlayShowChallengeMessage(commonsInfos: FightCommonInformations = null): GameRolePlayShowChallengeMessage
    {
        this.commonsInfos = commonsInfos;
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
        this.serializeAs_GameRolePlayShowChallengeMessage(output);
    }

    public serializeAs_GameRolePlayShowChallengeMessage(output: ICustomDataOutput)
    {
        this.commonsInfos.serializeAs_FightCommonInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayShowChallengeMessage(input);
    }

    private deserializeAs_GameRolePlayShowChallengeMessage(input: ICustomDataInput)
    {
        this.commonsInfos = new FightCommonInformations();
        this.commonsInfos.deserialize(input);
    }

}