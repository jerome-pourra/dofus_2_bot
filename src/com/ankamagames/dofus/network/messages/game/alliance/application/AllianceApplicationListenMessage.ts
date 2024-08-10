import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceApplicationListenMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8909;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public listen: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceApplicationListenMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceApplicationListenMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceApplicationListenMessage.endpointServer;
    }

    public initAllianceApplicationListenMessage(listen: boolean = false): AllianceApplicationListenMessage
    {
        this.listen = listen;
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
        this.serializeAs_AllianceApplicationListenMessage(output);
    }

    public serializeAs_AllianceApplicationListenMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.listen);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceApplicationListenMessage(input);
    }

    private deserializeAs_AllianceApplicationListenMessage(input: ICustomDataInput)
    {
        this._listenFunc(input);
    }

    private _listenFunc(input: ICustomDataInput)
    {
        this.listen = input.readBoolean();
    }

}