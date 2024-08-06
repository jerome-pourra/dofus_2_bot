import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterLightInformations } from "./GameFightFighterLightInformations";

export class GameFightFighterNamedLightInformations extends GameFightFighterLightInformations implements INetworkType
{

	public static readonly protocolId: number = 5195;

	public name: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameFightFighterNamedLightInformations.protocolId;
    }

    public initGameFightFighterNamedLightInformations(id: number = 0, wave: number = 0, level: number = 0, breed: number = 0, sex: boolean = false, alive: boolean = false, name: string = ""): GameFightFighterNamedLightInformations
    {
        super.initGameFightFighterLightInformations(id,wave,level,breed,sex,alive);
        this.name = name;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightFighterNamedLightInformations(output);
    }

    public serializeAs_GameFightFighterNamedLightInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightFighterLightInformations(output);
        output.writeUTF(this.name);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightFighterNamedLightInformations(input);
    }

    private deserializeAs_GameFightFighterNamedLightInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}