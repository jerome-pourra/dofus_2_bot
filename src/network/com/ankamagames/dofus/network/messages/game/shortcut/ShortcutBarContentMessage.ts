import { Shortcut } from "./../../../types/game/shortcut/Shortcut";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarContentMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9158;

	public barType: number = 0;
	public shortcuts: Array<Shortcut>;

    public constructor()
    {
        super();
        this.shortcuts = Array<Shortcut>();
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
        this.deserializeAs_ShortcutBarContentMessage(input);
    }

    private deserializeAs_ShortcutBarContentMessage(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: Shortcut;
        this._barTypeFunc(input);
        let _shortcutsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _shortcutsLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(Shortcut,_id2);
            _item2.deserialize(input);
            this.shortcuts.push(_item2);
        }
    }

    private _barTypeFunc(input: ICustomDataInput)
    {
        this.barType = input.readByte();
        if(this.barType < 0)
        {
            throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarContentMessage.barType.");
        }
    }

}