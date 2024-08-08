import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobAllowMultiCraftRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1737;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public enabled: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return JobAllowMultiCraftRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return JobAllowMultiCraftRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return JobAllowMultiCraftRequestMessage.endpointServer;
    }

    public initJobAllowMultiCraftRequestMessage(enabled: boolean = false): JobAllowMultiCraftRequestMessage
    {
        this.enabled = enabled;
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
        this.serializeAs_JobAllowMultiCraftRequestMessage(output);
    }

    public serializeAs_JobAllowMultiCraftRequestMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.enabled);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobAllowMultiCraftRequestMessage(input);
    }

    private deserializeAs_JobAllowMultiCraftRequestMessage(input: ICustomDataInput)
    {
        this._enabledFunc(input);
    }

    private _enabledFunc(input: ICustomDataInput)
    {
        this.enabled = input.readBoolean();
    }

}