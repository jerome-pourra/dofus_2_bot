import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameFightPlacementPositionRequestMessage } from "./GameFightPlacementPositionRequestMessage";

export class GameFightPlacementSwapPositionsRequestMessage extends GameFightPlacementPositionRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 501;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public requestedId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightPlacementSwapPositionsRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightPlacementSwapPositionsRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightPlacementSwapPositionsRequestMessage.endpointServer;
    }

    public initGameFightPlacementSwapPositionsRequestMessage(cellId: number = 0, requestedId: number = 0): GameFightPlacementSwapPositionsRequestMessage
    {
        super.initGameFightPlacementPositionRequestMessage(cellId);
        this.requestedId = requestedId;
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
        this.serializeAs_GameFightPlacementSwapPositionsRequestMessage(output);
    }

    public serializeAs_GameFightPlacementSwapPositionsRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightPlacementPositionRequestMessage(output);
        if(this.requestedId < -9007199254740992 || this.requestedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requestedId + ") on element requestedId.");
        }
        output.writeDouble(this.requestedId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightPlacementSwapPositionsRequestMessage(input);
    }

    private deserializeAs_GameFightPlacementSwapPositionsRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._requestedIdFunc(input);
    }

    private _requestedIdFunc(input: ICustomDataInput)
    {
        this.requestedId = input.readDouble();
        if(this.requestedId < -9007199254740992 || this.requestedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requestedId + ") on element of GameFightPlacementSwapPositionsRequestMessage.requestedId.");
        }
    }

}