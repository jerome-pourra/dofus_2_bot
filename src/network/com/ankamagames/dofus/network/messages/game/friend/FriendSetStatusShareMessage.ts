import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class FriendSetStatusShareMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5816;

	public share: boolean = false;

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
        this.deserializeAs_FriendSetStatusShareMessage(input);
    }

    private deserializeAs_FriendSetStatusShareMessage(input: ICustomDataInput)
    {
        this._shareFunc(input);
    }

    private _shareFunc(input: ICustomDataInput)
    {
        this.share = input.readBoolean();
    }

}