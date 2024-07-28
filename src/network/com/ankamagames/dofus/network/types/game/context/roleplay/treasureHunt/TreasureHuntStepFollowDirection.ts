import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { TreasureHuntStep } from "./TreasureHuntStep";

export class TreasureHuntStepFollowDirection extends TreasureHuntStep
{

	public static readonly protocolId: number = 9008;

	public direction: number = 1;
	public mapCount: number = 0;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntStepFollowDirection(input);
    }

    private deserializeAs_TreasureHuntStepFollowDirection(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._directionFunc(input);
        this._mapCountFunc(input);
    }

    private _directionFunc(input: ICustomDataInput)
    {
        this.direction = input.readByte();
        if(this.direction < 0)
        {
            throw new Error("Forbidden value (" + this.direction + ") on element of TreasureHuntStepFollowDirection.direction.");
        }
    }

    private _mapCountFunc(input: ICustomDataInput)
    {
        this.mapCount = input.readVarUhShort();
        if(this.mapCount < 0)
        {
            throw new Error("Forbidden value (" + this.mapCount + ") on element of TreasureHuntStepFollowDirection.mapCount.");
        }
    }

}