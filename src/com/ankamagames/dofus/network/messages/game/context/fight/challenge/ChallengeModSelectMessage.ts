import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChallengeModSelectMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4455;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public challengeMod: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ChallengeModSelectMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ChallengeModSelectMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ChallengeModSelectMessage.endpointServer;
    }

    public initChallengeModSelectMessage(challengeMod: number = 0): ChallengeModSelectMessage
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
        this.serializeAs_ChallengeModSelectMessage(output);
    }

    public serializeAs_ChallengeModSelectMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.challengeMod);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChallengeModSelectMessage(input);
    }

    private deserializeAs_ChallengeModSelectMessage(input: ICustomDataInput)
    {
        this._challengeModFunc(input);
    }

    private _challengeModFunc(input: ICustomDataInput)
    {
        this.challengeMod = input.readByte();
        if(this.challengeMod < 0)
        {
            throw new Error("Forbidden value (" + this.challengeMod + ") on element of ChallengeModSelectMessage.challengeMod.");
        }
    }

}