import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SurrenderVoteEndMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6083;

	public voteResult: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SurrenderVoteEndMessage.protocolId;
    }

    public initSurrenderVoteEndMessage(voteResult: boolean = false): SurrenderVoteEndMessage
    {
        this.voteResult = voteResult;
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
        this.serializeAs_SurrenderVoteEndMessage(output);
    }

    public serializeAs_SurrenderVoteEndMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.voteResult);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderVoteEndMessage(input);
    }

    private deserializeAs_SurrenderVoteEndMessage(input: ICustomDataInput)
    {
        this._voteResultFunc(input);
    }

    private _voteResultFunc(input: ICustomDataInput)
    {
        this.voteResult = input.readBoolean();
    }

}