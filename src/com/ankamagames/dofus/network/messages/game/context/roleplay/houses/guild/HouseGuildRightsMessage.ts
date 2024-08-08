import { GuildInformations } from "./../../../../../../types/game/context/roleplay/GuildInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class HouseGuildRightsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8722;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public houseId: number = 0;
	public instanceId: number = 0;
	public secondHand: boolean = false;
	public guildInfo: GuildInformations;
	public rights: number = 0;

    public constructor()
    {
        super();
        this.guildInfo = new GuildInformations();
    }

    public getMessageId()
    {
        return HouseGuildRightsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return HouseGuildRightsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return HouseGuildRightsMessage.endpointServer;
    }

    public initHouseGuildRightsMessage(houseId: number = 0, instanceId: number = 0, secondHand: boolean = false, guildInfo: GuildInformations = null, rights: number = 0): HouseGuildRightsMessage
    {
        this.houseId = houseId;
        this.instanceId = instanceId;
        this.secondHand = secondHand;
        this.guildInfo = guildInfo;
        this.rights = rights;
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
        this.serializeAs_HouseGuildRightsMessage(output);
    }

    public serializeAs_HouseGuildRightsMessage(output: ICustomDataOutput)
    {
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
        }
        output.writeVarInt(this.houseId);
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element instanceId.");
        }
        output.writeInt(this.instanceId);
        output.writeBoolean(this.secondHand);
        this.guildInfo.serializeAs_GuildInformations(output);
        if(this.rights < 0)
        {
            throw new Error("Forbidden value (" + this.rights + ") on element rights.");
        }
        output.writeVarInt(this.rights);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HouseGuildRightsMessage(input);
    }

    private deserializeAs_HouseGuildRightsMessage(input: ICustomDataInput)
    {
        this._houseIdFunc(input);
        this._instanceIdFunc(input);
        this._secondHandFunc(input);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(input);
        this._rightsFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HouseGuildRightsMessage.houseId.");
        }
    }

    private _instanceIdFunc(input: ICustomDataInput)
    {
        this.instanceId = input.readInt();
        if(this.instanceId < 0)
        {
            throw new Error("Forbidden value (" + this.instanceId + ") on element of HouseGuildRightsMessage.instanceId.");
        }
    }

    private _secondHandFunc(input: ICustomDataInput)
    {
        this.secondHand = input.readBoolean();
    }

    private _rightsFunc(input: ICustomDataInput)
    {
        this.rights = input.readVarUhInt();
        if(this.rights < 0)
        {
            throw new Error("Forbidden value (" + this.rights + ") on element of HouseGuildRightsMessage.rights.");
        }
    }

}