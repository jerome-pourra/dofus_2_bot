import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeIsReadyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4377;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public id: number = 0;
	public ready: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeIsReadyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeIsReadyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeIsReadyMessage.endpointServer;
    }

    public initExchangeIsReadyMessage(id: number = 0, ready: boolean = false): ExchangeIsReadyMessage
    {
        this.id = id;
        this.ready = ready;
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
        this.serializeAs_ExchangeIsReadyMessage(output);
    }

    public serializeAs_ExchangeIsReadyMessage(output: ICustomDataOutput)
    {
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
        output.writeBoolean(this.ready);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeIsReadyMessage(input);
    }

    private deserializeAs_ExchangeIsReadyMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._readyFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of ExchangeIsReadyMessage.id.");
        }
    }

    private _readyFunc(input: ICustomDataInput)
    {
        this.ready = input.readBoolean();
    }

}