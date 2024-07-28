import { AlterationInfo } from "./../../../../types/game/character/alteration/AlterationInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AlterationsUpdatedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 563;

	public alterations: Array<AlterationInfo>;

    public constructor()
    {
        super();
        this.alterations = Array<AlterationInfo>();
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
        this.deserializeAs_AlterationsUpdatedMessage(input);
    }

    private deserializeAs_AlterationsUpdatedMessage(input: ICustomDataInput)
    {
        let _item1: AlterationInfo;
        let _alterationsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _alterationsLen; _i1++)
        {
            _item1 = new AlterationInfo();
            _item1.deserialize(input);
            this.alterations.push(_item1);
        }
    }

}