import { ChallengeInformation } from "./../../../../../types/game/context/fight/challenge/ChallengeInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeAddMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8563;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public challengeInformation: ChallengeInformation;

    public constructor()
    {
        super();
        this.challengeInformation = new ChallengeInformation();
    }

    public getMessageId()
    {
        return ChallengeAddMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeAddMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeAddMessage.endpointServer;
    }

    public initChallengeAddMessage(challengeInformation: ChallengeInformation = null): ChallengeAddMessage
    {
        this.challengeInformation = challengeInformation;
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
        this.serializeAs_ChallengeAddMessage(output);
    }

    public serializeAs_ChallengeAddMessage(output: ICustomDataOutput)
    {
        this.challengeInformation.serializeAs_ChallengeInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeAddMessage(input);
    }

    private deserializeAs_ChallengeAddMessage(input: ICustomDataInput)
    {
        this.challengeInformation = new ChallengeInformation();
        this.challengeInformation.deserialize(input);
    }

}