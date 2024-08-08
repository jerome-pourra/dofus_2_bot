import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkMulticraftCrafterMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7458;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public skillId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartOkMulticraftCrafterMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartOkMulticraftCrafterMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartOkMulticraftCrafterMessage.endpointServer;
    }

    public initExchangeStartOkMulticraftCrafterMessage(skillId: number = 0): ExchangeStartOkMulticraftCrafterMessage
    {
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
        this.serializeAs_ExchangeStartOkMulticraftCrafterMessage(output);
    }

    public serializeAs_ExchangeStartOkMulticraftCrafterMessage(output: ICustomDataOutput)
    {
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
        }
        output.writeVarInt(this.skillId);
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