import { AccountTagInformation } from "./../../types/common/AccountTagInformation";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { IdentificationSuccessMessage } from "./IdentificationSuccessMessage";

export class IdentificationSuccessWithLoginTokenMessage extends IdentificationSuccessMessage
{

	public static readonly protocolId: number = 3224;

	public loginToken: string = "";

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
        this.deserializeAs_IdentificationSuccessWithLoginTokenMessage(input);
    }

    private deserializeAs_IdentificationSuccessWithLoginTokenMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._loginTokenFunc(input);
    }

    private _loginTokenFunc(input: ICustomDataInput)
    {
        this.loginToken = input.readUTF();
    }

}