import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { FightTeamMemberInformations } from "./FightTeamMemberInformations";

export class FightTeamMemberCharacterInformations extends FightTeamMemberInformations implements INetworkType
{

	public static readonly protocolId: number = 4535;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public name: string = "";
	public level: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return FightTeamMemberCharacterInformations.protocolId;
    }

    public isEndpointClient()
    {
        return FightTeamMemberCharacterInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return FightTeamMemberCharacterInformations.endpointServer;
    }

    public initFightTeamMemberCharacterInformations(id: number = 0, name: string = "", level: number = 0): FightTeamMemberCharacterInformations
    {
        super.initFightTeamMemberInformations(id);
        this.name = name;
        this.level = level;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_FightTeamMemberCharacterInformations(output);
    }

    public serializeAs_FightTeamMemberCharacterInformations(output: ICustomDataOutput)
    {
        super.serializeAs_FightTeamMemberInformations(output);
        output.writeUTF(this.name);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightTeamMemberCharacterInformations(input);
    }

    private deserializeAs_FightTeamMemberCharacterInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
        this._levelFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of FightTeamMemberCharacterInformations.level.");
        }
    }

}