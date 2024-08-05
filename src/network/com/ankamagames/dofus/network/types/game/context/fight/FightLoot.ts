import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightLootObject } from "./FightLootObject";

export class FightLoot
{

	public static readonly protocolId: number = 3066;

	public objects: Array<FightLootObject>;
	public kamas: number = 0;

    public constructor()
    {
        this.objects = Array<FightLootObject>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightLoot(input);
    }

    private deserializeAs_FightLoot(input: ICustomDataInput)
    {
        let _item1: FightLootObject;
        let _objectsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _objectsLen; _i1++)
        {
            _item1 = new FightLootObject();
            _item1.deserialize(input);
            this.objects.push(_item1);
        }
        this._kamasFunc(input);
    }

    private _kamasFunc(input: ICustomDataInput)
    {
        this.kamas = input.readVarUhLong();
        if(this.kamas < 0 || this.kamas > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kamas + ") on element of FightLoot.kamas.");
        }
    }

}