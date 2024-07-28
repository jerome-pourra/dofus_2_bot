import { PaginationAnswerAbstractMessage } from "./../PaginationAnswerAbstractMessage";
import { GuildFactSheetInformations } from "./../../../types/game/social/GuildFactSheetInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";

export class GuildSummaryMessage extends PaginationAnswerAbstractMessage
{

	public static readonly protocolId: number = 156;

	public guilds: Array<GuildFactSheetInformations>;

    public constructor()
    {
        super();
        this.guilds = Array<GuildFactSheetInformations>();
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