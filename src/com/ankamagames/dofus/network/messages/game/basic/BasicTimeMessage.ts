import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicTimeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4945;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public timestamp: number = 0;
	public timezoneOffset: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicTimeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BasicTimeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BasicTimeMessage.endpointServer;
    }

    public initBasicTimeMessage(timestamp: number = 0, timezoneOffset: number = 0): BasicTimeMessage
    {
        this.timestamp = timestamp;
        this.timezoneOffset = timezoneOffset;
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
        this.serializeAs_BasicTimeMessage(output);
    }

    public serializeAs_BasicTimeMessage(output: ICustomDataOutput)
    {
        if(this.timestamp < 0 || this.timestamp > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.timestamp + ") on element timestamp.");
        }
        output.writeDouble(this.timestamp);
        output.writeShort(this.timezoneOffset);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicTimeMessage(input);
    }

    private deserializeAs_BasicTimeMessage(input: ICustomDataInput)
    {
        this._timestampFunc(input);
        this._timezoneOffsetFunc(input);
    }

    private _timestampFunc(input: ICustomDataInput)
    {
        this.timestamp = input.readDouble();
        if(this.timestamp < 0 || this.timestamp > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.timestamp + ") on element of BasicTimeMessage.timestamp.");
        }
    }

    private _timezoneOffsetFunc(input: ICustomDataInput)
    {
        this.timezoneOffset = input.readShort();
    }

}