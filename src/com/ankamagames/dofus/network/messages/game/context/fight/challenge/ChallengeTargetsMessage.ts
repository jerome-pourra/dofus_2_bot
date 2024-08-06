import { ChallengeInformation } from "./../../../../../types/game/context/fight/challenge/ChallengeInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeTargetsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9097;

	public challengeInformation: ChallengeInformation;

    public constructor()
    {
        super();
        this.challengeInformation = new ChallengeInformation();
    }

    public getMessageId()
    {
        return ChallengeTargetsMessage.protocolId;
    }

    public initChallengeTargetsMessage(challengeInformation: ChallengeInformation = null): ChallengeTargetsMessage
    {
        this.challengeInformation = challengeInformation;
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
        this.serializeAs_ChallengeTargetsMessage(output);
    }

    public serializeAs_ChallengeTargetsMessage(output: ICustomDataOutput)
    {
        this.challengeInformation.serializeAs_ChallengeInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeTargetsMessage(input);
    }

    private deserializeAs_ChallengeTargetsMessage(input: ICustomDataInput)
    {
        this.challengeInformation = new ChallengeInformation();
        this.challengeInformation.deserialize(input);
    }

}