import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarRemoveRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2126;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public barType: number = 0;
	public slot: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ShortcutBarRemoveRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ShortcutBarRemoveRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ShortcutBarRemoveRequestMessage.endpointServer;
    }

    public initShortcutBarRemoveRequestMessage(barType: number = 0, slot: number = 0): ShortcutBarRemoveRequestMessage
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
        this.serializeAs_ShortcutBarRemoveRequestMessage(output);
    }

    public serializeAs_ShortcutBarRemoveRequestMessage(output: ICustomDataOutput)
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
        this.deserializeAs_ShortcutBarRemoveRequestMessage(input);
    }

    private deserializeAs_ShortcutBarRemoveRequestMessage(input: ICustomDataInput)
    {
        this._barTypeFunc(input);
        this._slotFunc(input);
    }

    private _barTypeFunc(input: ICustomDataInput)
    {
        this.barType = input.readByte();
        if(this.barType < 0)
        {
            throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarRemoveRequestMessage.barType.");
        }
    }

    private _slotFunc(input: ICustomDataInput)
    {
        this.slot = input.readByte();
        if(this.slot < 0 || this.slot > 99)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element of ShortcutBarRemoveRequestMessage.slot.");
        }
    }

}