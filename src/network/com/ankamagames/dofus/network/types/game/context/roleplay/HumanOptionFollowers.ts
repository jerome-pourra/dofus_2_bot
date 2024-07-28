import { IndexedEntityLook } from "./../../look/IndexedEntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionFollowers extends HumanOption
{

	public static readonly protocolId: number = 8287;

	public followingCharactersLook: Array<IndexedEntityLook>;

    public constructor()
    {
        super();
        this.followingCharactersLook = Array<IndexedEntityLook>();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionFollowers(input);
    }

    private deserializeAs_HumanOptionFollowers(input: ICustomDataInput)
    {
        let _item1: IndexedEntityLook;
        super.deserialize(input);
        let _followingCharactersLookLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _followingCharactersLookLen; _i1++)
        {
            _item1 = new IndexedEntityLook();
            _item1.deserialize(input);
            this.followingCharactersLook.push(_item1);
        }
    }

}