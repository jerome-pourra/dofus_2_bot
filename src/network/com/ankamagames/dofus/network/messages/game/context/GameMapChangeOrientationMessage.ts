import { ActorOrientation } from "./../../../types/game/context/ActorOrientation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapChangeOrientationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8741;

	public orientation: ActorOrientation;

    public constructor()
    {
        super();
        this.orientation = new ActorOrientation();
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
        this.deserializeAs_GameMapChangeOrientationMessage(input);
    }

    private deserializeAs_GameMapChangeOrientationMessage(input: ICustomDataInput)
    {
        this.orientation = new ActorOrientation();
        this.orientation.deserialize(input);
    }

}