import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ChatServerMessage } from "./ChatServerMessage";

export class ChatKolizeumServerMessage extends ChatServerMessage
{

	public static readonly protocolId: number = 942;

	public originServerId: number = 0;

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
        this.deserializeAs_ChatKolizeumServerMessage(input);
    }

    private deserializeAs_ChatKolizeumServerMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._originServerIdFunc(input);
    }

    private _originServerIdFunc(input: ICustomDataInput)
    {
        this.originServerId = input.readShort();
    }

}