import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarSwapRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 45;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public barType: number = 0;
	public firstSlot: number = 0;
	public secondSlot: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ShortcutBarSwapRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ShortcutBarSwapRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ShortcutBarSwapRequestMessage.endpointServer;
    }

    public initShortcutBarSwapRequestMessage(barType: number = 0, firstSlot: number = 0, secondSlot: number = 0): ShortcutBarSwapRequestMessage
    {
        this.barType = barType;
        this.firstSlot = firstSlot;
        this.secondSlot = secondSlot;
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
        this.serializeAs_ShortcutBarSwapRequestMessage(output);
    }

    public serializeAs_ShortcutBarSwapRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.barType);
        if(this.firstSlot < 0 || this.firstSlot > 99)
        {
            throw new Error("Forbidden value (" + this.firstSlot + ") on element firstSlot.");
        }
        output.writeByte(this.firstSlot);
        if(this.secondSlot < 0 || this.secondSlot > 99)
        {
            throw new Error("Forbidden value (" + this.secondSlot + ") on element secondSlot.");
        }
        output.writeByte(this.secondSlot);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutBarSwapRequestMessage(input);
    }

    private deserializeAs_ShortcutBarSwapRequestMessage(input: ICustomDataInput)
    {
        this._barTypeFunc(input);
        this._firstSlotFunc(input);
        this._secondSlotFunc(input);
    }

    private _barTypeFunc(input: ICustomDataInput)
    {
        this.barType = input.readByte();
        if(this.barType < 0)
        {
            throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarSwapRequestMessage.barType.");
        }
    }

    private _firstSlotFunc(input: ICustomDataInput)
    {
        this.firstSlot = input.readByte();
        if(this.firstSlot < 0 || this.firstSlot > 99)
        {
            throw new Error("Forbidden value (" + this.firstSlot + ") on element of ShortcutBarSwapRequestMessage.firstSlot.");
        }
    }

    private _secondSlotFunc(input: ICustomDataInput)
    {
        this.secondSlot = input.readByte();
        if(this.secondSlot < 0 || this.secondSlot > 99)
        {
            throw new Error("Forbidden value (" + this.secondSlot + ") on element of ShortcutBarSwapRequestMessage.secondSlot.");
        }
    }

}