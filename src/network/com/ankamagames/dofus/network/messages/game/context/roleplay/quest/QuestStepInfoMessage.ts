import { QuestActiveInformations } from "./../../../../../types/game/context/roleplay/quest/QuestActiveInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class QuestStepInfoMessage extends NetworkMessage
{

	public static readonly protocolId: number = 830;

	public infos: QuestActiveInformations;

    public constructor()
    {
        super();
        this.infos = new QuestActiveInformations();
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
        this.deserializeAs_QuestStepInfoMessage(input);
    }

    private deserializeAs_QuestStepInfoMessage(input: ICustomDataInput)
    {
        let _id1: number = input.readUnsignedShort();
        this.infos = ProtocolTypeManager.getInstance(QuestActiveInformations,_id1);
        this.infos.deserialize(input);
    }

}