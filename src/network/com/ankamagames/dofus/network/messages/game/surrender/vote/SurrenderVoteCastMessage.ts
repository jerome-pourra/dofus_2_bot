import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SurrenderVoteCastMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4209;

	public vote: boolean = false;

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
        this.deserializeAs_SurrenderVoteCastMessage(input);
    }

    private deserializeAs_SurrenderVoteCastMessage(input: ICustomDataInput)
    {
        this._voteFunc(input);
    }

    private _voteFunc(input: ICustomDataInput)
    {
        this.vote = input.readBoolean();
    }

}