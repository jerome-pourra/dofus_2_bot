import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkMulticraftCustomerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5378;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public skillId: number = 0;
	public crafterJobLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartOkMulticraftCustomerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartOkMulticraftCustomerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartOkMulticraftCustomerMessage.endpointServer;
    }

    public initExchangeStartOkMulticraftCustomerMessage(skillId: number = 0, crafterJobLevel: number = 0): ExchangeStartOkMulticraftCustomerMessage
    {
        this.skillId = skillId;
        this.crafterJobLevel = crafterJobLevel;
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
        this.serializeAs_ExchangeStartOkMulticraftCustomerMessage(output);
    }

    public serializeAs_ExchangeStartOkMulticraftCustomerMessage(output: ICustomDataOutput)
    {
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
        }
        output.writeVarInt(this.skillId);
        if(this.crafterJobLevel < 0 || this.crafterJobLevel > 255)
        {
            throw new Error("Forbidden value (" + this.crafterJobLevel + ") on element crafterJobLevel.");
        }
        output.writeByte(this.crafterJobLevel);
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