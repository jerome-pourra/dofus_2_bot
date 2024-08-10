import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class TeleportHavenBagAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9340;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public accept: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportHavenBagAnswerMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TeleportHavenBagAnswerMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TeleportHavenBagAnswerMessage.endpointServer;
    }

    public initTeleportHavenBagAnswerMessage(accept: boolean = false): TeleportHavenBagAnswerMessage
    {
        this.accept = accept;
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
        this.serializeAs_TeleportHavenBagAnswerMessage(output);
    }

    public serializeAs_TeleportHavenBagAnswerMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.accept);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportHavenBagAnswerMessage(input);
    }

    private deserializeAs_TeleportHavenBagAnswerMessage(input: ICustomDataInput)
    {
        this._acceptFunc(input);
    }

    private _acceptFunc(input: ICustomDataInput)
    {
        this.accept = input.readBoolean();
    }

}