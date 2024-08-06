import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { TreasureHuntStep } from "./TreasureHuntStep";

export class TreasureHuntStepDig extends TreasureHuntStep implements INetworkType
{

	public static readonly protocolId: number = 5858;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return TreasureHuntStepDig.protocolId;
    }

    public initTreasureHuntStepDig(): TreasureHuntStepDig
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TreasureHuntStepDig(output);
    }

    public serializeAs_TreasureHuntStepDig(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntStepDig(input);
    }

    private deserializeAs_TreasureHuntStepDig(input: ICustomDataInput)
    {

    }

}