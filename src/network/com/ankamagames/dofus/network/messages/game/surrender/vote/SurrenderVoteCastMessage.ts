import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SurrenderVoteCastMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4209;

	public vote: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SurrenderVoteCastMessage.protocolId;
    }

    public initSurrenderVoteCastMessage(vote: boolean = false): SurrenderVoteCastMessage
    {
        this.vote = vote;
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
        this.serializeAs_SurrenderVoteCastMessage(output);
    }

    public serializeAs_SurrenderVoteCastMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.vote);
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