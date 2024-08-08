import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GroupTeleportPlayerCloseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2716;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public mapId: number = 0;
	public requesterId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GroupTeleportPlayerCloseMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GroupTeleportPlayerCloseMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GroupTeleportPlayerCloseMessage.endpointServer;
    }

    public initGroupTeleportPlayerCloseMessage(mapId: number = 0, requesterId: number = 0): GroupTeleportPlayerCloseMessage
    {
        this.mapId = mapId;
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
        this.serializeAs_GroupTeleportPlayerCloseMessage(output);
    }

    public serializeAs_GroupTeleportPlayerCloseMessage(output: ICustomDataOutput)
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
        this.deserializeAs_GroupTeleportPlayerCloseMessage(input);
    }

    private deserializeAs_GroupTeleportPlayerCloseMessage(input: ICustomDataInput)
    {
        this._mapIdFunc(input);
        this._requesterIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of GroupTeleportPlayerCloseMessage.mapId.");
        }
    }

    private _requesterIdFunc(input: ICustomDataInput)
    {
        this.requesterId = input.readVarUhLong();
        if(this.requesterId < 0 || this.requesterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.requesterId + ") on element of GroupTeleportPlayerCloseMessage.requesterId.");
        }
    }

}