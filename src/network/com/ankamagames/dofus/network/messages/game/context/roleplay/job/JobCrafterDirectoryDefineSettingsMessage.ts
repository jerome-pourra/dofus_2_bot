import { JobCrafterDirectorySettings } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectorySettings";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryDefineSettingsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5859;

	public settings: JobCrafterDirectorySettings;

    public constructor()
    {
        super();
        this.settings = new JobCrafterDirectorySettings();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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