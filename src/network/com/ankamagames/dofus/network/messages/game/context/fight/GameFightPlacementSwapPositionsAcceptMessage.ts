import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementSwapPositionsAcceptMessage extends NetworkMessage
{

	public static readonly protocolId: number = 870;

	public requestId: number = 0;

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