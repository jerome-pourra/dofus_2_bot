import { BidExchangerObjectInfo } from "./../../../../types/game/data/items/BidExchangerObjectInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeTypesItemsExchangerDescriptionForUserMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2738;

	public objectGID: number = 0;
	public objectType: number = 0;
	public itemTypeDescriptions: Array<BidExchangerObjectInfo>;

    public constructor()
    {
        super();
        this.itemTypeDescriptions = Array<BidExchangerObjectInfo>();
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
        this.deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(input);
    }

    private deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(input: ICustomDataInput)
    {
        let _item3: BidExchangerObjectInfo;
        this._objectGIDFunc(input);
        this._objectTypeFunc(input);
        let _itemTypeDescriptionsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _itemTypeDescriptionsLen; _i3++)
        {
            _item3 = new BidExchangerObjectInfo();
            _item3.deserialize(input);
            this.itemTypeDescriptions.push(_item3);
        }
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ExchangeTypesItemsExchangerDescriptionForUserMessage.objectGID.");
        }
    }

    private _objectTypeFunc(input: ICustomDataInput)
    {
        this.objectType = input.readInt();
        if(this.objectType < 0)
        {
            throw new Error("Forbidden value (" + this.objectType + ") on element of ExchangeTypesItemsExchangerDescriptionForUserMessage.objectType.");
        }
    }

}