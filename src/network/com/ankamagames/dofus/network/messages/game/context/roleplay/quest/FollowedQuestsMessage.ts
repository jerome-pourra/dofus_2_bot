import { QuestActiveDetailedInformations } from "./../../../../../types/game/context/roleplay/quest/QuestActiveDetailedInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class FollowedQuestsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6589;

	public quests: Array<QuestActiveDetailedInformations>;

    public constructor()
    {
        super();
        this.quests = Array<QuestActiveDetailedInformations>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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