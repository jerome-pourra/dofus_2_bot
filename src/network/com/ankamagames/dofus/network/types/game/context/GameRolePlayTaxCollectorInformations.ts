import { GameRolePlayActorInformations } from "./roleplay/GameRolePlayActorInformations";
import { EntityLook } from "./../look/EntityLook";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { TaxCollectorStaticInformations } from "./TaxCollectorStaticInformations";

export class GameRolePlayTaxCollectorInformations extends GameRolePlayActorInformations
{

	public static readonly protocolId: number = 4101;

	public identification: TaxCollectorStaticInformations;
	public taxCollectorAttack: number = 0;

    public constructor()
    {
        super();
        this.identification = new TaxCollectorStaticInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayTaxCollectorInformations(input);
    }

    private deserializeAs_GameRolePlayTaxCollectorInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.identification = ProtocolTypeManager.getInstance(TaxCollectorStaticInformations,_id1);
        this.identification.deserialize(input);
        this._taxCollectorAttackFunc(input);
    }

    private _taxCollectorAttackFunc(input: ICustomDataInput)
    {
        this.taxCollectorAttack = input.readInt();
    }

}