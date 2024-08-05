import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";
import { AccountTagInformation } from "./AccountTagInformation";
import { AbstractPlayerSearchInformation } from "./AbstractPlayerSearchInformation";

export class PlayerSearchTagInformation extends AbstractPlayerSearchInformation
{

	public static readonly protocolId: number = 3389;

	public tag: AccountTagInformation;

    public constructor()
    {
        super();
        this.tag = new AccountTagInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerSearchTagInformation(input);
    }

    private deserializeAs_PlayerSearchTagInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.tag = new AccountTagInformation();
        this.tag.deserialize(input);
    }

}