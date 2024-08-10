import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeCraftResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7869;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public craftResult: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeCraftResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeCraftResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeCraftResultMessage.endpointServer;
    }

    public initExchangeCraftResultMessage(craftResult: number = 0): ExchangeCraftResultMessage
    {
        this.craftResult = craftResult;
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
        this.serializeAs_ExchangeCraftResultMessage(output);
    }

    public serializeAs_ExchangeCraftResultMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.craftResult);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeCraftResultMessage(input);
    }

    private deserializeAs_ExchangeCraftResultMessage(input: ICustomDataInput)
    {
        this._craftResultFunc(input);
    }

    private _craftResultFunc(input: ICustomDataInput)
    {
        this.craftResult = input.readByte();
        if(this.craftResult < 0)
        {
            throw new Error("Forbidden value (" + this.craftResult + ") on element of ExchangeCraftResultMessage.craftResult.");
        }
    }

}