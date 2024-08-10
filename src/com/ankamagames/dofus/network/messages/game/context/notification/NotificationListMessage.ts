import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class NotificationListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7443;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public flags: Array<number>;

    public constructor()
    {
        super();
        this.flags = Array<number>();
    }

    public getMessageId()
    {
        return NotificationListMessage.protocolId;
    }

    public isEndpointClient()
    {
        return NotificationListMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return NotificationListMessage.endpointServer;
    }

    public initNotificationListMessage(flags: Array<number> = null): NotificationListMessage
    {
        this.flags = flags;
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
        this.serializeAs_NotificationListMessage(output);
    }

    public serializeAs_NotificationListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.flags.length);
        for(var _i1: number = 0; _i1 < this.flags.length; _i1++)
        {
            output.writeVarInt(this.flags[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NotificationListMessage(input);
    }

    private deserializeAs_NotificationListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _flagsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _flagsLen; _i1++)
        {
            _val1 = input.readVarInt();
            this.flags.push(_val1);
        }
    }

}