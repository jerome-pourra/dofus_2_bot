import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicDateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7499;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public day: number = 0;
	public month: number = 0;
	public year: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicDateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BasicDateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BasicDateMessage.endpointServer;
    }

    public initBasicDateMessage(day: number = 0, month: number = 0, year: number = 0): BasicDateMessage
    {
        this.day = day;
        this.month = month;
        this.year = year;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_BasicDateMessage(output);
    }

    public serializeAs_BasicDateMessage(output: ICustomDataOutput)
    {
        if(this.day < 0)
        {
            throw new Error("Forbidden value (" + this.day + ") on element day.");
        }
        output.writeByte(this.day);
        if(this.month < 0)
        {
            throw new Error("Forbidden value (" + this.month + ") on element month.");
        }
        output.writeByte(this.month);
        if(this.year < 0)
        {
            throw new Error("Forbidden value (" + this.year + ") on element year.");
        }
        output.writeShort(this.year);
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