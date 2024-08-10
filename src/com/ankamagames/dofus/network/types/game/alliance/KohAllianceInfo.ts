import { AllianceInformation } from "./../context/roleplay/AllianceInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { KohAllianceRoleMembers } from "./KohAllianceRoleMembers";
import { KohScore } from "./KohScore";

export class KohAllianceInfo implements INetworkType
{

	public static readonly protocolId: number = 7195;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public alliance: AllianceInformation;
	public memberCount: number = 0;
	public kohAllianceRoleMembers: Array<KohAllianceRoleMembers>;
	public scores: Array<KohScore>;
	public matchDominationScores: number = 0;

    public constructor()
    {
        this.alliance = new AllianceInformation();
        this.kohAllianceRoleMembers = Array<KohAllianceRoleMembers>();
        this.scores = Array<KohScore>();
    }

    public getTypeId()
    {
        return KohAllianceInfo.protocolId;
    }

    public isEndpointClient()
    {
        return KohAllianceInfo.endpointClient;
    }

    public isEndpointServer()
    {
        return KohAllianceInfo.endpointServer;
    }

    public initKohAllianceInfo(alliance: AllianceInformation = null, memberCount: number = 0, kohAllianceRoleMembers: Array<KohAllianceRoleMembers> = null, scores: Array<KohScore> = null, matchDominationScores: number = 0): KohAllianceInfo
    {
        this.alliance = alliance;
        this.memberCount = memberCount;
        this.kohAllianceRoleMembers = kohAllianceRoleMembers;
        this.scores = scores;
        this.matchDominationScores = matchDominationScores;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_KohAllianceInfo(output);
    }

    public serializeAs_KohAllianceInfo(output: ICustomDataOutput)
    {
        this.alliance.serializeAs_AllianceInformation(output);
        if(this.memberCount < 0 || this.memberCount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberCount + ") on element memberCount.");
        }
        output.writeVarLong(this.memberCount);
        output.writeShort(this.kohAllianceRoleMembers.length);
        for(var _i3: number = 0; _i3 < this.kohAllianceRoleMembers.length; _i3++)
        {
            (this.kohAllianceRoleMembers[_i3] as KohAllianceRoleMembers).serializeAs_KohAllianceRoleMembers(output);
        }
        output.writeShort(this.scores.length);
        for(var _i4: number = 0; _i4 < this.scores.length; _i4++)
        {
            (this.scores[_i4] as KohScore).serializeAs_KohScore(output);
        }
        if(this.matchDominationScores < 0)
        {
            throw new Error("Forbidden value (" + this.matchDominationScores + ") on element matchDominationScores.");
        }
        output.writeVarInt(this.matchDominationScores);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KohAllianceInfo(input);
    }

    private deserializeAs_KohAllianceInfo(input: ICustomDataInput)
    {
        let _item3: KohAllianceRoleMembers;
        let _item4: KohScore;
        this.alliance = new AllianceInformation();
        this.alliance.deserialize(input);
        this._memberCountFunc(input);
        let _kohAllianceRoleMembersLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _kohAllianceRoleMembersLen; _i3++)
        {
            _item3 = new KohAllianceRoleMembers();
            _item3.deserialize(input);
            this.kohAllianceRoleMembers.push(_item3);
        }
        let _scoresLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _scoresLen; _i4++)
        {
            _item4 = new KohScore();
            _item4.deserialize(input);
            this.scores.push(_item4);
        }
        this._matchDominationScoresFunc(input);
    }

    private _memberCountFunc(input: ICustomDataInput)
    {
        this.memberCount = input.readVarUhLong();
        if(this.memberCount < 0 || this.memberCount > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.memberCount + ") on element of KohAllianceInfo.memberCount.");
        }
    }

    private _matchDominationScoresFunc(input: ICustomDataInput)
    {
        this.matchDominationScores = input.readVarUhInt();
        if(this.matchDominationScores < 0)
        {
            throw new Error("Forbidden value (" + this.matchDominationScores + ") on element of KohAllianceInfo.matchDominationScores.");
        }
    }

}