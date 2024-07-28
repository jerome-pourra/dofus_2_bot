import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GameMapMovementRequestMessage } from "./GameMapMovementRequestMessage";

export class GameCautiousMapMovementRequestMessage extends GameMapMovementRequestMessage
{

	public static readonly protocolId: number = 920;

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
        this.deserializeAs_GameCautiousMapMovementRequestMessage(input);
    }

    private deserializeAs_GameCautiousMapMovementRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}