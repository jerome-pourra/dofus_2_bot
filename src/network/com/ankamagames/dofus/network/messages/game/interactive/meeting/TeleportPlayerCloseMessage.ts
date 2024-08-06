import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportPlayerCloseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4378;

	public mapId: number = 0;
	public requesterId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportPlayerCloseMessage.protocolId;
    }

    public initTeleportPlayerCloseMessage(mapId: number = 0, requesterId: number = 0): TeleportPlayerCloseMessage
    {
        this.mapId = mapId;
        this.requesterId = requesterId;
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
        this.serializeAs_TeleportPlayerCloseMessage(output);
    }

    public serializeAs_TeleportPlayerCloseMessage(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element requesterId.");
        }
        output.writeVarLong(this.requesterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportPlayerCloseMessage(input);
    }

    private deserializeAs_TeleportPlayerCloseMessage(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
        this._requesterIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of TeleportPlayerCloseMessage.mapId.");
        }
    }

    private _requesterIdFunc(input: ICustomDataInput)
    {
        this.requesterId = input.readVarUhLong();
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element of TeleportPlayerCloseMessage.requesterId.");
        }
    }

}