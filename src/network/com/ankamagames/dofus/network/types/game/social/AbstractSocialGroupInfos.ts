import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class AbstractSocialGroupInfos
{

	public static readonly protocolId: number = 6837;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractSocialGroupInfos(input);
    }

    private deserializeAs_AbstractSocialGroupInfos(input: ICustomDataInput)
    {

    }

}