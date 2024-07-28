import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class FightResultAdditionalData
{

	public static readonly protocolId: number = 8078;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightResultAdditionalData(input);
    }

    private deserializeAs_FightResultAdditionalData(input: ICustomDataInput)
    {

    }

}