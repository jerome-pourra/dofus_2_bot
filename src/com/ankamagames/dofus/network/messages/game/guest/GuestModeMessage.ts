import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuestModeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5810;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public active: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuestModeMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuestModeMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuestModeMessage.endpointServer;
    }

    public initGuestModeMessage(active: boolean = false): GuestModeMessage
    {
        this.active = active;
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
        this.serializeAs_GuestModeMessage(output);
    }

    public serializeAs_GuestModeMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.active);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuestModeMessage(input);
    }

    private deserializeAs_GuestModeMessage(input: ICustomDataInput)
    {
        this._activeFunc(input);
    }

    private _activeFunc(input: ICustomDataInput)
    {
        this.active = input.readBoolean();
    }

}