import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartedMountStockMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6115;

	public objectsInfos: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.objectsInfos = Array<ObjectItem>();
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
        this.deserializeAs_ExchangeStartedMountStockMessage(input);
    }

    private deserializeAs_ExchangeStartedMountStockMessage(input: ICustomDataInput)
    {
        let _item1: ObjectItem;
        let _objectsInfosLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectsInfosLen; _i1++)
        {
            _item1 = new ObjectItem();
            _item1.deserialize(input);
            this.objectsInfos.push(_item1);
        }
    }

}