import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class Shortcut implements INetworkType
{

	public static readonly protocolId: number = 5117;

	public slot: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return Shortcut.protocolId;
    }

    public initShortcut(slot: number = 0): Shortcut
    {
        this.slot = slot;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_Shortcut(output);
    }

    public serializeAs_Shortcut(output: ICustomDataOutput)
    {
        if(this.slot < 0 || this.slot > 99)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element slot.");
        }
        output.writeByte(this.slot);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_Shortcut(input);
    }

    private deserializeAs_Shortcut(input: ICustomDataInput)
    {
        this._slotFunc(input);
    }

    private _slotFunc(input: ICustomDataInput)
    {
        this.slot = input.readByte();
        if(this.slot < 0 || this.slot > 99)
        {
            throw new Error("Forbidden value (" + this.slot + ") on element of Shortcut.slot.");
        }
    }

}