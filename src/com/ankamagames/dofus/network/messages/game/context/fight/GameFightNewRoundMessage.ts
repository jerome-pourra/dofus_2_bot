import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightNewRoundMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8261;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public roundNumber: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightNewRoundMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightNewRoundMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightNewRoundMessage.endpointServer;
    }

    public initGameFightNewRoundMessage(roundNumber: number = 0): GameFightNewRoundMessage
    {
        this.roundNumber = roundNumber;
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
        this.serializeAs_GameFightNewRoundMessage(output);
    }

    public serializeAs_GameFightNewRoundMessage(output: ICustomDataOutput)
    {
        if(this.roundNumber < 0)
        {
            throw new Error("Forbidden value (" + this.roundNumber + ") on element roundNumber.");
        }
        output.writeVarInt(this.roundNumber);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightNewRoundMessage(input);
    }

    private deserializeAs_GameFightNewRoundMessage(input: ICustomDataInput)
    {
        this._roundNumberFunc(input);
    }

    private _roundNumberFunc(input: ICustomDataInput)
    {
        this.roundNumber = input.readVarUhInt();
        if(this.roundNumber < 0)
        {
            throw new Error("Forbidden value (" + this.roundNumber + ") on element of GameFightNewRoundMessage.roundNumber.");
        }
    }

}