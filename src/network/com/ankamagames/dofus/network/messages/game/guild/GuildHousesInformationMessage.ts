import { HouseInformationsForGuild } from "./../../../types/game/house/HouseInformationsForGuild";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildHousesInformationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5207;

	public housesInformations: Array<HouseInformationsForGuild>;

    public constructor()
    {
        super();
        this.housesInformations = Array<HouseInformationsForGuild>();
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
        this.deserializeAs_GuildHousesInformationMessage(input);
    }

    private deserializeAs_GuildHousesInformationMessage(input: ICustomDataInput)
    {
        let _item1: HouseInformationsForGuild;
        let _housesInformationsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _housesInformationsLen; _i1++)
        {
            _item1 = new HouseInformationsForGuild();
            _item1.deserialize(input);
            this.housesInformations.push(_item1);
        }
    }

}