import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { TreasureHuntStep } from "./TreasureHuntStep";

export class TreasureHuntStepDig extends TreasureHuntStep
{

	public static readonly protocolId: number = 5858;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntStepDig(input);
    }

    private deserializeAs_TreasureHuntStepDig(input: ICustomDataInput)
    {

    }

}