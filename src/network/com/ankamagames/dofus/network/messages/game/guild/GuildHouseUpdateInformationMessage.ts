import { HouseInformationsForGuild } from "./../../../types/game/house/HouseInformationsForGuild";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildHouseUpdateInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1590;

	public housesInformations: HouseInformationsForGuild;

    public constructor()
    {
        super();
        this.housesInformations = new HouseInformationsForGuild();
    }

    public getMessageId()
    {
        return GuildHouseUpdateInformationMessage.protocolId;
    }

    public initGuildHouseUpdateInformationMessage(housesInformations: HouseInformationsForGuild = null): GuildHouseUpdateInformationMessage
    {
        this.housesInformations = housesInformations;
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
        this.serializeAs_GuildHouseUpdateInformationMessage(output);
    }

    public serializeAs_GuildHouseUpdateInformationMessage(output: ICustomDataOutput)
    {
        this.housesInformations.serializeAs_HouseInformationsForGuild(output);
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