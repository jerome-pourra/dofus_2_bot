import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { PortalInformation } from "./treasureHunt/PortalInformation";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayActorInformations } from "./GameRolePlayActorInformations";

export class GameRolePlayPortalInformations extends GameRolePlayActorInformations
{

	public static readonly protocolId: number = 9999;

	public portal: PortalInformation;

    public constructor()
    {
        super();
        this.portal = new PortalInformation();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayPortalInformations(input);
    }

    private deserializeAs_GameRolePlayPortalInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.portal = ProtocolTypeManager.getInstance(PortalInformation,_id1);
        this.portal.deserialize(input);
    }

}