import { PrismGeolocalizedInformation } from "./../../../types/game/prism/PrismGeolocalizedInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PrismsListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7733;

	public prisms: Array<PrismGeolocalizedInformation>;

    public constructor()
    {
        super();
        this.prisms = Array<PrismGeolocalizedInformation>();
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
        this.deserializeAs_PrismsListMessage(input);
    }

    private deserializeAs_PrismsListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: PrismGeolocalizedInformation;
        let _prismsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _prismsLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(PrismGeolocalizedInformation,_id1);
            _item1.deserialize(input);
            this.prisms.push(_item1);
        }
    }

}