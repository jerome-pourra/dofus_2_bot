import { StorageTabInformation } from "./../../../types/game/inventory/StorageTabInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class MultiTabStorageMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7356;

	public tabs: Array<StorageTabInformation>;

    public constructor()
    {
        super();
        this.tabs = Array<StorageTabInformation>();
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