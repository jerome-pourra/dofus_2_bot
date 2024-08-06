import { EntityMovementInformations } from "./../../../types/game/context/EntityMovementInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextMoveMultipleElementsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7368;

	public movements: Array<EntityMovementInformations>;

    public constructor()
    {
        super();
        this.movements = Array<EntityMovementInformations>();
    }

    public getMessageId()
    {
        return GameContextMoveMultipleElementsMessage.protocolId;
    }

    public initGameContextMoveMultipleElementsMessage(movements: Array<EntityMovementInformations> = null): GameContextMoveMultipleElementsMessage
    {
        this.movements = movements;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameContextMoveMultipleElementsMessage(output);
    }

    public serializeAs_GameContextMoveMultipleElementsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.movements.length);
        for(var _i1: number = 0; _i1 < this.movements.length; _i1++)
        {
            (this.movements[_i1] as EntityMovementInformations).serializeAs_EntityMovementInformations(output);
        }
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