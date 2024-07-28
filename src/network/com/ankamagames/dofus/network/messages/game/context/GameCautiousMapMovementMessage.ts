import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GameMapMovementMessage } from "./GameMapMovementMessage";

export class GameCautiousMapMovementMessage extends GameMapMovementMessage
{

	public static readonly protocolId: number = 779;

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
        this.deserializeAs_GameCautiousMapMovementMessage(input);
    }

    private deserializeAs_GameCautiousMapMovementMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}