import { JobCrafterDirectoryEntryJobInfo } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectoryEntryJobInfo";
import { JobCrafterDirectoryEntryPlayerInfo } from "./../../../../../types/game/context/roleplay/job/JobCrafterDirectoryEntryPlayerInfo";
import { EntityLook } from "./../../../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class JobCrafterDirectoryEntryMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2116;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

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

    public getMessageId()
    {
        return JobCrafterDirectoryEntryMessage.protocolId;
    }

    public isEndpointClient()
    {
        return JobCrafterDirectoryEntryMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return JobCrafterDirectoryEntryMessage.endpointServer;
    }

    public initJobCrafterDirectoryEntryMessage(playerInfo: JobCrafterDirectoryEntryPlayerInfo = null, jobInfoList: Array<JobCrafterDirectoryEntryJobInfo> = null, playerLook: EntityLook = null): JobCrafterDirectoryEntryMessage
    {
        this.playerInfo = playerInfo;
        this.jobInfoList = jobInfoList;
        this.playerLook = playerLook;
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
        this.serializeAs_JobCrafterDirectoryEntryMessage(output);
    }

    public serializeAs_JobCrafterDirectoryEntryMessage(output: ICustomDataOutput)
    {
        this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(output);
        output.writeShort(this.jobInfoList.length);
        for(var _i2: number = 0; _i2 < this.jobInfoList.length; _i2++)
        {
            (this.jobInfoList[_i2] as JobCrafterDirectoryEntryJobInfo).serializeAs_JobCrafterDirectoryEntryJobInfo(output);
        }
        this.playerLook.serializeAs_EntityLook(output);
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