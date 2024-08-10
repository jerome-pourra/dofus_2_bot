import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceMemberStopWarningOnConnectionMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1134;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceMemberStopWarningOnConnectionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceMemberStopWarningOnConnectionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceMemberStopWarningOnConnectionMessage.endpointServer;
    }

    public initAllianceMemberStopWarningOnConnectionMessage(): AllianceMemberStopWarningOnConnectionMessage
    {
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
        this.serializeAs_AllianceMemberStopWarningOnConnectionMessage(output);
    }

    public serializeAs_AllianceMemberStopWarningOnConnectionMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceMemberStopWarningOnConnectionMessage(input);
    }

    private deserializeAs_AllianceMemberStopWarningOnConnectionMessage(input: ICustomDataInput)
    {

    }

}