import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeStartedMessage } from "./ExchangeStartedMessage";

export class ExchangeStartedWithMultiTabStorageMessage extends ExchangeStartedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4135;

	public storageMaxSlot: number = 0;
	public tabNumber: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartedWithMultiTabStorageMessage.protocolId;
    }

    public initExchangeStartedWithMultiTabStorageMessage(exchangeType: number = 0, storageMaxSlot: number = 0, tabNumber: number = 0): ExchangeStartedWithMultiTabStorageMessage
    {
        super.initExchangeStartedMessage(exchangeType);
        this.storageMaxSlot = storageMaxSlot;
        this.tabNumber = tabNumber;
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
        this.serializeAs_ExchangeStartedWithMultiTabStorageMessage(output);
    }

    public serializeAs_ExchangeStartedWithMultiTabStorageMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeStartedMessage(output);
        if(this.storageMaxSlot < 0)
        {
            throw new Error("Forbidden value (" + this.storageMaxSlot + ") on element storageMaxSlot.");
        }
        output.writeVarInt(this.storageMaxSlot);
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element tabNumber.");
        }
        output.writeVarInt(this.tabNumber);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartedWithMultiTabStorageMessage(input);
    }

    private deserializeAs_ExchangeStartedWithMultiTabStorageMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._storageMaxSlotFunc(input);
        this._tabNumberFunc(input);
    }

    private _storageMaxSlotFunc(input: ICustomDataInput)
    {
        this.storageMaxSlot = input.readVarUhInt();
        if(this.storageMaxSlot < 0)
        {
            throw new Error("Forbidden value (" + this.storageMaxSlot + ") on element of ExchangeStartedWithMultiTabStorageMessage.storageMaxSlot.");
        }
    }

    private _tabNumberFunc(input: ICustomDataInput)
    {
        this.tabNumber = input.readVarUhInt();
        if(this.tabNumber < 0)
        {
            throw new Error("Forbidden value (" + this.tabNumber + ") on element of ExchangeStartedWithMultiTabStorageMessage.tabNumber.");
        }
    }

}