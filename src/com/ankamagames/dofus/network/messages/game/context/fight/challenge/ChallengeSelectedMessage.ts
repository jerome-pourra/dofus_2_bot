import { ChallengeInformation } from "./../../../../../types/game/context/fight/challenge/ChallengeInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeSelectedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8045;

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
        return ChallengeSelectedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeSelectedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeSelectedMessage.endpointServer;
    }

    public initChallengeSelectedMessage(challengeInformation: ChallengeInformation = null): ChallengeSelectedMessage
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
        this.serializeAs_ChallengeSelectedMessage(output);
    }

    public serializeAs_ChallengeSelectedMessage(output: ICustomDataOutput)
    {
        this.challengeInformation.serializeAs_ChallengeInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeSelectedMessage(input);
    }

    private deserializeAs_ChallengeSelectedMessage(input: ICustomDataInput)
    {
        this.challengeInformation = new ChallengeInformation();
        this.challengeInformation.deserialize(input);
    }

}