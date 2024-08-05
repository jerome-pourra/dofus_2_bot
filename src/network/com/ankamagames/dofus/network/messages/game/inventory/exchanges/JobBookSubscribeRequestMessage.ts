import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class JobBookSubscribeRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7221;

	public jobIds: Array<number>;

    public constructor()
    {
        super();
        this.jobIds = Array<number>();
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