import { IgnoredInformations } from "./../../../types/game/friend/IgnoredInformations";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class IgnoredListMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8123;

	public ignoredList: Array<IgnoredInformations>;

    public constructor()
    {
        super();
        this.ignoredList = Array<IgnoredInformations>();
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
        this.deserializeAs_IgnoredListMessage(input);
    }

    private deserializeAs_IgnoredListMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: IgnoredInformations;
        let _ignoredListLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _ignoredListLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(IgnoredInformations,_id1);
            _item1.deserialize(input);
            this.ignoredList.push(_item1);
        }
    }

}