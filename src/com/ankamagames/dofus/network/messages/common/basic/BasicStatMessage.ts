import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicStatMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2233;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public timeSpent: number = 0;
	public statId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicStatMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BasicStatMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BasicStatMessage.endpointServer;
    }

    public initBasicStatMessage(timeSpent: number = 0, statId: number = 0): BasicStatMessage
    {
        this.timeSpent = timeSpent;
        this.statId = statId;
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
        this.serializeAs_BasicStatMessage(output);
    }

    public serializeAs_BasicStatMessage(output: ICustomDataOutput)
    {
        if(this.timeSpent < 0 || this.timeSpent > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.timeSpent + ") on element timeSpent.");
        }
        output.writeDouble(this.timeSpent);
        output.writeVarShort(this.statId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicStatMessage(input);
    }

    private deserializeAs_BasicStatMessage(input: ICustomDataInput)
    {
        this._timeSpentFunc(input);
        this._statIdFunc(input);
    }

    private _timeSpentFunc(input: ICustomDataInput)
    {
        this.timeSpent = input.readDouble();
        if(this.timeSpent < 0 || this.timeSpent > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.timeSpent + ") on element of BasicStatMessage.timeSpent.");
        }
    }

    private _statIdFunc(input: ICustomDataInput)
    {
        this.statId = input.readVarUhShort();
        if(this.statId < 0)
        {
            throw new Error("Forbidden value (" + this.statId + ") on element of BasicStatMessage.statId.");
        }
    }

}