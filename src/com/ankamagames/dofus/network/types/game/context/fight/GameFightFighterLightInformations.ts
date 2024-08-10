import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class GameFightFighterLightInformations implements INetworkType
{

	public static readonly protocolId: number = 4794;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public id: number = 0;
	public wave: number = 0;
	public level: number = 0;
	public breed: number = 0;
	public sex: boolean = false;
	public alive: boolean = false;

    public constructor()
    {

    }

    public getTypeId()
    {
        return GameFightFighterLightInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameFightFighterLightInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameFightFighterLightInformations.endpointServer;
    }

    public initGameFightFighterLightInformations(id: number = 0, wave: number = 0, level: number = 0, breed: number = 0, sex: boolean = false, alive: boolean = false): GameFightFighterLightInformations
    {
        this.id = id;
        this.wave = wave;
        this.level = level;
        this.breed = breed;
        this.sex = sex;
        this.alive = alive;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightFighterLightInformations(output);
    }

    public serializeAs_GameFightFighterLightInformations(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.sex);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.alive);
        output.writeByte(_box0);
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
        if(this.wave < 0)
        {
            throw new Error("Forbidden value (" + this.wave + ") on element wave.");
        }
        output.writeByte(this.wave);
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
        output.writeByte(this.breed);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightFighterLightInformations(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.sex = BooleanByteWrapper.getFlag(_box0,0);
        this.alive = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_GameFightFighterLightInformations(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._idFunc(input);
        this._waveFunc(input);
        this._levelFunc(input);
        this._breedFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of GameFightFighterLightInformations.id.");
        }
    }

    private _waveFunc(input: ICustomDataInput)
    {
        this.wave = input.readByte();
        if(this.wave < 0)
        {
            throw new Error("Forbidden value (" + this.wave + ") on element of GameFightFighterLightInformations.wave.");
        }
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readVarUhShort();
        if(this.level < 0)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of GameFightFighterLightInformations.level.");
        }
    }

    private _breedFunc(input: ICustomDataInput)
    {
        this.breed = input.readByte();
    }

}