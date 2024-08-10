import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementSwapPositionsCancelledMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1579;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public requestId: number = 0;
	public cancellerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightPlacementSwapPositionsCancelledMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightPlacementSwapPositionsCancelledMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightPlacementSwapPositionsCancelledMessage.endpointServer;
    }

    public initGameFightPlacementSwapPositionsCancelledMessage(requestId: number = 0, cancellerId: number = 0): GameFightPlacementSwapPositionsCancelledMessage
    {
        this.requestId = requestId;
        this.cancellerId = cancellerId;
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
        this.serializeAs_GameFightPlacementSwapPositionsCancelledMessage(output);
    }

    public serializeAs_GameFightPlacementSwapPositionsCancelledMessage(output: ICustomDataOutput)
    {
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
        }
        output.writeInt(this.requestId);
        if(this.cancellerId < -9007199254740992 || this.cancellerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.cancellerId + ") on element cancellerId.");
        }
        output.writeDouble(this.cancellerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightPlacementSwapPositionsCancelledMessage(input);
    }

    private deserializeAs_GameFightPlacementSwapPositionsCancelledMessage(input: ICustomDataInput)
    {
        this._requestIdFunc(input);
        this._cancellerIdFunc(input);
    }

    private _requestIdFunc(input: ICustomDataInput)
    {
        this.requestId = input.readInt();
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element of GameFightPlacementSwapPositionsCancelledMessage.requestId.");
        }
    }

    private _cancellerIdFunc(input: ICustomDataInput)
    {
        this.cancellerId = input.readDouble();
        if(this.cancellerId < -9007199254740992 || this.cancellerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.cancellerId + ") on element of GameFightPlacementSwapPositionsCancelledMessage.cancellerId.");
        }
    }

}