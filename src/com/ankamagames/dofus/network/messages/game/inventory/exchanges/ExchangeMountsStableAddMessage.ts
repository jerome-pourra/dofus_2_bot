import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMountsStableAddMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9743;

	public mountDescription: Array<MountClientData>;

    public constructor()
    {
        super();
        this.mountDescription = Array<MountClientData>();
    }

    public getMessageId()
    {
        return ExchangeMountsStableAddMessage.protocolId;
    }

    public initExchangeMountsStableAddMessage(mountDescription: Array<MountClientData> = null): ExchangeMountsStableAddMessage
    {
        this.mountDescription = mountDescription;
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
        this.serializeAs_ExchangeMountsStableAddMessage(output);
    }

    public serializeAs_ExchangeMountsStableAddMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.mountDescription.length);
        for(var _i1: number = 0; _i1 < this.mountDescription.length; _i1++)
        {
            (this.mountDescription[_i1] as MountClientData).serializeAs_MountClientData(output);
        }
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