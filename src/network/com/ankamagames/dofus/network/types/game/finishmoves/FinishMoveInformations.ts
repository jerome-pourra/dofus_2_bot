import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class FinishMoveInformations implements INetworkType
{

	public static readonly protocolId: number = 8829;

	public finishMoveId: number = 0;
	public finishMoveState: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return FinishMoveInformations.protocolId;
    }

    public initFinishMoveInformations(finishMoveId: number = 0, finishMoveState: boolean = false): FinishMoveInformations
    {
        this.finishMoveId = finishMoveId;
        this.finishMoveState = finishMoveState;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FinishMoveInformations(output);
    }

    public serializeAs_FinishMoveInformations(output: ICustomDataOutput)
    {
        if(this.finishMoveId < 0)
        {
            throw new Error("Forbidden value (" + this.finishMoveId + ") on element finishMoveId.");
        }
        output.writeInt(this.finishMoveId);
        output.writeBoolean(this.finishMoveState);
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