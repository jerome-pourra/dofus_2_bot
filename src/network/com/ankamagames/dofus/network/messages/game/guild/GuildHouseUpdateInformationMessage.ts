import { HouseInformationsForGuild } from "./../../../types/game/house/HouseInformationsForGuild";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildHouseUpdateInformationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1590;

	public housesInformations: HouseInformationsForGuild;

    public constructor()
    {
        super();
        this.housesInformations = new HouseInformationsForGuild();
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
        this.deserializeAs_GuildHouseUpdateInformationMessage(input);
    }

    private deserializeAs_GuildHouseUpdateInformationMessage(input: ICustomDataInput)
    {
        this.housesInformations = new HouseInformationsForGuild();
        this.housesInformations.deserialize(input);
    }

}