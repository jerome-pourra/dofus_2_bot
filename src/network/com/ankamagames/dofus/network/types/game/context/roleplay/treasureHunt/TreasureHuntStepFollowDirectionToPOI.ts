import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { TreasureHuntStep } from "./TreasureHuntStep";

export class TreasureHuntStepFollowDirectionToPOI extends TreasureHuntStep
{

	public static readonly protocolId: number = 9275;

	public direction: number = 1;
	public poiLabelId: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntStepFollowDirectionToPOI(input);
    }

    private deserializeAs_TreasureHuntStepFollowDirectionToPOI(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._directionFunc(input);
        this._poiLabelIdFunc(input);
    }

    private _directionFunc(input: ICustomDataInput)
    {
        this.direction = input.readByte();
        if(this.direction < 0)
        {
            throw new Error("Forbidden value (" + this.direction + ") on element of TreasureHuntStepFollowDirectionToPOI.direction.");
        }
    }

    private _poiLabelIdFunc(input: ICustomDataInput)
    {
        this.poiLabelId = input.readVarUhShort();
        if(this.poiLabelId < 0)
        {
            throw new Error("Forbidden value (" + this.poiLabelId + ") on element of TreasureHuntStepFollowDirectionToPOI.poiLabelId.");
        }
    }

}