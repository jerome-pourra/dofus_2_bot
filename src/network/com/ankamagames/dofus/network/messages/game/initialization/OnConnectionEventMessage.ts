import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class OnConnectionEventMessage extends NetworkMessage
{

	public static readonly protocolId: number = 999;

	public eventType: number = 0;

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
        this.deserializeAs_OnConnectionEventMessage(input);
    }

    private deserializeAs_OnConnectionEventMessage(input: ICustomDataInput)
    {
        this._eventTypeFunc(input);
    }

    private _eventTypeFunc(input: ICustomDataInput)
    {
        this.eventType = input.readByte();
        if(this.eventType < 0)
        {
            throw new Error("Forbidden value (" + this.eventType + ") on element of OnConnectionEventMessage.eventType.");
        }
    }

}