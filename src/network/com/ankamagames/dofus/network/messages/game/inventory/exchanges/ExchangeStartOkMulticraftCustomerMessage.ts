import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkMulticraftCustomerMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5378;

	public skillId: number = 0;
	public crafterJobLevel: number = 0;

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
        this.deserializeAs_ExchangeStartOkMulticraftCustomerMessage(input);
    }

    private deserializeAs_ExchangeStartOkMulticraftCustomerMessage(input: ICustomDataInput)
    {
        this._skillIdFunc(input);
        this._crafterJobLevelFunc(input);
    }

    private _skillIdFunc(input: ICustomDataInput)
    {
        this.skillId = input.readVarUhInt();
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element of ExchangeStartOkMulticraftCustomerMessage.skillId.");
        }
    }

    private _crafterJobLevelFunc(input: ICustomDataInput)
    {
        this.crafterJobLevel = input.readUnsignedByte();
        if(this.crafterJobLevel < 0 || this.crafterJobLevel > 255)
        {
            throw new Error("Forbidden value (" + this.crafterJobLevel + ") on element of ExchangeStartOkMulticraftCustomerMessage.crafterJobLevel.");
        }
    }

}