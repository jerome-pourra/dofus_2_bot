import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamLightInformations } from "./FightTeamLightInformations";
import { FightOptionsInformations } from "./FightOptionsInformations";

export class FightExternalInformations implements INetworkType
{

	public static readonly protocolId: number = 3630;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public fightId: number = 0;
	public fightType: number = 0;
	public fightStart: number = 0;
	public fightSpectatorLocked: boolean = false;
	public fightTeams: Array<FightTeamLightInformations>;
	public fightTeamsOptions: Array<FightOptionsInformations>;

    public constructor()
    {
        this.fightTeams = Array<FightTeamLightInformations>(2);
        this.fightTeamsOptions = Array<FightOptionsInformations>(2);
    }

    public getTypeId()
    {
        return FightExternalInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FightExternalInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FightExternalInformations.endpointServer;
    }

    public initFightExternalInformations(fightId: number = 0, fightType: number = 0, fightStart: number = 0, fightSpectatorLocked: boolean = false, fightTeams: Array<FightTeamLightInformations> = null, fightTeamsOptions: Array<FightOptionsInformations> = null): FightExternalInformations
    {
        this.fightId = fightId;
        this.fightType = fightType;
        this.fightStart = fightStart;
        this.fightSpectatorLocked = fightSpectatorLocked;
        this.fightTeams = fightTeams;
        this.fightTeamsOptions = fightTeamsOptions;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightExternalInformations(output);
    }

    public serializeAs_FightExternalInformations(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        output.writeByte(this.fightType);
        if(this.fightStart < 0)
        {
            throw new Error("Forbidden value (" + this.fightStart + ") on element fightStart.");
        }
        output.writeInt(this.fightStart);
        output.writeBoolean(this.fightSpectatorLocked);
        for(var _i5: number = 0; _i5 < 2; _i5++)
        {
            this.fightTeams[_i5].serializeAs_FightTeamLightInformations(output);
        }
        for(var _i6: number = 0; _i6 < 2; _i6++)
        {
            this.fightTeamsOptions[_i6].serializeAs_FightOptionsInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightExternalInformations(input);
    }

    private deserializeAs_FightExternalInformations(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this._fightTypeFunc(input);
        this._fightStartFunc(input);
        this._fightSpectatorLockedFunc(input);
        for(let _i5: number = 0; _i5 < 2; _i5++)
        {
            this.fightTeams[_i5] = new FightTeamLightInformations();
            this.fightTeams[_i5].deserialize(input);
        }
        for(let _i6: number = 0; _i6 < 2; _i6++)
        {
            this.fightTeamsOptions[_i6] = new FightOptionsInformations();
            this.fightTeamsOptions[_i6].deserialize(input);
        }
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of FightExternalInformations.fightId.");
        }
    }

    private _fightTypeFunc(input: ICustomDataInput)
    {
        this.fightType = input.readByte();
        if(this.fightType < 0)
        {
            throw new Error("Forbidden value (" + this.fightType + ") on element of FightExternalInformations.fightType.");
        }
    }

    private _fightStartFunc(input: ICustomDataInput)
    {
        this.fightStart = input.readInt();
        if(this.fightStart < 0)
        {
            throw new Error("Forbidden value (" + this.fightStart + ") on element of FightExternalInformations.fightStart.");
        }
    }

    private _fightSpectatorLockedFunc(input: ICustomDataInput)
    {
        this.fightSpectatorLocked = input.readBoolean();
    }

}