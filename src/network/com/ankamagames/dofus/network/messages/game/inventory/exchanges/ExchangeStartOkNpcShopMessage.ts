import { ObjectItemToSellInNpcShop } from "./../../../../types/game/data/items/ObjectItemToSellInNpcShop";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkNpcShopMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6130;

	public npcSellerId: number = 0;
	public tokenId: number = 0;
	public objectsInfos: Array<ObjectItemToSellInNpcShop>;

    public constructor()
    {
        super();
        this.objectsInfos = Array<ObjectItemToSellInNpcShop>();
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
        this.deserializeAs_ExchangeStartOkNpcShopMessage(input);
    }

    private deserializeAs_ExchangeStartOkNpcShopMessage(input: ICustomDataInput)
    {
        let _item3: ObjectItemToSellInNpcShop;
        this._npcSellerIdFunc(input);
        this._tokenIdFunc(input);
        let _objectsInfosLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _objectsInfosLen; _i3++)
        {
            _item3 = new ObjectItemToSellInNpcShop();
            _item3.deserialize(input);
            this.objectsInfos.push(_item3);
        }
    }

    private _npcSellerIdFunc(input: ICustomDataInput)
    {
        this.npcSellerId = input.readDouble();
        if(this.npcSellerId < -9007199254740992 || this.npcSellerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.npcSellerId + ") on element of ExchangeStartOkNpcShopMessage.npcSellerId.");
        }
    }

    private _tokenIdFunc(input: ICustomDataInput)
    {
        this.tokenId = input.readVarUhInt();
        if(this.tokenId < 0)
        {
            throw new Error("Forbidden value (" + this.tokenId + ") on element of ExchangeStartOkNpcShopMessage.tokenId.");
        }
    }

}