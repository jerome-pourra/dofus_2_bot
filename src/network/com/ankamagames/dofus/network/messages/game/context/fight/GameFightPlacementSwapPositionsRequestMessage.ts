import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { GameFightPlacementPositionRequestMessage } from "./GameFightPlacementPositionRequestMessage";

export class GameFightPlacementSwapPositionsRequestMessage extends GameFightPlacementPositionRequestMessage
{

	public static readonly protocolId: number = 501;

	public requestedId: number = 0;

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