import { LeagueFriendInformations } from "./../../../../../../types/game/context/roleplay/fight/arena/LeagueFriendInformations";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaInvitationCandidatesAnswerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 953;

	public candidates: Array<LeagueFriendInformations>;

    public constructor()
    {
        super();
        this.candidates = Array<LeagueFriendInformations>();
    }

    public getMessageId()
    {
        return GameRolePlayArenaInvitationCandidatesAnswerMessage.protocolId;
    }

    public initGameRolePlayArenaInvitationCandidatesAnswerMessage(candidates: Array<LeagueFriendInformations> = null): GameRolePlayArenaInvitationCandidatesAnswerMessage
    {
        this.candidates = candidates;
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
        this.serializeAs_GameRolePlayArenaInvitationCandidatesAnswerMessage(output);
    }

    public serializeAs_GameRolePlayArenaInvitationCandidatesAnswerMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.candidates.length);
        for(var _i1: number = 0; _i1 < this.candidates.length; _i1++)
        {
            (this.candidates[_i1] as LeagueFriendInformations).serializeAs_LeagueFriendInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaInvitationCandidatesAnswerMessage(input);
    }

    private deserializeAs_GameRolePlayArenaInvitationCandidatesAnswerMessage(input: ICustomDataInput)
    {
        let _item1: LeagueFriendInformations;
        let _candidatesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _candidatesLen; _i1++)
        {
            _item1 = new LeagueFriendInformations();
            _item1.deserialize(input);
            this.candidates.push(_item1);
        }
    }

}