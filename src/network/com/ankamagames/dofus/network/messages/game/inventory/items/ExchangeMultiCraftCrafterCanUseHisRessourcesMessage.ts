import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMultiCraftCrafterCanUseHisRessourcesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4154;

	public allowed: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.protocolId;
    }

    public initExchangeMultiCraftCrafterCanUseHisRessourcesMessage(allowed: boolean = false): ExchangeMultiCraftCrafterCanUseHisRessourcesMessage
    {
        this.allowed = allowed;
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
        this.serializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(output);
    }

    public serializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.allowed);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(input);
    }

    private deserializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(input: ICustomDataInput)
    {
        this._allowedFunc(input);
    }

    private _allowedFunc(input: ICustomDataInput)
    {
        this.allowed = input.readBoolean();
    }

}