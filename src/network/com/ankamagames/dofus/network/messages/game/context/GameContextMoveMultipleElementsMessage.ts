import { EntityMovementInformations } from "./../../../types/game/context/EntityMovementInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextMoveMultipleElementsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7368;

	public movements: Array<EntityMovementInformations>;

    public constructor()
    {
        super();
        this.movements = Array<EntityMovementInformations>();
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
        this.deserializeAs_GameContextMoveMultipleElementsMessage(input);
    }

    private deserializeAs_GameContextMoveMultipleElementsMessage(input: ICustomDataInput)
    {
        let _item1: EntityMovementInformations;
        let _movementsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _movementsLen; _i1++)
        {
            _item1 = new EntityMovementInformations();
            _item1.deserialize(input);
            this.movements.push(_item1);
        }
    }

}