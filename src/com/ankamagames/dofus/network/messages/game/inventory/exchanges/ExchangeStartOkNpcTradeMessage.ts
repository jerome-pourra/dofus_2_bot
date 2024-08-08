import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkNpcTradeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8322;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public npcId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStartOkNpcTradeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStartOkNpcTradeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStartOkNpcTradeMessage.endpointServer;
    }

    public initExchangeStartOkNpcTradeMessage(npcId: number = 0): ExchangeStartOkNpcTradeMessage
    {
        this.npcId = npcId;
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
        this.serializeAs_ExchangeStartOkNpcTradeMessage(output);
    }

    public serializeAs_ExchangeStartOkNpcTradeMessage(output: ICustomDataOutput)
    {
        if(this.npcId < -9007199254740992 || this.npcId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.npcId + ") on element npcId.");
        }
        output.writeDouble(this.npcId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStartOkNpcTradeMessage(input);
    }

    private deserializeAs_ExchangeStartOkNpcTradeMessage(input: ICustomDataInput)
    {
        this._npcIdFunc(input);
    }

    private _npcIdFunc(input: ICustomDataInput)
    {
        this.npcId = input.readDouble();
        if(this.npcId < -9007199254740992 || this.npcId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.npcId + ") on element of ExchangeStartOkNpcTradeMessage.npcId.");
        }
    }

}