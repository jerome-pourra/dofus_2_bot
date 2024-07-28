import { EntityMovementInformations } from "./../../../types/game/context/EntityMovementInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextMoveElementMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5362;

	public movement: EntityMovementInformations;

    public constructor()
    {
        super();
        this.movement = new EntityMovementInformations();
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
        this.deserializeAs_GameContextMoveElementMessage(input);
    }

    private deserializeAs_GameContextMoveElementMessage(input: ICustomDataInput)
    {
        this.movement = new EntityMovementInformations();
        this.movement.deserialize(input);
    }

}