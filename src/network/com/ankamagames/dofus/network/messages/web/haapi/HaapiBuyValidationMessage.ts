import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { HaapiValidationMessage } from "./HaapiValidationMessage";

export class HaapiBuyValidationMessage extends HaapiValidationMessage
{

	public static readonly protocolId: number = 1448;

	public amount: number = 0;
	public email: string = "";

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
        this.deserializeAs_HaapiBuyValidationMessage(input);
    }

    private deserializeAs_HaapiBuyValidationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._amountFunc(input);
        this._emailFunc(input);
    }

    private _amountFunc(input: ICustomDataInput)
    {
        this.amount = input.readVarUhLong();
        if(this.amount < 0 || this.amount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element of HaapiBuyValidationMessage.amount.");
        }
    }

    private _emailFunc(input: ICustomDataInput)
    {
        this.email = input.readUTF();
    }

}