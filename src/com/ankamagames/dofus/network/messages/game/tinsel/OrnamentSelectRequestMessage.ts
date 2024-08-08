import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class OrnamentSelectRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 732;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public ornamentId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return OrnamentSelectRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return OrnamentSelectRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return OrnamentSelectRequestMessage.endpointServer;
    }

    public initOrnamentSelectRequestMessage(ornamentId: number = 0): OrnamentSelectRequestMessage
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
        this.serializeAs_OrnamentSelectRequestMessage(output);
    }

    public serializeAs_OrnamentSelectRequestMessage(output: ICustomDataOutput)
    {
        if(this.ornamentId < 0)
        {
            throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
        }
        output.writeVarShort(this.ornamentId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_OrnamentSelectRequestMessage(input);
    }

    private deserializeAs_OrnamentSelectRequestMessage(input: ICustomDataInput)
    {
        this._ornamentIdFunc(input);
    }

    private _ornamentIdFunc(input: ICustomDataInput)
    {
        this.ornamentId = input.readVarUhShort();
        if(this.ornamentId < 0)
        {
            throw new Error("Forbidden value (" + this.ornamentId + ") on element of OrnamentSelectRequestMessage.ornamentId.");
        }
    }

}