import { PaddockContentInformations } from "./../../../types/game/paddock/PaddockContentInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildPaddockBoughtMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4625;

	public paddockInfo: PaddockContentInformations;

    public constructor()
    {
        super();
        this.paddockInfo = new PaddockContentInformations();
    }

    public getMessageId()
    {
        return GuildPaddockBoughtMessage.protocolId;
    }

    public initGuildPaddockBoughtMessage(paddockInfo: PaddockContentInformations = null): GuildPaddockBoughtMessage
    {
        this.paddockInfo = paddockInfo;
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
        this.serializeAs_GuildPaddockBoughtMessage(output);
    }

    public serializeAs_GuildPaddockBoughtMessage(output: ICustomDataOutput)
    {
        this.paddockInfo.serializeAs_PaddockContentInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildPaddockBoughtMessage(input);
    }

    private deserializeAs_GuildPaddockBoughtMessage(input: ICustomDataInput)
    {
        this.paddockInfo = new PaddockContentInformations();
        this.paddockInfo.deserialize(input);
    }

}