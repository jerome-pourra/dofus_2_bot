import { JobCrafterDirectoryEntryJobInfo } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectoryEntryJobInfo";
import { JobCrafterDirectoryEntryPlayerInfo } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectoryEntryPlayerInfo";
import { EntityLook } from "./../../../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryEntryMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2116;

	public playerInfo: JobCrafterDirectoryEntryPlayerInfo;
	public jobInfoList: Array<JobCrafterDirectoryEntryJobInfo>;
	public playerLook: EntityLook;

    public constructor()
    {
        super();
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfoList = Array<JobCrafterDirectoryEntryJobInfo>();
        this.playerLook = new EntityLook();
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
        this.deserializeAs_JobCrafterDirectoryEntryMessage(input);
    }

    private deserializeAs_JobCrafterDirectoryEntryMessage(input: ICustomDataInput)
    {
        let _item2: JobCrafterDirectoryEntryJobInfo;
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.playerInfo.deserialize(input);
        let _jobInfoListLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _jobInfoListLen; _i2++)
        {
            _item2 = new JobCrafterDirectoryEntryJobInfo();
            _item2.deserialize(input);
            this.jobInfoList.push(_item2);
        }
        this.playerLook = new EntityLook();
        this.playerLook.deserialize(input);
    }

}