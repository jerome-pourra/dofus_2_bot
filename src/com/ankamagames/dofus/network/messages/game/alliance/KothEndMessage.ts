import { KothWinner } from "./../../../types/game/alliance/KothWinner";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class KothEndMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 506;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public winner: KothWinner;

    public constructor()
    {
        super();
        this.winner = new KothWinner();
    }

    public getMessageId()
    {
        return KothEndMessage.protocolId;
    }

    public isEndpointClient()
    {
        return KothEndMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return KothEndMessage.endpointServer;
    }

    public initKothEndMessage(winner: KothWinner = null): KothEndMessage
    {
        this.winner = winner;
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
        this.serializeAs_KothEndMessage(output);
    }

    public serializeAs_KothEndMessage(output: ICustomDataOutput)
    {
        this.winner.serializeAs_KothWinner(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KothEndMessage(input);
    }

    private deserializeAs_KothEndMessage(input: ICustomDataInput)
    {
        this.winner = new KothWinner();
        this.winner.deserialize(input);
    }

}