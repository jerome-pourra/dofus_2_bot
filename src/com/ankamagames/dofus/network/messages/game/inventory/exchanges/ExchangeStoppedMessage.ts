import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStoppedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3673;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeStoppedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeStoppedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeStoppedMessage.endpointServer;
    }

    public initExchangeStoppedMessage(id: number = 0): ExchangeStoppedMessage
    {
        this.id = id;
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
        this.serializeAs_ExchangeStoppedMessage(output);
    }

    public serializeAs_ExchangeStoppedMessage(output: ICustomDataOutput)
    {
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarLong(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeStoppedMessage(input);
    }

    private deserializeAs_ExchangeStoppedMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhLong();
        if(this.id < 0 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of ExchangeStoppedMessage.id.");
        }
    }

}