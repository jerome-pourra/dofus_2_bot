import { IndexedEntityLook } from "./../../look/IndexedEntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionFollowers extends HumanOption implements INetworkType
{

	public static readonly protocolId: number = 8287;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public followingCharactersLook: Array<IndexedEntityLook>;

    public constructor()
    {
        super();
        this.followingCharactersLook = Array<IndexedEntityLook>();
    }

    public getTypeId()
    {
        return HumanOptionFollowers.protocolId;
    }

    public isEndpointClient()
    {
        return HumanOptionFollowers.endpointClient;
    }

    public isEndpointServer()
    {
        return HumanOptionFollowers.endpointServer;
    }

    public initHumanOptionFollowers(followingCharactersLook: Array<IndexedEntityLook> = null): HumanOptionFollowers
    {
        this.followingCharactersLook = followingCharactersLook;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanOptionFollowers(output);
    }

    public serializeAs_HumanOptionFollowers(output: ICustomDataOutput)
    {
        super.serializeAs_HumanOption(output);
        output.writeShort(this.followingCharactersLook.length);
        for(var _i1: number = 0; _i1 < this.followingCharactersLook.length; _i1++)
        {
            (this.followingCharactersLook[_i1] as IndexedEntityLook).serializeAs_IndexedEntityLook(output);
        }
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