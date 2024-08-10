import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementSwapPositionsAcceptMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 870;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public requestId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightPlacementSwapPositionsAcceptMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightPlacementSwapPositionsAcceptMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightPlacementSwapPositionsAcceptMessage.endpointServer;
    }

    public initGameFightPlacementSwapPositionsAcceptMessage(requestId: number = 0): GameFightPlacementSwapPositionsAcceptMessage
    {
        this.requestId = requestId;
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
        this.serializeAs_GameFightPlacementSwapPositionsAcceptMessage(output);
    }

    public serializeAs_GameFightPlacementSwapPositionsAcceptMessage(output: ICustomDataOutput)
    {
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
        }
        output.writeInt(this.requestId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightPlacementSwapPositionsAcceptMessage(input);
    }

    private deserializeAs_GameFightPlacementSwapPositionsAcceptMessage(input: ICustomDataInput)
    {
        this._requestIdFunc(input);
    }

    private _requestIdFunc(input: ICustomDataInput)
    {
        this.requestId = input.readInt();
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element of GameFightPlacementSwapPositionsAcceptMessage.requestId.");
        }
    }

}