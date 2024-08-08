import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionOrnament extends HumanOption implements INetworkType
{

	public static readonly protocolId: number = 5782;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public ornamentId: number = 0;
	public level: number = 0;
	public leagueId: number = 0;
	public ladderPosition: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return HumanOptionOrnament.protocolId;
    }

    public isEndpointClient()
    {
        return HumanOptionOrnament.endpointClient;
    }

    public isEndpointServer()
    {
        return HumanOptionOrnament.endpointServer;
    }

    public initHumanOptionOrnament(ornamentId: number = 0, level: number = 0, leagueId: number = 0, ladderPosition: number = 0): HumanOptionOrnament
    {
        this.ornamentId = ornamentId;
        this.level = level;
        this.leagueId = leagueId;
        this.ladderPosition = ladderPosition;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanOptionOrnament(output);
    }

    public serializeAs_HumanOptionOrnament(output: ICustomDataOutput)
    {
        super.serializeAs_HumanOption(output);
        if(this.ornamentId < 0)
        {
            throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
        }
        output.writeVarShort(this.ornamentId);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        output.writeVarShort(this.leagueId);
        output.writeInt(this.ladderPosition);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionOrnament(input);
    }

    private deserializeAs_HumanOptionOrnament(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._ornamentIdFunc(input);
        this._levelFunc(input);
        this._leagueIdFunc(input);
        this._ladderPositionFunc(input);
    }

    private _ornamentIdFunc(input: ICustomDataInput)
    {
        this.ornamentId = input.readVarUhShort();
        if(this.ornamentId < 0)
        {
            throw new Error("Forbidden value (" + this.ornamentId + ") on element of HumanOptionOrnament.ornamentId.");
        }
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of HumanOptionOrnament.level.");
        }
    }

    private _leagueIdFunc(input: ICustomDataInput)
    {
        this.leagueId = input.readVarShort();
    }

    private _ladderPositionFunc(input: ICustomDataInput)
    {
        this.ladderPosition = input.readInt();
    }

}