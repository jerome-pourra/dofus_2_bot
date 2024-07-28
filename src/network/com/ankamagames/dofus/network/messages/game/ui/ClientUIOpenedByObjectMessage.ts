import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ClientUIOpenedMessage } from "./ClientUIOpenedMessage";

export class ClientUIOpenedByObjectMessage extends ClientUIOpenedMessage
{

	public static readonly protocolId: number = 2467;

	public uid: number = 0;

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
        this.deserializeAs_ClientUIOpenedByObjectMessage(input);
    }

    private deserializeAs_ClientUIOpenedByObjectMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._uidFunc(input);
    }

    private _uidFunc(input: ICustomDataInput)
    {
        this.uid = input.readVarUhInt();
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element of ClientUIOpenedByObjectMessage.uid.");
        }
    }

}