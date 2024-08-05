import { ChallengeInformation } from "./../../../../../types/game/context/fight/challenge/ChallengeInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeProposalMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8830;

	public challengeProposals: Array<ChallengeInformation>;
	public timer: number = 0;

    public constructor()
    {
        super();
        this.challengeProposals = Array<ChallengeInformation>();
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
        this.deserializeAs_ChallengeProposalMessage(input);
    }

    private deserializeAs_ChallengeProposalMessage(input: ICustomDataInput)
    {
        let _item1: ChallengeInformation;
        let _challengeProposalsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _challengeProposalsLen; _i1++)
        {
            _item1 = new ChallengeInformation();
            _item1.deserialize(input);
            this.challengeProposals.push(_item1);
        }
        this._timerFunc(input);
    }

    private _timerFunc(input: ICustomDataInput)
    {
        this.timer = input.readDouble();
        if(this.timer < 0 || this.timer > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.timer + ") on element of ChallengeProposalMessage.timer.");
        }
    }

}