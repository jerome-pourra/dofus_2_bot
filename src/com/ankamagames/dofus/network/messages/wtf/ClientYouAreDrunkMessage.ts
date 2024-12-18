import { DebugInClientMessage } from "./../debug/DebugInClientMessage";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";

export class ClientYouAreDrunkMessage extends DebugInClientMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3498;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ClientYouAreDrunkMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ClientYouAreDrunkMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ClientYouAreDrunkMessage.endpointServer;
    }

    public initClientYouAreDrunkMessage(level: number = 0, message: string = ""): ClientYouAreDrunkMessage
    {
        super.initDebugInClientMessage(level,message);
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
        this.serializeAs_ClientYouAreDrunkMessage(output);
    }

    public serializeAs_ClientYouAreDrunkMessage(output: ICustomDataOutput)
    {
        super.serializeAs_DebugInClientMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ClientYouAreDrunkMessage(input);
    }

    private deserializeAs_ClientYouAreDrunkMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}