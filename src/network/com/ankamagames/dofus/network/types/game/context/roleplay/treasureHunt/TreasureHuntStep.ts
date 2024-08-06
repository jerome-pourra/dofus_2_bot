import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class TreasureHuntStep implements INetworkType
{

	public static readonly protocolId: number = 8185;

    public constructor()
    {

    }

    public getTypeId()
    {
        return TreasureHuntStep.protocolId;
    }

    public initTreasureHuntStep(): TreasureHuntStep
    {
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_TreasureHuntStep(output);
    }

    public serializeAs_TreasureHuntStep(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TreasureHuntStep(input);
    }

    private deserializeAs_TreasureHuntStep(input: ICustomDataInput)
    {

    }

}