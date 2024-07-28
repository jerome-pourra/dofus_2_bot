import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildChangeMemberParametersMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1951;

	public memberId: number = 0;
	public rankId: number = 0;
	public experienceGivenPercent: number = 0;

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
        this.deserializeAs_GuildChangeMemberParametersMessage(input);
    }

    private deserializeAs_GuildChangeMemberParametersMessage(input: ICustomDataInput)
    {
        this._memberIdFunc(input);
        this._rankIdFunc(input);
        this._experienceGivenPercentFunc(input);
    }

    private _memberIdFunc(input: ICustomDataInput)
    {
        this.memberId = input.readVarUhLong();
        if(this.memberId < 0 || this.memberId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberId + ") on element of GuildChangeMemberParametersMessage.memberId.");
        }
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readVarUhInt();
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element of GuildChangeMemberParametersMessage.rankId.");
        }
    }

    private _experienceGivenPercentFunc(input: ICustomDataInput)
    {
        this.experienceGivenPercent = input.readByte();
        if(this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100)
        {
            throw new Error("Forbidden value (" + this.experienceGivenPercent + ") on element of GuildChangeMemberParametersMessage.experienceGivenPercent.");
        }
    }

}