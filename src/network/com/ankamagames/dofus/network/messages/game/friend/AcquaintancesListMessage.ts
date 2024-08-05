import { AcquaintanceInformation } from "./../../../types/game/friend/AcquaintanceInformation";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AcquaintancesListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5647;

	public acquaintanceList: Array<AcquaintanceInformation>;

    public constructor()
    {
        super();
        this.acquaintanceList = Array<AcquaintanceInformation>();
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
        this.deserializeAs_AcquaintancesListMessage(input);
    }

    private deserializeAs_AcquaintancesListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: AcquaintanceInformation;
        let _acquaintanceListLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _acquaintanceListLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(AcquaintanceInformation,_id1);
            _item1.deserialize(input);
            this.acquaintanceList.push(_item1);
        }
    }

}