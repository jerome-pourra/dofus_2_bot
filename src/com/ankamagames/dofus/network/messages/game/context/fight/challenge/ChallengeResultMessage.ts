import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5894;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public challengeId: number = 0;
	public success: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChallengeResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeResultMessage.endpointServer;
    }

    public initChallengeResultMessage(challengeId: number = 0, success: boolean = false): ChallengeResultMessage
    {
        this.challengeId = challengeId;
        this.success = success;
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
        this.serializeAs_ChallengeResultMessage(output);
    }

    public serializeAs_ChallengeResultMessage(output: ICustomDataOutput)
    {
        if(this.challengeId < 0)
        {
            throw new Error("Forbidden value (" + this.challengeId + ") on element challengeId.");
        }
        output.writeVarInt(this.challengeId);
        output.writeBoolean(this.success);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeResultMessage(input);
    }

    private deserializeAs_ChallengeResultMessage(input: ICustomDataInput)
    {
        this._challengeIdFunc(input);
        this._successFunc(input);
    }

    private _challengeIdFunc(input: ICustomDataInput)
    {
        this.challengeId = input.readVarUhInt();
        if(this.challengeId < 0)
        {
            throw new Error("Forbidden value (" + this.challengeId + ") on element of ChallengeResultMessage.challengeId.");
        }
    }

    private _successFunc(input: ICustomDataInput)
    {
        this.success = input.readBoolean();
    }

}