import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { TreasureHuntStep } from "./TreasureHuntStep";

export class TreasureHuntStepFollowDirection extends TreasureHuntStep implements INetworkType
{

	public static readonly protocolId: number = 9008;

	public direction: number = 1;
	public mapCount: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return TreasureHuntStepFollowDirection.protocolId;
    }

    public initTreasureHuntStepFollowDirection(direction: number = 1, mapCount: number = 0): TreasureHuntStepFollowDirection
    {
        this.direction = direction;
        this.mapCount = mapCount;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TreasureHuntStepFollowDirection(output);
    }

    public serializeAs_TreasureHuntStepFollowDirection(output: ICustomDataOutput)
    {
        super.serializeAs_TreasureHuntStep(output);
        output.writeByte(this.direction);
        if(this.mapCount < 0)
        {
            throw new Error("Forbidden value (" + this.mapCount + ") on element mapCount.");
        }
        output.writeVarShort(this.mapCount);
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