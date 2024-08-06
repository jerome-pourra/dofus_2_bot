import { PaginationAnswerAbstractMessage } from "./../../PaginationAnswerAbstractMessage";
import { SocialApplicationInformation } from "./../../../../types/game/social/application/SocialApplicationInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class AllianceListApplicationAnswerMessage extends PaginationAnswerAbstractMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3610;

	public applies: Array<SocialApplicationInformation>;

    public constructor()
    {
        super();
        this.applies = Array<SocialApplicationInformation>();
    }

    public getMessageId()
    {
        return AllianceListApplicationAnswerMessage.protocolId;
    }

    public initAllianceListApplicationAnswerMessage(offset: number = 0, count: number = 0, total: number = 0, applies: Array<SocialApplicationInformation> = null): AllianceListApplicationAnswerMessage
    {
        super.initPaginationAnswerAbstractMessage(offset,count,total);
        this.applies = applies;
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
        this.serializeAs_AllianceListApplicationAnswerMessage(output);
    }

    public serializeAs_AllianceListApplicationAnswerMessage(output: ICustomDataOutput)
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
        this.deserializeAs_AllianceListApplicationAnswerMessage(input);
    }

    private deserializeAs_AllianceListApplicationAnswerMessage(input: ICustomDataInput)
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