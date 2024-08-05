import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GroupMonsterStaticInformations } from "./GroupMonsterStaticInformations";
import { GameRolePlayActorInformations } from "./GameRolePlayActorInformations";

export class GameRolePlayGroupMonsterInformations extends GameRolePlayActorInformations
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