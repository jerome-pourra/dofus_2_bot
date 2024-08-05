import { FinishMoveInformations } from "./../../../types/game/finishmoves/FinishMoveInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FinishMoveListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4769;

	public finishMoves: Array<FinishMoveInformations>;

    public constructor()
    {
        super();
        this.finishMoves = Array<FinishMoveInformations>();
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