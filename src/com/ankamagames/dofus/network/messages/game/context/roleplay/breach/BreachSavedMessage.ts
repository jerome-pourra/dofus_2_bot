import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachSavedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 21;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public saved: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachSavedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachSavedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachSavedMessage.endpointServer;
    }

    public initBreachSavedMessage(saved: boolean = false): BreachSavedMessage
    {
        this.saved = saved;
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
        this.serializeAs_BreachSavedMessage(output);
    }

    public serializeAs_BreachSavedMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.saved);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachSavedMessage(input);
    }

    private deserializeAs_BreachSavedMessage(input: ICustomDataInput)
    {
        this._savedFunc(input);
    }

    private _savedFunc(input: ICustomDataInput)
    {
        this.saved = input.readBoolean();
    }

}