import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class AbstractFightTeamInformations implements INetworkType
{

	public static readonly protocolId: number = 8432;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public teamId: number = 2;
	public leaderId: number = 0;
	public teamSide: number = 0;
	public teamTypeId: number = 0;
	public nbWaves: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return AbstractFightTeamInformations.protocolId;
    }

    public isEndpointClient()
    {
        return AbstractFightTeamInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return AbstractFightTeamInformations.endpointServer;
    }

    public initAbstractFightTeamInformations(teamId: number = 2, leaderId: number = 0, teamSide: number = 0, teamTypeId: number = 0, nbWaves: number = 0): AbstractFightTeamInformations
    {
        this.teamId = teamId;
        this.leaderId = leaderId;
        this.teamSide = teamSide;
        this.teamTypeId = teamTypeId;
        this.nbWaves = nbWaves;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AbstractFightTeamInformations(output);
    }

    public serializeAs_AbstractFightTeamInformations(output: ICustomDataOutput)
    {
        output.writeByte(this.teamId);
        if(this.leaderId < -9007199254740992 || this.leaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leaderId + ") on element leaderId.");
        }
        output.writeDouble(this.leaderId);
        output.writeByte(this.teamSide);
        output.writeByte(this.teamTypeId);
        if(this.nbWaves < 0)
        {
            throw new Error("Forbidden value (" + this.nbWaves + ") on element nbWaves.");
        }
        output.writeByte(this.nbWaves);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AbstractFightTeamInformations(input);
    }

    private deserializeAs_AbstractFightTeamInformations(input: ICustomDataInput)
    {
        this._teamIdFunc(input);
        this._leaderIdFunc(input);
        this._teamSideFunc(input);
        this._teamTypeIdFunc(input);
        this._nbWavesFunc(input);
    }

    private _teamIdFunc(input: ICustomDataInput)
    {
        this.teamId = input.readByte();
        if(this.teamId < 0)
        {
            throw new Error("Forbidden value (" + this.teamId + ") on element of AbstractFightTeamInformations.teamId.");
        }
    }

    private _leaderIdFunc(input: ICustomDataInput)
    {
        this.leaderId = input.readDouble();
        if(this.leaderId < -9007199254740992 || this.leaderId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.leaderId + ") on element of AbstractFightTeamInformations.leaderId.");
        }
    }

    private _teamSideFunc(input: ICustomDataInput)
    {
        this.teamSide = input.readByte();
    }

    private _teamTypeIdFunc(input: ICustomDataInput)
    {
        this.teamTypeId = input.readByte();
        if(this.teamTypeId < 0)
        {
            throw new Error("Forbidden value (" + this.teamTypeId + ") on element of AbstractFightTeamInformations.teamTypeId.");
        }
    }

    private _nbWavesFunc(input: ICustomDataInput)
    {
        this.nbWaves = input.readByte();
        if(this.nbWaves < 0)
        {
            throw new Error("Forbidden value (" + this.nbWaves + ") on element of AbstractFightTeamInformations.nbWaves.");
        }
    }

}