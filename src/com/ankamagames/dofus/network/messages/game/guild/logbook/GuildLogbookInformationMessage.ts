import { GuildLogbookEntryBasicInformation } from "./../../../../types/game/guild/logbook/GuildLogbookEntryBasicInformation";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GuildLogbookInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7376;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public globalActivities: Array<GuildLogbookEntryBasicInformation>;
	public chestActivities: Array<GuildLogbookEntryBasicInformation>;

    public constructor()
    {
        super();
        this.globalActivities = Array<GuildLogbookEntryBasicInformation>();
        this.chestActivities = Array<GuildLogbookEntryBasicInformation>();
    }

    public getMessageId()
    {
        return GuildLogbookInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildLogbookInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildLogbookInformationMessage.endpointServer;
    }

    public initGuildLogbookInformationMessage(globalActivities: Array<GuildLogbookEntryBasicInformation> = null, chestActivities: Array<GuildLogbookEntryBasicInformation> = null): GuildLogbookInformationMessage
    {
        this.globalActivities = globalActivities;
        this.chestActivities = chestActivities;
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
        this.serializeAs_GuildLogbookInformationMessage(output);
    }

    public serializeAs_GuildLogbookInformationMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.globalActivities.length);
        for(var _i1: number = 0; _i1 < this.globalActivities.length; _i1++)
        {
            output.writeShort((this.globalActivities[_i1] as GuildLogbookEntryBasicInformation).getTypeId());
            (this.globalActivities[_i1] as GuildLogbookEntryBasicInformation).serialize(output);
        }
        output.writeShort(this.chestActivities.length);
        for(var _i2: number = 0; _i2 < this.chestActivities.length; _i2++)
        {
            output.writeShort((this.chestActivities[_i2] as GuildLogbookEntryBasicInformation).getTypeId());
            (this.chestActivities[_i2] as GuildLogbookEntryBasicInformation).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildLogbookInformationMessage(input);
    }

    private deserializeAs_GuildLogbookInformationMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: GuildLogbookEntryBasicInformation;
        let _id2: number = 0;
        let _item2: GuildLogbookEntryBasicInformation;
        let _globalActivitiesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _globalActivitiesLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(GuildLogbookEntryBasicInformation,_id1);
            _item1.deserialize(input);
            this.globalActivities.push(_item1);
        }
        let _chestActivitiesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _chestActivitiesLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(GuildLogbookEntryBasicInformation,_id2);
            _item2.deserialize(input);
            this.chestActivities.push(_item2);
        }
    }

}