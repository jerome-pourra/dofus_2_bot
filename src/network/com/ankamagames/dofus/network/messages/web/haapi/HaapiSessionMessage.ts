import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiSessionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4199;

	public key: string = "";
	public type: number = 0;

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
        this.deserializeAs_HaapiSessionMessage(input);
    }

    private deserializeAs_HaapiSessionMessage(input: ICustomDataInput)
    {
        this._keyFunc(input);
        this._typeFunc(input);
    }

    private _keyFunc(input: ICustomDataInput)
    {
        this.key = input.readUTF();
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of HaapiSessionMessage.type.");
        }
    }

}