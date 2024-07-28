import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AbstractContactInformations } from "./AbstractContactInformations";

export class IgnoredInformations extends AbstractContactInformations
{

	public static readonly protocolId: number = 2099;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IgnoredInformations(input);
    }

    private deserializeAs_IgnoredInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}