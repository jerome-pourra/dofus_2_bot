import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiConfirmationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5031;

	public kamas: number = 0;
	public amount: number = 0;
	public rate: number = 0;
	public action: number = 0;
	public transaction: string = "";

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
        this.deserializeAs_HaapiConfirmationMessage(input);
    }

    private deserializeAs_HaapiConfirmationMessage(input: ICustomDataInput)
    {
        this._kamasFunc(input);
        this._amountFunc(input);
        this._rateFunc(input);
        this._actionFunc(input);
        this._transactionFunc(input);
    }

    private _kamasFunc(input: ICustomDataInput)
    {
        this.kamas = input.readVarUhLong();
        if(this.kamas < 0 || this.kamas > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamas + ") on element of HaapiConfirmationMessage.kamas.");
        }
    }

    private _amountFunc(input: ICustomDataInput)
    {
        this.amount = input.readVarUhLong();
        if(this.amount < 0 || this.amount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.amount + ") on element of HaapiConfirmationMessage.amount.");
        }
    }

    private _rateFunc(input: ICustomDataInput)
    {
        this.rate = input.readVarUhShort();
        if(this.rate < 0)
        {
            throw new Error("Forbidden value (" + this.rate + ") on element of HaapiConfirmationMessage.rate.");
        }
    }

    private _actionFunc(input: ICustomDataInput)
    {
        this.action = input.readByte();
        if(this.action < 0)
        {
            throw new Error("Forbidden value (" + this.action + ") on element of HaapiConfirmationMessage.action.");
        }
    }

    private _transactionFunc(input: ICustomDataInput)
    {
        this.transaction = input.readUTF();
    }

}