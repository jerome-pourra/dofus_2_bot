import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarRemoveRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2126;

	public barType: number = 0;
	public slot: number = 0;

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