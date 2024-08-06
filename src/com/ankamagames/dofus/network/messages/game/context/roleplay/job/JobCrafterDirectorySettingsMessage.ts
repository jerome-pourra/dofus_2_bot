import { JobCrafterDirectorySettings } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectorySettings";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectorySettingsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9206;

	public craftersSettings: Array<JobCrafterDirectorySettings>;

    public constructor()
    {
        super();
        this.craftersSettings = Array<JobCrafterDirectorySettings>();
    }

    public getMessageId()
    {
        return JobCrafterDirectorySettingsMessage.protocolId;
    }

    public initJobCrafterDirectorySettingsMessage(craftersSettings: Array<JobCrafterDirectorySettings> = null): JobCrafterDirectorySettingsMessage
    {
        this.craftersSettings = craftersSettings;
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
        this.serializeAs_JobCrafterDirectorySettingsMessage(output);
    }

    public serializeAs_JobCrafterDirectorySettingsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.craftersSettings.length);
        for(var _i1: number = 0; _i1 < this.craftersSettings.length; _i1++)
        {
            (this.craftersSettings[_i1] as JobCrafterDirectorySettings).serializeAs_JobCrafterDirectorySettings(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobCrafterDirectorySettingsMessage(input);
    }

    private deserializeAs_JobCrafterDirectorySettingsMessage(input: ICustomDataInput)
    {
        let _item1: JobCrafterDirectorySettings;
        let _craftersSettingsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _craftersSettingsLen; _i1++)
        {
            _item1 = new JobCrafterDirectorySettings();
            _item1.deserialize(input);
            this.craftersSettings.push(_item1);
        }
    }

}