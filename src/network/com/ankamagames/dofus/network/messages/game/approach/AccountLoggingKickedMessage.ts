import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AccountLoggingKickedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2295;

	public days: number = 0;
	public hours: number = 0;
	public minutes: number = 0;

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
        this.deserializeAs_AccountLoggingKickedMessage(input);
    }

    private deserializeAs_AccountLoggingKickedMessage(input: ICustomDataInput)
    {
        this._daysFunc(input);
        this._hoursFunc(input);
        this._minutesFunc(input);
    }

    private _daysFunc(input: ICustomDataInput)
    {
        this.days = input.readVarUhShort();
        if(this.days < 0)
        {
            throw new Error("Forbidden value (" + this.days + ") on element of AccountLoggingKickedMessage.days.");
        }
    }

    private _hoursFunc(input: ICustomDataInput)
    {
        this.hours = input.readByte();
        if(this.hours < 0)
        {
            throw new Error("Forbidden value (" + this.hours + ") on element of AccountLoggingKickedMessage.hours.");
        }
    }

    private _minutesFunc(input: ICustomDataInput)
    {
        this.minutes = input.readByte();
        if(this.minutes < 0)
        {
            throw new Error("Forbidden value (" + this.minutes + ") on element of AccountLoggingKickedMessage.minutes.");
        }
    }

}