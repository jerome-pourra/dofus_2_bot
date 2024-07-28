import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SurrenderVoteEndMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6083;

	public voteResult: boolean = false;

    public constructor()
    {
        super();
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