import { Shortcut } from "./../../../types/game/shortcut/Shortcut";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarRefreshMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5972;

	public barType: number = 0;
	public shortcut: Shortcut;

    public constructor()
    {
        super();
        this.shortcut = new Shortcut();
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
        this.deserializeAs_ShortcutBarRefreshMessage(input);
    }

    private deserializeAs_ShortcutBarRefreshMessage(input: ICustomDataInput)
    {
        this._barTypeFunc(input);
        let _id2: number = input.readUnsignedShort();
        this.shortcut = ProtocolTypeManager.getInstance(Shortcut,_id2);
        this.shortcut.deserialize(input);
    }

    private _barTypeFunc(input: ICustomDataInput)
    {
        this.barType = input.readByte();
        if(this.barType < 0)
        {
            throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarRefreshMessage.barType.");
        }
    }

}