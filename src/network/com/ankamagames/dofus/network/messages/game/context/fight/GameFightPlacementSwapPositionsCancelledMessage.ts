import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementSwapPositionsCancelledMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1579;

	public requestId: number = 0;
	public cancellerId: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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