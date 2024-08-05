import { PaddockItem } from "./../../../../types/game/paddock/PaddockItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameDataPaddockObjectListAddMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9121;

	public paddockItemDescription: Array<PaddockItem>;

    public constructor()
    {
        super();
        this.paddockItemDescription = Array<PaddockItem>();
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
        this.deserializeAs_GameDataPaddockObjectListAddMessage(input);
    }

    private deserializeAs_GameDataPaddockObjectListAddMessage(input: ICustomDataInput)
    {
        let _item1: PaddockItem;
        let _paddockItemDescriptionLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _paddockItemDescriptionLen; _i1++)
        {
            _item1 = new PaddockItem();
            _item1.deserialize(input);
            this.paddockItemDescription.push(_item1);
        }
    }

}