import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicTimeMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4945;

	public timestamp: number = 0;
	public timezoneOffset: number = 0;

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