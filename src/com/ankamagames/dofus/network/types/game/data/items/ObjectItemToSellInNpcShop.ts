import { ObjectEffect } from "./effects/ObjectEffect";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { ObjectItemMinimalInformation } from "./ObjectItemMinimalInformation";

export class ObjectItemToSellInNpcShop extends ObjectItemMinimalInformation implements INetworkType
{

	public static readonly protocolId: number = 5301;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public objectPrice: number = 0;
	public buyCriterion: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return ObjectItemToSellInNpcShop.protocolId;
    }

    public isEndpointClient()
    {
        return ObjectItemToSellInNpcShop.endpointClient;
    }

    public isEndpointServer()
    {
        return ObjectItemToSellInNpcShop.endpointServer;
    }

    public initObjectItemToSellInNpcShop(objectGID: number = 0, effects: Array<ObjectEffect> = null, objectPrice: number = 0, buyCriterion: string = ""): ObjectItemToSellInNpcShop
    {
        super.initObjectItemMinimalInformation(objectGID,effects);
        this.objectPrice = objectPrice;
        this.buyCriterion = buyCriterion;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ObjectItemToSellInNpcShop(output);
    }

    public serializeAs_ObjectItemToSellInNpcShop(output: ICustomDataOutput)
    {
        super.serializeAs_ObjectItemMinimalInformation(output);
        if(this.objectPrice < 0 || this.objectPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.objectPrice + ") on element objectPrice.");
        }
        output.writeVarLong(this.objectPrice);
        output.writeUTF(this.buyCriterion);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ObjectItemToSellInNpcShop(input);
    }

    private deserializeAs_ObjectItemToSellInNpcShop(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._objectPriceFunc(input);
        this._buyCriterionFunc(input);
    }

    private _objectPriceFunc(input: ICustomDataInput)
    {
        this.objectPrice = input.readVarUhLong();
        if(this.objectPrice < 0 || this.objectPrice > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.objectPrice + ") on element of ObjectItemToSellInNpcShop.objectPrice.");
        }
    }

    private _buyCriterionFunc(input: ICustomDataInput)
    {
        this.buyCriterion = input.readUTF();
    }

}