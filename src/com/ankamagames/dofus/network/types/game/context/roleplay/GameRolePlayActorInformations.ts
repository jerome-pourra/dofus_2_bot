import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { GameContextActorInformations } from "./../GameContextActorInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class GameRolePlayActorInformations extends GameContextActorInformations implements INetworkType
{

	public static readonly protocolId: number = 8764;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameRolePlayActorInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayActorInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayActorInformations.endpointServer;
    }

    public initGameRolePlayActorInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null): GameRolePlayActorInformations
    {
        super.initGameContextActorInformations(contextualId,disposition,look);
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayActorInformations(output);
    }

    public serializeAs_GameRolePlayActorInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameContextActorInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayActorInformations(input);
    }

    private deserializeAs_GameRolePlayActorInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}