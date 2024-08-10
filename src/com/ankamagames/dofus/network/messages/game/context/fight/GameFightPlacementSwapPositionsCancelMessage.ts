import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementSwapPositionsCancelMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5173;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public requestId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightPlacementSwapPositionsCancelMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightPlacementSwapPositionsCancelMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightPlacementSwapPositionsCancelMessage.endpointServer;
    }

    public initGameFightPlacementSwapPositionsCancelMessage(requestId: number = 0): GameFightPlacementSwapPositionsCancelMessage
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
        this.serializeAs_GameFightPlacementSwapPositionsCancelMessage(output);
    }

    public serializeAs_GameFightPlacementSwapPositionsCancelMessage(output: ICustomDataOutput)
    {
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
        }
        output.writeInt(this.requestId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightPlacementSwapPositionsCancelMessage(input);
    }

    private deserializeAs_GameFightPlacementSwapPositionsCancelMessage(input: ICustomDataInput)
    {
        this._requestIdFunc(input);
    }

    private _requestIdFunc(input: ICustomDataInput)
    {
        this.requestId = input.readInt();
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element of GameFightPlacementSwapPositionsCancelMessage.requestId.");
        }
    }

}