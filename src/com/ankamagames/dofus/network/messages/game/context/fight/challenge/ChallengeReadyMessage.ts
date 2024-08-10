import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeReadyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9700;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public challengeMod: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChallengeReadyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeReadyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeReadyMessage.endpointServer;
    }

    public initChallengeReadyMessage(challengeMod: number = 0): ChallengeReadyMessage
    {
        this.challengeMod = challengeMod;
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
        this.serializeAs_ChallengeReadyMessage(output);
    }

    public serializeAs_ChallengeReadyMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.challengeMod);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeReadyMessage(input);
    }

    private deserializeAs_ChallengeReadyMessage(input: ICustomDataInput)
    {
        this._challengeModFunc(input);
    }

    private _challengeModFunc(input: ICustomDataInput)
    {
        this.challengeMod = input.readByte();
        if(this.challengeMod < 0)
        {
            throw new Error("Forbidden value (" + this.challengeMod + ") on element of ChallengeReadyMessage.challengeMod.");
        }
    }

}