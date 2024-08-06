import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMountsPaddockRemoveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9608;

	public mountsId: Array<number>;

    public constructor()
    {
        super();
        this.mountsId = Array<number>();
    }

    public getMessageId()
    {
        return ExchangeMountsPaddockRemoveMessage.protocolId;
    }

    public initExchangeMountsPaddockRemoveMessage(mountsId: Array<number> = null): ExchangeMountsPaddockRemoveMessage
    {
        this.mountsId = mountsId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeMountsPaddockRemoveMessage(output);
    }

    public serializeAs_ExchangeMountsPaddockRemoveMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.mountsId.length);
        for(var _i1: number = 0; _i1 < this.mountsId.length; _i1++)
        {
            output.writeVarInt(this.mountsId[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeMountsPaddockRemoveMessage(input);
    }

    private deserializeAs_ExchangeMountsPaddockRemoveMessage(input: ICustomDataInput)
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