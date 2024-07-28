import { InventoryContentMessage } from "./../items/InventoryContentMessage";
import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class StorageInventoryContentMessage extends InventoryContentMessage
{

	public static readonly protocolId: number = 6526;

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
        this.deserializeAs_StorageInventoryContentMessage(input);
    }

    private deserializeAs_StorageInventoryContentMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}