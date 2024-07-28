import { HavenBagFurnitureInformation } from "./../../../../../types/game/guild/HavenBagFurnitureInformation";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagFurnituresMessage extends NetworkMessage
{

	public static readonly protocolId: number = 135;

	public furnituresInfos: Array<HavenBagFurnitureInformation>;

    public constructor()
    {
        super();
        this.furnituresInfos = Array<HavenBagFurnitureInformation>();
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
        this.deserializeAs_HavenBagFurnituresMessage(input);
    }

    private deserializeAs_HavenBagFurnituresMessage(input: ICustomDataInput)
    {
        let _item1: HavenBagFurnitureInformation;
        let _furnituresInfosLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _furnituresInfosLen; _i1++)
        {
            _item1 = new HavenBagFurnitureInformation();
            _item1.deserialize(input);
            this.furnituresInfos.push(_item1);
        }
    }

}