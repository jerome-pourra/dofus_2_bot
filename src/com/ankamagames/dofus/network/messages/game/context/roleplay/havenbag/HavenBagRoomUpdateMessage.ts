import { HavenBagRoomPreviewInformation } from "./../../../../../types/game/havenbag/HavenBagRoomPreviewInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagRoomUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5461;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public action: number = 0;
	public roomsPreview: Array<HavenBagRoomPreviewInformation>;

    public constructor()
    {
        super();
        this.roomsPreview = Array<HavenBagRoomPreviewInformation>();
    }

    public getMessageId()
    {
        return HavenBagRoomUpdateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HavenBagRoomUpdateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HavenBagRoomUpdateMessage.endpointServer;
    }

    public initHavenBagRoomUpdateMessage(action: number = 0, roomsPreview: Array<HavenBagRoomPreviewInformation> = null): HavenBagRoomUpdateMessage
    {
        this.action = action;
        this.roomsPreview = roomsPreview;
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
        this.serializeAs_HavenBagRoomUpdateMessage(output);
    }

    public serializeAs_HavenBagRoomUpdateMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.action);
        output.writeShort(this.roomsPreview.length);
        for(var _i2: number = 0; _i2 < this.roomsPreview.length; _i2++)
        {
            (this.roomsPreview[_i2] as HavenBagRoomPreviewInformation).serializeAs_HavenBagRoomPreviewInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HavenBagRoomUpdateMessage(input);
    }

    private deserializeAs_HavenBagRoomUpdateMessage(input: ICustomDataInput)
    {
        let _item2: HavenBagRoomPreviewInformation;
        this._actionFunc(input);
        let _roomsPreviewLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _roomsPreviewLen; _i2++)
        {
            _item2 = new HavenBagRoomPreviewInformation();
            _item2.deserialize(input);
            this.roomsPreview.push(_item2);
        }
    }

    private _actionFunc(input: ICustomDataInput)
    {
        this.action = input.readByte();
        if(this.action < 0)
        {
            throw new Error("Forbidden value (" + this.action + ") on element of HavenBagRoomUpdateMessage.action.");
        }
    }

}