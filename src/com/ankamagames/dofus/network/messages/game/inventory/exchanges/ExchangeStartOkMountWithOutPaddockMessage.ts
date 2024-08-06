import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkMountWithOutPaddockMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1232;

	public stabledMountsDescription: Array<MountClientData>;

    public constructor()
    {
        super();
        this.stabledMountsDescription = Array<MountClientData>();
    }

    public getMessageId()
    {
        return ExchangeStartOkMountWithOutPaddockMessage.protocolId;
    }

    public initExchangeStartOkMountWithOutPaddockMessage(stabledMountsDescription: Array<MountClientData> = null): ExchangeStartOkMountWithOutPaddockMessage
    {
        this.stabledMountsDescription = stabledMountsDescription;
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
        this.serializeAs_ExchangeStartOkMountWithOutPaddockMessage(output);
    }

    public serializeAs_ExchangeStartOkMountWithOutPaddockMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.stabledMountsDescription.length);
        for(var _i1: number = 0; _i1 < this.stabledMountsDescription.length; _i1++)
        {
            (this.stabledMountsDescription[_i1] as MountClientData).serializeAs_MountClientData(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(input);
    }

    private deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(input: ICustomDataInput)
    {
        let _item1: MountClientData;
        let _stabledMountsDescriptionLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _stabledMountsDescriptionLen; _i1++)
        {
            _item1 = new MountClientData();
            _item1.deserialize(input);
            this.stabledMountsDescription.push(_item1);
        }
    }

}