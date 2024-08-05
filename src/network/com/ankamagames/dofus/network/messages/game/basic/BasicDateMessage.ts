import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicDateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7499;

	public day: number = 0;
	public month: number = 0;
	public year: number = 0;

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
        this.deserializeAs_BasicDateMessage(input);
    }

    private deserializeAs_BasicDateMessage(input: ICustomDataInput)
    {
        this._dayFunc(input);
        this._monthFunc(input);
        this._yearFunc(input);
    }

    private _dayFunc(input: ICustomDataInput)
    {
        this.day = input.readByte();
        if(this.day < 0)
        {
            throw new Error("Forbidden value (" + this.day + ") on element of BasicDateMessage.day.");
        }
    }

    private _monthFunc(input: ICustomDataInput)
    {
        this.month = input.readByte();
        if(this.month < 0)
        {
            throw new Error("Forbidden value (" + this.month + ") on element of BasicDateMessage.month.");
        }
    }

    private _yearFunc(input: ICustomDataInput)
    {
        this.year = input.readShort();
        if(this.year < 0)
        {
            throw new Error("Forbidden value (" + this.year + ") on element of BasicDateMessage.year.");
        }
    }

}