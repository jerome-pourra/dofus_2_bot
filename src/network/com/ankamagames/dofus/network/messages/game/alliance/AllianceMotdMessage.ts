import { SocialNoticeMessage } from "./../social/SocialNoticeMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class AllianceMotdMessage extends SocialNoticeMessage
{

	public static readonly protocolId: number = 4661;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMotdMessage(input);
    }

    private deserializeAs_AllianceMotdMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}