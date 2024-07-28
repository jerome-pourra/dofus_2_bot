import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ClientKeyMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7975;

	public key: string = "";

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
        this.deserializeAs_ClientKeyMessage(input);
    }

    private deserializeAs_ClientKeyMessage(input: ICustomDataInput)
    {
        this._keyFunc(input);
    }

    private _keyFunc(input: ICustomDataInput)
    {
        this.key = input.readUTF();
    }

}