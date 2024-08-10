import { QuestActiveDetailedInformations } from "./../../../../../types/game/context/roleplay/quest/QuestActiveDetailedInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class FollowedQuestsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6589;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public quests: Array<QuestActiveDetailedInformations>;

    public constructor()
    {
        super();
        this.quests = Array<QuestActiveDetailedInformations>();
    }

    public getMessageId()
    {
        return FollowedQuestsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return FollowedQuestsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return FollowedQuestsMessage.endpointServer;
    }

    public initFollowedQuestsMessage(quests: Array<QuestActiveDetailedInformations> = null): FollowedQuestsMessage
    {
        this.quests = quests;
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
        this.serializeAs_FollowedQuestsMessage(output);
    }

    public serializeAs_FollowedQuestsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.quests.length);
        for(var _i1: number = 0; _i1 < this.quests.length; _i1++)
        {
            (this.quests[_i1] as QuestActiveDetailedInformations).serializeAs_QuestActiveDetailedInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FollowedQuestsMessage(input);
    }

    private deserializeAs_FollowedQuestsMessage(input: ICustomDataInput)
    {
        let _item1: QuestActiveDetailedInformations;
        let _questsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _questsLen; _i1++)
        {
            _item1 = new QuestActiveDetailedInformations();
            _item1.deserialize(input);
            this.quests.push(_item1);
        }
    }

}