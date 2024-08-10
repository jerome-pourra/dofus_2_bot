import { JobCrafterDirectorySettings } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectorySettings";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryDefineSettingsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5859;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public settings: JobCrafterDirectorySettings;

    public constructor()
    {
        super();
        this.settings = new JobCrafterDirectorySettings();
    }

    public getMessageId()
    {
        return JobCrafterDirectoryDefineSettingsMessage.protocolId;
    }

    public isEndpointClient()
    {
        return JobCrafterDirectoryDefineSettingsMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return JobCrafterDirectoryDefineSettingsMessage.endpointServer;
    }

    public initJobCrafterDirectoryDefineSettingsMessage(settings: JobCrafterDirectorySettings = null): JobCrafterDirectoryDefineSettingsMessage
    {
        this.settings = settings;
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
        this.serializeAs_JobCrafterDirectoryDefineSettingsMessage(output);
    }

    public serializeAs_JobCrafterDirectoryDefineSettingsMessage(output: ICustomDataOutput)
    {
        this.settings.serializeAs_JobCrafterDirectorySettings(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobCrafterDirectoryDefineSettingsMessage(input);
    }

    private deserializeAs_JobCrafterDirectoryDefineSettingsMessage(input: ICustomDataInput)
    {
        this.settings = new JobCrafterDirectorySettings();
        this.settings.deserialize(input);
    }

}