import { AccountTagInformation } from "./../../../types/common/AccountTagInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendDeleteResultMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4930;

	public success: boolean = false;
	public tag: AccountTagInformation;

    public constructor()
    {
        super();
        this.tag = new AccountTagInformation();
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
        this.deserializeAs_FriendDeleteResultMessage(input);
    }

    private deserializeAs_FriendDeleteResultMessage(input: ICustomDataInput)
    {
        this._successFunc(input);
        this.tag = new AccountTagInformation();
        this.tag.deserialize(input);
    }

    private _successFunc(input: ICustomDataInput)
    {
        this.success = input.readBoolean();
    }

}