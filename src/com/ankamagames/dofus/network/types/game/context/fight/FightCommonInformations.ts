import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamInformations } from "./FightTeamInformations";
import { FightOptionsInformations } from "./FightOptionsInformations";

export class FightCommonInformations implements INetworkType
{

	public static readonly protocolId: number = 9113;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public fightId: number = 0;
	public fightType: number = 0;
	public fightTeams: Array<FightTeamInformations>;
	public fightTeamsPositions: Array<number>;
	public fightTeamsOptions: Array<FightOptionsInformations>;

    public constructor()
    {
        this.fightTeams = Array<FightTeamInformations>();
        this.fightTeamsPositions = Array<number>();
        this.fightTeamsOptions = Array<FightOptionsInformations>();
    }

    public getTypeId()
    {
        return FightCommonInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FightCommonInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FightCommonInformations.endpointServer;
    }

    public initFightCommonInformations(fightId: number = 0, fightType: number = 0, fightTeams: Array<FightTeamInformations> = null, fightTeamsPositions: Array<number> = null, fightTeamsOptions: Array<FightOptionsInformations> = null): FightCommonInformations
    {
        this.fightId = fightId;
        this.fightType = fightType;
        this.fightTeams = fightTeams;
        this.fightTeamsPositions = fightTeamsPositions;
        this.fightTeamsOptions = fightTeamsOptions;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightCommonInformations(output);
    }

    public serializeAs_FightCommonInformations(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        output.writeByte(this.fightType);
        output.writeShort(this.fightTeams.length);
        for(var _i3: number = 0; _i3 < this.fightTeams.length; _i3++)
        {
            output.writeShort((this.fightTeams[_i3] as FightTeamInformations).getTypeId());
            (this.fightTeams[_i3] as FightTeamInformations).serialize(output);
        }
        output.writeShort(this.fightTeamsPositions.length);
        for(var _i4: number = 0; _i4 < this.fightTeamsPositions.length; _i4++)
        {
            if(this.fightTeamsPositions[_i4] < 0 || this.fightTeamsPositions[_i4] > 559)
            {
                throw new Error("Forbidden value (" + this.fightTeamsPositions[_i4] + ") on element 4 (starting at 1) of fightTeamsPositions.");
            }
            output.writeVarShort(this.fightTeamsPositions[_i4]);
        }
        output.writeShort(this.fightTeamsOptions.length);
        for(var _i5: number = 0; _i5 < this.fightTeamsOptions.length; _i5++)
        {
            (this.fightTeamsOptions[_i5] as FightOptionsInformations).serializeAs_FightOptionsInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightCommonInformations(input);
    }

    private deserializeAs_FightCommonInformations(input: ICustomDataInput)
    {
        let _id3: number = 0;
        let _item3: FightTeamInformations;
        let _val4: number = 0;
        let _item5: FightOptionsInformations;
        this._fightIdFunc(input);
        this._fightTypeFunc(input);
        let _fightTeamsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _fightTeamsLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(FightTeamInformations,_id3);
            _item3.deserialize(input);
            this.fightTeams.push(_item3);
        }
        let _fightTeamsPositionsLen: number = input.readUnsignedShort();
        for(let _i4: number = 0; _i4 < _fightTeamsPositionsLen; _i4++)
        {
            _val4 = input.readVarUhShort();
            if(_val4 < 0 || _val4 > 559)
            {
                throw new Error("Forbidden value (" + _val4 + ") on elements of fightTeamsPositions.");
            }
            this.fightTeamsPositions.push(_val4);
        }
        let _fightTeamsOptionsLen: number = input.readUnsignedShort();
        for(let _i5: number = 0; _i5 < _fightTeamsOptionsLen; _i5++)
        {
            _item5 = new FightOptionsInformations();
            _item5.deserialize(input);
            this.fightTeamsOptions.push(_item5);
        }
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of FightCommonInformations.fightId.");
        }
    }

    private _fightTypeFunc(input: ICustomDataInput)
    {
        this.fightType = input.readByte();
        if(this.fightType < 0)
        {
            throw new Error("Forbidden value (" + this.fightType + ") on element of FightCommonInformations.fightType.");
        }
    }

}