import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class OnConnectionEventMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 999;

	public eventType: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return OnConnectionEventMessage.protocolId;
    }

    public initOnConnectionEventMessage(eventType: number = 0): OnConnectionEventMessage
    {
        this.eventType = eventType;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_OnConnectionEventMessage(output);
    }

    public serializeAs_OnConnectionEventMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.eventType);
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