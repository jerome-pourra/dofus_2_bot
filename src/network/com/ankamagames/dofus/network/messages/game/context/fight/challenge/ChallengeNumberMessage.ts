import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeNumberMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2779;

	public challengeNumber: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_ChallengeNumberMessage(input);
    }

    private deserializeAs_ChallengeNumberMessage(input: ICustomDataInput)
    {
        this._challengeNumberFunc(input);
    }

    private _challengeNumberFunc(input: ICustomDataInput)
    {
        this.challengeNumber = input.readVarUhInt();
        if(this.challengeNumber < 0)
        {
            throw new Error("Forbidden value (" + this.challengeNumber + ") on element of ChallengeNumberMessage.challengeNumber.");
        }
    }

}