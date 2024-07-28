import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ReloginTokenStatusMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2673;

	public validToken: boolean = false;
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
        this.deserializeAs_ReloginTokenStatusMessage(input);
    }

    private deserializeAs_ReloginTokenStatusMessage(input: ICustomDataInput)
    {
        this._validTokenFunc(input);
        this._tokenFunc(input);
    }

    private _validTokenFunc(input: ICustomDataInput)
    {
        this.validToken = input.readBoolean();
    }

    private _tokenFunc(input: ICustomDataInput)
    {
        this.token = input.readUTF();
    }

}