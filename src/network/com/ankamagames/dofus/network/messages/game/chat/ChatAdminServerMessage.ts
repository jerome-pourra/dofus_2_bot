import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatServerMessage } from "./ChatServerMessage";

export class ChatAdminServerMessage extends ChatServerMessage
{

	public static readonly protocolId: number = 2080;

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
        this.deserializeAs_ChatAdminServerMessage(input);
    }

    private deserializeAs_ChatAdminServerMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}