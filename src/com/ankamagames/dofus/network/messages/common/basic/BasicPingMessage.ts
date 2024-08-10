import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class BasicPingMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7461;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public quiet: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BasicPingMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BasicPingMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BasicPingMessage.endpointServer;
    }

    public initBasicPingMessage(quiet: boolean = false): BasicPingMessage
    {
        this.quiet = quiet;
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
        this.serializeAs_BasicPingMessage(output);
    }

    public serializeAs_BasicPingMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.quiet);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BasicPingMessage(input);
    }

    private deserializeAs_BasicPingMessage(input: ICustomDataInput)
    {
        this._quietFunc(input);
    }

    private _quietFunc(input: ICustomDataInput)
    {
        this.quiet = input.readBoolean();
    }

}