import { SocialNoticeSetRequestMessage } from "./../social/SocialNoticeSetRequestMessage";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class AllianceMotdSetRequestMessage extends SocialNoticeSetRequestMessage
{

	public static readonly protocolId: number = 1488;

	public content: string = "";

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
        this.deserializeAs_AllianceMotdSetRequestMessage(input);
    }

    private deserializeAs_AllianceMotdSetRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._contentFunc(input);
    }

    private _contentFunc(input: ICustomDataInput)
    {
        this.content = input.readUTF();
    }

}