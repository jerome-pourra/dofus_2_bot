import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7279;

	public allow: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.protocolId;
    }

    public initExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(allow: boolean = false): ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage
    {
        this.allow = allow;
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
        this.serializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(output);
    }

    public serializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.allow);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(input);
    }

    private deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(input: ICustomDataInput)
    {
        this._allowFunc(input);
    }

    private _allowFunc(input: ICustomDataInput)
    {
        this.allow = input.readBoolean();
    }

}