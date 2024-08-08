import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { PrismInformation } from "./../../prism/PrismInformation";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayActorInformations } from "./GameRolePlayActorInformations";

export class GameRolePlayPrismInformations extends GameRolePlayActorInformations implements INetworkType
{

	public static readonly protocolId: number = 7369;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public prism: PrismInformation;

    public constructor()
    {
        super();
        this.prism = new PrismInformation();
    }

    public getTypeId()
    {
        return GameRolePlayPrismInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayPrismInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayPrismInformations.endpointServer;
    }

    public initGameRolePlayPrismInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, prism: PrismInformation = null): GameRolePlayPrismInformations
    {
        super.initGameRolePlayActorInformations(contextualId,disposition,look);
        this.prism = prism;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayPrismInformations(output);
    }

    public serializeAs_GameRolePlayPrismInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayActorInformations(output);
        output.writeShort(this.prism.getTypeId());
        this.prism.serialize(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayPrismInformations(input);
    }

    private deserializeAs_GameRolePlayPrismInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.prism = ProtocolTypeManager.getInstance(PrismInformation,_id1);
        this.prism.deserialize(input);
    }

}