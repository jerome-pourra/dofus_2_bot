import { GoldItem } from "./../../../../types/game/data/items/GoldItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GoldAddedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1521;

	public gold: GoldItem;

    public constructor()
    {
        super();
        this.gold = new GoldItem();
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
        this.deserializeAs_GoldAddedMessage(input);
    }

    private deserializeAs_GoldAddedMessage(input: ICustomDataInput)
    {
        this.gold = new GoldItem();
        this.gold.deserialize(input);
    }

}