import { FinishMoveInformations } from "./../../../types/game/finishmoves/FinishMoveInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FinishMoveListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4769;

	public finishMoves: Array<FinishMoveInformations>;

    public constructor()
    {
        super();
        this.finishMoves = Array<FinishMoveInformations>();
    }

    public getMessageId()
    {
        return FinishMoveListMessage.protocolId;
    }

    public initFinishMoveListMessage(finishMoves: Array<FinishMoveInformations> = null): FinishMoveListMessage
    {
        this.finishMoves = finishMoves;
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
        this.serializeAs_FinishMoveListMessage(output);
    }

    public serializeAs_FinishMoveListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.finishMoves.length);
        for(var _i1: number = 0; _i1 < this.finishMoves.length; _i1++)
        {
            (this.finishMoves[_i1] as FinishMoveInformations).serializeAs_FinishMoveInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FinishMoveListMessage(input);
    }

    private deserializeAs_FinishMoveListMessage(input: ICustomDataInput)
    {
        let _item1: FinishMoveInformations;
        let _finishMovesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _finishMovesLen; _i1++)
        {
            _item1 = new FinishMoveInformations();
            _item1.deserialize(input);
            this.finishMoves.push(_item1);
        }
    }

}