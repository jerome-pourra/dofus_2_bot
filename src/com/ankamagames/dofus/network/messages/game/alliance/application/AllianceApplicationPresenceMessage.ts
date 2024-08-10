import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceApplicationPresenceMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8886;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public isApplication: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceApplicationPresenceMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceApplicationPresenceMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceApplicationPresenceMessage.endpointServer;
    }

    public initAllianceApplicationPresenceMessage(isApplication: boolean = false): AllianceApplicationPresenceMessage
    {
        this.isApplication = isApplication;
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
        this.serializeAs_AllianceApplicationPresenceMessage(output);
    }

    public serializeAs_AllianceApplicationPresenceMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.isApplication);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceApplicationPresenceMessage(input);
    }

    private deserializeAs_AllianceApplicationPresenceMessage(input: ICustomDataInput)
    {
        this._isApplicationFunc(input);
    }

    private _isApplicationFunc(input: ICustomDataInput)
    {
        this.isApplication = input.readBoolean();
    }

}