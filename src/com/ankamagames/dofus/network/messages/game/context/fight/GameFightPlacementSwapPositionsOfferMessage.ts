import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementSwapPositionsOfferMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5124;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public requestId: number = 0;
	public requesterId: number = 0;
	public requesterCellId: number = 0;
	public requestedId: number = 0;
	public requestedCellId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightPlacementSwapPositionsOfferMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightPlacementSwapPositionsOfferMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightPlacementSwapPositionsOfferMessage.endpointServer;
    }

    public initGameFightPlacementSwapPositionsOfferMessage(requestId: number = 0, requesterId: number = 0, requesterCellId: number = 0, requestedId: number = 0, requestedCellId: number = 0): GameFightPlacementSwapPositionsOfferMessage
    {
        this.requestId = requestId;
        this.requesterId = requesterId;
        this.requesterCellId = requesterCellId;
        this.requestedId = requestedId;
        this.requestedCellId = requestedCellId;
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
        this.serializeAs_GameFightPlacementSwapPositionsOfferMessage(output);
    }

    public serializeAs_GameFightPlacementSwapPositionsOfferMessage(output: ICustomDataOutput)
    {
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
        }
        output.writeInt(this.requestId);
        if(this.requesterId < -9007199254740992 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element requesterId.");
        }
        output.writeDouble(this.requesterId);
        if(this.requesterCellId < 0 || this.requesterCellId > 559)
        {
            throw new Error("Forbidden value (" + this.requesterCellId + ") on element requesterCellId.");
        }
        output.writeVarShort(this.requesterCellId);
        if(this.requestedId < -9007199254740992 || this.requestedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requestedId + ") on element requestedId.");
        }
        output.writeDouble(this.requestedId);
        if(this.requestedCellId < 0 || this.requestedCellId > 559)
        {
            throw new Error("Forbidden value (" + this.requestedCellId + ") on element requestedCellId.");
        }
        output.writeVarShort(this.requestedCellId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightPlacementSwapPositionsOfferMessage(input);
    }

    private deserializeAs_GameFightPlacementSwapPositionsOfferMessage(input: ICustomDataInput)
    {
        this._requestIdFunc(input);
        this._requesterIdFunc(input);
        this._requesterCellIdFunc(input);
        this._requestedIdFunc(input);
        this._requestedCellIdFunc(input);
    }

    private _requestIdFunc(input: ICustomDataInput)
    {
        this.requestId = input.readInt();
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requestId.");
        }
    }

    private _requesterIdFunc(input: ICustomDataInput)
    {
        this.requesterId = input.readDouble();
        if(this.requesterId < -9007199254740992 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requesterId.");
        }
    }

    private _requesterCellIdFunc(input: ICustomDataInput)
    {
        this.requesterCellId = input.readVarUhShort();
        if(this.requesterCellId < 0 || this.requesterCellId > 559)
        {
            throw new Error("Forbidden value (" + this.requesterCellId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requesterCellId.");
        }
    }

    private _requestedIdFunc(input: ICustomDataInput)
    {
        this.requestedId = input.readDouble();
        if(this.requestedId < -9007199254740992 || this.requestedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requestedId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requestedId.");
        }
    }

    private _requestedCellIdFunc(input: ICustomDataInput)
    {
        this.requestedCellId = input.readVarUhShort();
        if(this.requestedCellId < 0 || this.requestedCellId > 559)
        {
            throw new Error("Forbidden value (" + this.requestedCellId + ") on element of GameFightPlacementSwapPositionsOfferMessage.requestedCellId.");
        }
    }

}