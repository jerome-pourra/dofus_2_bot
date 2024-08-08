import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { ExchangeStartOkCraftMessage } from "./ExchangeStartOkCraftMessage";

export class ExchangeStartOkCraftWithInformationMessage extends ExchangeStartOkCraftMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4096;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public skillId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartOkCraftWithInformationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartOkCraftWithInformationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartOkCraftWithInformationMessage.endpointServer;
    }

    public initExchangeStartOkCraftWithInformationMessage(skillId: number = 0): ExchangeStartOkCraftWithInformationMessage
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
        this.serializeAs_ExchangeStartOkCraftWithInformationMessage(output);
    }

    public serializeAs_ExchangeStartOkCraftWithInformationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ExchangeStartOkCraftMessage(output);
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
        }
        output.writeVarInt(this.skillId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkCraftWithInformationMessage(input);
    }

    private deserializeAs_ExchangeStartOkCraftWithInformationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._skillIdFunc(input);
    }

    private _skillIdFunc(input: ICustomDataInput)
    {
        this.skillId = input.readVarUhInt();
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element of ExchangeStartOkCraftWithInformationMessage.skillId.");
        }
    }

}