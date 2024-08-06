import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { CharacterBaseInformations } from "./CharacterBaseInformations";

export class CharacterHardcoreOrEpicInformations extends CharacterBaseInformations implements INetworkType
{

	public static readonly protocolId: number = 3983;

	public deathState: number = 0;
	public deathCount: number = 0;
	public deathMaxLevel: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return CharacterHardcoreOrEpicInformations.protocolId;
    }

    public initCharacterHardcoreOrEpicInformations(id: number = 0, name: string = "", level: number = 0, entityLook: EntityLook = null, breed: number = 0, sex: boolean = false, deathState: number = 0, deathCount: number = 0, deathMaxLevel: number = 0): CharacterHardcoreOrEpicInformations
    {
        super.initCharacterBaseInformations(id,name,level,entityLook,breed,sex);
        this.deathState = deathState;
        this.deathCount = deathCount;
        this.deathMaxLevel = deathMaxLevel;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_CharacterHardcoreOrEpicInformations(output);
    }

    public serializeAs_CharacterHardcoreOrEpicInformations(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterBaseInformations(output);
        output.writeByte(this.deathState);
        if(this.deathCount < 0)
        {
            throw new Error("Forbidden value (" + this.deathCount + ") on element deathCount.");
        }
        output.writeVarShort(this.deathCount);
        if(this.deathMaxLevel < 0)
        {
            throw new Error("Forbidden value (" + this.deathMaxLevel + ") on element deathMaxLevel.");
        }
        output.writeVarShort(this.deathMaxLevel);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterHardcoreOrEpicInformations(input);
    }

    private deserializeAs_CharacterHardcoreOrEpicInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._deathStateFunc(input);
        this._deathCountFunc(input);
        this._deathMaxLevelFunc(input);
    }

    private _deathStateFunc(input: ICustomDataInput)
    {
        this.deathState = input.readByte();
        if(this.deathState < 0)
        {
            throw new Error("Forbidden value (" + this.deathState + ") on element of CharacterHardcoreOrEpicInformations.deathState.");
        }
    }

    private _deathCountFunc(input: ICustomDataInput)
    {
        this.deathCount = input.readVarUhShort();
        if(this.deathCount < 0)
        {
            throw new Error("Forbidden value (" + this.deathCount + ") on element of CharacterHardcoreOrEpicInformations.deathCount.");
        }
    }

    private _deathMaxLevelFunc(input: ICustomDataInput)
    {
        this.deathMaxLevel = input.readVarUhShort();
        if(this.deathMaxLevel < 0)
        {
            throw new Error("Forbidden value (" + this.deathMaxLevel + ") on element of CharacterHardcoreOrEpicInformations.deathMaxLevel.");
        }
    }

}