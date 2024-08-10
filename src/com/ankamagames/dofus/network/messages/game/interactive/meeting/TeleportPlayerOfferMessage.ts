import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class TeleportPlayerOfferMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9777;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public mapId: number = 0;
	public message: string = "";
	public timeLeft: number = 0;
	public requesterId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportPlayerOfferMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TeleportPlayerOfferMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TeleportPlayerOfferMessage.endpointServer;
    }

    public initTeleportPlayerOfferMessage(mapId: number = 0, message: string = "", timeLeft: number = 0, requesterId: number = 0): TeleportPlayerOfferMessage
    {
        this.mapId = mapId;
        this.message = message;
        this.timeLeft = timeLeft;
        this.requesterId = requesterId;
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
        this.serializeAs_TeleportPlayerOfferMessage(output);
    }

    public serializeAs_TeleportPlayerOfferMessage(output: ICustomDataOutput)
    {
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
        output.writeUTF(this.message);
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
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportPlayerOfferMessage(input);
    }

    private deserializeAs_TeleportPlayerOfferMessage(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
        this._messageFunc(input);
        this._timeLeftFunc(input);
        this._requesterIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of TeleportPlayerOfferMessage.mapId.");
        }
    }

    private _messageFunc(input: ICustomDataInput)
    {
        this.message = input.readUTF();
    }

    private _timeLeftFunc(input: ICustomDataInput)
    {
        this.timeLeft = input.readVarUhInt();
        if(this.timeLeft < 0)
        {
            throw new Error("Forbidden value (" + this.timeLeft + ") on element of TeleportPlayerOfferMessage.timeLeft.");
        }
    }

    private _requesterIdFunc(input: ICustomDataInput)
    {
        this.requesterId = input.readVarUhLong();
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element of TeleportPlayerOfferMessage.requesterId.");
        }
    }

}