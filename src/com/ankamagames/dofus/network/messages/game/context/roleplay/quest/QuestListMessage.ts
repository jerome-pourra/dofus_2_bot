import { QuestActiveInformations } from "./../../../../../types/game/context/roleplay/quest/QuestActiveInformations";
import { ProtocolTypeManager } from "./../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class QuestListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3323;

	public finishedQuestsIds: Array<number>;
	public finishedQuestsCounts: Array<number>;
	public activeQuests: Array<QuestActiveInformations>;
	public reinitDoneQuestsIds: Array<number>;

    public constructor()
    {
        super();
        this.finishedQuestsIds = Array<number>();
        this.finishedQuestsCounts = Array<number>();
        this.activeQuests = Array<QuestActiveInformations>();
        this.reinitDoneQuestsIds = Array<number>();
    }

    public getMessageId()
    {
        return QuestListMessage.protocolId;
    }

    public initQuestListMessage(finishedQuestsIds: Array<number> = null, finishedQuestsCounts: Array<number> = null, activeQuests: Array<QuestActiveInformations> = null, reinitDoneQuestsIds: Array<number> = null): QuestListMessage
    {
        this.finishedQuestsIds = finishedQuestsIds;
        this.finishedQuestsCounts = finishedQuestsCounts;
        this.activeQuests = activeQuests;
        this.reinitDoneQuestsIds = reinitDoneQuestsIds;
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
        this.serializeAs_QuestListMessage(output);
    }

    public serializeAs_QuestListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.finishedQuestsIds.length);
        for(var _i1: number = 0; _i1 < this.finishedQuestsIds.length; _i1++)
        {
            if(this.finishedQuestsIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.finishedQuestsIds[_i1] + ") on element 1 (starting at 1) of finishedQuestsIds.");
            }
            output.writeVarShort(this.finishedQuestsIds[_i1]);
        }
        output.writeShort(this.finishedQuestsCounts.length);
        for(var _i2: number = 0; _i2 < this.finishedQuestsCounts.length; _i2++)
        {
            if(this.finishedQuestsCounts[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.finishedQuestsCounts[_i2] + ") on element 2 (starting at 1) of finishedQuestsCounts.");
            }
            output.writeVarShort(this.finishedQuestsCounts[_i2]);
        }
        output.writeShort(this.activeQuests.length);
        for(var _i3: number = 0; _i3 < this.activeQuests.length; _i3++)
        {
            output.writeShort((this.activeQuests[_i3] as QuestActiveInformations).getTypeId());
            (this.activeQuests[_i3] as QuestActiveInformations).serialize(output);
        }
        output.writeShort(this.reinitDoneQuestsIds.length);
        for(var _i4: number = 0; _i4 < this.reinitDoneQuestsIds.length; _i4++)
        {
            if(this.reinitDoneQuestsIds[_i4] < 0)
            {
                throw new Error("Forbidden value (" + this.reinitDoneQuestsIds[_i4] + ") on element 4 (starting at 1) of reinitDoneQuestsIds.");
            }
            output.writeVarShort(this.reinitDoneQuestsIds[_i4]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_QuestListMessage(input);
    }

    private deserializeAs_QuestListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _id3: number = 0;
        let _item3: QuestActiveInformations;
        let _val4: number = 0;
        let _finishedQuestsIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _finishedQuestsIdsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of finishedQuestsIds.");
            }
            this.finishedQuestsIds.push(_val1);
        }
        let _finishedQuestsCountsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _finishedQuestsCountsLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of finishedQuestsCounts.");
            }
            this.finishedQuestsCounts.push(_val2);
        }
        let _activeQuestsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _activeQuestsLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(QuestActiveInformations,_id3);
            _item3.deserialize(input);
            this.activeQuests.push(_item3);
        }
        let _reinitDoneQuestsIdsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _reinitDoneQuestsIdsLen; _i4++)
        {
            _val4 = input.readVarUhShort();
            if(_val4 < 0)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of reinitDoneQuestsIds.");
            }
            this.reinitDoneQuestsIds.push(_val4);
        }
    }

}