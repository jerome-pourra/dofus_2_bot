import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarRemovedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8757;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public barType: number = 0;
	public slot: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ShortcutBarRemovedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ShortcutBarRemovedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ShortcutBarRemovedMessage.endpointServer;
    }

    public initShortcutBarRemovedMessage(barType: number = 0, slot: number = 0): ShortcutBarRemovedMessage
    {
        this.barType = barType;
        this.slot = slot;
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
        this.serializeAs_ShortcutBarRemovedMessage(output);
    }

    public serializeAs_ShortcutBarRemovedMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.barType);
        if(this.slot < 0 || this.slot > 99)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element slot.");
        }
        output.writeByte(this.slot);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutBarRemovedMessage(input);
    }

    private deserializeAs_ShortcutBarRemovedMessage(input: ICustomDataInput)
    {
        this._barTypeFunc(input);
        this._slotFunc(input);
    }

    private _barTypeFunc(input: ICustomDataInput)
    {
        this.barType = input.readByte();
        if(this.barType < 0)
        {
            throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarRemovedMessage.barType.");
        }
    }

    private _slotFunc(input: ICustomDataInput)
    {
        this.slot = input.readByte();
        if(this.slot < 0 || this.slot > 99)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element of ShortcutBarRemovedMessage.slot.");
        }
    }

}