import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartedMountStockMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6115;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public objectsInfos: Array<ObjectItem>;

    public constructor()
    {
        super();
        this.objectsInfos = Array<ObjectItem>();
    }

    public getMessageId()
    {
        return ExchangeStartedMountStockMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartedMountStockMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartedMountStockMessage.endpointServer;
    }

    public initExchangeStartedMountStockMessage(objectsInfos: Array<ObjectItem> = null): ExchangeStartedMountStockMessage
    {
        this.objectsInfos = objectsInfos;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeStartedMountStockMessage(output);
    }

    public serializeAs_ExchangeStartedMountStockMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.objectsInfos.length);
        for(var _i1: number = 0; _i1 < this.objectsInfos.length; _i1++)
        {
            (this.objectsInfos[_i1] as ObjectItem).serializeAs_ObjectItem(output);
        }
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