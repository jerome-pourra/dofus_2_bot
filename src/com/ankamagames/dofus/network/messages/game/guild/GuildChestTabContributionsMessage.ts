import { Contribution } from "./../../../types/game/guild/Contribution";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildChestTabContributionsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 753;

	public contributions: Array<Contribution>;

    public constructor()
    {
        super();
        this.contributions = Array<Contribution>();
    }

    public getMessageId()
    {
        return GuildChestTabContributionsMessage.protocolId;
    }

    public initGuildChestTabContributionsMessage(contributions: Array<Contribution> = null): GuildChestTabContributionsMessage
    {
        this.contributions = contributions;
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
        this.serializeAs_GuildChestTabContributionsMessage(output);
    }

    public serializeAs_GuildChestTabContributionsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.contributions.length);
        for(var _i1: number = 0; _i1 < this.contributions.length; _i1++)
        {
            (this.contributions[_i1] as Contribution).serializeAs_Contribution(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildChestTabContributionsMessage(input);
    }

    private deserializeAs_GuildChestTabContributionsMessage(input: ICustomDataInput)
    {
        let _item1: Contribution;
        let _contributionsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _contributionsLen; _i1++)
        {
            _item1 = new Contribution();
            _item1.deserialize(input);
            this.contributions.push(_item1);
        }
    }

}