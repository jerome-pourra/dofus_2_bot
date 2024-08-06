import { JobExperience } from "./../../../../../types/game/context/roleplay/job/JobExperience";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { JobExperienceUpdateMessage } from "./JobExperienceUpdateMessage";

export class JobExperienceOtherPlayerUpdateMessage extends JobExperienceUpdateMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1331;

	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return JobExperienceOtherPlayerUpdateMessage.protocolId;
    }

    public initJobExperienceOtherPlayerUpdateMessage(experiencesUpdate: JobExperience = null, playerId: number = 0): JobExperienceOtherPlayerUpdateMessage
    {
        super.initJobExperienceUpdateMessage(experiencesUpdate);
        this.playerId = playerId;
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
        this.serializeAs_JobExperienceOtherPlayerUpdateMessage(output);
    }

    public serializeAs_JobExperienceOtherPlayerUpdateMessage(output: ICustomDataOutput)
    {
        super.serializeAs_JobExperienceUpdateMessage(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_JobExperienceOtherPlayerUpdateMessage(input);
    }

    private deserializeAs_JobExperienceOtherPlayerUpdateMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of JobExperienceOtherPlayerUpdateMessage.playerId.");
        }
    }

}