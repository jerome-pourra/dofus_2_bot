import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class FinishMoveInformations
{

	public static readonly protocolId: number = 8829;

	public finishMoveId: number = 0;
	public finishMoveState: boolean = false;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FinishMoveInformations(input);
    }

    private deserializeAs_FinishMoveInformations(input: ICustomDataInput)
    {
        this._finishMoveIdFunc(input);
        this._finishMoveStateFunc(input);
    }

    private _finishMoveIdFunc(input: ICustomDataInput)
    {
        this.finishMoveId = input.readInt();
        if(this.finishMoveId < 0)
        {
            throw new Error("Forbidden value (" + this.finishMoveId + ") on element of FinishMoveInformations.finishMoveId.");
        }
    }

    private _finishMoveStateFunc(input: ICustomDataInput)
    {
        this.finishMoveState = input.readBoolean();
    }

}