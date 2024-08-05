import { PaginationAnswerAbstractMessage } from "./../../PaginationAnswerAbstractMessage";
import { SocialApplicationInformation } from "./../../../../types/game/social/application/SocialApplicationInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class AllianceListApplicationAnswerMessage extends PaginationAnswerAbstractMessage
{

	public static readonly protocolId: number = 3610;

	public applies: Array<SocialApplicationInformation>;

    public constructor()
    {
        super();
        this.applies = Array<SocialApplicationInformation>();
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