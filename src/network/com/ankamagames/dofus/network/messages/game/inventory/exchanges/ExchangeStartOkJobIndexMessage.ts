import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeStartOkJobIndexMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1248;

	public jobs: Array<number>;

    public constructor()
    {
        super();
        this.jobs = Array<number>();
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
        this.deserializeAs_ExchangeStartOkJobIndexMessage(input);
    }

    private deserializeAs_ExchangeStartOkJobIndexMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _jobsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _jobsLen; _i1++)
        {
            _val1 = input.readVarUhInt();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of jobs.");
            }
            this.jobs.push(_val1);
        }
    }

}