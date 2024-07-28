import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiShopApiKeyMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1934;

	public token: string = "";

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
        this.deserializeAs_HaapiShopApiKeyMessage(input);
    }

    private deserializeAs_HaapiShopApiKeyMessage(input: ICustomDataInput)
    {
        this._tokenFunc(input);
    }

    private _tokenFunc(input: ICustomDataInput)
    {
        this.token = input.readUTF();
    }

}