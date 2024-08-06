import { PaginationAnswerAbstractMessage } from "./../../PaginationAnswerAbstractMessage";
import { AllianceFactSheetInformation } from "./../../../../types/game/social/AllianceFactSheetInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class AllianceSummaryMessage extends PaginationAnswerAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2436;

	public alliances: Array<AllianceFactSheetInformation>;

    public constructor()
    {
        super();
        this.alliances = Array<AllianceFactSheetInformation>();
    }

    public getMessageId()
    {
        return AllianceSummaryMessage.protocolId;
    }

    public initAllianceSummaryMessage(offset: number = 0, count: number = 0, total: number = 0, alliances: Array<AllianceFactSheetInformation> = null): AllianceSummaryMessage
    {
        super.initPaginationAnswerAbstractMessage(offset,count,total);
        this.alliances = alliances;
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
        this.serializeAs_AllianceSummaryMessage(output);
    }

    public serializeAs_AllianceSummaryMessage(output: ICustomDataOutput)
    {
        super.serializeAs_PaginationAnswerAbstractMessage(output);
        output.writeShort(this.alliances.length);
        for(var _i1: number = 0; _i1 < this.alliances.length; _i1++)
        {
            (this.alliances[_i1] as AllianceFactSheetInformation).serializeAs_AllianceFactSheetInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceSummaryMessage(input);
    }

    private deserializeAs_AllianceSummaryMessage(input: ICustomDataInput)
    {
        let _item1: AllianceFactSheetInformation;
        super.deserialize(input);
        let _alliancesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _alliancesLen; _i1++)
        {
            _item1 = new AllianceFactSheetInformation();
            _item1.deserialize(input);
            this.alliances.push(_item1);
        }
    }

}