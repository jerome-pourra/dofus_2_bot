import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";
import { TreasureHuntStep } from "./TreasureHuntStep";

export class TreasureHuntStepFight extends TreasureHuntStep implements INetworkType
{

	public static readonly protocolId: number = 9719;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return TreasureHuntStepFight.protocolId;
    }

    public initTreasureHuntStepFight(): TreasureHuntStepFight
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TreasureHuntStepFight(output);
    }

    public serializeAs_TreasureHuntStepFight(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntStepFight(input);
    }

    private deserializeAs_TreasureHuntStepFight(input: ICustomDataInput)
    {

    }

}