import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GroupTeleportPlayerOfferMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3076;

	public mapId: number = 0;
	public worldX: number = 0;
	public worldY: number = 0;
	public timeLeft: number = 0;
	public requesterId: number = 0;
	public requesterName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GroupTeleportPlayerOfferMessage.protocolId;
    }

    public initGroupTeleportPlayerOfferMessage(mapId: number = 0, worldX: number = 0, worldY: number = 0, timeLeft: number = 0, requesterId: number = 0, requesterName: string = ""): GroupTeleportPlayerOfferMessage
    {
        this.mapId = mapId;
        this.worldX = worldX;
        this.worldY = worldY;
        this.timeLeft = timeLeft;
        this.requesterId = requesterId;
        this.requesterName = requesterName;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GroupTeleportPlayerOfferMessage(output);
    }

    public serializeAs_GroupTeleportPlayerOfferMessage(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        output.writeShort(this.worldX);
        output.writeShort(this.worldY);
        if(this.timeLeft < 0)
        {
            throw new Error("Forbidden value (" + this.timeLeft + ") on element timeLeft.");
        }
        output.writeVarInt(this.timeLeft);
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element requesterId.");
        }
        output.writeVarLong(this.requesterId);
        output.writeUTF(this.requesterName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GroupTeleportPlayerOfferMessage(input);
    }

    private deserializeAs_GroupTeleportPlayerOfferMessage(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._timeLeftFunc(input);
        this._requesterIdFunc(input);
        this._requesterNameFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of GroupTeleportPlayerOfferMessage.mapId.");
        }
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
    }

    private _timeLeftFunc(input: ICustomDataInput)
    {
        this.timeLeft = input.readVarUhInt();
        if(this.timeLeft < 0)
        {
            throw new Error("Forbidden value (" + this.timeLeft + ") on element of GroupTeleportPlayerOfferMessage.timeLeft.");
        }
    }

    private _requesterIdFunc(input: ICustomDataInput)
    {
        this.requesterId = input.readVarUhLong();
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element of GroupTeleportPlayerOfferMessage.requesterId.");
        }
    }

    private _requesterNameFunc(input: ICustomDataInput)
    {
        this.requesterName = input.readUTF();
    }

}