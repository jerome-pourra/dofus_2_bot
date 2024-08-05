import { ChallengeInformation } from "./../../../../../types/game/context/fight/challenge/ChallengeInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeTargetsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9097;

	public challengeInformation: ChallengeInformation;

    public constructor()
    {
        super();
        this.challengeInformation = new ChallengeInformation();
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
        this.deserializeAs_ChallengeTargetsMessage(input);
    }

    private deserializeAs_ChallengeTargetsMessage(input: ICustomDataInput)
    {
        this.challengeInformation = new ChallengeInformation();
        this.challengeInformation.deserialize(input);
    }

}