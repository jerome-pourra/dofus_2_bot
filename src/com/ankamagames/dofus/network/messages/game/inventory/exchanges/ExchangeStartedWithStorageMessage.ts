import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeStartedMessage } from "./ExchangeStartedMessage";

export class ExchangeStartedWithStorageMessage extends ExchangeStartedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2977;

	public storageMaxSlot: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartedWithStorageMessage.protocolId;
    }

    public initExchangeStartedWithStorageMessage(exchangeType: number = 0, storageMaxSlot: number = 0): ExchangeStartedWithStorageMessage
    {
        super.initExchangeStartedMessage(exchangeType);
        this.storageMaxSlot = storageMaxSlot;
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
        this.serializeAs_ExchangeStartedWithStorageMessage(output);
    }

    public serializeAs_ExchangeStartedWithStorageMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeStartedMessage(output);
        if(this.storageMaxSlot < 0)
        {
            throw new Error("Forbidden value (" + this.storageMaxSlot + ") on element storageMaxSlot.");
        }
        output.writeVarInt(this.storageMaxSlot);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartedWithStorageMessage(input);
    }

    private deserializeAs_ExchangeStartedWithStorageMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._storageMaxSlotFunc(input);
    }

    private _storageMaxSlotFunc(input: ICustomDataInput)
    {
        this.storageMaxSlot = input.readVarUhInt();
        if(this.storageMaxSlot < 0)
        {
            throw new Error("Forbidden value (" + this.storageMaxSlot + ") on element of ExchangeStartedWithStorageMessage.storageMaxSlot.");
        }
    }

}