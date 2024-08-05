import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeStartedMessage } from "./ExchangeStartedMessage";

export class ExchangeStartedWithStorageMessage extends ExchangeStartedMessage
{

	public static readonly protocolId: number = 2977;

	public storageMaxSlot: number = 0;

    public constructor()
    {
        super();
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