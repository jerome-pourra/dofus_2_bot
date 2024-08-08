import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class OrnamentGainedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9883;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public ornamentId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return OrnamentGainedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return OrnamentGainedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return OrnamentGainedMessage.endpointServer;
    }

    public initOrnamentGainedMessage(ornamentId: number = 0): OrnamentGainedMessage
    {
        this.ornamentId = ornamentId;
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
        this.serializeAs_OrnamentGainedMessage(output);
    }

    public serializeAs_OrnamentGainedMessage(output: ICustomDataOutput)
    {
        if(this.ornamentId < 0)
        {
            throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
        }
        output.writeShort(this.ornamentId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_OrnamentGainedMessage(input);
    }

    private deserializeAs_OrnamentGainedMessage(input: ICustomDataInput)
    {
        this._ornamentIdFunc(input);
    }

    private _ornamentIdFunc(input: ICustomDataInput)
    {
        this.ornamentId = input.readShort();
        if(this.ornamentId < 0)
        {
            throw new Error("Forbidden value (" + this.ornamentId + ") on element of OrnamentGainedMessage.ornamentId.");
        }
    }

}