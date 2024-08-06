import { StorageTabInformation } from "./../../../types/game/inventory/StorageTabInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class MultiTabStorageMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7356;

	public tabs: Array<StorageTabInformation>;

    public constructor()
    {
        super();
        this.tabs = Array<StorageTabInformation>();
    }

    public getMessageId()
    {
        return MultiTabStorageMessage.protocolId;
    }

    public initMultiTabStorageMessage(tabs: Array<StorageTabInformation> = null): MultiTabStorageMessage
    {
        this.tabs = tabs;
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
        this.serializeAs_MultiTabStorageMessage(output);
    }

    public serializeAs_MultiTabStorageMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.tabs.length);
        for(var _i1: number = 0; _i1 < this.tabs.length; _i1++)
        {
            (this.tabs[_i1] as StorageTabInformation).serializeAs_StorageTabInformation(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MultiTabStorageMessage(input);
    }

    private deserializeAs_MultiTabStorageMessage(input: ICustomDataInput)
    {
        let _item1: StorageTabInformation;
        let _tabsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _tabsLen; _i1++)
        {
            _item1 = new StorageTabInformation();
            _item1.deserialize(input);
            this.tabs.push(_item1);
        }
    }

}