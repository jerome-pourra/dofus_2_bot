import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GameFightSpellCooldown implements INetworkType
{

	public static readonly protocolId: number = 9361;

	public spellId: number = 0;
	public cooldown: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return GameFightSpellCooldown.protocolId;
    }

    public initGameFightSpellCooldown(spellId: number = 0, cooldown: number = 0): GameFightSpellCooldown
    {
        this.spellId = spellId;
        this.cooldown = cooldown;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightSpellCooldown(output);
    }

    public serializeAs_GameFightSpellCooldown(output: ICustomDataOutput)
    {
        output.writeInt(this.spellId);
        if(this.cooldown < 0)
        {
            throw new Error("Forbidden value (" + this.cooldown + ") on element cooldown.");
        }
        output.writeByte(this.cooldown);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightSpellCooldown(input);
    }

    private deserializeAs_GameFightSpellCooldown(input: ICustomDataInput)
    {
        this._spellIdFunc(input);
        this._cooldownFunc(input);
    }

    private _spellIdFunc(input: ICustomDataInput)
    {
        this.spellId = input.readInt();
    }

    private _cooldownFunc(input: ICustomDataInput)
    {
        this.cooldown = input.readByte();
        if(this.cooldown < 0)
        {
            throw new Error("Forbidden value (" + this.cooldown + ") on element of GameFightSpellCooldown.cooldown.");
        }
    }

}