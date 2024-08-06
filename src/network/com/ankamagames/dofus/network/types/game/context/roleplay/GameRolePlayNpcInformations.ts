import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayActorInformations } from "./GameRolePlayActorInformations";

export class GameRolePlayNpcInformations extends GameRolePlayActorInformations implements INetworkType
{

	public static readonly protocolId: number = 8347;

	public npcId: number = 0;
	public sex: boolean = false;
	public specialArtworkId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameRolePlayNpcInformations.protocolId;
    }

    public initGameRolePlayNpcInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, npcId: number = 0, sex: boolean = false, specialArtworkId: number = 0): GameRolePlayNpcInformations
    {
        super.initGameRolePlayActorInformations(contextualId,disposition,look);
        this.npcId = npcId;
        this.sex = sex;
        this.specialArtworkId = specialArtworkId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayNpcInformations(output);
    }

    public serializeAs_GameRolePlayNpcInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayActorInformations(output);
        if(this.npcId < 0)
        {
            throw new Error("Forbidden value (" + this.npcId + ") on element npcId.");
        }
        output.writeVarShort(this.npcId);
        output.writeBoolean(this.sex);
        if(this.specialArtworkId < 0)
        {
            throw new Error("Forbidden value (" + this.specialArtworkId + ") on element specialArtworkId.");
        }
        output.writeVarShort(this.specialArtworkId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayNpcInformations(input);
    }

    private deserializeAs_GameRolePlayNpcInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._npcIdFunc(input);
        this._sexFunc(input);
        this._specialArtworkIdFunc(input);
    }

    private _npcIdFunc(input: ICustomDataInput)
    {
        this.npcId = input.readVarUhShort();
        if(this.npcId < 0)
        {
            throw new Error("Forbidden value (" + this.npcId + ") on element of GameRolePlayNpcInformations.npcId.");
        }
    }

    private _sexFunc(input: ICustomDataInput)
    {
        this.sex = input.readBoolean();
    }

    private _specialArtworkIdFunc(input: ICustomDataInput)
    {
        this.specialArtworkId = input.readVarUhShort();
        if(this.specialArtworkId < 0)
        {
            throw new Error("Forbidden value (" + this.specialArtworkId + ") on element of GameRolePlayNpcInformations.specialArtworkId.");
        }
    }

}