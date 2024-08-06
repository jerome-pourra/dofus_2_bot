import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeStartOkMountWithOutPaddockMessage } from "./ExchangeStartOkMountWithOutPaddockMessage";

export class ExchangeStartOkMountMessage extends ExchangeStartOkMountWithOutPaddockMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2274;

	public paddockedMountsDescription: Array<MountClientData>;

    public constructor()
    {
        super();
        this.paddockedMountsDescription = Array<MountClientData>();
    }

    public getMessageId()
    {
        return ExchangeStartOkMountMessage.protocolId;
    }

    public initExchangeStartOkMountMessage(stabledMountsDescription: Array<MountClientData> = null, paddockedMountsDescription: Array<MountClientData> = null): ExchangeStartOkMountMessage
    {
        super.initExchangeStartOkMountWithOutPaddockMessage(stabledMountsDescription);
        this.paddockedMountsDescription = paddockedMountsDescription;
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
        this.serializeAs_ExchangeStartOkMountMessage(output);
    }

    public serializeAs_ExchangeStartOkMountMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeStartOkMountWithOutPaddockMessage(output);
        output.writeShort(this.paddockedMountsDescription.length);
        for(var _i1: number = 0; _i1 < this.paddockedMountsDescription.length; _i1++)
        {
            (this.paddockedMountsDescription[_i1] as MountClientData).serializeAs_MountClientData(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkMountMessage(input);
    }

    private deserializeAs_ExchangeStartOkMountMessage(input: ICustomDataInput)
    {
        let _item1: MountClientData;
        super.deserialize(input);
        let _paddockedMountsDescriptionLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _paddockedMountsDescriptionLen; _i1++)
        {
            _item1 = new MountClientData();
            _item1.deserialize(input);
            this.paddockedMountsDescription.push(_item1);
        }
    }

}