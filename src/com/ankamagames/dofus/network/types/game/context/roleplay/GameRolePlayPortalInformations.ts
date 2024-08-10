import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { PortalInformation } from "./treasureHunt/PortalInformation";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayActorInformations } from "./GameRolePlayActorInformations";

export class GameRolePlayPortalInformations extends GameRolePlayActorInformations implements INetworkType
{

	public static readonly protocolId: number = 9999;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public portal: PortalInformation;

    public constructor()
    {
        super();
        this.portal = new PortalInformation();
    }

    public getTypeId()
    {
        return GameRolePlayPortalInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayPortalInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayPortalInformations.endpointServer;
    }

    public initGameRolePlayPortalInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, portal: PortalInformation = null): GameRolePlayPortalInformations
    {
        super.initGameRolePlayActorInformations(contextualId,disposition,look);
        this.portal = portal;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayPortalInformations(output);
    }

    public serializeAs_GameRolePlayPortalInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayActorInformations(output);
        output.writeShort(this.portal.getTypeId());
        this.portal.serialize(output);
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