import { PaddockContentInformations } from "./../../../types/game/paddock/PaddockContentInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildPaddockBoughtMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4625;

	public paddockInfo: PaddockContentInformations;

    public constructor()
    {
        super();
        this.paddockInfo = new PaddockContentInformations();
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
        this.deserializeAs_GuildPaddockBoughtMessage(input);
    }

    private deserializeAs_GuildPaddockBoughtMessage(input: ICustomDataInput)
    {
        this.paddockInfo = new PaddockContentInformations();
        this.paddockInfo.deserialize(input);
    }

}