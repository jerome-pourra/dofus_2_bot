import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { SocialNoticeMessage } from "./SocialNoticeMessage";

export class BulletinMessage extends SocialNoticeMessage
{

	public static readonly protocolId: number = 4597;

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
        this.deserializeAs_BulletinMessage(input);
    }

    private deserializeAs_BulletinMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}