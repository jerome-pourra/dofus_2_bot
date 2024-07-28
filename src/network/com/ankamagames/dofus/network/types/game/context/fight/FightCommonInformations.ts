import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamInformations } from "./FightTeamInformations";
import { FightOptionsInformations } from "./FightOptionsInformations";

export class FightCommonInformations
{

	public static readonly protocolId: number = 9113;

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