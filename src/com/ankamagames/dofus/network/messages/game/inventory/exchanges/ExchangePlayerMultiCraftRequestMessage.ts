import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeRequestMessage } from "./ExchangeRequestMessage";

export class ExchangePlayerMultiCraftRequestMessage extends ExchangeRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2028;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public target: number = 0;
	public skillId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangePlayerMultiCraftRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangePlayerMultiCraftRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangePlayerMultiCraftRequestMessage.endpointServer;
    }

    public initExchangePlayerMultiCraftRequestMessage(exchangeType: number = 0, target: number = 0, skillId: number = 0): ExchangePlayerMultiCraftRequestMessage
    {
        super.initExchangeRequestMessage(exchangeType);
        this.target = target;
        this.skillId = skillId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangePlayerMultiCraftRequestMessage(output);
    }

    public serializeAs_ExchangePlayerMultiCraftRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeRequestMessage(output);
        if(this.target < 0 || this.target > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.target + ") on element target.");
        }
        output.writeVarLong(this.target);
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
        }
        output.writeVarInt(this.skillId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangePlayerMultiCraftRequestMessage(input);
    }

    private deserializeAs_ExchangePlayerMultiCraftRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetFunc(input);
        this._skillIdFunc(input);
    }

    private _targetFunc(input: ICustomDataInput)
    {
        this.target = input.readVarUhLong();
        if(this.target < 0 || this.target > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.target + ") on element of ExchangePlayerMultiCraftRequestMessage.target.");
        }
    }

    private _skillIdFunc(input: ICustomDataInput)
    {
        this.skillId = input.readVarUhInt();
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element of ExchangePlayerMultiCraftRequestMessage.skillId.");
        }
    }

}