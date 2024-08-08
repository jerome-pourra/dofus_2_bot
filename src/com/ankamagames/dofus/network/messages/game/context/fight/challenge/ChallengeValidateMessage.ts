import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeValidateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8427;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public challengeId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChallengeValidateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeValidateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeValidateMessage.endpointServer;
    }

    public initChallengeValidateMessage(challengeId: number = 0): ChallengeValidateMessage
    {
        this.challengeId = challengeId;
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
        this.serializeAs_ChallengeValidateMessage(output);
    }

    public serializeAs_ChallengeValidateMessage(output: ICustomDataOutput)
    {
        if(this.challengeId < 0)
        {
            throw new Error("Forbidden value (" + this.challengeId + ") on element challengeId.");
        }
        output.writeVarInt(this.challengeId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeValidateMessage(input);
    }

    private deserializeAs_ChallengeValidateMessage(input: ICustomDataInput)
    {
        this._challengeIdFunc(input);
    }

    private _challengeIdFunc(input: ICustomDataInput)
    {
        this.challengeId = input.readVarUhInt();
        if(this.challengeId < 0)
        {
            throw new Error("Forbidden value (" + this.challengeId + ") on element of ChallengeValidateMessage.challengeId.");
        }
    }

}