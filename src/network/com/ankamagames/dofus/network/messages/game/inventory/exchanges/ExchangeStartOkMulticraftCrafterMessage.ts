import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkMulticraftCrafterMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7458;

	public skillId: number = 0;

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
        this.deserializeAs_ExchangeStartOkMulticraftCrafterMessage(input);
    }

    private deserializeAs_ExchangeStartOkMulticraftCrafterMessage(input: ICustomDataInput)
    {
        this._skillIdFunc(input);
    }

    private _skillIdFunc(input: ICustomDataInput)
    {
        this.skillId = input.readVarUhInt();
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element of ExchangeStartOkMulticraftCrafterMessage.skillId.");
        }
    }

}