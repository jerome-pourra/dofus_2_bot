import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMountsStableAddMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9743;

	public mountDescription: Array<MountClientData>;

    public constructor()
    {
        super();
        this.mountDescription = Array<MountClientData>();
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
        this.deserializeAs_ExchangeMountsStableAddMessage(input);
    }

    private deserializeAs_ExchangeMountsStableAddMessage(input: ICustomDataInput)
    {
        let _item1: MountClientData;
        let _mountDescriptionLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _mountDescriptionLen; _i1++)
        {
            _item1 = new MountClientData();
            _item1.deserialize(input);
            this.mountDescription.push(_item1);
        }
    }

}