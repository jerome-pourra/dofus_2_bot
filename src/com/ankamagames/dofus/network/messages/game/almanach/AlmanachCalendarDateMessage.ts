import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AlmanachCalendarDateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3938;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public date: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AlmanachCalendarDateMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AlmanachCalendarDateMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AlmanachCalendarDateMessage.endpointServer;
    }

    public initAlmanachCalendarDateMessage(date: number = 0): AlmanachCalendarDateMessage
    {
        this.date = date;
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
        this.serializeAs_AlmanachCalendarDateMessage(output);
    }

    public serializeAs_AlmanachCalendarDateMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.date);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlmanachCalendarDateMessage(input);
    }

    private deserializeAs_AlmanachCalendarDateMessage(input: ICustomDataInput)
    {
        this._dateFunc(input);
    }

    private _dateFunc(input: ICustomDataInput)
    {
        this.date = input.readInt();
    }

}