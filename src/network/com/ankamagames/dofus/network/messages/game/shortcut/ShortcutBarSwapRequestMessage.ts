import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarSwapRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 45;

	public barType: number = 0;
	public firstSlot: number = 0;
	public secondSlot: number = 0;

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