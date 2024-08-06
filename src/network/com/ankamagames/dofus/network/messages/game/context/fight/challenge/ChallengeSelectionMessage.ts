import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeSelectionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5920;

	public challengeId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChallengeSelectionMessage.protocolId;
    }

    public initChallengeSelectionMessage(challengeId: number = 0): ChallengeSelectionMessage
    {
        this.challengeId = challengeId;
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
        this.serializeAs_ChallengeSelectionMessage(output);
    }

    public serializeAs_ChallengeSelectionMessage(output: ICustomDataOutput)
    {
        if(this.challengeId < 0)
        {
            throw new Error("Forbidden value (" + this.challengeId + ") on element challengeId.");
        }
        output.writeVarInt(this.challengeId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeSelectionMessage(input);
    }

    private deserializeAs_ChallengeSelectionMessage(input: ICustomDataInput)
    {
        this._challengeIdFunc(input);
    }

    private _challengeIdFunc(input: ICustomDataInput)
    {
        this.challengeId = input.readVarUhInt();
        if(this.challengeId < 0)
        {
            throw new Error("Forbidden value (" + this.challengeId + ") on element of ChallengeSelectionMessage.challengeId.");
        }
    }

}