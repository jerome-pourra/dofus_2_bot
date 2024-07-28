import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeOkMultiCraftMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4122;

	public initiatorId: number = 0;
	public otherId: number = 0;
	public role: number = 0;

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
        this.deserializeAs_ExchangeOkMultiCraftMessage(input);
    }

    private deserializeAs_ExchangeOkMultiCraftMessage(input: ICustomDataInput)
    {
        this._initiatorIdFunc(input);
        this._otherIdFunc(input);
        this._roleFunc(input);
    }

    private _initiatorIdFunc(input: ICustomDataInput)
    {
        this.initiatorId = input.readVarUhLong();
        if(this.initiatorId < 0 || this.initiatorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.initiatorId + ") on element of ExchangeOkMultiCraftMessage.initiatorId.");
        }
    }

    private _otherIdFunc(input: ICustomDataInput)
    {
        this.otherId = input.readVarUhLong();
        if(this.otherId < 0 || this.otherId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.otherId + ") on element of ExchangeOkMultiCraftMessage.otherId.");
        }
    }

    private _roleFunc(input: ICustomDataInput)
    {
        this.role = input.readByte();
    }

}