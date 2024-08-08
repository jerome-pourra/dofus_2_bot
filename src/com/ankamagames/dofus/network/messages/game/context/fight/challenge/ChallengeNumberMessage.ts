import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeNumberMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2779;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public challengeNumber: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChallengeNumberMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeNumberMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeNumberMessage.endpointServer;
    }

    public initChallengeNumberMessage(challengeNumber: number = 0): ChallengeNumberMessage
    {
        this.challengeNumber = challengeNumber;
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
        this.serializeAs_ChallengeNumberMessage(output);
    }

    public serializeAs_ChallengeNumberMessage(output: ICustomDataOutput)
    {
        if(this.challengeNumber < 0)
        {
            throw new Error("Forbidden value (" + this.challengeNumber + ") on element challengeNumber.");
        }
        output.writeVarInt(this.challengeNumber);
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