import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FinishMoveSetRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6930;

	public finishMoveId: number = 0;
	public finishMoveState: boolean = false;

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
        this.deserializeAs_FinishMoveSetRequestMessage(input);
    }

    private deserializeAs_FinishMoveSetRequestMessage(input: ICustomDataInput)
    {
        this._finishMoveIdFunc(input);
        this._finishMoveStateFunc(input);
    }

    private _finishMoveIdFunc(input: ICustomDataInput)
    {
        this.finishMoveId = input.readInt();
        if(this.finishMoveId < 0)
        {
            throw new Error("Forbidden value (" + this.finishMoveId + ") on element of FinishMoveSetRequestMessage.finishMoveId.");
        }
    }

    private _finishMoveStateFunc(input: ICustomDataInput)
    {
        this.finishMoveState = input.readBoolean();
    }

}