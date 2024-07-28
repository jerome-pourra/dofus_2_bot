import { JobCrafterDirectorySettings } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectorySettings";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectorySettingsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9206;

	public craftersSettings: Array<JobCrafterDirectorySettings>;

    public constructor()
    {
        super();
        this.craftersSettings = Array<JobCrafterDirectorySettings>();
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