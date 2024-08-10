import { Version } from "./../../types/version/Version";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { IdentificationFailedMessage } from "./IdentificationFailedMessage";

export class IdentificationFailedForBadVersionMessage extends IdentificationFailedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4124;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public requiredVersion: Version;

    public constructor()
    {
        super();
        this.requiredVersion = new Version();
    }

    public getMessageId()
    {
        return IdentificationFailedForBadVersionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return IdentificationFailedForBadVersionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return IdentificationFailedForBadVersionMessage.endpointServer;
    }

    public initIdentificationFailedForBadVersionMessage(reason: number = 99, requiredVersion: Version = null): IdentificationFailedForBadVersionMessage
    {
        super.initIdentificationFailedMessage(reason);
        this.requiredVersion = requiredVersion;
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
        this.serializeAs_IdentificationFailedForBadVersionMessage(output);
    }

    public serializeAs_IdentificationFailedForBadVersionMessage(output: ICustomDataOutput)
    {
        super.serializeAs_IdentificationFailedMessage(output);
        this.requiredVersion.serializeAs_Version(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_IdentificationFailedForBadVersionMessage(input);
    }

    private deserializeAs_IdentificationFailedForBadVersionMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.requiredVersion = new Version();
        this.requiredVersion.deserialize(input);
    }

}