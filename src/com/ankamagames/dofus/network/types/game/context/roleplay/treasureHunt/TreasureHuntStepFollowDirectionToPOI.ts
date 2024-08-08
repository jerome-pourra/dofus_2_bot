import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { TreasureHuntStep } from "./TreasureHuntStep";

export class TreasureHuntStepFollowDirectionToPOI extends TreasureHuntStep implements INetworkType
{

	public static readonly protocolId: number = 9275;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public direction: number = 1;
	public poiLabelId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return TreasureHuntStepFollowDirectionToPOI.protocolId;
    }

    public isEndpointClient()
    {
        return TreasureHuntStepFollowDirectionToPOI.endpointClient;
    }

    public isEndpointServer()
    {
        return TreasureHuntStepFollowDirectionToPOI.endpointServer;
    }

    public initTreasureHuntStepFollowDirectionToPOI(direction: number = 1, poiLabelId: number = 0): TreasureHuntStepFollowDirectionToPOI
    {
        this.direction = direction;
        this.poiLabelId = poiLabelId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TreasureHuntStepFollowDirectionToPOI(output);
    }

    public serializeAs_TreasureHuntStepFollowDirectionToPOI(output: ICustomDataOutput)
    {
        super.serializeAs_TreasureHuntStep(output);
        output.writeByte(this.direction);
        if(this.poiLabelId < 0)
        {
            throw new Error("Forbidden value (" + this.poiLabelId + ") on element poiLabelId.");
        }
        output.writeVarShort(this.poiLabelId);
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