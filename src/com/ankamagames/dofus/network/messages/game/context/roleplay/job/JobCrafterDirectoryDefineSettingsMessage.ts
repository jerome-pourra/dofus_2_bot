import { JobCrafterDirectorySettings } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectorySettings";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryDefineSettingsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5859;

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

    public initJobCrafterDirectoryDefineSettingsMessage(settings: JobCrafterDirectorySettings = null): JobCrafterDirectoryDefineSettingsMessage
    {
        this.settings = settings;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
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