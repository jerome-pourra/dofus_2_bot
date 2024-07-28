import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class SpawnInformation
{

	public static readonly protocolId: number = 339;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpawnInformation(input);
    }

    private deserializeAs_SpawnInformation(input: ICustomDataInput)
    {

    }

}