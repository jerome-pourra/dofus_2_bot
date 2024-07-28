import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeStartedMessage } from "./ExchangeStartedMessage";

export class ExchangeStartedWithMultiTabStorageMessage extends ExchangeStartedMessage
{

	public static readonly protocolId: number = 4135;

	public storageMaxSlot: number = 0;
	public tabNumber: number = 0;

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