import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { SpawnInformation } from "./SpawnInformation";

export class SpawnCharacterInformation extends SpawnInformation implements INetworkType
{

	public static readonly protocolId: number = 3409;

	public name: string = "";
	public level: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return SpawnCharacterInformation.protocolId;
    }

    public initSpawnCharacterInformation(name: string = "", level: number = 0): SpawnCharacterInformation
    {
        this.name = name;
        this.level = level;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SpawnCharacterInformation(output);
    }

    public serializeAs_SpawnCharacterInformation(output: ICustomDataOutput)
    {
        super.serializeAs_SpawnInformation(output);
        output.writeUTF(this.name);
        if(this.level < 1 || this.level > 200)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeVarShort(this.level);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpawnCharacterInformation(input);
    }

    private deserializeAs_SpawnCharacterInformation(input: ICustomDataInput)
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
        if(this.level < 1 || this.level > 200)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of SpawnCharacterInformation.level.");
        }
    }

}