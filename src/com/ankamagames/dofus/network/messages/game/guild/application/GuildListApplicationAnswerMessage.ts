import { PaginationAnswerAbstractMessage } from "./../../PaginationAnswerAbstractMessage";
import { SocialApplicationInformation } from "./../../../../types/game/social/application/SocialApplicationInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GuildListApplicationAnswerMessage extends PaginationAnswerAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 948;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public applies: Array<SocialApplicationInformation>;

    public constructor()
    {
        super();
        this.applies = Array<SocialApplicationInformation>();
    }

    public getMessageId()
    {
        return GuildListApplicationAnswerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildListApplicationAnswerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildListApplicationAnswerMessage.endpointServer;
    }

    public initGuildListApplicationAnswerMessage(offset: number = 0, count: number = 0, total: number = 0, applies: Array<SocialApplicationInformation> = null): GuildListApplicationAnswerMessage
    {
        super.initPaginationAnswerAbstractMessage(offset,count,total);
        this.applies = applies;
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
        this.serializeAs_GuildListApplicationAnswerMessage(output);
    }

    public serializeAs_GuildListApplicationAnswerMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PaginationAnswerAbstractMessage(output);
        output.writeShort(this.applies.length);
        for(var _i1: number = 0; _i1 < this.applies.length; _i1++)
        {
            (this.applies[_i1] as SocialApplicationInformation).serializeAs_SocialApplicationInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildListApplicationAnswerMessage(input);
    }

    private deserializeAs_GuildListApplicationAnswerMessage(input: ICustomDataInput)
    {
        let _item1: SocialApplicationInformation;
        super.deserialize(input);
        let _appliesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _appliesLen; _i1++)
        {
            _item1 = new SocialApplicationInformation();
            _item1.deserialize(input);
            this.applies.push(_item1);
        }
    }

}