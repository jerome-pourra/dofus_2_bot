import { PaginationAnswerAbstractMessage } from "./../PaginationAnswerAbstractMessage";
import { GuildFactSheetInformations } from "./../../../types/game/social/GuildFactSheetInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class GuildSummaryMessage extends PaginationAnswerAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 156;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public guilds: Array<GuildFactSheetInformations>;

    public constructor()
    {
        super();
        this.guilds = Array<GuildFactSheetInformations>();
    }

    public getMessageId()
    {
        return GuildSummaryMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildSummaryMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildSummaryMessage.endpointServer;
    }

    public initGuildSummaryMessage(offset: number = 0, count: number = 0, total: number = 0, guilds: Array<GuildFactSheetInformations> = null): GuildSummaryMessage
    {
        super.initPaginationAnswerAbstractMessage(offset,count,total);
        this.guilds = guilds;
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
        this.serializeAs_GuildSummaryMessage(output);
    }

    public serializeAs_GuildSummaryMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PaginationAnswerAbstractMessage(output);
        output.writeShort(this.guilds.length);
        for(var _i1: number = 0; _i1 < this.guilds.length; _i1++)
        {
            (this.guilds[_i1] as GuildFactSheetInformations).serializeAs_GuildFactSheetInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildSummaryMessage(input);
    }

    private deserializeAs_GuildSummaryMessage(input: ICustomDataInput)
    {
        let _item1: GuildFactSheetInformations;
        super.deserialize(input);
        let _guildsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _guildsLen; _i1++)
        {
            _item1 = new GuildFactSheetInformations();
            _item1.deserialize(input);
            this.guilds.push(_item1);
        }
    }

}