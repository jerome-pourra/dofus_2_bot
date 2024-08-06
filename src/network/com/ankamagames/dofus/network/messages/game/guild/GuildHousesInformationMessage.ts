import { HouseInformationsForGuild } from "./../../../types/game/house/HouseInformationsForGuild";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildHousesInformationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5207;

	public housesInformations: Array<HouseInformationsForGuild>;

    public constructor()
    {
        super();
        this.housesInformations = Array<HouseInformationsForGuild>();
    }

    public getMessageId()
    {
        return GuildHousesInformationMessage.protocolId;
    }

    public initGuildHousesInformationMessage(housesInformations: Array<HouseInformationsForGuild> = null): GuildHousesInformationMessage
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
        this.serializeAs_GuildHousesInformationMessage(output);
    }

    public serializeAs_GuildHousesInformationMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.housesInformations.length);
        for(var _i1: number = 0; _i1 < this.housesInformations.length; _i1++)
        {
            (this.housesInformations[_i1] as HouseInformationsForGuild).serializeAs_HouseInformationsForGuild(output);
        }
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