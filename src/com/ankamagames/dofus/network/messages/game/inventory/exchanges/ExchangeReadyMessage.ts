import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeReadyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9547;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public ready: boolean = false;
	public step: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeReadyMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeReadyMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeReadyMessage.endpointServer;
    }

    public initExchangeReadyMessage(ready: boolean = false, step: number = 0): ExchangeReadyMessage
    {
        this.ready = ready;
        this.step = step;
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
        this.serializeAs_ExchangeReadyMessage(output);
    }

    public serializeAs_ExchangeReadyMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.ready);
        if(this.step < 0)
        {
            throw new Error("Forbidden value (" + this.step + ") on element step.");
        }
        output.writeVarShort(this.step);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeReadyMessage(input);
    }

    private deserializeAs_ExchangeReadyMessage(input: ICustomDataInput)
    {
        this._readyFunc(input);
        this._stepFunc(input);
    }

    private _readyFunc(input: ICustomDataInput)
    {
        this.ready = input.readBoolean();
    }

    private _stepFunc(input: ICustomDataInput)
    {
        this.step = input.readVarUhShort();
        if(this.step < 0)
        {
            throw new Error("Forbidden value (" + this.step + ") on element of ExchangeReadyMessage.step.");
        }
    }

}