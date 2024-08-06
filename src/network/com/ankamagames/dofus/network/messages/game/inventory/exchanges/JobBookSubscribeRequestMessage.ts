import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class JobBookSubscribeRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7221;

	public jobIds: Array<number>;

    public constructor()
    {
        super();
        this.jobIds = Array<number>();
    }

    public getMessageId()
    {
        return JobBookSubscribeRequestMessage.protocolId;
    }

    public initJobBookSubscribeRequestMessage(jobIds: Array<number> = null): JobBookSubscribeRequestMessage
    {
        this.jobIds = jobIds;
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
        this.serializeAs_JobBookSubscribeRequestMessage(output);
    }

    public serializeAs_JobBookSubscribeRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.jobIds.length);
        for(var _i1: number = 0; _i1 < this.jobIds.length; _i1++)
        {
            if(this.jobIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.jobIds[_i1] + ") on element 1 (starting at 1) of jobIds.");
            }
            output.writeByte(this.jobIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobBookSubscribeRequestMessage(input);
    }

    private deserializeAs_JobBookSubscribeRequestMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _jobIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _jobIdsLen; _i1++)
        {
            _val1 = input.readByte();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of jobIds.");
            }
            this.jobIds.push(_val1);
        }
    }

}