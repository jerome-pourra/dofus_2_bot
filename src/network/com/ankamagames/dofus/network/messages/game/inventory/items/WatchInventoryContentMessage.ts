import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { InventoryContentMessage } from "./InventoryContentMessage";

export class WatchInventoryContentMessage extends InventoryContentMessage
{

	public static readonly protocolId: number = 8887;

    public constructor()
    {
        super();
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
        this.deserializeAs_WatchInventoryContentMessage(input);
    }

    private deserializeAs_WatchInventoryContentMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}