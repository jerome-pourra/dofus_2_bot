import { Shortcut } from "./../../../types/game/shortcut/Shortcut";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ShortcutBarAddRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6013;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public barType: number = 0;
	public shortcut: Shortcut;

    public constructor()
    {
        super();
        this.shortcut = new Shortcut();
    }

    public getMessageId()
    {
        return ShortcutBarAddRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ShortcutBarAddRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ShortcutBarAddRequestMessage.endpointServer;
    }

    public initShortcutBarAddRequestMessage(barType: number = 0, shortcut: Shortcut = null): ShortcutBarAddRequestMessage
    {
        this.barType = barType;
        this.shortcut = shortcut;
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
        this.serializeAs_ShortcutBarAddRequestMessage(output);
    }

    public serializeAs_ShortcutBarAddRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.barType);
        output.writeShort(this.shortcut.getTypeId());
        this.shortcut.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShortcutBarAddRequestMessage(input);
    }

    private deserializeAs_ShortcutBarAddRequestMessage(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.barType + ") on element of ShortcutBarAddRequestMessage.barType.");
        }
    }

}