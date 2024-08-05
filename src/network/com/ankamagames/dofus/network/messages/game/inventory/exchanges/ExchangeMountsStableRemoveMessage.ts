import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMountsStableRemoveMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6129;

	public mountsId: Array<number>;

    public constructor()
    {
        super();
        this.mountsId = Array<number>();
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
        this.deserializeAs_ExchangeMountsStableRemoveMessage(input);
    }

    private deserializeAs_ExchangeMountsStableRemoveMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _mountsIdLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _mountsIdLen; _i1++)
        {
            _val1 = input.readVarInt();
            this.mountsId.push(_val1);
        }
    }

}