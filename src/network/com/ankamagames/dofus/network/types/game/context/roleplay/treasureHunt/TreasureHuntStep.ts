import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../../jerakine/network/INetworkType";

export class TreasureHuntStep
{

	public static readonly protocolId: number = 8185;

    public constructor()
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