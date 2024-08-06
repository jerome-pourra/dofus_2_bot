import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GroupMonsterStaticInformations } from "./GroupMonsterStaticInformations";
import { GameRolePlayActorInformations } from "./GameRolePlayActorInformations";

export class GameRolePlayGroupMonsterInformations extends GameRolePlayActorInformations implements INetworkType
{

	public static readonly protocolId: number = 7360;

	public staticInfos: GroupMonsterStaticInformations;
	public lootShare: number = 0;
	public alignmentSide: number = 0;
	public hasHardcoreDrop: boolean = false;

    public constructor()
    {
        super();
        this.staticInfos = new GroupMonsterStaticInformations();
    }

    public getTypeId()
    {
        return GameRolePlayGroupMonsterInformations.protocolId;
    }

    public initGameRolePlayGroupMonsterInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, staticInfos: GroupMonsterStaticInformations = null, lootShare: number = 0, alignmentSide: number = 0, hasHardcoreDrop: boolean = false): GameRolePlayGroupMonsterInformations
    {
        super.initGameRolePlayActorInformations(contextualId,disposition,look);
        this.staticInfos = staticInfos;
        this.lootShare = lootShare;
        this.alignmentSide = alignmentSide;
        this.hasHardcoreDrop = hasHardcoreDrop;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayGroupMonsterInformations(output);
    }

    public serializeAs_GameRolePlayGroupMonsterInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayActorInformations(output);
        output.writeShort(this.staticInfos.getTypeId());
        this.staticInfos.serialize(output);
        if(this.lootShare < -1 || this.lootShare > 8)
        {
            throw new Error("Forbidden value (" + this.lootShare + ") on element lootShare.");
        }
        output.writeByte(this.lootShare);
        output.writeByte(this.alignmentSide);
        output.writeBoolean(this.hasHardcoreDrop);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayGroupMonsterInformations(input);
    }

    private deserializeAs_GameRolePlayGroupMonsterInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.staticInfos = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations,_id1);
        this.staticInfos.deserialize(input);
        this._lootShareFunc(input);
        this._alignmentSideFunc(input);
        this._hasHardcoreDropFunc(input);
    }

    private _lootShareFunc(input: ICustomDataInput)
    {
        this.lootShare = input.readByte();
        if(this.lootShare < -1 || this.lootShare > 8)
        {
            throw new Error("Forbidden value (" + this.lootShare + ") on element of GameRolePlayGroupMonsterInformations.lootShare.");
        }
    }

    private _alignmentSideFunc(input: ICustomDataInput)
    {
        this.alignmentSide = input.readByte();
    }

    private _hasHardcoreDropFunc(input: ICustomDataInput)
    {
        this.hasHardcoreDrop = input.readBoolean();
    }

}