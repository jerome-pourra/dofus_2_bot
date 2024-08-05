import { UpdatedStorageTabInformation } from "./../../../types/game/inventory/UpdatedStorageTabInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildUpdateChestTabRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6464;

	public tab: UpdatedStorageTabInformation;

    public constructor()
    {
        super();
        this.tab = new UpdatedStorageTabInformation();
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
        this.deserializeAs_GuildUpdateChestTabRequestMessage(input);
    }

    private deserializeAs_GuildUpdateChestTabRequestMessage(input: ICustomDataInput)
    {
        this.tab = new UpdatedStorageTabInformation();
        this.tab.deserialize(input);
    }

}