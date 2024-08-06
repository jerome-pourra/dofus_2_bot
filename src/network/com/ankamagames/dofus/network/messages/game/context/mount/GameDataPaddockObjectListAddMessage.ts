import { PaddockItem } from "./../../../../types/game/paddock/PaddockItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameDataPaddockObjectListAddMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9121;

	public paddockItemDescription: Array<PaddockItem>;

    public constructor()
    {
        super();
        this.paddockItemDescription = Array<PaddockItem>();
    }

    public getMessageId()
    {
        return GameDataPaddockObjectListAddMessage.protocolId;
    }

    public initGameDataPaddockObjectListAddMessage(paddockItemDescription: Array<PaddockItem> = null): GameDataPaddockObjectListAddMessage
    {
        this.paddockItemDescription = paddockItemDescription;
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
        this.serializeAs_GameDataPaddockObjectListAddMessage(output);
    }

    public serializeAs_GameDataPaddockObjectListAddMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.paddockItemDescription.length);
        for(var _i1: number = 0; _i1 < this.paddockItemDescription.length; _i1++)
        {
            (this.paddockItemDescription[_i1] as PaddockItem).serializeAs_PaddockItem(output);
        }
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